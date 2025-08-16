<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Blank'
});
</script>

<style module>
/* .root {} */
</style>
