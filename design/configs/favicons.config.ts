import type { FaviconsGeneratorParams } from '@mevbg/design-essentials-vendor';
import { title, description, version, themeColor, homepage } from '../../package.json';
import { DEV_ENV, DEV_BASE_URL } from '../../environments/development';

const id = DEV_ENV ? `${DEV_BASE_URL}` : homepage;

export const favicons: FaviconsGeneratorParams = {
  id,

  sourcePath: 'app/core/assets/images/site-logo.svg',
  buildPath: 'public/assets',

  appName: title,
  appShortName: title,
  appDescription: description,

  theme_color: themeColor,

  version
};
