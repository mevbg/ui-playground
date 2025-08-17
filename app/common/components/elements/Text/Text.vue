<template>
  <component :is="tag" :class="[$style.root, classList]">
    <span v-if="$slots.prefix" :class="$style.prefix">
      <slot name="prefix" />
    </span>

    <span class="text">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
import { cn } from '#utils/classnames.utils';
import { capitalize } from '#utils/strings.utils';
import { computed } from 'vue';
import type { TextTag, TextVariantProps } from './Text.config';
import { TextDefaultVariants, TextTypeDefaultTag, TextVariants } from './Text.config';

const props = withDefaults(
  defineProps<{
    variant?: TextVariantProps['variant'];
    as?: TextTag;
  }>(),
  {
    variant: TextDefaultVariants.variant,
    as: undefined
  }
);

const classList = computed(() => cn(TextVariants({ variant: props.variant })));

const tag = computed(
  () =>
    props.as ||
    (props.variant
      ? (TextTypeDefaultTag as Record<string, string>)[capitalize(props.variant)]
      : null) ||
    'span'
);
</script>

<style module>
.root:has(.prefix) {
  --alignment-height: calc(1em * var(--mev-line-height-120));

  display: inline-flex;
  gap: 0.5em;
  line-height: var(--mev-line-height-120);
}

.root:is(label):has(input:not([disabled])) {
  cursor: pointer;
  user-select: none;
}

.root:is(p) {
  margin: 0;
}

.root:is(strong:global(.text-body)) {
  font-family: var(--mev-font-family-apparat-medium);
}

.prefix {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  height: var(--alignment-height);
}
</style>
