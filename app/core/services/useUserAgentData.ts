import * as clientInfo from 'mobile-device-detect';

type ClientInfo = typeof clientInfo & { default: Record<string, string | boolean> };

export default function useUserAgentData() {
  const { default: defaultInfo, deviceDetect, ...data } = clientInfo as ClientInfo;

  const classes: string[] = Object.keys(data).filter(
    (key) =>
      typeof (data as unknown as Record<string, string | boolean>)[key] === 'boolean' &&
      (data as unknown as Record<string, string | boolean>)[key]
  );

  return { data, classes };
}
