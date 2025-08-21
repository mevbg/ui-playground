<template>
  <div id="playground" tabindex="-1">
    <HeaderBar :class="$style.header" />

    <main class="z-1 relative" style="height: 200vh">
      <LayoutWrapper>
        <slot />
      </LayoutWrapper>
    </main>
  </div>
</template>

<script setup lang="ts">
//
</script>

<style module>
/* .root {} */

.header {
  position: sticky;
  z-index: 1;
  top: calc(var(--mev-border-width-brand) - 1px);
  border-bottom: 1px solid var(--mev-color-background-primary-base);
}
</style>
