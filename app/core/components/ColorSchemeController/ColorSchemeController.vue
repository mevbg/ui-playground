<template>
  <ConditionalClientOnly :condition="!serverSideSystemScheme">
    <VDropdown ref="dropdown" :class="$style.dropdown">
      <ColorSchemeButton
        v-tooltip="$t('LOCL_COLOR_SCHEME_MODE_CHANGE')"
        :label="$t('LOCL_COLOR_SCHEME_MODE_CHANGE')"
      />

      <!-- This will be the content of the popover -->
      <template #popper>
        <div
          class="flex flex-wrap justify-center gap-300x400"
          role="listbox"
          :aria-label="$t('LOCL_COLOR_SCHEME_MODES')"
        >
          <OptionsListGroup
            :title="$t('LOCL_COLOR_SCHEME_MODES')"
            :options="options"
            @press="handlePress"
          />
        </div>
      </template>
    </VDropdown>
  </ConditionalClientOnly>
</template>

<script setup lang="ts">
import type { OptionsListItemProps } from '#common/components/elements/OptionsList/OptionsList.types';
import type { ColorSchemeKey } from '@mevbg/nuxt-kit';
import type { Dropdown } from 'floating-vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const {
  availableModes: colorSchemeModes,
  currentMode: colorSchemeMode,
  serverSideSystemScheme,
  setColorSchemeMode
} = useColorScheme();

const dropdown = ref<InstanceType<typeof Dropdown>>();

const options = computed<OptionsListItemProps[]>(() =>
  colorSchemeModes.value.map((mode) => ({
    text: t(`LOCL_COLOR_SCHEME_MODE_${mode.toUpperCase()}`),
    value: mode,
    selected: colorSchemeMode.value === mode
  }))
);

const handlePress = (option: OptionsListItemProps) => {
  setColorSchemeMode(option.value as ColorSchemeKey);
  dropdown.value?.hide();
};
</script>

<style module>
.dropdown {
  line-height: 0;
}
</style>
