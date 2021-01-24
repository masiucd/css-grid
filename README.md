# CSS grid

## Table of Contents

- [About](#about)

- [Getting Started](#getting_started)
- [Fragment](#fragment)
- [Layout](#layout)
  - [grid-auto-flow](#grid-auto-flow)
  - [size-grid-items](#size-grid-items)
- [Grid Auto Fit, Grid Auto Fill ](#fit)

## About <a name = "about"></a>

Use Css grid to create awesome layouts

<br/>

## Getting Started <a name = "getting_started"></a>

1.Run `yarn/npm` install
2.run `yarn/npm` dev , if npm then `npm run dev` else `yarn dev`

### Prerequisites

`Node >= ^10.0`

<br/>

## Fragment <a name = "fragment"></a>

`Fr` is a fractional unit and 1fr is for 1 part of the available space.

## Grid-auto-flow <a name = "grid-auto-flow"></a>

Works similar like in flexbox with `flex-direction`, so if you have a left over column that will not fit on your row you could add the `grid-auto-flow:column` to stretch it and it will work similar like a `display:flex`

<img src="grid-flow.png" alt="grid-flow" />

<br/>

## size-grid-items <a name = "size-grid-items"></a>

When we want a given grid item to take some space we really don't want to give at a fixed with while it will effect all the other items in the same column, instead we can span our grid item either with `grid-column-start` and `grid-column-end` or make it shorter like `grid-column: start-unit/end-unit`.
We could also use the `span` keyword like:
`grid-column: span 2` which means: `hey item I want you to take up 2 columns from where you are right now`.

<br/>

## Grid Auto Fit, Grid Auto Fill <a name = "fit"></a

`auto-fill` and `auto-fit` will help us to fill out the grid.

`auto-fill` fills the row with as many columns it can fit.

for example:

```css
grid-template-columns: repeat(auto-fill, 150px);
```

you don't tell it how many columns you want, just check how many possible items you can fit in there.

while `auto-fit` fills the current available columns into the space expending them so that they take up any available space.
You not for example layout the first item at the end with `auto-fit` just because the grid will end where there is no more items in the grid.

But both `auto-fit` and `auto-fill` comes more handy when using the `minmax` function.

```css
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
```

If you are used to work with `Flex-box` it works similar to `flex-wrap`.
