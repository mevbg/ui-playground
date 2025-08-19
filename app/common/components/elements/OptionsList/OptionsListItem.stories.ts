import { searchForm } from '#common/mocks/content/search-form';
import type { StoryTemplateFn } from '#storybook/types';
import type { Meta, StoryObj } from '@storybook/vue3';
import merge from 'deepmerge';
import { useArgs } from 'storybook/preview-api';
import type { OptionsListItemProps } from './OptionsList.types';
import { OptionsListItemDefaultVariants } from './OptionsListItem.config';
import OptionsListItem from './OptionsListItem.vue';

const allOptions: OptionsListItemProps[] = searchForm.categories[0]?.types ?? [];

type OptionsListItemStoryArgs = {
  // place for argTypes as custom controls
} & InstanceType<typeof OptionsListItem>['$props'];

const StoryTemplate: StoryTemplateFn<OptionsListItemStoryArgs> = ({ args, parameters }) => ({
  render: (props) => {
    const [currentArgs, updateArgs] = useArgs();
    return {
      components: { OptionsListItem },
      setup() {
        const handlePress = (event: MouseEvent) => {
          props.onPress?.(event);
          updateArgs({ selected: !props.selected });
        };
        return { props: currentArgs, handlePress };
      },
      template: `
        <div role="listbox" aria-label="Example list">
          <OptionsListItem
            :value="props.value"
            :text="props.text"
            :selected="props.selected"
            :disabled="props.disabled"
            :options="props.options"
            @press="handlePress"
          />
        </div>
      `
    };
  },
  args: {
    value: '1',
    text: 'Апартамент',
    ...OptionsListItemDefaultVariants,
    ...args
  },
  parameters: {
    ...merge(
      {
        docs: {
          source: {
            transform: (
              code: string,
              {
                args: { value, text, selected, disabled, options }
              }: { args: OptionsListItemStoryArgs }
            ) =>
              `<OptionsListItem value="${value}" text="${text}"${selected ? ` selected` : ''}${disabled ? ` disabled` : ''}${options?.length ? ` :options="options"` : ''} />`
          }
        }
      },
      parameters
    )
  }
});

// Meta configuration of component stories
const meta: Meta<OptionsListItemStoryArgs> = {
  title: 'Common Elements/Options List/OptionsListItem',
  component: OptionsListItem,
  argTypes: {
    // Props
    value: {
      name: 'Value',
      type: { required: true, name: 'string' },
      description: 'Defines the value of the list item.',
      table: {
        category: 'Props',
        type: { summary: 'string' },
        defaultValue: undefined,
        required: true,
        readonly: false
      },
      control: { disable: true }
    },
    text: {
      name: 'Text',
      type: { required: true, name: 'string' },
      description: 'Defines the text of the list item.',
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
      description: 'Defines whether the list item is selected or not.',
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
    disabled: {
      name: 'Disabled',
      type: { required: false, name: 'boolean' },
      description: 'Defines whether the list item is disabled or not.',
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
    options: {
      name: 'Options',
      type: {
        required: false,
        name: 'array',
        value: {
          name: 'object',
          value: {
            value: { name: 'string' },
            text: { name: 'string' }
          }
        }
      },
      description: 'Defines the children options of the list item.',
      table: {
        category: 'Props',
        type: { summary: 'OptionsListItemProps[]' },
        defaultValue: undefined,
        required: false,
        readonly: false
      },
      control: {
        type: 'check',
        labels: Object.fromEntries(allOptions.map(({ value, text }) => [value, text]))
      },
      mapping: Object.fromEntries(allOptions.map((p) => [p.value, p])),
      options: allOptions.map((option) => option.value)
    },

    // Events
    onPress: {
      name: 'onPress',
      action: 'onPress',
      description: 'Triggered when the list item is clicked.',
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
        component: `This component is a building block used to display a single item from a list of options.`
      }
    }
  }
};

// All component stories
type Story = StoryObj<OptionsListItemStoryArgs>;

export const BasicStory: Story = {
  name: 'Basic',
  ...StoryTemplate({
    args: {},
    parameters: {
      docs: {
        description: {
          story: `This is the list item in its default state.`
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
          story: `This is the list item in its selected state.`
        }
      }
    }
  })
};

export const DisabledStory: Story = {
  name: 'Disabled',
  ...StoryTemplate({
    args: {
      disabled: true
    },
    parameters: {
      docs: {
        description: {
          story: `This is the list item in disabled mode.`
        }
      }
    }
  })
};

export default meta;
