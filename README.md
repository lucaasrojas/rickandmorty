# Rick and Morty episode matcher

[![Netlify Status](https://api.netlify.com/api/v1/badges/546a4c71-1f16-490c-9fdf-47abb71cca86/deploy-status)](https://app.netlify.com/sites/rickandmorty-lucaasrojas/deploys)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that allows you to get select two characters and know whether they share an episode or not.

You can find the code [here](https://github.com/lucaasrojas/rickandmorty).

The app was deployed on [Netlify](https://rickandmorty-lucaasrojas.netlify.app/).

## Technical considerations

- The app allows you to select one character and then it loads the episodes, the idea is to be able to search through the episodes before selecting the second character.
- When two characters are selected, one per column, the app will search those episodes that each selected character shares.
- The unit tests were limited to prevent redundancy at the time of evaluation, this means that there are a few unit tests to show the reasoning behind them.
- Tailwind is being used to style the project and take advantage of the situation to learn about it.
- The code was deployed to Netlify because I already had an account and it is where I deploy my other projects.

## Getting Started

First, install the dependences:

```bash
npm i
```

Then run the development environment

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load a custom Google Font.
