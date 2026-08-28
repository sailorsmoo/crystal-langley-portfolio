# Design system overview pages: content

Rewrite pass. Fixed: every em dash removed, every British spelling switched to American,
your edits from the last pass folded in, Donblas lede rewritten from scratch. Also cut the
repeated "X, not Y" construction that was showing up in nearly every finding across all
four pages, and varied the sentence patterns so the four pages don't read like the same
template four times.

---

## Sommsation

**Section label:** Design System · Sommsation

### Lede
**H1:** Six years of Sommsation, in one system

I built this system over six years as VP Design and Creative: 159 component sets, 146 tokens, four modes. It was composable enough to stand up fast for sister projects and companies, and it developed in parallel with Sommsation's overall brand tone and aesthetic, the digital system and the external brand built together instead of in sequence.

### Plate: Font System
**Body:** Two families carry the whole system. Playfair Display sets display and title; Futura PT sets heading, body and caption.

- Face / display: Playfair Display SemiBold, display and title only
- Face / interface: Futura PT, heading, body, caption, every control

| Tier | Face | Desktop | Mobile |
|---|---|---|---|
| Display | Playfair SemiBold | 56 | 48 |
| Title | Playfair SemiBold | 40 | 32 |
| Heading | Futura PT Demi | 32 | 24 |
| Body | Futura PT Book | 20 | 18 |
| Caption | Futura PT Book | 14 | 12 |

### Plate: Palette and Semantics
**Body:** A teal core, a gold secondary, eleven neutrals, and four semantic colors I added specifically so the system could say good, careful and wrong without borrowing a ramp step.

- Primary · Sommsation teal: b500 is the brand core
- Secondary · gold: 8 steps
- Success: order placed · in stock · confirmed
- Warning: low inventory · allocation closing
- Error: declined · sold out · failed
- Dark teal: dark-mode ground

### Plate: Four Modes
**Body:** The structural decision I'm proudest of in this system. Radius and spacing aren't fixed values, they're variables with a mode per breakpoint, so a card doesn't get restyled at each width, it resolves differently. Only desktop actually redefines the radius set; tablet inherits mobile and just resizes components. Dark is a fourth mode on the same collection, not a parallel theme.

- Mobile: radius s 2 · m 4 · l 6 · 2xl 10 · 4xl 16
- Tablet: radius inherits mobile, the mode changes price card 295 to 332
- Desktop: radius s 4 · m 6 · l 8 · 2xl 12 · 4xl 18
- Dark: same geometry, inverted color

### Surfaces (zigzag rows)

**Web** *(Commerce · The DTC Marketplace)*
Where the system is most itself: Playfair for the wine, Futura for everything asked of the customer.
Caption: Storefront and account

**Email** *(Lifecycle · built in Klaviyo)*
The hardest surface to hold a system on, because the medium removes half of it. Type sizes and the gold rule survive the jump into email, and component tokens are already being extended here too.
Caption: Campaign and lifecycle

**Events** *(Activation · physical)*
Print, signage, pour stations. The brand travels further than the component library does.
Caption: On-site activation

**Collateral** *(Partner and trade)*
Decks, one-sheets, producer material. Same two faces, same gold rule, no components at all.
Caption: Partner-facing

### What holds, what doesn't

1. **The system covers everything I asked of it here.** Radius/4xl at 18px is the card. The soft shadow sits inside the elevation language I already built. Display and title are large enough to carry a headline on their own. Four semantic colors cover up, careful and down. I didn't have to invent anything to make this page work, and that's the real test of a system, not the page.

2. **The four modes are the strongest structural idea in the system, and you'd never see it in a screenshot.** Radius and spacing are variables with a mode per breakpoint, so a card resolves at 2px on mobile and 4px on desktop without a single override, and dark is a fourth mode on the same collection rather than a parallel theme. Tablet exists to resize components, not to reshape them. This is the piece of Sommsation I'd bring into any new system.

3. **The type plate is the one place on this whole site where the specimen isn't a stand-in.** Playfair Display and Futura PT are both loaded and licensed here, so what you're reading is the actual typeface. Because the scale is a variable collection rather than fixed styles, the plate above can honestly show two numbers per tier instead of one.

