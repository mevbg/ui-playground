import { capitalize } from '#utils/strings.utils';

export const getLabels = (
  list: (string | number)[],
  parser: (item: string | number) => string,
  none?: string
) => ({
  ...(none ? { undefined: `[ ${none} ]` } : {}),
  ...Object.fromEntries(list.map((item) => [item, parser(item)]))
});

export const capitalizeLabels = (list: (string | number)[], none?: string) =>
  getLabels(list, (item) => capitalize(String(item)), none);

export const getTagWrappedLabels = (list: (string | number)[], none?: string) =>
  getLabels([...list], (item) => `<${String(item)}>`, none);
