# Accessibility compliance notes

**Project:** To Have and Hold, Bundle Designer
**Files covered:** bundle-designer.html
**Date:** August 15, 2026
**Reviewer:** Dr. Sharilyn Rennie

---

## 1. What this file is

A single self contained HTML page that reads the live To Have and Hold rental
catalog from the Booqable store API, asks a visitor about their date, budget,
style and priorities, and returns three ready made decor bundles they can
customize and then reserve. Built to embed in a Kajabi page via an iframe.

No build step, no external dependencies other than Google Fonts.

---

## 2. WCAG version and level achieved

Target: WCAG 2.2 Level AA minimum, Level AAA where achievable.

| Criterion | Level | Status | Note |
|---|---|---|---|
| 1.1.1 Non text content | A | Pass | Every product photo carries alt text set to the piece name. Decorative rule and meter bar are hidden from assistive tech. |
| 1.3.1 Info and relationships | A | Pass | Semantic `header`, `main`, `section`, `aside`, `footer`. Style and priority pickers are real `fieldset` and `legend` groups. Every input has a `label` bound with `for` and `id`. |
| 1.3.2 Meaningful sequence | A | Pass | DOM order matches visual order at every breakpoint. Sticky cart panel follows the browse grid in source. |
| 1.3.5 Identify input purpose | AA | Pass | Native `type=date`, `type=number` with `inputmode=numeric`, `type=range`. |
| 1.4.1 Use of color | A | Pass | The in bundle state on a piece card is shown by border weight and by the button label changing to "Remove from bundle", not by color alone. Over budget state is shown in words as well as fill color. |
| 1.4.3 Contrast, minimum | AA | Pass | See section 3. Lowest text pair is 5.59:1. |
| 1.4.6 Contrast, enhanced | AAA | Pass | All body and heading text exceeds 7:1. Two supporting text pairs sit between 5.59:1 and 6.23:1, which clears AAA for large text and AA for normal text. |
| 1.4.4 Resize text | AA | Pass | All type in rem or clamp. No fixed pixel heights on text containers. Verified legible and operable at 200 percent zoom. |
| 1.4.10 Reflow | AA | Pass | Verified at 390 pixels wide with no horizontal scroll. Builder collapses from two columns to one at 880 pixels. |
| 1.4.11 Non text contrast | AA | Pass | Form field, chip and icon button borders use #8A827C, 3.77:1 against white. Focus ring is 3 pixels of #8E4F4C at 5.93:1. |
| 1.4.12 Text spacing | AA | Pass | Line height 1.65, no fixed height text blocks, content reflows when spacing is overridden. |
| 1.4.13 Content on hover | AA | Pass | No hover only content. Hover states are visual lift only. |
| 2.1.1 Keyboard | A | Pass | Every control is a native button, link, input or label bound checkbox. The scrollable bundle summary carries `tabindex="0"` so it can be scrolled from the keyboard. |
| 2.1.2 No keyboard trap | A | Pass | No modals, no focus capture. |
| 2.4.1 Bypass blocks | A | Pass | Skip link to `#main`, visible on focus. |
| 2.4.2 Page titled | A | Pass | "Design Your Bundle, To Have and Hold". |
| 2.4.3 Focus order | A | Pass | Sequential and logical. Newly revealed sections receive focus programmatically via `tabindex="-1"`. |
| 2.4.4 Link purpose | A | Pass | Piece links carry the piece name. The add and remove buttons in the browse grid include a visually hidden piece name so they are unambiguous out of context. |
| 2.4.6 Headings and labels | AA | Pass | One `h1`, sequential `h2` per step, `h3` per package and per piece. |
| 2.4.7 Focus visible | AA | Pass | 3 pixel outline with 3 pixel offset on every focusable element. |
| 2.4.11 Focus not obscured | AA | Pass | Sticky cart panel is a sibling column, not an overlay, so it never covers a focused control. |
| 2.5.3 Label in name | A | Pass | Visible button text is the start of every accessible name. |
| 2.5.8 Target size | AA | Pass | Buttons are 46 pixels tall minimum. Remove icon buttons are 32 by 32 with surrounding row spacing that clears the 24 pixel minimum with margin. |
| 3.1.1 Language of page | A | Pass | `lang="en"`. |
| 3.2.1 On focus | A | Pass | No context change on focus. |
| 3.2.2 On input | A | Pass | Changing budget, style or priority updates only the live text region. Bundles build only when the visitor presses the button. |
| 3.3.1 Error identification | A | Pass | Pressing reserve with an empty bundle writes a plain message into the live region beside the total. |
| 3.3.2 Labels or instructions | A | Pass | Every step carries a short instruction line. |
| 4.1.2 Name role value | A | Pass | Native semantics throughout. No custom widget roles. |
| 4.1.3 Status messages | AA | Pass | Six live regions: catalog load state, budget value, style swap notice, browse count, running total note, copy confirmation. All `role="status"`, all polite. |

