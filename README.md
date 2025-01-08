# Webapp Template 2025
Here is a template for a webapp project in 2025. This template is based mainly on Vite, React, TypeScript, and TailwindCSS.

## Package manager - Yarn 4.x
You can always use npm - but keep in mind, that using multiple package managers for one project can lead to anomalies.

[Guide to installing yarn 4.x](https://yarnpkg.com/getting-started/install)

##### TL;DR
`corepack enable`
Move to repository directory
`yarn set version stable`
`yarn install`

---
## Code of Conduct
### Naming things
Keep in mind - it's better to have a long, descriptive name than a short, unclear one.

#### Files
Use `kebab-case` for file names and dot notation for specifying the file functionality.
> ###### Example:
> `/src/screens/settings/index.tsx`
> `/src/screens/settings/subviews/user-settings.subview.tsx`

##### Directory structure (folder structure)
Use `kebab-case` for directory names
###### Screens
Screens holds the main views of the application. Each screen should have its own directory.
Each screen can also hold subviews when there are multiple views in one screen.
> `Example:`
> `/src/screens/settings/index.tsx`
> `/src/screens/settings/subviews/user-settings.subview.tsx`
> `/src/screens/settings/subviews/org-settings.subview.tsx`

###### Components
> Components dir stores elements that are used across multiple screens or globally.

###### Contexts
Stores contexts.

###### Public vs Assets
Add static files to the `public` directory. Add assets that are used in the code to the `assets` directory.
> Images that change based on configuration or other means should be stored in the `/public` directory.
> Images or assets that are not changing should be stored in the `/src/assets` directory.

#### Types & Interfaces
Use `PascalCase` for type and interface names
> `type Product = { name: string, price: number }`
#### TSX & JSX Components
Use `PascalCase` for component names
> ```tsx
> const ProductCard = () => (
>   return <div>Product Card</div>
> )
> ```

#### Variables & Functions
Use `camelCase` for variable and function names

> `const totalProducts = 200`
> `const filterProductsWithoutPrice = (products: Product[]) => products.filter((product) => !!product?.price)`

### Using environment variables
There is a `.env.example` file in the root directory.
Copy this file and rename it to `.env`. This file is ignored by git and should be used for storing sensitive information like API keys.

##### Using environment variables in code
Environment variables are available in the `import.meta.env` object.
> ```ts
> // Example:
> // Using environment variable called VITE_APP_API
> const api = import.meta.env.VITE_APP_API
> ```

##### Adding environment variables
[Link Vite ENV naming docs](https://vite.dev/guide/env-and-mode.html#env-files)
When adding new env variables, make sure to prefix them with `VITE_*` to make them accessible on the client.

Start by adding the variable type to `/src/vite-env.d.ts` file.
> ```ts
> interface ImportMetaEnv {
>   /** @description API base url */
>   VITE_APP_API: string
> }

Make sure to add the variable to the `.env.example` file and (if possible) add an example value to it (good practice is to add a value that is used only in dev environment locally).

---

## Libraries in this template
#### @nextui-org/react (next-ui with framer-motion)
Component library for simple & aesthetic elements
#### clsx
Small utility library for constructing className strings.
###### Example:
`clsx('foo', isHidden && 'hidden', isHighlighted ? 'bg-blue-500' : 'bg-green-50')`

#### axios
Promise based library for making HTTP requests.

#### dayjs
Moment.js is deprecated, so we use dayjs for date formatting.

#### swr
React Hooks library for data fetching. Mainly for fetching lists.

#### tailwindcss
CSS library for simple styling.

#### usehooks-ts
Collection of reusable React Hooks.
i.e. useLocalStorage