4. **No monospace here.** Every other system on this site has a mono gap worth naming. This one doesn't need closing. A luxury wine brand shouldn't read instrumented, and captions staying in Futura Book at caption size is the right call.

5. **159 component sets serve the web best.** Email is the harder surface to extend into, and that work is already underway. Events get printed and collateral is decks, so two of the four surfaces above still carry the brand on two faces and a gold rule alone. The system's reach is still growing past its strongest surface.

6. **The alternating rhythm reads as a house habit here.** A luxury brand already paces its pages this way, so pairing a label block against a specimen down the page costs nothing and fits.

7. **This system was never built to hold a metric, and I wouldn't force one into it now.** Sommsation's job is desire, not instrumentation. Nothing across the four surfaces above is a number on a card. Forcing one in would work against every other decision in the system.

---

## Strivers

**Section label:** Design System · Strivers

### Lede
**H1:** A single-accent system, built as a sister brand to an already established beast

I led design on Strivers as a consulting lead designer under The St. James. One family, one accent color, four real product screens. Here's what the system carries and where it runs out.

### Plate: Logo Construction
**Body:** Strivers sat under The St. James as the parent brand. The primary lockup is an amber V over the wordmark, delivered as one flattened asset at 414 × 171. There's no construction sheet behind it, and the plate below says so rather than inventing one.

- Ratio: 414 : 171
- Radius: 4px, measured
- Geometry: drawn
- Lockups: 3

### Plate: Font System
**Body:** One family does everything. Poppins carries display, headings, body and labels across six tiers, 10px to 32px. The file declares no text styles, so every size here was measured directly off a specimen frame. Menlo shows up in the source sheet too, but only to set hex labels.

- font/family/all: Poppins, every tier, four weights, no second face
- font/family/spec: Menlo, hex labels in the color sheet only, not a product face

Sizes: 10px · 14px · 14px · 16px · 24px · 32px

### Plate: Palette Reach
**Body:** Eleven tokens: one accent, two amber values, three dark surfaces, six neutrals. No status colors at all. The honest read of this plate is that it's mostly gray.

- Amber: the only non-neutral, accent, CTA, active
- Amber light: tinted ground, light surfaces
- Dark surface: raised, inputs, rows
- Dark card: card ground
- Dark: app ground

### App Surfaces (zigzag rows)

**Weekly Goal** *(Progress · weekly cadence)*
Sessions logged against the target the athlete set at onboarding. One ring, one number, no legend.

**Trainer Message** *(Coaching · video message)*
The intelligence slot in this product is a person. A trainer records to camera, and the card carries the note.

**Workout Summary** *(Session recap · post-set output)*
Duration, output and completion after the last set. The one screen where figures get display size.

**Post-Workout Feedback** *(Consistency · three-tap check-in)*
How it went, in three taps. This is the input that makes every number above trustworthy.

### What holds, what doesn't

1. **This is the one system I'd run dark without hesitation.** A specimen floating clear of its surround is the whole effect on a page like this. On #111 with a #1E1E1E card and a 1px inset hairline, that separation comes from value rather than shadow, which is how this system already works everywhere else.

2. **The alternating rhythm suits this product natively.** Strivers already documents its own sections as halves, so pairing a label against a specimen down the page is the same pacing, just slower.

3. **Semantic color is the real gap.** Eleven tokens, and amber is the only non-neutral one. You can see it in the real screens above: progress, success and the positive feedback state all resolve to the same amber, because amber is the only color available. That works once. Put four status cards on one screen and everything reads as either amber or gray, no signal at all. This is the first thing I'd add before this system carries more product surface.

4. **Radius and elevation were never tokenized.** The 4px corners above were measured off specimen frames, not pulled from a scale, and there's no shadow token since dark systems rarely need one. The card treatment on this page is a decision this layout made, not one the system handed me.

5. **The monospace voice is already half-built, by accident.** Menlo shows up in the source sheet setting hex labels, so the plate captions and spec values above use it, and the instrumented feel other systems are missing shows up here almost for free. The product screens themselves never use it. Promoting it from an annotation face to a product face would be a small, defensible move.

