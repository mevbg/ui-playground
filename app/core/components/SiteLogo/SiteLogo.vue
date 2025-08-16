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
  position: relative;
  display: inline-block;
  margin: 3px;
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

  width: var(--mev-dimensions-site-logo);
  height: auto;

  background-color: var(--mev-color-primitive-white);
}
</style>
