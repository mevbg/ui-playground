// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import svgLoader from 'vite-svg-loader';
import { PREFIX as prefix } from './app/core/constants/index.js';
import * as generators from './design/configs/index.js';
import { DEFAULT_COLOR_SCHEME } from './design/constants/colors/schemes';
import {
  DEV_BASE_URL,
  DEV_CERTIFICATE_NAME,
  DEV_ENV,
  DEV_HOST_NAME,
  DEV_KEY_NAME,
  DEV_PORT,
  DEV_SSL_PATH
} from './environments/development';
import { PROD_ENV } from './environments/production';
import postcss from './postcss.config.js';

// Get the project root path - go up 2 levels from configs/nuxt/
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '.');

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  app: {
    rootId: 'root'
    // '/' by default
    // baseURL: '/'
  },

  // true by default
  // ssr: true,

  alias: {
    '#root': resolve(projectRoot, '.'),
    '#server': resolve(projectRoot, 'server'),
    '#design': resolve(projectRoot, 'design'),
    '#public': resolve(projectRoot, 'public'),
    '#storybook': resolve(projectRoot, '.storybook'),

    '#core': resolve(projectRoot, 'app/core'),
    '#common': resolve(projectRoot, 'app/common'),
    '#utils': resolve(projectRoot, 'app/utils'),

    '#search': resolve(projectRoot, 'app/modules/search')
  },

  imports: {
    dirs: [
      // Core
      'core/services',
      'core/constants',
      'core/stores',
      // Common
      'common/services',
      'common/constants',
      // Search
      'modules/search/services',
      'modules/search/constants',
      'modules/search/stores'
    ]
  },

  components: {
    dirs: ['core', 'common', 'modules/search'].map((path) => ({
      path: `@/${path}/components`,
      pathPrefix: false
    }))
  },

  modules: [
    '@mevbg/nuxt-kit',
    '@nuxt/devtools',
    '@nuxtjs/i18n',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/sitemap',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/storybook',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    'nuxt-schema-org',
    'nuxt-gtag'
  ],

  css: [
    '#public/assets/tokens/css/all.css',
    '#public/assets/css/font-faces.css',
    '#public/assets/css/viewport-scaler.css',
    '#public/assets/css/icons.css',
    '#public/assets/css/scrollbar.css',
    '#core/assets/styles/main/presets.css',
    '#core/assets/styles/main/scaffolding.css',
    '#core/assets/styles/overwrites/floating-vue.css',
    '#core/assets/styles/overwrites/vue3-toastify.css'
  ],

  mevKit: {
    designEssentials: { buildPath: './public/assets', prefix, generators },
    colorScheme: {
      default: DEFAULT_COLOR_SCHEME
    }
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'bg',
    locales: [
      { code: 'bg', name: 'Bulgarian', iso: 'bg-BG', file: 'bg.ts' }
      // { code: 'en', name: 'English', iso: 'en-US', file: 'en.ts' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'bg',
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: false,
    strategies: 'injectManifest',
    srcDir: '.',
    filename: 'sw.ts',
    injectManifest: {
      globPatterns: ['**/*.{html,css,js,json,png,svg,woff2,ico,webmanifest}'],
      additionalManifestEntries: ['/'].map((url) => ({
        url,
        revision: Date.now().toString()
      }))
    },
    client: {
      installPrompt: true
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  },

  sitemap: {
    sitemaps: {
      //
    }
  },

  appConfig: {
    DEV_ENV,
    PROD_ENV,
    ENV_NAME: process.env.ENV_NAME,
    DOMAIN_NAME: process.env.DOMAIN_NAME,
    HOST_NAME: DEV_ENV ? DEV_HOST_NAME : process.env.HOST_NAME,
    BASE_URL: DEV_ENV ? DEV_BASE_URL : process.env.BASE_URL
  },

  vite: {
    css: {
      modules: {
        localsConvention: 'dashes',
        generateScopedName: !PROD_ENV ? '[folder]__[local]__[hash:base64:5]' : '[hash:base64:5]'
      }
    },

    plugins: [svgLoader()]
  },

  // Prod-related configs
  ...(PROD_ENV ? { gtag: { id: process.env.GTAG_ID } } : {}),

  // Dev-related configs
  sourcemap: !PROD_ENV,

  devtools: {
    enabled: !PROD_ENV,

    timeline: {
      enabled: true
    }
  },

  devServer: {
    host: DEV_HOST_NAME,
    url: `https://${DEV_HOST_NAME}`,
    port: DEV_PORT,
    https: {
      cert: `${DEV_SSL_PATH}/${DEV_CERTIFICATE_NAME}`,
      key: `${DEV_SSL_PATH}/${DEV_KEY_NAME}`
    }
  },

  storybook: {
    host: DEV_HOST_NAME,
    port: 6006,
    https: {
      cert: `${DEV_SSL_PATH}/${DEV_CERTIFICATE_NAME}`,
      key: `${DEV_SSL_PATH}/${DEV_KEY_NAME}`
    }
  },

  stylelint: {
    fix: true,
    lintOnStart: true
  },

  postcss,

  typescript: {}
});
