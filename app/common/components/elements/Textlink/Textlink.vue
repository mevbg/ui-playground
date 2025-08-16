<template>
  <span :class="$style.root">
    <slot />
  </span>
</template>

<script setup lang="ts">
//
</script>

<style module>
.root * {
  cursor: pointer;
}

.root :global(.text) {
  display: inline-block;
  color: var(--mev-color-primitive-red-base);
}

.root:hover :global(.text) {
  text-decoration: underline;
}
</style>
