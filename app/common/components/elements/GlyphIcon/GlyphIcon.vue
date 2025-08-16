<template>
  <span :title="title" :class="[$style.root, 'font-icon']" :style="{ fontSize: size }">
    <i :data-i="name" />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { GlyphIconName } from './GlyphIcon.config';

defineOptions({
  name: 'GlyphIcon'
});

const props = defineProps<{
  name: GlyphIconName;
  title?: string;
  size?: string;
}>();

const size = computed(() => props.size || '1em');
</script>

<style module>
.root {
  display: inline-block;
  aspect-ratio: 1;
  width: 1em;
}

.root > i {
  width: inherit;
  height: inherit;
}
</style>
