import { BASE_FONT_SIZE } from './design/constants/typography.constants.js';

export default {
  plugins: {
    'postcss-preset-env': {},
    'postcss-custom-media': {},
    'postcss-pxtorem': {
      unitPrecision: 5,
      propList: ['*', '!border', '!border-top', '!border-right', '!border-bottom', '!border-left'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      rootValue: BASE_FONT_SIZE
    },
    'postcss-import': {},
    'postcss-combine-media-query': {},
    'postcss-combine-duplicated-selectors': {},
    'postcss-flexbugs-fixes': {},
    'postcss-discard-comments': {
      removeAll: true
    },
    tailwindcss: {}
  }
};
