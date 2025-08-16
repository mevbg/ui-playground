<template>
  <picture v-tooltip="title" :class="[$style.root, classList]">
    <img class="block aspect-square object-cover" :src="src" :alt="alt" />
  </picture>
</template>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import { cn } from '#utils/classnames.utils';
import type { ProfilePhotoVariantProps } from './ProfilePhoto.config';
import { ProfilePhotoVariants } from './ProfilePhoto.config';

defineOptions({
  name: 'ProfilePhoto'
});

const props = withDefaults(
  defineProps<{
    src: string;
    size?: ProfilePhotoVariantProps['size'];
    alt?: string;
    title?: string;
  }>(),
  {
    size: undefined,
    alt: undefined,
    title: undefined
  }
);

const styles = useCssModule();
const classList = computed(() => cn(styles.root, ProfilePhotoVariants({ size: props.size })));
</script>

<style module>
.root {
  width: 2em;
  height: 2em;
}
</style>
