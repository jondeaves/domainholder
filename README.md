# Domain Holder

A generic static site for use as placeholder for a new domain

## Install

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

### Configuration

We use dotenv to store information about the current deployment. This means that can configure these values as part of something, such as Netlify deploys, that allows us to dynamically changes the values during

When developing locally you can create a file at the root of the project called `.env`. Even easier you can copy `.env.template` to `.env` and alter these values.

### Running

Then you can run it by:

```sh
yarn dev
