<template>
  <span :class="[$style.root, classList, { [$style.disabled]: disabled }]" @change="handleChange">
    <input
      :id="id"
      :name="name"
      type="checkbox"
      :checked="checked"
      :disabled="disabled || readonly"
    />
    <label :for="id" :class="$style.toggle">
      <span :class="$style.thumb" />
    </label>
    <label v-if="label" :for="id" class="text-script">{{ label }}</label>
  </span>
</template>

<script setup lang="ts">
import { cn } from '#utils/classnames.utils';
import { computed } from 'vue';
import { ToggleDefaultVariants, ToggleVariants } from './Toggle.config';

const props = withDefaults(
  defineProps<{
    id: string;
    name: string;
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    readonly?: boolean;
  }>(),
  {
    label: undefined,
    checked: ToggleDefaultVariants.checked,
    disabled: ToggleDefaultVariants.disabled,
    readonly: ToggleDefaultVariants.readonly
  }
);

const emit = defineEmits<{
  (name: 'change', event: Event): void;
}>();

const handleChange = (event: Event) => {
  if (!props.readonly && !props.disabled) {
    emit('change', event);
  }
};

const classList = computed(() => {
  const { label, id, name, ...classnameProps } = props;
  return cn(ToggleVariants({ ...classnameProps }));
});
</script>

<style module>
.root {
  --thumb-offset: 0.1666666667em;
  --stage-width: calc(var(--mev-dimensions-toggle-thumb) * 2 + var(--thumb-offset) * 2);
  --stage-height: calc(var(--mev-dimensions-toggle-thumb) + var(--thumb-offset) * 2);
}

.root input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.root label {
  cursor: inherit;
}

.root input:not(:checked) ~ .toggle {
  background-color: var(--mev-color-background-gray-weak);
}

.root input:checked ~ .toggle {
  background-color: var(--mev-color-primitive-red50);
}

.root input:checked ~ .toggle .thumb {
  transform: translateX(var(--mev-dimensions-toggle-thumb));
}

.root.disabled input ~ .toggle {
  opacity: 0.5;
}

.toggle {
  cursor: inherit;

  display: inline-flex;

  width: var(--stage-width);
  height: var(--stage-height);
  padding: var(--thumb-offset);
  border-radius: var(--mev-border-radius-full);

  transition: background-color 0.2s ease-in-out;
}

.thumb {
  display: inline-block;

  width: var(--mev-dimensions-toggle-thumb);
  height: var(--mev-dimensions-toggle-thumb);
  border-radius: var(--mev-border-radius-circle);

  background-color: var(--mev-color-background-primary-base);

  transition: transform 0.2s ease-in-out;
}
</style>
