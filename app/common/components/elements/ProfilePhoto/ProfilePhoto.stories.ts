import type { StoryTemplateFn } from '#storybook/types';
import { capitalizeLabels } from '#storybook/utils';
import type { Meta, StoryObj } from '@storybook/vue3';
import merge from 'deepmerge';
import { ProfilePhotoStyles } from './ProfilePhoto.config';
import ProfilePhoto from './ProfilePhoto.vue';

type ProfilePhotoSizes = keyof typeof ProfilePhotoStyles.size;

const sizes = Object.keys(ProfilePhotoStyles.size) as ProfilePhotoSizes[];

type ProfilePhotoStoryArgs = {
  // place for argTypes as custom controls
} & InstanceType<typeof ProfilePhoto>['$props'];

const src = 'https://i.pravatar.cc/1200?img=11';
const name = 'Иван Иванов';

const StoryTemplate: StoryTemplateFn<ProfilePhotoStoryArgs> = ({ args, parameters }) => ({
  render: (args) => {
    return {
      components: { ProfilePhoto },
      setup() {
        return { args };
      },
      template:
        '<ProfilePhoto :size="args.size" :src="args.src" :alt="args.alt" :title="args.title" />'
    };
  },
  args: {
    src,
    size: null,
    alt: name,
    title: name,
    ...args
  },
  parameters: {
    ...merge(
      {
        docs: {
          source: {
            transform: (
              code: string,
              { args: { size, src, alt, title } }: { args: ProfilePhotoStoryArgs }
            ) => {
              const tab = '  ';
              return `<ProfilePhoto\n${tab}src="${src}"${tab}${size ? `\n${tab}size="${size}"` : ''}${alt ? `\n${tab}alt="${alt}"` : ''}${title ? `\n${tab}title="${title}"` : ''}\n/>`;
            }
          }
        }
      },
      parameters
    )
  }
});

// Meta configuration of component stories
const meta: Meta<ProfilePhotoStoryArgs> = {
  title: 'Common Elements/ProfilePhoto',
  component: ProfilePhoto,
  argTypes: {
    // Props
    src: {
      name: 'src',
      type: { required: true, name: 'string' },
      description: 'Defines the src of the profile photo.',
      table: {
        category: 'Props',
        type: { summary: 'string' },
        defaultValue: undefined,
        required: true,
        readonly: false
      },
      control: {
        type: 'text'
      }
    },
    size: {
      name: 'size',
      type: { required: false, name: 'string' },
      description: 'Defines the size of the profile photo.',
      table: {
        category: 'Props',
        type: { summary: sizes.join('|') },
        defaultValue: undefined,
        required: false,
        readonly: false
      },
      control: {
        type: 'inline-radio',
        labels: capitalizeLabels([...sizes], 'None') // when prop is not required and not default value is presented
      },
      options: [undefined, ...sizes] // when prop is not required and not default value is presented
    },
    alt: {
      name: 'alt',
      type: { required: false, name: 'string' },
      description: 'Defines the alt text of the profile photo.',
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
    title: {
      name: 'title',
      type: { required: false, name: 'string' },
      description: 'Defines the tooltip text of the profile photo.',
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
    }
  },
  parameters: {
    actions: {
      disable: true
    },
    docs: {
      description: {
        component: `This component is a building block used to display a profile photo.`
      }
    }
  }
};

// All component stories
type Story = StoryObj<ProfilePhotoStoryArgs>;

export const BasicStory: Story = {
  name: 'Basic',
  ...StoryTemplate({
    args: {},
    parameters: {
      docs: {
        description: {
          story: `This is the basic look of a profile photo.`
        }
      }
    }
  })
};

export const SmallSizeStory: Story = {
  name: 'Small',
  ...StoryTemplate({
    args: {
      size: 's'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the small size of a profile photo.`
        }
      }
    }
  })
};

export const MediumSizeStory: Story = {
  name: 'Medium',
  ...StoryTemplate({
    args: {
      size: 'm'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the medium size of a profile photo.`
        }
      }
    }
  })
};

export const LargeSizeStory: Story = {
  name: 'Large',
  ...StoryTemplate({
    args: {
      size: 'l'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the large size of a profile photo.`
        }
      }
    }
  })
};

export default meta;