6. **The logo plate is a frame with thinner content than it implies.** The lockup ships as one flattened 414 × 171 asset with the wordmark baked in. What's above is illustration, not derivation: measured radius, drawn geometry, three lockups, exactly as labeled. The wordmark itself is a bitmap in the source files. That's the known gap in this project's material.

7. **The four screens above are the real product, not invented cards.** Weekly goal, trainer message, workout summary, post-workout feedback map onto a four-slot layout almost exactly, with one substitution worth calling out: where a data-driven system would put a machine insight, Strivers puts a trainer on camera. The real discipline is the copy constraint: two words in the label, one line in the caption, one number on the screen.

---

## Sequoia Benefits

**Section label:** Design System · Sequoia Benefits

### Lede
**H1:** A marketplace system, built for wellness

I designed the Sequoia Benefits product as the lone product designer for one year. Two families, five semantic colors, four real App Market screens.

### Plate: Logo Construction
**Body:** The icon mark is a square 36 × 36 glyph, an organic tree silhouette inside a fixed frame. Its proportions come from the icon slot it lives in, not from a circle grid, and the plate below reflects that rather than inventing a construction that isn't there.

- Ratio: 1 : 1
- Radius: 5px
- Geometry: organic
- Polarities: 2

### Plate: Font System
**Body:** Two families, both freely available. Roboto carries body, labels, buttons and every app card; Roboto Slab carries headings, stat figures and marketplace titles. Seven size steps, four weights.

- font/family/body: Roboto, UI, controls, card copy, 400/500/700
- font/family/display: Roboto Slab, headings and figures, 300/400/500

Sizes: 11px · 12px · 14px · 16px · 20px · 26px · 30px

### Plate: Semantic Color
**Body:** Five declared status colors beyond the teal and navy core, the one thing this system has that most of the others on this site don't. Up and down never have to borrow a ramp step here.

- Emerald: healthy · adopted · in budget
- Amber: watch · renewal near
- Orange: action needed
- Red: over · failed · revoked
- Violet: informational · new

### Surfaces (zigzag rows)

**App Market** *(Discovery · nine categories)*
The storefront. Category pills, a teal hero, and a search bar wide enough to be the primary action.

**Vendor Detail** *(Overview · media and contact)*
Where a decision gets made: tabs, a media carousel, and a named contact rather than a form.

**My Apps** *(Provisioned · twelve tools)*
The card grid this system is built for, 196px minimum, favorite and info per tile.

**Reports** *(Analytics · population and coverage)*
The one screen with real charts: population map, plan distribution, platform analytics. This is where semantic color earns its keep.

### What holds, what doesn't

1. **The semantic set is the strongest thing about this system.** Emerald, amber, orange, red and violet, alongside the teal and navy core, mean up and down never have to borrow a ramp step. The Reports screen above is the proof: plan distribution and coverage read as distinct series without any of them being teal, and the same 22px status badge already carries request and added states across every App Market screen.

2. **The alternating rhythm works as a counterweight to how this product actually reads.** Its native mode is a dense grid of 196px app cards. Slowing that down to one label against one specimen at a time gives a single number room to be read, which the dashboard grid never grants it.

3. **Radius and shadow were built for an admin console, not for this layout.** This system's card is 5px with a single flat shadow, buttons and inputs at 3px, crisp and administrative on purpose. Honored at those real values, as above, the cards read that way here too. Softening them would mean inventing a radius step this system doesn't have.

4. **No monospace, and the legends above show the cost of that.** Roboto Medium with tabular figures keeps the columns aligned in the specimens above but loses the instrumented read a mono face would give. A third family is worth it for an admin console. Harder to justify for a storefront, which is what this product actually is.

5. **The display specimen shows Roboto Slab doing something this product never asks of it.** This system's real ceiling is 30px, the stat tile figure. The specimen above is a demonstration of the face, not a token in use. The ruler underneath is honest about that: seven steps, 11px to 30px, nothing above.

