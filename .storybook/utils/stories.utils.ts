import { capitalize } from '#utils/strings.utils';

export const getLabels = (list: (string | number)[], parser: (item) => string, none?: string) => ({
  ...(none ? { null: `[ ${none} ]` } : {}),
  ...Object.fromEntries(list.map((item) => [item, parser(item)]))
});

export const capitalizeLabels = (list: (string | number)[], none?: string) =>
  getLabels(list, (item) => capitalize(item), none);

export const getTagWrappedLabels = (list: (string | number)[], none?: string) =>
  getLabels([...list], (item) => `<${item}>`, none);
