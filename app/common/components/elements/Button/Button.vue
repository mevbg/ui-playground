<template>
  <button :class="classList" :disabled="disabled || loading" @click="handleClick">
    <GlyphIcon v-if="iconPrefix" class="mr-100x150" :name="iconPrefix" />
    <Text variant="button" :class="['truncate', loading && 'invisible']">{{ label }}</Text>
    <GlyphIcon v-if="iconSuffix" class="ml-100x150" :name="iconSuffix" />
    <span v-if="loading" :class="$style.loading">
      <Preloader class="text-current" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import { cn } from '#utils/classnames.utils';
import { ButtonDefaultVariants, ButtonVariants } from './Button.config';
import type { ButtonVariantProps } from './Button.config';
import type { GlyphIconName } from '#common/components/elements/GlyphIcon/GlyphIcon.config';

const props = withDefaults(
  defineProps<{
    label: string;
    iconPrefix?: GlyphIconName;
    iconSuffix?: GlyphIconName;
    variant?: ButtonVariantProps['variant'];
    size?: ButtonVariantProps['size'];
    disabled?: boolean;
    loading?: boolean;
    stretched?: boolean;
  }>(),
  {
    variant: ButtonDefaultVariants.variant,
    size: ButtonDefaultVariants.size,
    stretched: ButtonDefaultVariants.stretched,
    iconPrefix: undefined,
    iconSuffix: undefined
  }
);

const emit = defineEmits<{
  (name: 'click', event: MouseEvent): void;
}>();

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
const styles = useCssModule();

const classList = computed(() => {
  const { label, ...classnameProps } = props;
  return cn(styles.root, ButtonVariants({ ...classnameProps }));
});
</script>

<style module>
.root {
  max-width: 300px;

  & [data-i] {
    color: currentColor;
  }
}

.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
