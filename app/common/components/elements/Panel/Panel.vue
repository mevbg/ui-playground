<template>
  <div :class="classList">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '#utils/classnames.utils';
import { PanelDefaultVariants, PanelVariants } from './Panel.config';
import type { PanelVariantProps } from './Panel.config';

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
