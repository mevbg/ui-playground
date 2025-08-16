<template>
  <span :class="classList" @click="handleClick">
    {{ label }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '#utils/classnames.utils';
import { ChipDefaultVariants, ChipVariants } from './Chip.config';

const props = withDefaults(
  defineProps<{
    label: string;
    selected?: boolean;
    readonly?: boolean;
  }>(),
  {
    selected: ChipDefaultVariants.selected,
    readonly: ChipDefaultVariants.readonly
  }
);

const emit = defineEmits<{
  (name: 'click', event: MouseEvent): void;
}>();

const handleClick = (event: MouseEvent) => {
  if (!props.readonly) {
    emit('click', event);
  }
};

const classList = computed(() => {
  const { label, ...classnameProps } = props;
  return cn(ChipVariants({ ...classnameProps }));
});
</script>
