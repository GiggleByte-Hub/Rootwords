# Rootwords — Sketch, Spell, Sustain

A free, browser-based learning game modeled on the **[Woogles.io](https://woogles.io)** approach: a clean, tab-based web app (**Play / Stats / Donate / About**), open-source, and funded by donations rather than ads or accounts. Instead of competitive word play, Rootwords teaches **geometry, spelling, and sustainable-material choices through patterns found in nature**.

🔗 **Play it live:** https://gigglebyte-hub.github.io/Rootwords/

---

## How to run

`index.html` is a single self-contained file (plus a PWA manifest, service worker, and icons alongside it for "Add to Home Screen" support) — no build step, no other dependencies, no server required.

- **Play online:** open the GitHub Pages link above.
- **Run locally:** download `index.html` and double-click it to open in your browser.
- **Install as an app:** open the live link on your phone and use your browser's "Add to Home Screen" (iOS Safari) or "Install app" (Android Chrome) option — it then opens full-screen with its own icon and works offline.

---

## How to play

Each of the 4 levels centers on one real pattern found in nature. Every level runs through the same 5 stages:

1. **🎨 Sketch** — trace the pattern's outline on a canvas with mouse or touch. Scored by how much of the guide you covered (an accessibility "Skip" option is always available and awards a fair baseline score).
2. **📐 Geometry** — two multiple-choice math/geometry questions about the shape you just traced (counting sides, lines of symmetry, naming the pattern).
3. **🔤 Spell** — click Scrabble-style letter tiles (each with a point value) into slots to spell vocabulary tied to the level. Hints cost points, like Woogles' tile play.
4. **♻️ Choose sustainably** — pick between 2–3 real materials for an everyday object; see the real trade-off facts and sources immediately, whichever you pick.
5. **🎲 Nature's Luck** — pick one of six face-down cards for a bonus, themed around a genuine chance event in nature (seed survival, pollination, ocean larval dispersal, or prey capture). All six cards flip over afterward so you see the real distribution of outcomes — the point is honest, visible odds, not a slot machine.

Progress (score, accuracy, badges) is saved in your browser's `localStorage` and shown in the **Stats** tab.

## The four levels

| # | Nature pattern | Geometry/math concept | Vocabulary | Sustainability choice | Nature's Luck theme |
|---|---|---|---|---|---|
| 1 | 🍃 Leaf | Pinnate venation; bilateral symmetry | LEAF, VEIN | Plastic vs. paper vs. reusable tote | 🌰 Seed's Luck (acorn/seedling survival) |
| 2 | 🐝 Honeycomb | Hexagons; the Honeycomb Conjecture | HEXAGON, WAX | Plastic wrap vs. foil vs. beeswax wrap | 🐝 Pollinator's Luck (bee flower-visiting behavior) |
| 3 | 🐚 Nautilus shell | Logarithmic spiral (and the Fibonacci myth, busted) | SHELL, SPIRAL | Single-use vs. reusable plastic vs. steel bottle | 🌊 Current's Luck (marine larval dispersal) |
| 4 | 🕸 Spider web | Radial symmetry; ~20–35 radial threads | SPIDER, RADIAL | Polyester vs. cotton vs. hemp | 🕸 Web's Luck (orb-weaver prey capture) |

> **Honesty note:** the sketch outlines are stylized teaching guides, not botanically exact drawings. Material "sustainability scores" are simplified teaching ranks based on the sources below, not formal lifecycle-assessment numbers — real-world impact also depends on reuse habits and local disposal/recycling infrastructure. The **Nature's Luck** odds (how many of the 6 cards hide a bonus — 50% for most levels, 33% for the ocean-current level) are simplified, playable numbers loosely inspired by the cited research, not the literal cited percentages.

## Sources

- Honeycomb Conjecture / Theorem, proved by Thomas Hales (1999) — summarized via ResearchGate and arXiv.
- Leaf venation patterns — Biology Insights; Digital Atlas of Ancient Life.
- Nautilus shell logarithmic spiral & the golden-ratio myth — Science Friday, *"Myth or math? Is the nautilus shell's golden ratio real?"*
- Spider orb-web radial geometry (20–35 radial threads) — European Arachnology Society; Aptive Pest Control.
- Plastic bag decomposition timelines (10–20 yrs in open air, 500–1,000+ yrs in landfill/ocean) — chariotenergy.com; decodingbiosphere.com.
- Beeswax wrap vs. plastic wrap — UC ANR Preservation Notes; The Green Collective.
- Stainless-steel vs. single-use plastic bottles (break-even ~30 days, ~730 bottles/yr saved, infinite recyclability) — myequa.com; icobottle.com.
- Hemp vs. cotton vs. polyester water use & biodegradability (cotton ~10,000 L/kg; hemp ~half that, rain-fed, compostable in weeks–months) — hemp.com; ecothes.com; Slate.
- Oak acorn/seedling overwintering survival (20% surface survival vs. 80%+ buried) — USDA Forest Service (research.fs.usda.gov).
- Honey bee flower-visiting behavior (~55–57% chance to leave a flower cluster after one visit) — pollinatorparadise.com.
- Marine larval mortality & dispersal (commonly cited <1% overall survival; daily mortality ~3–46% by species) — marine larval ecology research summaries.
- Orb-weaver prey interception & capture efficiency (most insects escape before attack; near-zero capture odds for fast prey) — orb-web prey-capture research.
- Woogles.io's own model — an open-source, 501(c)(3) nonprofit, volunteer-run, donation-funded word-game platform — inspired this app's tab layout and Donate page.

## Support this project

Rootwords is free and open-source, like Woogles.io. If it helped you, a classroom, or a kid you know, see the **Donate** tab in the app — one-time and monthly support both go through [Ko-fi](https://ko-fi.com/gigglebyte1010).

## Accessibility

- Every meaningful color is paired with an icon, label, or pattern — never color alone.
- The sketch stage has a one-click **"Skip (accessibility)"** option; drawing with a mouse/touch is never required to progress.
- All interactive elements are real `<button>`/`<a>` tags, reachable and triggerable via Tab + Enter/Space.
- Feedback regions use `aria-live="polite"` so screen readers announce results.

## License

MIT — see [LICENSE](LICENSE). Free to use, modify, and share.
