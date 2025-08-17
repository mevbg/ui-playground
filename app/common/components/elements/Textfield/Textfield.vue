<template>
  <div :class="[$style.root, 'relative inline-flex']">
    <GlyphIcon v-if="type === 'search'" :class="$style.icon" name="search" />
    <component
      v-bind="$attrs"
      :is="tag"
      :type="type !== 'textarea' ? type : undefined"
      :class="[classList, $style.field]"
    />
  </div>
</template>

<script setup lang="ts">
import { cn } from '#utils/classnames.utils';
import { computed, useAttrs } from 'vue';
import type { TextfieldVariantProps } from './Textfield.config';
import { TextfieldDefaultVariants, TextfieldVariants } from './Textfield.config';

defineOptions({
  inheritAttrs: false
});

const attrs = useAttrs();

const props = withDefaults(
  defineProps<{
    type?: TextfieldVariantProps['type'];
    centered?: boolean;
    stretched?: boolean;
  }>(),
  {
    type: TextfieldDefaultVariants.type,
    placeholder: undefined
  }
);

const tag = computed(() => (props.type === 'textarea' ? 'textarea' : 'input'));

const classList = computed(() =>
  cn(TextfieldVariants({ ...props, disabled: attrs.disabled as boolean }))
);
</script>

<style module>
/* .root {} */

.field {
  border-radius: 0; /* removes the rounded corners in iOS Safari */
}

.field:not(:first-child) {
  padding-left: calc((var(--mev-size-075x100) * 2) + 1em);
}

.icon {
  position: absolute;
  top: calc(50% - 0.05em);
  left: var(--mev-size-075x100);
  transform: translateY(-50%);

  color: currentColor;
}
</style>
