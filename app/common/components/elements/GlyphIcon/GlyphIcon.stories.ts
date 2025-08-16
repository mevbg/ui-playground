import type { Meta, StoryObj } from '@storybook/vue3';
import merge from 'deepmerge';
import { glyphicons } from './GlyphIcon.config';
import GlyphIcon from './GlyphIcon.vue';

type GlyphIconStoryArgs = {
  // place for argTypes as custom controls
} & InstanceType<typeof GlyphIcon>['$props'];

const StoryTemplate = ({ args, parameters }) => ({
  render: (args) => {
    return {
      components: { GlyphIcon },
      setup() {
        return { args };
      },
      template: '<GlyphIcon :name="args.name" />'
    };
  },
  args: {
    name: 'main',
    ...args
  },
  parameters: {
    ...merge(
      {
        docs: {
          source: {
            transform: (code, { args: { name } }) => `<GlyphIcon name="${name}" />`
          }
        }
      },
      parameters
    )
  }
});

// Meta configuration of component stories
const meta: Meta<GlyphIconStoryArgs> = {
  title: 'Common Elements/GlyphIcon',
  component: GlyphIcon,
  argTypes: {
    // Props
    name: {
      name: 'Name',
      type: { required: true, name: 'string' },
      description: 'Defines the name of the glyph icon.',
      table: {
        category: 'Props',
        type: { summary: glyphicons.join('|') },
        defaultValue: null,
        required: true,
        readonly: false
      },
      control: {
        type: 'select',
        labels: glyphicons
      },
      options: glyphicons
    }
  },
  parameters: {
    actions: {
      disable: true
    },
    docs: {
      description: {
        component: `This component is a building block used to display a glyph icon.`
      }
    }
  }
};

// All component stories
type Story = StoryObj<GlyphIconStoryArgs>;

export const BasicStory: Story = {
  name: 'Basic',
  ...StoryTemplate({
    args: {},
    parameters: {
      docs: {
        description: {
          story: `This is the basic look of a glyph icon.`
        }
      }
    }
  })
};

export default meta;
