import { kebabToTitleCase } from '#utils/strings.utils';
import type Color from 'colorjs.io';

export const getStorybookColorData = (
  groups: Record<string, Record<string, Color>>,
  type: string
) =>
  Object.keys(groups).map((group) => ({
    title: kebabToTitleCase(group),
    items: Object.keys(groups[group] || {})
      .map((item) => {
        const isPrimitiveType = type === 'primitive';
        const isContentType = type === 'content';
        const isBackgroundType = type === 'background';
        const title = kebabToTitleCase(item);
        const cssVar = isPrimitiveType
          ? `--mev-color-${type}-${item}`
          : `--mev-color-${type}-${group}-${item}`;
        const color = groups[group]?.[item];

        if (!color) {
          return null;
        }

        const hex = color.clone().toString({ format: 'hex' }).toUpperCase();
        const okhsl = color
          .clone()
          .to('okhsl')
          .toString({ format: 'okhsl' })
          .replace('color(--okhsl ', 'okhsl(');

        return {
          title,
          cssVar,
          color,
          hex,
          okhsl,
          tailwind: {
            bg: isBackgroundType ? `bg-${group}-${item}` : undefined,
            text: isContentType ? `text-${group}-${item}` : undefined,
            any: isPrimitiveType && `{PREFIX}-${item}`
          }
        };
      })
      .filter((item) => item !== null)
  }));

export const orderColorGroupsByTitle = (data: { title: string }[], order: string[]) => {
  const orderMap = Object.fromEntries(order.map((key: string, index: number) => [key, index]));
  return [...data].sort((a, b) => {
    return (orderMap[a.title] ?? Infinity) - (orderMap[b.title] ?? Infinity);
  });
};
