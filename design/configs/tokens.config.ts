import type { ColorSchemeMethod, ColorSchemeType, PlatformType, TokensGeneratorParams } from "@mevbg/design-essentials-vendor";
import { DEFAULT_COLOR_SCHEME } from '../constants/colors/schemes/index.js';

export const tokens: TokensGeneratorParams = {
  sourcePath: './design/tokens/**/index.js',
  platforms: ['css', 'js'] as PlatformType[],
  colorScheme: {
    default: DEFAULT_COLOR_SCHEME as ColorSchemeType,
    method: 'class' as ColorSchemeMethod
  }
};
