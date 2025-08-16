import type { Meta, StoryObj } from '@storybook/vue3';
import merge from 'deepmerge';
import InlineList from './InlineList.vue';

type InlineListStoryArgs = {
  items: string[];
} & InstanceType<typeof InlineList>['$props'];

const StoryTemplate = ({ args, parameters }) => ({
  render: (args) => {
    return {
      components: { InlineList },
      setup() {
        return { args };
      },
      template: `
        <InlineList>
          <template v-for="(item, index) in args.items" :key="index">
            <Text as="span">{{ item }}</Text>
          </template>
        </InlineList>
      `
    };
  },
  args: {
    items: ['02 975 33 99', '088 731 14 97'],
    ...args
  },
  parameters: {
    ...merge(
      {
        docs: {
          source: {
            transform: (code, { args: { items } }) => {
              const tab = '  ';
              return `<InlineList>${items.map((item) => `\n${tab}<Text as="span">${item}</Text>`).join('')}\n</InlineList>`;
            }
          }
        }
      },
      parameters
    )
  }
});

// Meta configuration of component stories
const meta: Meta<InlineListStoryArgs> = {
  title: 'Common Elements/InlineList',
  component: InlineList,
  argTypes: {
    items: {
      name: 'Items',
      type: {
        required: false,
        name: 'array',
        value: {
          name: 'string'
        }
      },
      description: 'Defines the list of items.',
      table: {
        category: 'Story Controls',
        type: {
          summary: 'Array<string>'
        },
        defaultValue: null,
        required: false,
        readonly: false
      },
      control: {
        type: 'object'
      }
    }
  },
  parameters: {
    actions: {
      disable: true
    },
    docs: {
      description: {
        component: `This component is a building block used to display an inline list of text items, separated by a dot.`
      }
    }
  }
};

// All component stories
type Story = StoryObj<InlineListStoryArgs>;

export const BasicStory: Story = {
  name: 'Basic',
  ...StoryTemplate({
    args: {},
    parameters: {
      docs: {
        description: {
          story: `This is the basic look of an inline list.`
        }
      }
    }
  })
};

export default meta;
