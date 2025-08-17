<template>
  <header :class="[$style.root, 'flex items-center justify-between']">
    <LayoutWrapper class="flex w-full items-center justify-between">
      <nuxt-link to="/" class="block">
        <SiteLogo />
      </nuxt-link>
    </LayoutWrapper>
  </header>
</template>

<style module>
.root {
  --offset: var(--mev-size-300x400);

  margin-top: calc(var(--offset) * -1);
  padding-top: var(--offset);
  background: linear-gradient(0deg, transparent 0%, var(--mev-color-background-primary-base) 99%);
  backdrop-filter: blur(10px);
}
</style>
