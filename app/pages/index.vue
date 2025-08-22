<template>
  <NuxtLayout>
    <Text variant="display" class="text-center">{{ $t('LOCL_SITE_TITLE') }}</Text>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  name: 'home',
  layout: 'basic'
});
</script>
