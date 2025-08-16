/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = (func: (...args: any[]) => void, timeout: number) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
