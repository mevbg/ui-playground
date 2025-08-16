import { capitalize } from './strings.utils';

export function flattenObject(obj: Record<string, unknown>, prefix = '', separator = ': ') {
  const flattened: Record<string, unknown> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = prefix
        ? `${capitalize(prefix)}${separator}${capitalize(key)}`
        : capitalize(key);

      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        // Recursively flatten nested objects
        Object.assign(flattened, flattenObject(obj[key], newKey, separator));
      } else {
        // Add primitive values directly
        flattened[newKey] = obj[key];
      }
    }
  }

  return flattened;
}

export function flattenNestedTokens(obj: Record<string, unknown>) {
  const flattened: Record<string, unknown> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];

      // If the current object has a direct "value" property, keep it as-is
      if (
        value &&
        typeof value === 'object' &&
        Object.prototype.hasOwnProperty.call(value, 'value')
      ) {
        flattened[key] = value;
      }
      // If it's a nested object without a direct "value", flatten it
      else if (value && typeof value === 'object' && !Array.isArray(value)) {
        for (const nestedKey in value) {
          if (Object.prototype.hasOwnProperty.call(value, nestedKey)) {
            // Combine parent key with nested key in camelCase
            const combinedKey = key + capitalize(nestedKey);
            flattened[combinedKey] = value[nestedKey];
          }
        }
      }
      // For non-object values, keep them as-is
      else {
        flattened[key] = value;
      }
    }
  }

  return flattened;
}
