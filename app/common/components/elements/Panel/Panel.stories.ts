import type { StoryTemplateFn } from '#storybook/types';
import { capitalizeLabels } from '#storybook/utils';
import type { Meta, StoryObj } from '@storybook/vue3';
import merge from 'deepmerge';
import { PanelDefaultVariants, PanelStyles } from './Panel.config';
import Panel from './Panel.vue';

type PanelBackgrounds = keyof typeof PanelStyles.background;
type PanelRoundings = keyof typeof PanelStyles.rounding;
type PanelShadows = keyof typeof PanelStyles.shadow;

const backgrounds = Object.keys(PanelStyles.background) as PanelBackgrounds[];
const roundings = Object.keys(PanelStyles.rounding) as PanelRoundings[];
const shadows = Object.keys(PanelStyles.shadow) as PanelShadows[];

type PanelStoryArgs = {
  defaultSlot?: unknown;
} & InstanceType<typeof Panel>['$props'];

const StoryTemplate: StoryTemplateFn<PanelStoryArgs> = ({ args, parameters, globals = {} }) => ({
  render: (args) => {
    return {
      components: { Panel },
      setup() {
        return { args };
      },
      template: `
        <Panel 
          style="min-width: 280px;
          min-height: 360px;"
          :background="args.background"
          :rounding="args.rounding"
          :shadow="args.shadow"
        />
      `
    };
  },
  args: {
    ...PanelDefaultVariants,
    ...args
  },
  parameters: {
    ...merge(
      {
        docs: {
          source: {
            transform: (
              code: string,
              { args: { background, rounding, shadow } }: { args: PanelStoryArgs }
            ) =>
              `<Panel${background !== PanelDefaultVariants.background ? ` background="${background}"` : ''}${rounding !== PanelDefaultVariants.rounding ? ` rounding="${rounding}"` : ''}${shadow !== PanelDefaultVariants.shadow ? ` shadow="${shadow}"` : ''}>Content of the panel</Panel>`
          }
        }
      },
      parameters
    )
  },
  globals: {
    ...globals
  }
});

// Meta configuration of component stories
const meta: Meta<PanelStoryArgs> = {
  title: 'Common Elements/Panel',
  component: Panel,
  argTypes: {
    // Props
    background: {
      name: 'Background',
      type: { required: false, name: 'string' },
      description: 'Defines the background color of the panel.',
      table: {
        category: 'Props',
        type: { summary: backgrounds.join('|') },
        defaultValue: { summary: PanelDefaultVariants.background },
        required: false,
        readonly: false
      },
      control: {
        type: 'select',
        labels: capitalizeLabels(backgrounds)
      },
      options: backgrounds
    },
    rounding: {
      name: 'Rounding',
      type: { required: false, name: 'string' },
      description: 'Defines the border-radius of the panel.',
      table: {
        category: 'Props',
        type: { summary: roundings.join('|') },
        defaultValue: { summary: PanelDefaultVariants.rounding },
        required: false,
        readonly: false
      },
      control: {
        type: 'select',
        labels: capitalizeLabels(roundings)
      },
      options: roundings
    },
    shadow: {
      name: 'Shadow',
      type: { required: false, name: 'string' },
      description: 'Defines the box-shadow of the panel.',
      table: {
        category: 'Props',
        type: { summary: shadows.join('|') },
        defaultValue: { summary: PanelDefaultVariants.shadow },
        required: false,
        readonly: false
      },
      control: {
        type: 'select',
        labels: capitalizeLabels(shadows)
      },
      options: shadows
    },

    // Slots
    defaultSlot: {
      name: '<slot />',
      control: {
        type: undefined
      },
      description: 'Default slot for the content of the panel.',
      table: {
        category: 'Slots',
        type: undefined,
        defaultValue: undefined
      }
    }
  },
  parameters: {
    actions: {
      disable: true
    },
    docs: {
      description: {
        component: `This component is a building block used to display a panel.`
      }
    }
  }
};

// All component stories
type Story = StoryObj<PanelStoryArgs>;

export const BasicStory: Story = {
  name: 'Base-colored (basic)',
  ...StoryTemplate({
    args: {},
    globals: {
      backgrounds: { grid: true }
    },
    parameters: {
      docs: {
        description: {
          story: `This is the basic look of a panel.`
        }
      }
    }
  })
};

export const GrayStory: Story = {
  name: 'Gray-colored',
  ...StoryTemplate({
    args: {
      background: 'gray'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the panel with a gray background.`
        }
      }
    }
  })
};

export const Rounded8Story: Story = {
  name: '8px-rounded',
  ...StoryTemplate({
    args: {
      background: 'gray',
      rounding: 'eight'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the panel with a border-radius of 8px.`
        }
      }
    }
  })
};

export const Rounded12Story: Story = {
  name: '12px-rounded',
  ...StoryTemplate({
    args: {
      background: 'gray',
      rounding: 'twelve'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the panel with a border-radius of 12px.`
        }
      }
    }
  })
};

export const Shadow8Story: Story = {
  name: '8px-shadow',
  ...StoryTemplate({
    args: {
      rounding: 'eight',
      shadow: 'eight'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the panel with a box-shadow of 8px.`
        }
      }
    }
  })
};

export const Shadow12Story: Story = {
  name: '12px-shadow',
  ...StoryTemplate({
    args: {
      rounding: 'twelve',
      shadow: 'twelve'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the panel with a box-shadow of 12px.`
        }
      }
    }
  })
};

export default meta;
