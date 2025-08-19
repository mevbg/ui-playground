import { searchForm } from '#common/mocks/content/search-form';
import type { StoryTemplateFn } from '#storybook/types';
import type { Meta, StoryObj } from '@storybook/vue3';
import merge from 'deepmerge';
import { computed, ref } from 'vue';
import type { OptionsListItemProps } from './OptionsList.types';
import OptionsListGroup from './OptionsListGroup.vue';

const options: OptionsListItemProps[] = searchForm.categories.map(({ types, ...rest }) => ({
  ...rest,
  options: types
}));

type OptionsListGroupStoryArgs = {
  // place for argTypes as custom controls
} & InstanceType<typeof OptionsListGroup>['$props'];

const StoryTemplate: StoryTemplateFn<OptionsListGroupStoryArgs> = ({ parameters }) => ({
  render: (args) => {
    return {
      components: { OptionsListGroup },
      setup() {
        const selected = ref<OptionsListItemProps | null>(null);
        const options = computed(() =>
          args.options.map((option) => ({
            ...option,
            selected: option.value === selected.value?.value
          }))
        );
        const handlePress = (option: OptionsListItemProps) => {
          args.onPress?.(option);
          selected.value = option;
        };
        return { args, options, handlePress };
      },
      template: `
        <OptionsListGroup
          :title="args.title"
          :options="options"
          @press="handlePress"
        />
      `
    };
  },
  args: {
    title: 'Вид имот',
    options
  },
  parameters: {
    ...merge(
      {
        docs: {
          source: {
            transform: () => `<OptionsListGroup :title="title" :options="options" />`
          }
        }
      },
      parameters
    )
  }
});

// Meta configuration of component stories
const meta: Meta<OptionsListGroupStoryArgs> = {
  title: 'Common Elements/Options List/OptionsListGroup',
  component: OptionsListGroup,
  argTypes: {
    // Props
    title: {
      name: 'Title',
      type: { required: true, name: 'string' },
      description: 'Defines the title of the list.',
      table: {
        category: 'Props',
        type: { summary: 'string' },
        defaultValue: undefined,
        required: true,
        readonly: false
      },
      control: { disable: true }
    },
    options: {
      name: 'Options',
      type: {
        required: true,
        name: 'array',
        value: {
          name: 'object',
          value: {
            value: { name: 'string' },
            text: { name: 'string' }
          }
        }
      },
      description: 'Defines the options of the list.',
      table: {
        category: 'Props',
        type: { summary: 'OptionsListItemProps[]' },
        defaultValue: undefined,
        required: true,
        readonly: false
      },
      control: { disable: true }
    },

    // Events
    onPress: {
      name: 'onPress',
      action: 'onPress',
      description: 'Triggered when a list item is pressed.',
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
        component: `This component is a building block used to display a list of given options.`
      }
    }
  }
};

// All component stories
type Story = StoryObj<OptionsListGroupStoryArgs>;

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

export default meta;
