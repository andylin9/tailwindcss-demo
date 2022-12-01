# Environment

1. node v18
2. ide: vscode, extension: Tailwind CSS IntelliSense

# Clone Next.js + Tailwind CSS Template

```sh
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
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

https://tailwindcss.com/docs/installation  
search the class you need, if you need style font size, you could click search input on the left side bar, enter font size, and you will find the class you need.

# Using arbitrary values

https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values  
sometimes you need a sepcific value, you might want to use arbitrary values

`w-[22px] equals to width: 22px;`

# Group classes

https://tailwindcss.com/docs/functions-and-directives

```css
@layer components {
  .navBorder {
    @apply w-[15px] bg-[#D6D6D6];
    height: 1px;
  }
}
```
