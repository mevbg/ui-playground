<template>
  <span :class="$style.root">
    <LogoSVG />
  </span>
</template>

<script setup>
import LogoSVG from '#core/assets/images/site-logo.svg';
</script>

<style module>
:root {
  --mev-site-logo-ratio: 0.8475;
  --mev-site-logo-height: calc(var(--mev-dimensions-site-logo) / var(--mev-site-logo-ratio));
}

.root {
  position: relative;
  display: block;
  aspect-ratio: var(--mev-site-logo-ratio);
  width: var(--mev-dimensions-site-logo);
}

.root::after {
  content: '';

  position: absolute;
  z-index: 0;
  inset: -3px;

  border-radius: 5px;

  background-color: var(--mev-color-primitive-white);
}

.root svg {
  position: relative;
  z-index: 1;

  width: 100%;
  height: auto;

  background-color: var(--mev-color-primitive-white);
}
</style>
