import type { Parameters, Preview } from '@storybook/vue3';
import type { Component } from 'vue';

export type StoryTemplateConfig<StoryArgs> = {
  args: Partial<StoryArgs>;
  parameters: Parameters;
  globals?: Preview['globalTypes'];
};

export type StoryTemplateFn<StoryArgs> = (config: StoryTemplateConfig<StoryArgs>) => {
  render: (args: StoryArgs) => {
    components?: Record<string, Component>;
    setup: () => Record<string, unknown>;
    template: string;
  };
  args: StoryArgs;
  parameters: Parameters;
};
