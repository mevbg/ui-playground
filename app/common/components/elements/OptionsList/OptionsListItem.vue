<template>
  <span role="option" :class="classList" @click="handlePress">
    <span class="relative block px-400x500 py-150x200">
      <CheckSVG :class="$style.checkmark" />
      {{ text }}
      <ChevronSVG v-if="options?.length" :class="$style.chevron" />
    </span>
  </span>
</template>

<script setup lang="ts">
import CheckSVG from '#common/assets/images/checkmark.svg';
import ChevronSVG from '#common/assets/images/chevron.svg';
import { cn } from '#utils/classnames.utils';
import { computed, useCssModule } from 'vue';
import type { OptionsListItemProps } from './OptionsList.types';
import { OptionsListItemDefaultVariants, OptionsListItemVariants } from './OptionsListItem.config';

const props = withDefaults(defineProps<OptionsListItemProps>(), {
  selected: OptionsListItemDefaultVariants.selected,
  disabled: OptionsListItemDefaultVariants.disabled,
  options: undefined
});

const emit = defineEmits<{
  (name: 'press', event: MouseEvent): void;
}>();

const handlePress = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('press', event);
  }
};

const styles = useCssModule();
const classList = computed(() => {
  const { text, ...classnameProps } = props;
  return cn(
    styles.root,
    OptionsListItemVariants({ ...classnameProps }),
    classnameProps.selected && styles.selected,
    classnameProps.disabled && styles.disabled,
    classnameProps.options?.length && styles.hasOptions
  );
});
</script>

<style module>
.root {
  --list-item-bg-red: color-mix(
    in srgb,
    var(--mev-color-background-red-base) calc(var(--mev-opacity-10) * 100%),
    transparent calc(100% - calc(var(--mev-opacity-10) * 100%))
  );

  --list-item-bg-black: color-mix(
    in srgb,
    var(--mev-color-background-primary-inverted) calc(var(--mev-opacity-10) * 100%),
    transparent calc(100% - calc(var(--mev-opacity-10) * 100%))
  );
}

.root,
.root > span {
  position: relative;
}

/* Checkmark */

.checkmark {
  position: absolute;
  top: 50%;
  left: var(--mev-size-100x150);
  transform: translateY(-50%);

  width: 1.33em;

  fill: var(--mev-color-primitive-red50);
}

.root:not(.hasOptions):active .checkmark,
.selected .checkmark {
  opacity: 1;
}

.checkmark,
.selected:not(.hasOptions):active .checkmark {
  opacity: 0;
}

/* Chevron */

.chevron {
  position: absolute;
  top: 50%;
  right: var(--mev-size-100x150);
  transform: translateY(-50%);

  width: 1.33em;

  fill: var(--mev-color-primitive-red50);
}

/* Selected state */

.selected:not(.hasOptions):active,
.selected:not(.hasOptions):active > span {
  background-color: transparent;
}

/* Focus state */

.root:focus-visible {
  outline: 1px solid var(--mev-color-primitive-red50);
  outline-offset: 0;
}

/* Disabled state */

.disabled svg {
  fill: var(--mev-color-content-primary-base);
}

/* Hover state */

@media all and (hover: hover) {
  .root:hover > span {
    background-color: var(--list-item-bg-black);
  }
}

/* Active state */

@media all {
  .root:active > span {
    background-color: var(--list-item-bg-red);
  }
}
</style>
