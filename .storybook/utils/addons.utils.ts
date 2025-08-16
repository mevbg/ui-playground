export const colorSchemeAddon = (addons, callback: (colorScheme: string) => void = () => {}) => {
  addons.getChannel().on('globalsUpdated', (payload) => {
    const html = document.documentElement;
    html.classList.remove('light', 'dark');
    html.classList.add(payload.globals.colorScheme);
    callback(payload.globals.colorScheme);
  });
};
