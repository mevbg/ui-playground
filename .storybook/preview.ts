import { floatingVueDefaultConfig, toastifyDefaultConfig } from '@mevbg/nuxt-kit/configs';

import useUserAgentData from '#root/app/core/services/useUserAgentData';
import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import FloatingVue from 'floating-vue';
import { createPinia } from 'pinia';
import { addons } from 'storybook/preview-api';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import type { Component } from 'vue';
import { onMounted } from 'vue';
import { createI18n } from 'vue-i18n';
import Vue3Toastify from 'vue3-toastify';
import LayoutWrapper from '../app/common/components/wrappers/LayoutWrapper/LayoutWrapper.vue';
import { toPascalCase } from '../app/utils/strings.utils';
import bg from '../i18n/locales/bg';
import en from '../i18n/locales/en';
import { color } from '../public/assets/tokens/js/variable.js';
import { colorSchemeAddon } from './utils/addons.utils';

// -------------------------| Styles
import 'floating-vue/dist/style.css';
import 'vue3-toastify/dist/index.css';
import '../app/core/assets/styles/main/presets.css';
import '../app/core/assets/styles/main/scaffolding.css';
import '../app/core/assets/styles/main/tailwind.css';
import '../app/core/assets/styles/overwrites/floating-vue.css';
import '../app/core/assets/styles/overwrites/vue3-toastify.css';
import './preview/styles/sbdocs.css';
import './preview/styles/scaffolding.css';

// -------------------------| Color scheme
const colorScheme =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
colorSchemeAddon(addons);

// -------------------------| Vue configuration
const i18n = createI18n({
  legacy: false,
  locale: 'bg',
  fallbackLocale: 'bg',
  messages: {
    en,
    bg
  }
});
const pinia = createPinia();
setup((app) => {
  const modules: Record<string, { default: Component }> = import.meta.glob(
    '../app/common/components/**/*.vue',
    { eager: true }
  );
  app.use(i18n);
  app.use(pinia);
  app.use(FloatingVue, floatingVueDefaultConfig);
  app.use(Vue3Toastify, toastifyDefaultConfig);
  Object.entries(modules).forEach(([path, module]) => {
    const component = module.default;
    const filename = path.split('/').pop()?.replace('.vue', '') || 'Unknown';
    const name = component.name || toPascalCase(filename);
    app.component(name, component);
  });
});

// -------------------------| Preview configuration
const backgrounds = Object.fromEntries(
  Object.entries(color)
    .filter(([key]) => key.startsWith('background'))
    .map(([key, value]) => [key.replace('background-', 'bg-'), value])
);
function transformColorMap(colorMap) {
  const toCamelCase = (str) =>
    str
      .replace(/:|-/g, '')
      .split(' ')
      .map((word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join('');

  const result = {};

  for (const [name, value] of Object.entries(colorMap)) {
    const key = toCamelCase(name);
    result[key] = { name, value };
  }

  return result;
}

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (/*story, { title, name }*/) => {
      const { classes: clientClasses } = useUserAgentData();
      onMounted(() => {
        document.documentElement.classList.add('playground', ...clientClasses);
        document.body.classList.add('sb-unstyled');
      });

      const template = `
        <div id="playground">
          <LayoutWrapper class="flex justify-center py-050x050">
            <story />
          </LayoutWrapper>
        </div>
      `;

      return {
        components: { LayoutWrapper },
        template
      };
    }

    // Documentation here:
    // https://storybook.js.org/addons/storybook-vue3-router
    // vueRouter(routes)
  ],

  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: 'shown' }, // start with the source open
      source: { type: 'dynamic' } // forces the raw source code (rather than the rendered JSX).
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },

    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Introduction',
          ['Welcome'],
          'Documentation',
          ['Responsive Design'],
          'Design Tokens',
          [
            'Color',
            ['Primitive', 'Contextual'],
            'Typography',
            ['Font Family', 'Font Size', 'Font Weight', 'Line Height', 'Letter Spacing'],
            'Iconography',
            'Space',
            ['Padding', 'Margin'],
            'Border',
            ['Border Width', 'Border Color', 'Border Radius'],
            'Shadow'
          ],
          'Common Elements',
          'Overlays',
          ['Tooltip', 'Popover', 'Modal'],
          'Module Components',
          ['Search'],
          '*'
        ]
      }
    },

    // [ Accessibility ]
    // https://storybook.js.org/docs/writing-tests/accessibility-testing
    a11y: {
      context: 'body',
      config: {},
      options: {},
      manual: false
    },

    // [ Backgrounds ]
    // https://storybook.js.org/docs/essentials/backgrounds
    backgrounds: {
      options: transformColorMap(backgrounds)
    },

    // [ Viewport ]
    // https://storybook.js.org/docs/essentials/viewport
    viewport: {
      options: INITIAL_VIEWPORTS
    }
  },

  globalTypes: {
    colorScheme: {
      name: 'Color Scheme',
      defaultValue: colorScheme,
      description: 'Change the color scheme',
      toolbar: {
        // The label to show for this toolbar item
        // title: 'Color Scheme',
        icon: colorScheme,
        // Array of plain string values or MenuItem shape (see below)
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' }
        ],
        // Change title based on selected value
        dynamicTitle: true
      }
    }
  }
};

// -------------------------| Export
export default preview;
