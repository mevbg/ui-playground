<template>
  <div :class="classList">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '#utils/classnames.utils';
import { computed } from 'vue';
import type { PanelVariantProps } from './Panel.config';
import { PanelDefaultVariants, PanelVariants } from './Panel.config';

const props = withDefaults(
  defineProps<{
    background?: PanelVariantProps['background'];
    rounding?: PanelVariantProps['rounding'];
    shadow?: PanelVariantProps['shadow'];
  }>(),
  {
    background: PanelDefaultVariants.background,
    rounding: PanelDefaultVariants.rounding,
    shadow: PanelDefaultVariants.shadow
  }
);

const classList = computed(() => cn(PanelVariants({ ...props })));
</script>
