<template>
  <div :class="[$style.root, 'inline-flex flex-wrap justify-center gap-x-300x400']">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'InlineList'
});
</script>

<style module>
.root > * {
  position: relative;
  display: inline-block;
}

.root > *:not(:last-child)::after {
  content: '•';

  position: absolute;
  left: calc(100% + calc(var(--mev-size-300x400) / 2));
  transform: translateX(-50%);

  color: var(--mev-color-content-gray-medium);
}
</style>
