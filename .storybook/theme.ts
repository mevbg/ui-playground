import { create, type ThemeVarsPartial } from 'storybook/theming';
import { color } from '../public/assets/tokens/js/static.js';

// https://storybook.js.org/docs/configure/user-interface/theming
export default (props: ThemeVarsPartial) => {
  return create({
    // Typography
    fontBase: 'Apparat, system-ui, sans-serif',
    fontCode: 'ui-monospace, monospace',

    // Brand
    brandImage: '/assets/android-chrome-512x512.png',
    brandTitle: 'Playground Design System',
    brandUrl: '/',
    brandTarget: '_self',

    // General colors
    colorPrimary: color.primitiveRed50, // text color of selected item in the context menus of the manager toolbar
    colorSecondary: color.primitiveRed50, // highlight color of selected items on the manager panel

    // UI
    // appBg: '', // background color of the manager panel (the sidebar and around the preview)
    // appContentBg: '', // content panels below the Controls, Actions, Accessibility, Mobile and HTML tabs
    // appPreviewBg: '',
    // appBorderColor: '',
    appBorderRadius: 0,

    // Text colors
    // textColor: '',
    // textInverseColor: '',

    // Toolbar default and active colors
    // barTextColor: '',
    // barSelectedColor: '',
    barHoverColor: color.primitiveRed50,
    // barBg: '',

    // Form colors
    // inputBg: '',
    // inputBorder: '',
    // inputTextColor: '',
    inputBorderRadius: 3,

    ...props
  });
};
