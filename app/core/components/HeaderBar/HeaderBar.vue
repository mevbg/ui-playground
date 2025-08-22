<template>
  <header :class="$style.root">
    <LayoutWrapper class="flex w-full items-center justify-between">
      <span />

      <nuxt-link to="/" class="block" aria-label="Начална страница">
        <SiteLogo />
      </nuxt-link>

      <ColorSchemeController />
    </LayoutWrapper>
  </header>
</template>

<style module>
:root {
  --mev-header-offset: var(--mev-top-offset);
  /* prettier-ignore */
  --mev-header-height: calc(var(--mev-site-logo-height) + var(--mev-header-offset) * 2);
}

.root {
  padding-block: var(--mev-header-offset);
  background: linear-gradient(0deg, transparent 0%, var(--mev-color-background-primary-base) 99%);
  backdrop-filter: blur(10px);
}
</style>
