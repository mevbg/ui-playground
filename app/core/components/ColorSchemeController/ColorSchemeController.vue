<template>
  <ConditionalClientOnly :condition="!serverSideSystemScheme">
    <div
      class="mt-300x400 flex flex-wrap justify-center gap-300x400"
      role="listbox"
      :aria-label="$t('LOCL_COLOR_SCHEME')"
    >
      <Button
        v-for="(btn, index) in colorSchemeModes"
        :key="index"
        :variant="(!btn && !colorSchemeMode) || colorSchemeMode === btn ? 'solid' : 'outlined'"
        :label="btn"
        @click="setColorSchemeMode(btn)"
      />
    </div>
  </ConditionalClientOnly>
</template>

<script setup>
const {
  availableModes: colorSchemeModes,
  currentMode: colorSchemeMode,
  serverSideSystemScheme,
  setColorSchemeMode
} = useColorScheme();
</script>
