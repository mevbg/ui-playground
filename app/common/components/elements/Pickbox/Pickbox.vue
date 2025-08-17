<template>
  <span :class="[$style.root, classList, { [$style.disabled]: disabled }]" @change="handleChange">
    <input :id="id" :name="name" :type="type" :checked="checked" :disabled="disabled || readonly" />
    <label :class="$style.box" :for="id"><CheckSVG /></label>
  </span>
</template>

<script setup lang="ts">
import CheckSVG from '#common/assets/images/checkmark.svg';
import { cn } from '#utils/classnames.utils';
import { computed } from 'vue';
import { PickboxDefaultVariants, PickboxVariants } from './Pickbox.config';

const props = withDefaults(
  defineProps<{
    type: 'checkbox' | 'radio';
    id: string;
    name: string;
    checked?: boolean;
    disabled?: boolean;
    readonly?: boolean;
  }>(),
  {
    checked: PickboxDefaultVariants.checked,
    disabled: PickboxDefaultVariants.disabled,
    readonly: PickboxDefaultVariants.readonly
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
  const { id, name, type, ...classnameProps } = props;
  return cn(PickboxVariants({ ...classnameProps }));
});
</script>

<style module>
.root input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.root input[type='checkbox'] ~ .box {
  border-radius: var(--mev-border-radius-two);
}

.root input[type='radio'] ~ .box {
  border-radius: var(--mev-border-radius-circle);
}

.root input:not(:checked) ~ .box {
  border-color: var(--mev-color-content-gray-medium);
}

.root input:not(:checked) ~ .box > svg {
  opacity: 0;
}

.root input:checked ~ .box {
  border-color: var(--mev-border-color-transparent);
}

.root.disabled input ~ .box {
  opacity: 0.5;
  background-color: var(--mev-color-content-gray-weakest);
}

.box {
  cursor: inherit;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: var(--mev-dimensions-check-input);
  height: var(--mev-dimensions-check-input);
  border-style: var(--mev-border-style-solid);
  border-width: var(--mev-border-width-base);
}

.box > svg {
  width: 100%;
  fill: var(--mev-color-primitive-red50);
}
</style>
