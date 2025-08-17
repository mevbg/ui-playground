import type { StoryTemplateFn } from '#storybook/types';
import type { Meta, StoryObj } from '@storybook/vue3';
import merge from 'deepmerge';
import SiteLogo from './SiteLogo.vue';

type SiteLogoStoryArgs = {
  // place for argTypes as custom controls
} & InstanceType<typeof SiteLogo>['$props'];

const StoryTemplate: StoryTemplateFn<SiteLogoStoryArgs> = ({ args, parameters }) => ({
  render: (args) => ({
    components: { SiteLogo },
    setup() {
      return { args };
    },
    template: '<SiteLogo />'
  }),
  args: {
    ...args
  },
  parameters: {
    ...merge(
      {
        docs: {
          source: {
            transform: () => `<SiteLogo />`
          }
        }
      },
      parameters
    )
  }
});

// Meta configuration of component stories
const meta: Meta<typeof SiteLogo> = {
  title: 'Common Elements/SiteLogo',
  component: SiteLogo,
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
        component: `This component is a building block used to display the site logo.`
      }
    }
  }
};

// All component stories
type Story = StoryObj<typeof SiteLogo>;

export const BasicStory: Story = {
  name: 'Basic',
  ...StoryTemplate({
    args: {},
    parameters: {
      docs: {
        description: {
          story: `This is the only instance of the site logo component.`
        }
      }
    }
  })
};

export default meta;