6. **The logo plate is a frame, and the content under it is thinner than it looks.** The mark is a 36 × 36 organic tree silhouette with no underlying construction, so what's above is illustration, not derivation: 1:1, 5px, organic, two polarities, exactly as labeled. This system actually carries three marks, not one: a dark-ground lockup, a tree, and the icon. A single centered specimen hides that range.

7. **Four cards, utilization, a recommendation, a trend, a variance, are close to the real question an IT buyer opens this product with.** What am I paying for, what should I do, is it getting better, am I over. The copy discipline this layout enforces, a two-word headline and a one-line caption, does more work here than the visual treatment, because this product's default is thirty app cards and no opinion at all.

---

## Donblas

**Section label:** Design System · Donblas.AI

### Lede
**H1:** A young system, built to move fast

I set brand and creative direction for Donblas.AI, building this system from the ground up in 2026. Two families, five colorways, four real sections of the marketing site. Here's the system, as it stands today.

### Plate: Logo Construction
**Body:** The mark is four boolean vector shapes, not a geometric construction. Its proportions are fixed by the source lockup frame rather than derived from a circle grid, and the plate below says exactly that instead of inventing a grid that isn't behind it.

- Ratio: 607 : 747
- Radius: 18px
- Geometry: organic
- Colorways: 5

### Plate: Font System
**Body:** Two families, declared as variables rather than text styles. Manrope carries body, labels and controls; the title face carries headings. Two weights only, Medium and Bold are the whole of it.

- font/family/body: Manrope, the real face, available on the web
- font/family/title: Brandon Grotesque, licensed, no web release, shown here in Jost

Sizes: 12px · 14px · 16px · 18px · 20px · 24px · 32px · 40px · 48px

### Surfaces (zigzag rows)

**Hero** *(Marketing site · desktop)*
The whole positioning in two lines, set in the title face over a dark plate. Nothing else competes for attention.

**Proof Numbers** *(Marketing site · numbers band)*
Four figures on the navy band, the strongest four-number moment the current site has.

**Capability Grid** *(Marketing site · mauve section)*
Four cards on the secondary mauve, one icon and one paragraph each. The system's only tinted ground.

**Numbered Services** *(Marketing site · service list)*
Four services as numbered rows, one expanded. Hairline rules do the work a card would elsewhere.

### What holds, what doesn't

1. **The alternating rhythm is a natural fit, and it cost nothing to add.** Donblas already ships a split-content block in three alignments. This page is that same component, used at a slower pace, reading as editorial rather than dashboard.

2. **Radius and shadow needed nothing invented.** This system's floating cards land almost exactly on radius/4xl at 18px desktop, and the soft triple-layer shadow sits comfortably next to the card treatment I'd already built.

3. **The logo plate stays honest about what's actually behind the mark.** It's four boolean vector shapes with no underlying construction, no circle grid, no derivation, so the labels above say what's true: ratio, radius, geometry organic, five colorways. A construction plate that invents a grid that isn't there would be worse than skipping the plate entirely.

4. **The font system plate is the strongest specimen on this page.** A giant Aa ghosted behind the weight list, with a size ruler underneath, maps directly onto how this system actually declares type: nine size steps, two weights, all as variables. Setting both families at display size side by side also puts the substitution in plain view instead of a footnote: Brandon Grotesque is licensed but unavailable on the web, so it's shown here in Jost.

5. **Semantic color is the real gap in this system today.** Eleven blues, eleven mauves, eleven neutrals, and exactly one semantic color: error red. No declared positive. The marketing site above never needs one, because a marketing site has no state to report. The moment this system carries product, a rising cost and a falling risk both have to come out of the same blue ramp. A declared positive and a caution color are the next things I'd add.

6. **No monospace yet.** Every eyebrow, legend figure and footnote on this page is set in IBM Plex Mono standing in for a face this system doesn't have. Donblas declares two families, Brandon Grotesque and Manrope, and adding a third for data is a real decision. It's the one gap that would change how instrumented this brand can read.

7. **The four sections above are the actual site, not invented cards.** Donblas already sets four figures in a row on the navy band. The Proof Numbers row is that exact moment, slowed down. Taking that content model further into the product means keeping the same copy discipline: a headline of two words, a caption of one line, and giving each figure room the band itself doesn't have to spare.
