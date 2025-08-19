import type { StoryTemplateFn } from '#storybook/types';
import type { Meta, StoryObj } from '@storybook/vue3';
import merge from 'deepmerge';

type TooltipStoryArgs = {
  label: string;
  shown?: boolean;
};

const src = 'https://i.pravatar.cc/1200?img=11';
const label = 'Иван Иванов';

const StoryTemplate: StoryTemplateFn<TooltipStoryArgs> = ({ args, parameters }) => ({
  render: (args) => {
    return {
      setup() {
        return { args };
      },
      template: `
        <ProfilePhoto
          v-tooltip="{
            content: args.label,
            shown: args.shown
          }"
          src="${src}"
        />
      `
    };
  },
  args: {
    label,
    shown: true,
    ...args
  },
  parameters: {
    ...merge(
      {
        docs: {
          source: {
            transform: (code: string, { args: { label } }: { args: TooltipStoryArgs }) => {
              const tab = '  ';
              return `<ProfilePhoto\n${tab}v-tooltip="${label}"\n${tab}src="${src}"\n/>`;
            }
          }
        }
      },
      parameters
    )
  }
});

// Meta configuration of component stories
const meta: Meta<TooltipStoryArgs> = {
  title: 'Overlays/Tooltip',
  argTypes: {
    label: {
      name: 'Label',
      type: { required: false, name: 'string' },
      description: 'Provides the tooltip text.',
      table: {
        category: 'Story Controls',
        type: { summary: 'string' },
        defaultValue: undefined,
        required: false,
        readonly: false
      },
      control: {
        type: 'text'
      }
    },

    shown: {
      name: 'Shown',
      type: { required: false, name: 'boolean' },
      description: 'Defines whether the tooltip is shown explicitly or not.',
      table: { disable: true },
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {
    actions: {
      disable: true
    },
    docs: {
      description: {
        component: `Tooltip is a small overlay that appears when the user hovers over an element.`
      }
    }
  }
};

// All component stories
type Story = StoryObj<TooltipStoryArgs>;

export const BasicStory: Story = {
  name: 'Basic',
  ...StoryTemplate({
    args: {},
    parameters: {
      docs: {
        description: {
          story: `This is the basic look of a tooltip.`
        }
      }
    }
  })
};

export default meta;
