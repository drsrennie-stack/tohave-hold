# Bundle Designer, install and maintain

## What it does

Reads the To Have and Hold catalog live from the Booqable store every time the
page loads. Names, prices and photos are never hard coded, so when Megan changes
a price or adds a piece in Booqable, this page shows it on the next refresh with
no edits from you.

The visitor answers four short questions, gets three bundle options built to
their budget, swaps anything they want, then either books it in the store or
sends the list to Megan.

## Putting it on the Kajabi site

1. In Kajabi, make a new page (or open the Reservations page).
2. Add a **Custom Code** block.
3. Open `bundle-designer.html`, select everything, paste it into the block.
4. Publish.

The file already sends its height to the parent frame on load, on resize and
whenever content changes, so the iframe grows and shrinks with the page instead
of showing an inner scrollbar. The embed id it posts is `thh-bundle-designer`.

Internal links use `target="_top"` so they break out of the iframe. Links to the
Booqable store open in a new tab with `rel="noopener"`.

## Where the pieces are tagged

Near the top of the script there is a `TAGS` object, one line per piece, keyed by
the Booqable slug. Each line sets the styles that piece belongs to, its category,
and whether it is a statement piece, a mid piece or an accent.

To add a piece Megan has just put in Booqable, copy an existing line and change
the slug. The slug is the last part of its product page URL. Example:

```
"wooden-arch": { styles:["rustic","boho","garden"], cat:"ceremony", tier:"statement" },
```

Styles available: rustic, boho, classic, modern, glam, vintage, garden, moody.

Categories: ceremony, backdrop, lounge, seating, signage, seatingchart, lighting,
centerpiece, tabletop, bar, dessert, guestbook, photo, games, florals, accents.

Add `scale:true` for anything that should multiply with the guest count, like
centerpieces or linens. Add `exclude:true` to keep something out of bundles
entirely, which is how the "Reserve My Day!" deposit is handled. Add
`events:["graduation"]` to restrict a piece to one kind of event.

Anything not in the list still shows up. It gets sorted by keyword until you
give it a proper line.

## The offline copy

The file also carries a saved snapshot of all 77 pieces and prices from
August 15, 2026. It is used only if the live call to Booqable fails, and when
that happens the page says so rather than quietly showing stale prices. Worth
refreshing the snapshot once or twice a year.

## Two things it cannot do yet

Booqable's public store API gives out the catalog and prices but not date
availability, and it has no way to build a cart from outside the store. So the
page tells couples that availability is confirmed at checkout, and hands them a
list of direct product links to add.

Both of those become possible with Booqable's v4 API, which needs a secret token.
A token cannot go in a page anyone can view source on, so that version needs a
small proxy sitting between this page and Booqable. Roughly an afternoon of work
if you decide you want it.
