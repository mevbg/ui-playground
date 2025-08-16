import { capitalizeLabels } from '#storybook/utils/stories.utils';
import type { Meta, StoryObj } from '@storybook/vue3';
import merge from 'deepmerge';
import type { TextVariantProps } from '../Text/Text.config';
import { TextDefaultVariants, TextStyles } from '../Text/Text.config';
import Textlink from './Textlink.vue';

type TextVariants = keyof typeof TextStyles.variant;
const textVariants = Object.keys(TextStyles.variant) as TextVariants[];

type TextlinkStoryArgs = {
  text: string;
  textVariant?: TextVariantProps['variant'];
} & InstanceType<typeof Textlink>['$props'];

const PreviewTemplate = (code, { args: { prefix, text, textVariant } }) => {
  return `
   <Textlink>
      <a href="https://google.com" target="_blank">
        <Text as="span" variant="${textVariant}">${prefix ? `\n          <template #prefix>\n            <GlyphIcon name="main" />\n          </template>\n` : ''}\n          ${text}\n        </Text>
      </a>
    </Textlink>
  `;
};

const StoryTemplate = ({ args, parameters }) => ({
  render: (args) => {
    return {
      components: { Textlink },
      setup() {
        return { args };
      },
      template: `
        <Textlink>
          <a href="https://google.com" target="_blank">
            <Text as="label" :variant="args.textVariant">
              <template v-if="args.prefix" #prefix>
                <GlyphIcon name="main" />
              </template>
              
              {{ args.text }}
            </Text>
          </a>
        </Textlink>
      `
    };
  },
  args: {
    text: 'Textlink',
    textVariant: TextDefaultVariants.variant,
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
const meta: Meta<TextlinkStoryArgs> = {
  title: 'Common Elements/Textlink',
  component: Textlink,
  argTypes: {
    text: {
      name: 'Text',
      type: { required: true, name: 'string' },
      description: 'Defines the text of the textlink.',
      table: {
        category: 'Story Controls',
        type: null,
        defaultValue: null,
        required: true,
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
    }
  },
  parameters: {
    actions: {
      disable: true
    },
    docs: {
      description: {
        component: `This component is a building block used to display a label with the look of a pill with a selected state.`
      }
    }
  }
};

// All component stories
type Story = StoryObj<TextlinkStoryArgs>;

export const BasicStory: Story = {
  name: 'Basic',
  ...StoryTemplate({
    args: {},
    parameters: {
      docs: {
        description: {
          story: `This is the basic look of a textlink.`
        }
      }
    }
  })
};

export const PrefixStory: Story = {
  name: 'Textlink with prefix',
  ...StoryTemplate({
    args: {
      prefix: true
    },
    parameters: {
      docs: {
        description: {
          story: `This is the look of a textlink with a prefix.`
        }
      }
    }
  })
};

export default meta;
