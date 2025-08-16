<template>
  <span :class="$style.root">
    <LogoSVG />
  </span>
</template>

<script setup>
import LogoSVG from '#core/assets/images/site-logo.svg';
</script>

<style module>
.root {
  display: inline-block;
  margin: 3px;

  & svg {
    position: relative;
    z-index: 1;
    width: var(--mev-dimensions-site-logo);
    height: auto;

    & path {
      fill: var(--mev-color-content-primary-base);
    }
  }
}
</style>
