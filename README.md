# CSS-Grid example class helpers

This is a concept to provide class helpers to aid in the rapid development of 12 column grid layouts. Ideally CSS Grids should be defined and manipulated within css, however sometimes it's faster and easier to simply add classes to items during development.

## Breakpoints

We're using Bootstrap 4's media query mixin, so anytime you see `breakpoint` we're referring to bootstraps breakpoint names (sm, md, lg, xl)

## Example
```html
<section class="grid12">
    <article class="grid12__span-2">...</article>
    <article class="grid12__span-10">...</article>
    <article class="grid12__start-2 grid12__span-5">...</article>
    <article class="grid12__span-3">...</article>
    <article class="grid12__span-3">...</article>
    <article class="grid12__col-3-11">...</article>
</section>

<section class="grid12--md">
    <article class="grid12__span-2">...</article>
    <article class="grid12__span-10">...</article>
</section>

<section class="grid12--sm">
    <article class="grid12__sm-only-col-3-11 grid12__md-span-8">...</article>
    <article class="grid12__sm-only-col-3-11 grid12__md-span-4">...</article>
</section>
```

## Helper classes 

### Class slug descriptions

| Slug | Valid values |
| --- | --- |
| `columns` | Integer, min: 1, max: 12 |
| `start-line` | Integer, min: 1, max: 12 |
| `end-line` | Integer, min: 2, max: 13 |
| `breakpoint` | String, any valid Bootstrap defined media query name (`xs`,`sm`, `md`, `lg`, `xl`) |

### Grid wrapper

| Selector | Description |
| --- | --- |
| `.grid12` | creates a 12 column grid context |
| `.grid12.debug` | adds a 12 column grid gradient to a pseudo element on the grid to help visualise positions |
| `.grid12--[breakpoint]` | creates a 12 column grid context at this media query and up |
| `.grid12--space` | adds equivlant column gap after grid |
| `.grid12--row-space-children` | adds equivlant column gap after each child (this is used instead of grid-gap as it will also apply to children of grids which are not yet `display: grid` due to media queries) |
| `.grid12--align-top` | aligns child cells to the top of their spans (prevents them from matching heights) |

### Column Span

| Selector | Example | Description |
| --- | --- | --- |
| `.grid12__span-[columns]` | sets a child of `grid` to take up `columns` columns, where `columns` is a number of columns |
| `.grid12__start-[start-line]` | sets a child of `grid` to start on given line, where `start-line` is a css grid line number (starting at 1, through 13) |
| `.grid12__end-[end-line]` | sets a child of `grid` to end on given line, where `end-line` is a css grid line number (starting at 1, through 13) |
| `.grid12__col-[start-line]-[end-line]` | sets a child of `grid` to start and end on given lines, where `start-line` and `end-line` is a css grid line number (starting at 1, through 13) |
| `.grid12__[breakpoint]-span-[columns]` | applys a `span-[columns]` rule at given `breakpoint` |
| `.grid12__[breakpoint]-start-[start-line]` | applys a `start-[start-line]` rule at given `breakpoint` |
| `.grid12__[breakpoint]-end-[end-line]` | applys a `end-[end-line]` rule at given `breakpoint` |
| `.grid12__[breakpoint]-col-[start-line]-[end-line]` | applys a `col-[start-line]-[end-line]` rule at given `breakpoint` |

