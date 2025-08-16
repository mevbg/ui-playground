<template>
  <Panel rounding="twelve" :class="$style.root">
    <iframe
      :src="src"
      width="100%"
      height="100%"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />

    <span v-if="exactLocation" :class="$style.button">
      <Button variant="floating" :label="$t('LOCL_LOOK_ON_THE_MAP')" @click="openInNewTab" />
    </span>
  </Panel>
</template>

<script setup lang="ts">
defineOptions({
  name: 'LocationMap'
});

const props = defineProps<{
  src: string;
  exactLocation?: boolean;
}>();

const openInNewTab = () => {
  window.open(props.src, '_blank');
};
</script>

<style module>
.root {
  position: relative;
  overflow: hidden;
  aspect-ratio: 8 / 3;
  width: 100%;
}

.button {
  position: absolute;
  bottom: var(--mev-size-250x300);
  left: 50%;
  transform: translateX(-50%);
}
</style>
