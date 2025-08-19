<template>
  <VitePwaManifest />
  <NuxtPage />
</template>

<script setup>
import { PREFIX } from '#core/constants';
import { homepage, themeColor } from '#root/package.json';
import { useI18n } from 'vue-i18n';

const { DEV_ENV, PROD_ENV, BASE_URL } = useAppConfig();
const { t, locale } = useI18n();
const { className: colorSchemeClassName } = useColorScheme();
const { classes: clientClasses } = useUserAgentData();

useHead({
  title: `${t('LOCL_SITE_DESCRIPTION')} • ${t('LOCL_SITE_TITLE')}`,

  htmlAttrs: {
    lang: locale,
    class: computed(() => [PREFIX, colorSchemeClassName.value, ...clientClasses].join(' '))
  },

  templateParams: {
    schemaOrg: {
      host: BASE_URL
    }
  },

  meta: useMetaData({
    locale,
    homepage,
    themeColor,
    robots: PROD_ENV,
    baseUrl: BASE_URL,
    siteTitle: t('LOCL_SITE_TITLE'),
    siteDescription: t('LOCL_SITE_DESCRIPTION'),
    siteKeywords: t('LOCL_SITE_KEYWORDS'),
    siteOwner: t('LOCL_SITE_OWNER'),
    siteImage: `${BASE_URL}/cover.png?hash=${Date.now()}`,
    googleSiteVerification: 'jr3n_yFnOFuafBJ18nT_PRWomgZCckVD3wNyPMLe02o'
  }),

  link: useHeadLinks()
});

useSchemaOrg([
  defineOrganization({
    name: t('LOCL_SITE_OWNER')
  }),
  defineWebSite({
    name: t('LOCL_SITE_TITLE'),
    description: t('LOCL_SITE_DESCRIPTION')
  }),
  defineWebPage()
]);

useNetworkListener({
  offlineMessage: t('LOCL_INTERNET_IS_MISSING'),
  onlineMessage: t('LOCL_INTERNET_IS_BACK')
});

if (DEV_ENV) {
  onMounted(() => {
    document.addEventListener('focusin', (event) => {
      console.info('New focused element:', event.target);
    });
  });
}
</script>
