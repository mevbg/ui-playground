import { capitalizeLabels } from '#storybook/utils/stories.utils';
import type { Meta, StoryObj } from '@storybook/vue3';
import merge from 'deepmerge';
import { useArgs } from 'storybook/preview-api';
import type { TextVariantProps } from '../Text/Text.config';
import { TextDefaultVariants, TextStyles } from '../Text/Text.config';
import { PickboxDefaultVariants, PickboxStyles } from './Pickbox.config';
import Pickbox from './Pickbox.vue';

type PickboxTypes = keyof typeof PickboxStyles.type;

type TextVariants = keyof typeof TextStyles.variant;
const textVariants = Object.keys(TextStyles.variant) as TextVariants[];

const types = Object.keys(PickboxStyles.type) as PickboxTypes[];

type PickboxStoryArgs = {
  text?: string;
  textVariant?: TextVariantProps['variant'];
} & InstanceType<typeof Pickbox>['$props'];

const PreviewTemplate = (
  code,
  { args: { type, id, name, text, textVariant, checked, disabled, readonly } }
) => {
  const tab = '  ';
  const pickboxTemplate = (sp = '\n') =>
    `${sp}<Pickbox${sp + tab}type="${type}"${sp + tab}id="${id}"${sp + tab}name="${name}"${checked ? `${sp + tab}checked` : ``}${disabled ? `${sp + tab}disabled` : ``}${readonly ? `${sp + tab}readonly` : ``}${sp}/>`;
  return text
    ? `<Text as="label"${textVariant && textVariant !== TextDefaultVariants.variant ? ` variant="${textVariant}"` : ''}>\n${tab}<template #prefix>${pickboxTemplate(`\n${tab + tab}`)}\n${tab}</template>\n\n${tab}${text}\n</Text>`
    : pickboxTemplate();
};

const StoryTemplate = ({ args, parameters }) => ({
  render: (args) => {
    const [currentArgs, updateArgs] = useArgs();
    const PickboxTemplate = `
      <Pickbox
        :type="args.type"
        :id="args.id"
        :name="args.name"
        :checked="args.checked"
        :disabled="args.disabled"
        :readonly="args.readonly"
        @change="handleChange"
      />
    `;
    return {
      components: { Pickbox },
      setup() {
        const handleChange = (event: Event) => {
          args.onChange(event);
          updateArgs({ checked: !args.checked });
        };
        return { args: currentArgs, handleChange };
      },
      template: `
        <template v-if="args.text">
          <Text as="label" :variant="args.textVariant">
            <template #prefix>
              ${PickboxTemplate}
            </template>
            {{ args.text }}
          </Text>
        </template>
        
        <template v-else>
          ${PickboxTemplate}
        </template>
      `
    };
  },
  args: {
    text: 'Съгласен съм с условията',
    textVariant: 'accent',
    id: '',
    name: '',
    type: 'checkbox',
    ...PickboxDefaultVariants,
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
const meta: Meta<PickboxStoryArgs> = {
  title: 'Common Elements/Pickbox',
  component: Pickbox,
  argTypes: {
    // Story Controls
    text: {
      name: 'Text',
      type: { required: false, name: 'string' },
      description: 'Provides the ability to place a text next to the pickbox.',
      table: {
        category: 'Story Controls',
        type: null,
        defaultValue: null,
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
        defaultValue: null,
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
      description: 'Defines the ID attribute of the pickbox.',
      table: {
        category: 'Props',
        type: null,
        defaultValue: null,
        required: true,
        readonly: false
      },
      control: { disable: true }
    },
    name: {
      name: 'Name',
      type: { required: true, name: 'string' },
      description: 'Defines the name attribute of the pickbox.',
      table: {
        category: 'Props',
        type: null,
        defaultValue: null,
        required: true,
        readonly: false
      },
      control: { disable: true }
    },
    type: {
      name: 'Type',
      type: { required: true, name: 'string' },
      description: 'Defines the type of the pickbox.',
      table: {
        category: 'Props',
        type: { summary: types.join('|') },
        defaultValue: null,
        required: true,
        readonly: false
      },
      control: {
        type: 'radio',
        labels: capitalizeLabels(types)
      },
      options: types
    },
    checked: {
      name: 'Checked',
      type: { required: false, name: 'boolean' },
      description: 'Defines whether the pickbox is checked or not.',
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
      description: 'Defines whether the pickbox is disabled or not.',
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
      description: 'Defines whether the pickbox is readonly or interactive.',
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
      description: 'Triggered when the pickbox state is changed.',
      table: {
        category: 'Events',
        type: {
          summary: 'event'
        },
        defaultValue: {
          summary: null
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `A versatile pickbox input component that allows users to make binary selections. It supports multiple states including checked, unchecked, disabled, and read-only. The component can be displayed with or without a label, making it flexible for various UI contexts. When interactive, it triggers change events to toggle between checked and unchecked states.`
      }
    }
  }
};

// All component stories
type Story = StoryObj<PickboxStoryArgs>;

export const BasicStory: Story = {
  name: 'Basic',
  ...StoryTemplate({
    args: {
      text: '',
      id: 'pickbox-basic-story',
      name: 'pickbox-basic-story'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the pickbox in its default state without a label.`
        }
      }
    }
  })
};

export const TextStory: Story = {
  name: 'Pickbox with text',
  ...StoryTemplate({
    args: {
      id: 'pickbox-text-story',
      name: 'pickbox-text-story'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the pickbox in its default state with a text.`
        }
      }
    }
  })
};

export const CheckedStory: Story = {
  name: 'Checked',
  ...StoryTemplate({
    args: {
      id: 'pickbox-checked-story',
      name: 'pickbox-checked-story',
      checked: true
    },
    parameters: {
      docs: {
        description: {
          story: `This is the pickbox in its checked state.`
        }
      }
    }
  })
};

export const DisabledStory: Story = {
  name: 'Disabled',
  ...StoryTemplate({
    args: {
      id: 'pickbox-disabled-story',
      name: 'pickbox-disabled-story',
      disabled: true
    },
    parameters: {
      docs: {
        description: {
          story: `This is the pickbox in its disabled state.`
        }
      }
    }
  })
};

export const ReadOnlyStory: Story = {
  name: 'Read-only',
  ...StoryTemplate({
    args: {
      id: 'pickbox-readonly-story',
      name: 'pickbox-readonly-story',
      readonly: true,
      checked: true
    },
    parameters: {
      docs: {
        description: {
          story: `This is the pickbox in read-only mode.`
        }
      }
    }
  })
};

export default meta;
