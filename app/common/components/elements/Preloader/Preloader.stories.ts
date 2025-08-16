import type { Meta, StoryObj } from '@storybook/vue3';
import merge from 'deepmerge';
import Preloader from './Preloader.vue';

type PreloaderStoryArgs = {
  // place for argTypes as custom controls
} & InstanceType<typeof Preloader>['$props'];

const StoryTemplate = ({ args, parameters }) => ({
  render: (args) => {
    return {
      components: { Preloader },
      setup() {
        return { args };
      },
      template: `<Preloader />`
    };
  },
  args: {
    ...args
  },
  parameters: {
    ...merge(
      {
        docs: {
          source: {
            transform: () => `<Preloader />`
          }
        }
      },
      parameters
    )
  }
});

// Meta configuration of component stories
const meta: Meta<PreloaderStoryArgs> = {
  title: 'Common Elements/Preloader',
  component: Preloader,
  argTypes: {},
  parameters: {
    actions: {
      disable: true
    },
    controls: {
      disable: true
    },
    docs: {
      description: {
        component: `This component is a building block used to display a loading animation.`
      }
    }
  }
};

// All component stories
type Story = StoryObj<PreloaderStoryArgs>;

export const BasicStory: Story = {
  name: 'Basic',
  ...StoryTemplate({
    args: {},
    parameters: {
      docs: {
        description: {
          story: `This is the basic look of a preloader.`
        }
      }
    }
  })
};

export default meta;
