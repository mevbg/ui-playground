import { addons } from 'storybook/manager-api';
import projectTheme from './theme';
import { colorSchemeAddon } from './utils/addons.utils';

addons.register('ColorSchemeAddon', () => {
  colorSchemeAddon(addons, (colorScheme) => {
    // Optional: Configure Storybook manager settings
    // https://storybook.js.org/docs/configure/user-interface/features-and-behavior
    addons.setConfig({
      // isFullscreen: false,
      // showNav: true,
      // showPanel: true,
      // panelPosition: 'bottom',
      // enableShortcuts: true,
      // showToolbar: true,
      theme: projectTheme({ base: colorScheme as 'light' | 'dark' }),
      // selectedPanel: 'storybook/html/panel',
      initialActive: 'sidebar',
      sidebar: {
        showRoots: true,
        collapsedRoots: ['design-tokens', 'common-elements', 'overlays', 'module-components']
      }
      // toolbar: {
      // title: { hidden: false },
      // zoom: { hidden: false },
      // eject: { hidden: false },
      // copy: { hidden: false },
      // fullscreen: { hidden: false },
      // }
    });
  });
});
