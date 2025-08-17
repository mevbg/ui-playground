<template>
  <NuxtLayout>
    <Text variant="display" class="text-center">{{ $t('LOCL_SITE_TITLE') }}</Text>

    <ConditionalClientOnly :condition="!serverSideSystemScheme">
      <div class="mt-300x400 flex flex-wrap justify-center gap-300x400">
        <Button
          v-for="(btn, index) in colorSchemeModes"
          :key="index"
          :variant="(!btn && !colorSchemeMode) || colorSchemeMode === btn ? 'solid' : 'outlined'"
          :label="btn"
          @click="setColorSchemeMode(btn)"
        />
      </div>
    </ConditionalClientOnly>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  name: 'home',
  layout: 'basic'
});

const {
  availableModes: colorSchemeModes,
  currentMode: colorSchemeMode,
  serverSideSystemScheme,
  setColorSchemeMode
} = useColorScheme();
</script>

<style module>
/* .root {} */
</style>
