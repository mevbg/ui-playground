// This scripts is a workaround for launching the Nuxt app via cPanel

async function loadApp() {
  await import('./.output/server/index.mjs');
}

loadApp();
