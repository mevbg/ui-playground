/** @type {import('tailwindcss').Config} */
import {
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  boxShadow,
  color,
  dimensions,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  opacity,
  size
} from './public/assets/tokens/js/variable.js';

const getColorGroup = (group: 'primitive' | 'content' | 'background') =>
  Object.fromEntries(
    Object.entries(color)
      .filter(([key]) => key.startsWith(group))
      .map(([key, value]) => {
        const simplifiedKey = key.replace(`${group}-`, '');
        const finalKey = simplifiedKey.charAt(0).toLowerCase() + simplifiedKey.slice(1);
        return [finalKey, value];
      })
  );

const primitiveColors = getColorGroup('primitive');
const textColor = getColorGroup('content');
const backgroundColor = getColorGroup('background');

// const textColors = [...Object.keys(color.primitive ?? {}), ...Object.keys(color.content ?? {})];
// const bgColors = [...Object.keys(color.primitive ?? {}), ...Object.keys(color.background ?? {})];
// const borderColors = [...Object.keys(color.primitive ?? {}), ...Object.keys(border.color ?? {})];

export default {
  safelist: [
    //   ...new Set([
    //     ...textColors.map((key) => `text-${key}`),
    //     ...bgColors.map((key) => `bg-${key}`),
    //     ...borderColors.map((key) => `border-${key}`)
    //   ])
  ],
  content: [
    './.storybook/**/*.{tsx,ts}',
    './app/core/**/*.{js,vue,ts}',
    './app/common/**/*.{js,vue,ts}',
    './app/modules/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/error.vue',
    './app/plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'media',
  theme: {
    spacing: size,
    gap: size,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    borderRadius,
    borderWidth,
    borderStyle,
    opacity: {
      '0': '0',
      '100': '1',
      ...Object.fromEntries(
        Object.entries(opacity).map(([key, value]) => [key.replace(/^\$/, ''), value])
      )
    },
    boxShadow,
    colors: {
      current: 'currentColor',
      ...primitiveColors
    },
    extend: {
      textColor,
      backgroundColor,
      borderColor,
      width: dimensions,
      height: dimensions
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  corePlugins: {
    // Disable transform-related utilities to reduce CSS variables
    transform: false,
    translate: false,
    rotate: false,
    skew: false,
    scale: false,

    // Disable filter-related utilities
    filter: false,
    backdropFilter: false,

    // Disable ring utilities
    ringWidth: false,
    ringColor: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,

    // Disable shadow utilities
    // boxShadow: false,

    // Disable gradient utilities
    gradientColorStops: false,

    // Disable backdrop utilities
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,

    // Disable additional utilities that generate CSS variables
    borderSpacing: false,
    touchAction: false,
    scrollSnapType: false,
    fontVariantNumeric: false,
    contain: false
  }
};
