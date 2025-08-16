import type { Meta, StoryObj } from '@storybook/vue3';
import merge from 'deepmerge';
import LocationMap from './LocationMap.vue';

type LocationMapStoryArgs = {
  // place for argTypes as custom controls
} & InstanceType<typeof LocationMap>['$props'];

const src =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.7165581621225!2d25.552259321096756!3d41.934743208991556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad50dab5a578b9%3A0x3b7c6ed726ad076a!2sg.k.%20Druzhba%20I%2C%20bul.%20%22G.S.Rakovski%22%209%2C%206300%20Haskovo!5e0!3m2!1sen!2sbg!4v1752390765269!5m2!1sen!2sbg';

const StoryTemplate = ({ args, parameters }) => ({
  render: (args) => {
    return {
      components: { LocationMap },
      setup() {
        return { args };
      },
      template: `<LocationMap :src="args.src" :exact-location="args.exactLocation" />`
    };
  },
  args: {
    src,
    exactLocation: null,
    ...args
  },
  parameters: {
    ...merge(
      {
        docs: {
          source: {
            transform: (code, { args: { exactLocation } }) =>
              `<LocationMap :src="src"${exactLocation ? ` exact-location` : ''} />`
          }
        }
      },
      parameters
    )
  }
});

// Meta configuration of component stories
const meta: Meta<LocationMapStoryArgs> = {
  title: 'Common Elements/LocationMap',
  component: LocationMap,
  argTypes: {
    // Props
    src: {
      name: 'Source URL ',
      type: { required: true, name: 'string' },
      description: 'Defines the src of the location map.',
      table: {
        category: 'Props',
        type: null,
        defaultValue: null,
        required: true,
        readonly: false
      },
      control: {
        type: 'text'
      }
    },
    exactLocation: {
      name: 'Exact Location',
      type: { required: true, name: 'boolean' },
      description: 'Defines whether the location on the map is exact or not.',
      table: {
        category: 'Props',
        type: null,
        defaultValue: { summary: 'false' },
        required: true,
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
        component: `This component is a building block used to display a location map.`
      }
    }
  }
};

// All component stories
type Story = StoryObj<LocationMapStoryArgs>;

export const BasicStory: Story = {
  name: 'Basic',
  ...StoryTemplate({
    args: {},
    parameters: {
      docs: {
        description: {
          story: `This is the basic look of a location map.`
        }
      }
    }
  })
};

export default meta;
