import { icons } from '#design/configs/icons.config.js';

type GlyphIconName = keyof typeof icons.list;
const glyphicons = Object.keys(icons.list) as GlyphIconName[];

export { glyphicons, type GlyphIconName };
