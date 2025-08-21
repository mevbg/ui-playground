<template>
  <header :class="[$style.root, 'flex items-center justify-between']">
    <LayoutWrapper class="flex w-full items-center justify-center">
      <nuxt-link to="/" class="block" aria-label="Начална страница">
        <SiteLogo />
      </nuxt-link>
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
