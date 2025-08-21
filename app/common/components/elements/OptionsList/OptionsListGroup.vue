<template>
  <div
    ref="listRef"
    role="listbox"
    :aria-label="title"
    :class="$style.root"
    @focusout="handleFocusOut"
  >
    <OptionsListItem
      v-for="(option, index) in options"
      :key="index"
      v-bind="option"
      :tabindex="index === focusedIndex ? 0 : -1"
      role="option"
      @press="emit('press', option)"
    />
  </div>
</template>

<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core';
import { nextTick, ref } from 'vue';
import type { OptionsListItemProps } from './OptionsList.types';
import OptionsListItem from './OptionsListItem.vue';

const props = defineProps<{ title: string; options: OptionsListItemProps[] }>();

const emit = defineEmits<{
  (name: 'press', option: OptionsListItemProps): void;
}>();

const listRef = ref<HTMLElement>();
const focusedIndex = ref(0);

// Check if this list is currently active (has focus)
const isListActive = (): boolean => {
  if (!listRef.value) return false;
  return listRef.value.contains(document.activeElement);
};

// Handle keyboard navigation
onKeyStroke('ArrowDown', (e) => {
  if (props.options.length === 0 || !isListActive()) return;
  e.preventDefault();
  focusedIndex.value = (focusedIndex.value + 1) % props.options.length;
  nextTick(() => {
    focusCurrentItem();
  });
});

onKeyStroke('ArrowUp', (e) => {
  if (props.options.length === 0 || !isListActive()) return;
  e.preventDefault();
  focusedIndex.value = focusedIndex.value === 0 ? props.options.length - 1 : focusedIndex.value - 1;
  nextTick(() => {
    focusCurrentItem();
  });
});

onKeyStroke(['Enter', ' '], (e) => {
  if (props.options.length === 0 || !isListActive()) return;
  e.preventDefault();
  const currentOption = props.options[focusedIndex.value];
  if (currentOption) {
    emit('press', currentOption);
  }
});

// Focus the currently selected item
const focusCurrentItem = () => {
  if (listRef.value) {
    const items = listRef.value.querySelectorAll('[role="option"]');
    const currentItem = items[focusedIndex.value] as HTMLElement;
    if (currentItem) {
      currentItem.focus();
    }
  }
};

// Reset focus index when the entire group loses focus
const handleFocusOut = (_event: FocusEvent) => {
  // Use setTimeout to allow the new focus target to be established
  setTimeout(() => {
    if (listRef.value && !listRef.value.contains(document.activeElement)) {
      focusedIndex.value = 0;
    }
  }, 0);
};
</script>

<style module>
.root {
  & > *:not(:first-child):not(:focus-visible) {
    border-top-color: var(--mev-border-color-gray-weak);
  }
  & > *:focus-visible + *:not(:focus-visible) {
    border-top-color: transparent;
  }

  & > *:not(:first-child) {
    margin-top: calc(var(--mev-border-width-base) * -1);
  }
}
</style>
