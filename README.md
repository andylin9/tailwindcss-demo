# Environment

1. Node.js v18
2. IDE: vscode, Extension: Tailwind CSS IntelliSense

# Clone Next.js + Tailwind CSS Template

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

or

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

## Troubleshooting

If you use npx create the project you might run into some problem, you can check link below or just use yarn to create project
https://github.com/tailwindlabs/tailwindcss/discussions/2833

# Install dependency

1. Automatic Class Sorting

```sh
npm install -D prettier prettier-plugin-tailwindcss
# or
yarn add -D prettier prettier-plugin-tailwindcss
```

# Get started with Tailwind CSS

## Search the class you need

https://tailwindcss.com/docs/installation  
search the class you need, if you need style font size, you could click search input on the left side bar, enter font size, and you will find the class you need.

## Pseudo-classes and Pseudo-element

[Link to Pseudo-classes Docs](https://tailwindcss.com/docs/hover-focus-and-other-states)

Pseudo-element syntax is like this: `hover:bg-sky-700`

[Link to Pseudo-element Docs](https://tailwindcss.com/docs/content)  
Pseudo-classes syntax is like this: `after:content-['_↗']`

## CSS Selectors

[Link to CSS Selectors Docs](https://tailwindcss.com/docs/hover-focus-and-other-states#first-last-odd-and-even)  
CSS Selectors syntax is like this: `first:pt-0`

## Responsive Design

[Link to official Docs](https://tailwindcss.com/docs/responsive-design#working-mobile-first)  
By default, Tailwind uses a mobile-first breakpoint system

```html
<!-- This will center text on mobile, and left align it on screens 640px and wider -->
<div class="text-center sm:text-left"></div>
```

## Using arbitrary values

[Link to official Docs](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values)

sometimes you need a sepcific value, you might want to use arbitrary values

`w-[22px] equals to width: 22px;`

## Group classes

[Link to official Docs](https://tailwindcss.com/docs/functions-and-directives)

```css
@layer components {
  .navBorder {
    @apply w-[15px] bg-[#D6D6D6];
    height: 1px;
  }
}
```
