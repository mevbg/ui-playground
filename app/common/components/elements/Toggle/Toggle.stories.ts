import type { StoryTemplateFn } from '#storybook/types';
import { capitalizeLabels } from '#storybook/utils';
import type { Meta, StoryObj } from '@storybook/vue3';
import merge from 'deepmerge';
import { useArgs } from 'storybook/preview-api';
import type { TextVariantProps } from '../Text/Text.config';
import { TextDefaultVariants, TextStyles } from '../Text/Text.config';
import { ToggleDefaultVariants } from './Toggle.config';
import Toggle from './Toggle.vue';

type TextVariants = keyof typeof TextStyles.variant;
const textVariants = Object.keys(TextStyles.variant) as TextVariants[];

type ToggleStoryArgs = {
  text?: string;
  textVariant?: TextVariantProps['variant'];
} & InstanceType<typeof Toggle>['$props'];

const PreviewTemplate = (
  code: string,
  { args: { id, name, text, textVariant, checked, disabled, readonly } }: { args: ToggleStoryArgs }
) => {
  const tab = '  ';
  const pickboxTemplate = (sp = '\n') =>
    `${sp}<Toggle${sp + tab}id="${id}"${sp + tab}name="${name}"${checked ? `${sp + tab}checked` : ``}${disabled ? `${sp + tab}disabled` : ``}${readonly ? `${sp + tab}readonly` : ``}${sp}/>`;
  return text
    ? `<Text as="label"${textVariant && textVariant !== TextDefaultVariants.variant ? ` variant="${textVariant}"` : ''}>\n${tab}<template #prefix>${pickboxTemplate(`\n${tab + tab}`)}\n${tab}</template>\n\n${tab}${text}\n</Text>`
    : pickboxTemplate();
};

const StoryTemplate: StoryTemplateFn<ToggleStoryArgs> = ({ args, parameters }) => ({
  render: (args) => {
    const [currentArgs, updateArgs] = useArgs();

    const ToggleTemplate = `
      <Toggle
        :id="args.id"
        :name="args.name"
        :checked="args.checked"
        :disabled="args.disabled"
        :readonly="args.readonly"
        @change="handleChange"
      />
    `;
    return {
      components: { Toggle },
      setup() {
        const handleChange = (event: Event) => {
          args.onChange?.(event);
          updateArgs({ checked: !args.checked });
        };
        return { args: currentArgs, handleChange };
      },
      template: `
        <template v-if="args.text">
          <Text as="label" :variant="args.textVariant">
            <template #prefix>
              ${ToggleTemplate}
            </template>
            {{ args.text }}
          </Text>
        </template>

        <template v-else>
          ${ToggleTemplate}
        </template>
      `
    };
  },
  args: {
    text: 'Без имоти в строеж',
    textVariant: 'script',
    id: '',
    name: '',
    ...ToggleDefaultVariants,
    ...args
  },
  parameters: {
    ...merge(
      {
        docs: {
          source: { transform: PreviewTemplate }
        }
      },
      parameters
    )
  }
});

// Meta configuration of component stories
const meta: Meta<ToggleStoryArgs> = {
  title: 'Common Elements/Toggle',
  component: Toggle,
  argTypes: {
    // Story Controls
    text: {
      name: 'Text',
      type: { required: false, name: 'string' },
      description: 'Provides the ability to place a text next to the pickbox.',
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
    textVariant: {
      name: 'Text Variant',
      type: { required: false, name: 'string' },
      description: 'Provides the ability to set the variant of the text for the pickbox.',
      if: {
        arg: 'text',
        truthy: true
      },
      table: {
        category: 'Story Controls',
        type: { summary: textVariants.join('|') },
        defaultValue: undefined,
        required: false,
        readonly: false
      },
      control: {
        type: 'radio',
        labels: capitalizeLabels(textVariants)
      },
      options: textVariants
    },

    // Props
    id: {
      name: 'ID',
      type: { required: true, name: 'string' },
      description: 'Defines the ID attribute of the toggle.',
      table: {
        category: 'Props',
        type: { summary: 'string' },
        defaultValue: undefined,
        required: true,
        readonly: false
      },
      control: { disable: true }
    },
    name: {
      name: 'Name',
      type: { required: true, name: 'string' },
      description: 'Defines the name attribute of the toggle.',
      table: {
        category: 'Props',
        type: { summary: 'string' },
        defaultValue: undefined,
        required: true,
        readonly: false
      },
      control: { disable: true }
    },
    checked: {
      name: 'Checked',
      type: { required: false, name: 'boolean' },
      description: 'Defines whether the toggle is checked or not.',
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
      description: 'Defines whether the toggle is disabled or not.',
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
      description: 'Defines whether the toggle is readonly or interactive.',
      if: {
        arg: 'disabled',
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
    onChange: {
      name: 'onChange',
      action: 'onChange',
      description: 'Triggered when the toggle state is changed.',
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
        component: `A modern toggle switch component that provides an intuitive on/off interface for binary settings. It features a sliding animation between states and supports multiple interaction modes including enabled, disabled, and read-only. The component can be displayed with or without descriptive label, making it ideal for settings panels, feature toggles, and preference controls. When active, it responds to change events with smooth state transitions.`
      }
    }
  }
};

// All component stories
type Story = StoryObj<ToggleStoryArgs>;

export const BasicStory: Story = {
  name: 'Basic',
  ...StoryTemplate({
    args: {
      text: '',
      id: 'toggle-basic-story',
      name: 'toggle-basic-story'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the toggle in its default state.`
        }
      }
    }
  })
};

export const TextStory: Story = {
  name: 'Toggle with text',
  ...StoryTemplate({
    args: {
      id: 'toggle-text-story',
      name: 'toggle-text-story'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the toggle in its default state with a text.`
        }
      }
    }
  })
};

export const CheckedStory: Story = {
  name: 'Checked',
  ...StoryTemplate({
    args: {
      id: 'toggle-checked-story',
      name: 'toggle-checked-story',
      checked: true
    },
    parameters: {
      docs: {
        description: {
          story: `This is the toggle in its checked state.`
        }
      }
    }
  })
};

export const DisabledStory: Story = {
  name: 'Disabled',
  ...StoryTemplate({
    args: {
      id: 'toggle-disabled-story',
      name: 'toggle-disabled-story',
      disabled: true
    },
    parameters: {
      docs: {
        description: {
          story: `This is the toggle in its disabled state.`
        }
      }
    }
  })
};

export const ReadOnlyStory: Story = {
  name: 'Read-only',
  ...StoryTemplate({
    args: {
      id: 'toggle-readonly-story',
      name: 'toggle-readonly-story',
      readonly: true,
      checked: true
    },
    parameters: {
      docs: {
        description: {
          story: `This is the toggle in read-only mode.`
        }
      }
    }
  })
};

export default meta;
