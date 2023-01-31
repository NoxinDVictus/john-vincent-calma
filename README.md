This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

#### Few notes to follow before you start coding:

- We are are going to user ‘yarn’ not ‘npm’ to avoid generating unnecessary files.

#### Before Creating a Pull Request

run:
`$ yarn prettier` > make your code consistent
`$ yarn build` > check if your PR has no issues (done automatically by husky)

#### Make your code Clean and Readable

- **Delete all codes that you will not be using**, including imports and commented codes. Codes that are commented and included on the push should have a reason. [One Possible Reason](https://blog.codinghorror.com/the-joy-of-deletion/)
- **Follow Proper Function Documentation** [JSDoc summary](https://gomakethings.com/whats-the-best-way-to-document-javascript/) or [TSDOc](https://tsdoc.org/)
- For complex function please put details as much as possible for other dev to know what it’s used for and how to use it .
- Since we are using TS please do add a type on your variables as much as possible, **don’t just use ‘any’**. Create an interface, class, enum or type if necessary.
- We will use SASS so as much as possible don’t save using the extension .css, for consistency.
- Please make sure that you implement proper spacing, so your code will not look like crowded, specially for .scss files.
- Add all the files that does not need to be formatted in **.prettierignore**

#### Git branch naming convention

see source for examples
[Source](https://codingsight.com/git-branching-naming-convention-best-practices/)

#### Commit naming convention

[Source](https://gist.github.com/brianclements/841ea7bffdb01346392c)

- **build:** Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci:** Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- **docs:** Documentation only changes
- **feat:** A new feature
- **fix:** A bug fix
- **perf:** A code change that improves performance
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test:** Adding missing tests or correcting existing tests

#### Naming Conventions

- **k-e-b-a-b** style naming for files, folders and css, scss variables (e.g: one-two),
- **Pascal** for functional component, Interface, Class and Type (e.g: OneTwo),
- **camelCase** for functions (oneTwo)
- **snake_case** for json and enums (e.g: one_two)

- **constants** are all caps by convention

#### Images

- Icons should be **svg**
- Large images should be **webp**

#### Documenting A function

```
/**
 * Details
 * @param 1
 * @return
 */
```

#### Structure SASS

[Source](https://dev.to/luis_sserrano/how-to-structure-your-sass-code-56nj)

```
base/
components/
layout/
pages/
themes/
abstracts/
vendors/
main.scss
```

#### Structure Next Js

[Source](https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472)

```
/public
    favicon.ico
/src
    /components
        /elements
            /auth
                auth-form.tsx
                auth-form.test.ts
            /[Name]
                [Name].tsx
                [Name].test.ts
    /hooks
    /types
    /utils
    /test
        /api
            auth-api.test.js
            [name]API.test.js
        /pages
            index.test.js

    /pages
        /api
          /auth-api
              auth-api.js
          /[name]api
              [name]api.js
        _app.tsx
        _document.tsx
        index.tsx
```

==note: this is modified to fit the earlier rules==

#### Structure Next Js Public folder

[Source](https://stackoverflow.com/questions/54436021/nextjs-public-folder)

```
/public
    /static
        /images
        /css
        /fonts
    robots.txt
    manifest.json
```
