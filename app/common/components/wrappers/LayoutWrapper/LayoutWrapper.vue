<template>
  <div :class="[$style.root, 'w-full', 'px-200x600', 'mx-auto']">
    <slot />
  </div>
</template>

<style module>
.root {
  max-width: var(--mev-breakpoint-layout-maximum);
}
</style>
