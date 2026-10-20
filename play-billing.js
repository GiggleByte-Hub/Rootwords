// Google Play donations (Digital Goods API + Payment Request).
// Only active inside the Google Play app (body.play-app) when Google Play Billing is available;
// then body gets the "billing" class and the .play-only donate section appears.
// Each donate button: <button class="play-tier" data-sku="donate_small">… <span class="price"></span></button>
// The SKUs must match the one-time products created in Play Console.
(function () {
  const METHOD = "https://play.google.com/billing";
  let service = null;

  const $ = id => document.getElementById(id);
  function say(html) { const s = $("play-donate-status"); if (s) s.innerHTML = html; }

  // A simple "ask a grown-up" check before any purchase, since these are children's games.
  function gate(onPass) {
    const box = $("play-gate");
    if (!box) return onPass();
    const a = 6 + Math.floor(Math.random() * 4), b = 6 + Math.floor(Math.random() * 4);
    box.hidden = false;
    box.innerHTML = `<p><b>Grown-ups only:</b> what is ${a} × ${b}?</p>
      <div class="gate-row"><input id="play-gate-answer" type="number" inputmode="numeric" aria-label="Answer">
      <button id="play-gate-ok" class="primary">Continue</button>
      <button id="play-gate-cancel">Cancel</button></div>`;
    const input = $("play-gate-answer");
    input.focus();
    const close = () => { box.hidden = true; box.innerHTML = ""; };
    const check = () => {
      if (parseInt(input.value, 10) === a * b) { close(); onPass(); }
      else { close(); say("That answer wasn't right — please ask a grown-up to help."); }
    };
    $("play-gate-ok").addEventListener("click", check);
    input.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
    $("play-gate-cancel").addEventListener("click", close);
  }

  async function buy(sku) {
    say("Opening Google Play…");
    let response;
    try {
      const request = new PaymentRequest(
        [{ supportedMethods: METHOD, data: { sku } }],
        { total: { label: "Donation", amount: { currency: "USD", value: "0" } } } // price comes from Play Console
      );
      response = await request.show();
    } catch (e) {
      say(e && e.name === "AbortError" ? "Donation cancelled — you were not charged." : "Google Play couldn't start the donation. Please try again later.");
      return;
    }
    // Payment went through. Consume it so the same tier can be given again later.
    try { await service.consume(response.details.purchaseToken); } catch (e) {}
    try { await response.complete("success"); } catch (e) {}
    say("💛 Thank you for your gift! It helps keep this game free for every family.");
  }

  async function init() {
    if (!document.body.classList.contains("play-app")) return;
    if (!("getDigitalGoodsService" in window) || !window.PaymentRequest) return;
    try { service = await window.getDigitalGoodsService(METHOD); } catch (e) { return; }
    if (!service) return;
    document.body.classList.add("billing");

    // Finish any donation that was paid but interrupted before it was consumed.
    try { for (const p of await service.listPurchases()) await service.consume(p.purchaseToken); } catch (e) {}

    const buttons = [...document.querySelectorAll(".play-tier")];
    try {
      const details = await service.getDetails(buttons.map(b => b.dataset.sku));
      for (const d of details) {
        const b = buttons.find(x => x.dataset.sku === d.itemId);
        const price = b && b.querySelector(".price");
        if (price) price.textContent = new Intl.NumberFormat(undefined, { style: "currency", currency: d.price.currency }).format(d.price.value);
      }
    } catch (e) {}
    buttons.forEach(b => b.addEventListener("click", () => gate(() => buy(b.dataset.sku))));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
