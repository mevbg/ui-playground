import type { StoryTemplateFn } from '#storybook/types';
import { capitalizeLabels } from '#storybook/utils';
import type { Meta, StoryObj } from '@storybook/vue3';
import merge from 'deepmerge';
import { TextfieldDefaultVariants, TextfieldStyles } from './Textfield.config';
import Textfield from './Textfield.vue';

type TextfieldTypes = keyof typeof TextfieldStyles.type;

const types = Object.keys(TextfieldStyles.type) as TextfieldTypes[];

type TextfieldStoryArgs = {
  // place for argTypes as custom controls
} & HTMLInputElement &
  InstanceType<typeof Textfield>['$props'];

const StoryTemplate: StoryTemplateFn<TextfieldStoryArgs> = ({ args, parameters }) => ({
  render: (args) => {
    return {
      components: { Textfield },
      setup() {
        return { args };
      },
      template: `
      <Textfield
        :type="args.type"
        :id="args.id"
        :name="args.name"
        :placeholder="args.placeholder"
        :autofocus="args.autofocus"
        :disabled="args.disabled"
        :centered="args.centered"
        :stretched="args.stretched"
        :size="args.size"
      />`
    };
  },
  args: {
    id: '',
    name: '',
    // @ts-expect-error - type is specified more than once, so this usage will be overwritten.
    type: TextfieldDefaultVariants.type,
    placeholder: 'Вашето име',
    autofocus: true,
    centered: false,
    stretched: false,
    disabled: false,
    ...TextfieldDefaultVariants,
    ...args
  } as TextfieldStoryArgs,
  parameters: {
    ...merge(
      {
        docs: {
          source: {
            transform: (
              code: string,
              {
                args: { type, id, name, placeholder, autofocus, centered, stretched, disabled }
              }: { args: TextfieldStoryArgs }
            ) => {
              const tab = '  ';
              return `<Textfield${type !== TextfieldDefaultVariants.type ? `\n${tab}type="${type}"` : ''}${id !== null ? `\n${tab}id="${id}"` : ''}${name !== null ? `\n${tab}name="${name}"` : ''}${placeholder ? `\n${tab}placeholder="${placeholder}"` : ''}${autofocus ? `\n${tab}autofocus` : ''}${centered ? `\n${tab}centered` : ''}${stretched ? `\n${tab}stretched` : ''}${disabled ? `\n${tab}disabled` : ''}\n/>`;
            }
          }
        }
      },
      parameters
    )
  }
});

// Meta configuration of component stories
const meta: Meta<TextfieldStoryArgs> = {
  title: 'Common Elements/Textfield',
  component: Textfield,
  argTypes: {
    // Props
    id: {
      name: 'ID',
      type: { required: true, name: 'string' },
      description: 'Defines the ID attribute of the textfield.',
      table: {
        category: 'Props',
        type: { summary: 'string' },
        defaultValue: { summary: 'None' },
        required: true,
        readonly: false
      },
      control: { disable: true }
    },
    name: {
      name: 'Name',
      type: { required: true, name: 'string' },
      description: 'Defines the name attribute of the textfield.',
      table: {
        category: 'Props',
        type: { summary: 'string' },
        defaultValue: undefined,
        required: true,
        readonly: false
      },
      control: { disable: true }
    },
    type: {
      name: 'Type',
      type: { required: false, name: 'string' },
      description: 'Defines the type of the textfield.',
      table: {
        category: 'Props',
        type: { summary: types.join('|') },
        defaultValue: { summary: TextfieldDefaultVariants.type },
        required: false,
        readonly: false
      },
      control: {
        type: 'select',
        labels: capitalizeLabels(types)
      },
      options: types
    },
    placeholder: {
      name: 'Placeholder',
      type: { required: false, name: 'string' },
      description: 'Defines the placeholder of the textfield.',
      table: {
        category: 'Props',
        type: { summary: 'string' },
        defaultValue: undefined,
        required: false,
        readonly: false
      },
      control: {
        type: 'text'
      }
    },
    centered: {
      name: 'Centered',
      type: { required: false, name: 'boolean' },
      description: 'Defines whether the text in the textfield is centered or not.',
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
    stretched: {
      name: 'Stretched',
      type: { required: false, name: 'boolean' },
      description: 'Defines whether the textfield is stretched or not.',
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
      description: 'Defines whether the button is disabled or not.',
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
    autofocus: {
      name: 'Autofocus',
      type: { required: false, name: 'boolean' },
      description: 'Defines whether the textfield is autofocused or not.',
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
    }
  },
  parameters: {
    actions: {
      disable: true
    },
    docs: {
      description: {
        component: `This component is a building block used to display an input field for any kind of text.`
      }
    }
  }
};

// All component stories
type Story = StoryObj<TextfieldStoryArgs>;

export const BasicStory: Story = {
  name: 'Basic',
  ...StoryTemplate({
    args: {
      id: 'basic-id',
      name: 'basic-name'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the basic look of an input field.`
        }
      }
    }
  })
};

export const TextareaStory: Story = {
  name: 'Textarea',
  ...StoryTemplate({
    args: {
      id: 'textarea-id',
      name: 'textarea-name',
      type: 'textarea'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the look as a textarea.`
        }
      }
    }
  })
};

export const SearchStory: Story = {
  name: 'Search',
  ...StoryTemplate({
    args: {
      type: 'search',
      id: 'search-id',
      name: 'search-name',
      placeholder: 'Търсене на населено място',
      size: 26
    },
    parameters: {
      docs: {
        description: {
          story: `This is the look of an input field as a search.`
        }
      }
    }
  })
};

export default meta;
