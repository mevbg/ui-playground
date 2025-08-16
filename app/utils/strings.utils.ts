export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const upperCaseToKebabCase = (str: string) =>
  str
    .split('')
    .map((letter, idx) => {
      // Check if it's an uppercase letter (not a number or symbol)
      return /[A-Z]/.test(letter) ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}` : letter;
    })
    .join('');

export const upperCaseToCamelCase = (str: string) =>
  str.toLowerCase().replace(/_([a-z0-9])/g, (match, letter) => letter.toUpperCase());

export const toTitleCase = (str: string) =>
  str
    .toLowerCase()
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const kebabToTitleCase = (str: string) =>
  str
    .toLowerCase()
    .split('-')
    .map((word) => capitalize(word))
    .join(' ');

export const toPascalCase = (input: string): string =>
  input
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

export const toKebabCase = (str: string) => str.replace(/([A-Z])/g, '-$1').toLowerCase();
