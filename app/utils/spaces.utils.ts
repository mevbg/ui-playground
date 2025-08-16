import { BASE_SIZE_UNIT } from '../../design/constants/sizes.constants.js';

export const computedSpace: (key: string) => string = (key) => {
  const [min, max] = key.split('/');

  return `${(BASE_SIZE_UNIT * Number(min)) / 100}px/${(BASE_SIZE_UNIT * Number(max)) / 100}px`;
};