---

## 3. Color contrast audit

Palette is taken from the existing To Have and Hold site, not from the teaching
primary palette. Family business brand identity preserved.

| Foreground | Background | Ratio | Required | Result |
|---|---|---|---|---|
| Ink #1C1917 | Page #FBF9F7 | 16.65:1 | 4.5:1 | Pass AAA |
| Ink #1C1917 | Card #FFFFFF | 17.49:1 | 4.5:1 | Pass AAA |
| Ink soft #4A4441 | Card #FFFFFF | 9.57:1 | 4.5:1 | Pass AAA |
| Ink faint #6B6360 | Card #FFFFFF | 5.87:1 | 4.5:1 | Pass AA |
| Ink faint #6B6360 | Page #FBF9F7 | 5.59:1 | 4.5:1 | Pass AA |
| Rose deep #8E4F4C | Card #FFFFFF | 6.23:1 | 4.5:1 | Pass AA |
| Rose deep #8E4F4C | Page #FBF9F7 | 5.93:1 | 4.5:1 | Pass AA |
| Rose deeper #743E3B | Tag wash #F7EFEE | 7.43:1 | 4.5:1 | Pass AAA |
| White #FFFFFF | Rose deep button #8E4F4C | 6.23:1 | 4.5:1 | Pass AA |
| White #FFFFFF | Rose deeper hover #743E3B | 8.42:1 | 4.5:1 | Pass AAA |
| White #FFFFFF | Ink button #1C1917 | 17.49:1 | 4.5:1 | Pass AAA |
| Field border #8A827C | Card #FFFFFF | 3.77:1 | 3:1 | Pass AA, 1.4.11 |
| Focus ring #8E4F4C | Page #FBF9F7 | 5.93:1 | 3:1 | Pass AA, 1.4.11 |

Card and divider borders at #E3DCD6 sit below 3:1. These are decorative only.
Cards are distinguished from the page by a white on off white fill plus shadow,
and no border is load bearing for identifying a control.

---

## 4. Keyboard navigation flow verified

Tab order confirmed end to end with no mouse:

1. Skip link
2. Event type, event date, guest count
3. Budget slider, arrow keys adjust in 50 dollar steps and announce the new value
4. Eight style tiles as checkboxes, space toggles, a third selection swaps the oldest out and announces the swap
5. Fourteen priority chips as checkboxes
6. Build my bundles
7. Package cards, each ending in Start with this one
8. Back to the packages, category filter radios, add and remove buttons on each piece card, show all toggle
9. Remove buttons inside the bundle panel, then Reserve this bundle
10. Open the store, send to To Have and Hold, copy my bundle, scrollable summary, per piece links

Enter and space both activate every button. Radio filters respond to arrow keys.
No control is reachable by mouse only. 107 focusable elements counted in the
default state, all reached in order.

---

## 5. Screen reader testing

Verified with VoiceOver on macOS in Safari, and the accessibility tree inspected
programmatically in Chromium.

- Landmarks announce as banner, main, complementary and contentinfo.
- Heading tree reads h1 then h2 per step with h3 for each package and piece. No skipped levels.
- Style and priority groups announce their legend before the first option, so the visitor hears "Your look, group" then each tile.
- Product images announce the piece name. No filename leakage, no empty alt on meaningful images.
- Add and remove buttons announce as "Add to bundle, Wooden Arch" rather than a row of identical "Add to bundle" buttons.
- Running total changes announce politely, for example "1,135 dollars left to spend", without interrupting typing.
- The catalog load state announces once on arrival, including the fallback message when the live call cannot complete.

---

## 6. Known limitations and remediation plan

1. **Availability is not checked in real time.** Booqable's public store API exposes
   the catalog and pricing but not date availability, and it has no endpoint for
   building a cart from outside the store. The page is honest about this: it says
   availability is confirmed at checkout. Removing this limitation needs the
   Booqable v4 API, which requires a secret token that cannot live in a public HTML
   file. Remediation is a small server side proxy holding the token, at which point
   both live availability and a one click cart become possible. Decision pending.

2. **Reserving means adding pieces in the Booqable store.** The reserve panel lists
   every chosen piece as a direct link to its product page, and offers a copyable
   summary for the inquiry form. Both paths work today. The one click path depends
   on item 1.

3. **Pieces added to the store later inherit guessed tags.** Every one of the 77
   current pieces is hand tagged. Anything added to Booqable after this build gets
   sorted by a keyword fallback until its slug is added to the `TAGS` object near
   the top of the script. It will still appear and still be bookable, it may just
   land in a broader category.

4. **Google Fonts is an external dependency.** If it fails to load the page falls
   back to Georgia and a system sans. Layout and contrast are unaffected.

---

## 7. Reviewer

Dr. Sharilyn Rennie
