import type { StoryTemplateFn } from '#storybook/types';
import type { Meta, StoryObj } from '@storybook/vue3';
import merge from 'deepmerge';
import { useArgs } from 'storybook/preview-api';
import { ChipDefaultVariants } from './Chip.config';
import Chip from './Chip.vue';

type ChipStoryArgs = {
  // place for argTypes as custom controls
} & InstanceType<typeof Chip>['$props'];

const StoryTemplate: StoryTemplateFn<ChipStoryArgs> = ({ args, parameters }) => ({
  render: (args) => {
    const [currentArgs, updateArgs] = useArgs();
    return {
      components: { Chip },
      setup() {
        const handleClick = (event: MouseEvent) => {
          args.onClick?.(event);
          updateArgs({ selected: !args.selected });
        };
        return { args: currentArgs, handleClick };
      },
      template:
        '<Chip :label="args.label" :selected="args.selected" :readonly="args.readonly" @click="handleClick" />'
    };
  },
  args: {
    label: 'Без значение',
    ...ChipDefaultVariants,
    ...args
  },
  parameters: {
    ...merge(
      {
        docs: {
          source: {
            transform: (
              code: string,
              { args: { label, selected, readonly } }: { args: ChipStoryArgs }
            ) =>
              `<Chip label="${label}"${selected ? ` selected` : ''}${readonly ? ` readonly` : ''} />`
          }
        }
      },
      parameters
    )
  }
});

// Meta configuration of component stories
const meta: Meta<ChipStoryArgs> = {
  title: 'Common Elements/Chip',
  component: Chip,
  argTypes: {
    // Props
    label: {
      name: 'Label',
      type: { required: true, name: 'string' },
      description: 'Defines the label of the chip.',
      table: {
        category: 'Props',
        type: { summary: 'string' },
        defaultValue: undefined,
        required: true,
        readonly: false
      },
      control: {
        type: 'text'
      }
    },
    selected: {
      name: 'Selected',
      type: { required: false, name: 'boolean' },
      description: 'Defines whether the chip is selected or not.',
      if: {
        arg: 'readonly',
        truthy: false
      },
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        required: false,
        readonly: false
      },
      control: {
        type: 'boolean'
      }
    },
    readonly: {
      name: 'Read-only',
      type: { required: false, name: 'boolean' },
      description: 'Defines whether the chip is readonly or interactive.',
      if: {
        arg: 'selected',
        truthy: false
      },
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        required: false,
        readonly: false
      },
      control: {
        type: 'boolean'
      }
    },

    // Events
    onClick: {
      name: 'onClick',
      action: 'onClick',
      description: 'Triggered when the chip is clicked.',
      table: {
        category: 'Events',
        type: {
          summary: 'event'
        },
        defaultValue: undefined
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `This component is a building block used to display a label with the look of a pill with a selected state.`
      }
    }
  }
};

// All component stories
type Story = StoryObj<ChipStoryArgs>;

export const BasicStory: Story = {
  name: 'Basic',
  ...StoryTemplate({
    args: {},
    parameters: {
      docs: {
        description: {
          story: `This is the chip in its default state.`
        }
      }
    }
  })
};

export const SelectedStory: Story = {
  name: 'Selected',
  ...StoryTemplate({
    args: {
      selected: true
    },
    parameters: {
      docs: {
        description: {
          story: `This is the chip in its selected state.`
        }
      }
    }
  })
};

export const ReadOnlyStory: Story = {
  name: 'Read-only',
  ...StoryTemplate({
    args: {
      readonly: true
    },
    parameters: {
      docs: {
        description: {
          story: `This is the chip in readonly mode.`
        }
      }
    }
  })
};

export default meta;
