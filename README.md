# playground.mev.bg

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm i
```

Running this will automatically trigger a `postinstall` script that generates design tokens and favicons – everything needed for development.

### Host Configuration

Add the following entry to your `/etc/hosts` file to enable local development:

```bash
127.0.0.1 development.playground.mev.bg
```

Run the following command to generate SSL certificates for local development:

```bash
npm run generate:ssl
```

## Development Server

Start the development server on `https://development.playground.mev.bg:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build:app
```

Locally preview site build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
