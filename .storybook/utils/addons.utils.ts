interface StorybookAddons {
  getChannel(): StorybookChannel;
}

interface StorybookChannel {
  on(event: 'globalsUpdated', handler: (payload: GlobalsUpdatedPayload) => void): void;
}

interface GlobalsUpdatedPayload {
  globals: {
    colorScheme: string;
  };
}

export const colorSchemeAddon = (
  addons: StorybookAddons,
  callback: (colorScheme: string) => void = () => {}
) => {
  addons.getChannel().on('globalsUpdated', (payload: { globals: { colorScheme: string } }) => {
    const html = document.documentElement;
    html.classList.remove('light', 'dark');
    html.classList.add(payload.globals.colorScheme);
    callback(payload.globals.colorScheme);
  });
};
