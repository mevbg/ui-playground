<template>
  <NuxtLayout v-if="error" name="basic">
    <div class="text-center">
      <template v-if="ENV_NAME !== 'development'">
        <Text variant="display">{{
          error.statusCode === 404
            ? $t('LOCL_THE_PAGE_DOES_NOT_EXIST')
            : $t('LOCL_A_SYSTEM_ERROR_OCCURRED')
        }}</Text>

        <p>
          Проверете URL адреса, или
          <nuxt-link :to="{ name: 'home' }">
            <label>започнете отначало</label>
          </nuxt-link>
        </p>
      </template>

      <template v-else>
        <Text variant="display" class="text-center">{{ error.statusCode }}</Text>
        <p>{{ error.statusMessage || error.message }}</p>
      </template>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { ENV_NAME } = useAppConfig();
const error = useError();
</script>
