import type { GlyphIconName } from '#common/components/elements/GlyphIcon/GlyphIcon.config';
import { glyphicons } from '#common/components/elements/GlyphIcon/GlyphIcon.config';
import { PickboxStyles } from '#common/components/elements/Pickbox/Pickbox.config';
import type { StoryTemplateFn } from '#storybook/types';
import { capitalizeLabels, getTagWrappedLabels } from '#storybook/utils';
import type { Meta, StoryObj } from '@storybook/vue3';
import merge from 'deepmerge';
import { TextDefaultVariants, TextStyles, TextTagList } from './Text.config';
import Text from './Text.vue';

type TextVariants = keyof typeof TextStyles.variant;
const variants = Object.keys(TextStyles.variant) as TextVariants[];
const prefixes = ['GlyphIcon', 'Pickbox', 'Toggle', 'Preloader', 'ProfilePhoto'];
type PickboxTypes = keyof typeof PickboxStyles.type;
const pickboxTypes = Object.keys(PickboxStyles.type) as PickboxTypes[];

type TextStoryArgs = {
  content: string;
  defaultSlot?: string;
  prefixSlot?: string;
  prefix?: (typeof prefixes)[number];
  glyphIconName?: GlyphIconName;
  pickboxType?: PickboxTypes;
} & InstanceType<typeof Text>['$props'];

const PreviewTemplate = (
  code: string,
  { args: { variant, as, content, prefix, glyphIconName, pickboxType } }: { args: TextStoryArgs }
) => `
  <Text${variant && variant !== TextDefaultVariants.variant ? ` variant="${variant}"` : ''}${as && as !== TextDefaultVariants.as ? ` as="${as}"` : ''}>${
    prefix
      ? `\n  <template #prefix>
      ${prefix === 'GlyphIcon' ? `<GlyphIcon name="${glyphIconName}" />` : ``}${prefix === 'Pickbox' ? `<Pickbox type="${pickboxType}" id="prefix-pickbox" name="prefix-pickbox" />` : ``}${prefix === 'Toggle' ? `<Toggle id="prefix-toggle" name="prefix-toggle" />` : ``}${prefix === 'Preloader' ? `<Preloader />` : ``}${prefix === 'ProfilePhoto' ? `<ProfilePhoto size="s" src="https://i.pravatar.cc/600?img=18" />` : ``}
    </template>\n`
      : ``
  }
    ${content}
  </Text>
`;

const StoryTemplate: StoryTemplateFn<TextStoryArgs> = ({ args, parameters }) => ({
  render: (args) => ({
    components: { Text },
    setup() {
      return { args };
    },
    template: `
      <Text :variant="args.variant" :as="args.as">
        <template v-if="args.prefix" #prefix>
          <GlyphIcon v-if="args.prefix === 'GlyphIcon'" :name="args.glyphIconName" />
          <Pickbox v-if="args.prefix === 'Pickbox'" :type="args.pickboxType" id="prefix-pickbox" name="prefix-pickbox" />
          <Toggle v-if="args.prefix === 'Toggle'" id="prefix-toggle" name="prefix-toggle" />
          <Preloader v-if="args.prefix === 'Preloader'" />
          <ProfilePhoto v-if="args.prefix === 'ProfilePhoto'" src="https://i.pravatar.cc/1200?img=11" />
        </template>
        {{ args.content }}
      </Text>
    `
  }),
  args: {
    content: 'Сградата се състои от три входа, три подземни нива с паркоместа и два магазина.',
    prefix: undefined,
    glyphIconName: 'main',
    pickboxType: 'checkbox',
    variant: TextDefaultVariants.variant,
    as: undefined,
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
const meta: Meta<TextStoryArgs> = {
  title: 'Common Elements/Text',
  component: Text,
  argTypes: {
    // Story Controls
    content: {
      name: 'Content',
      type: { required: false, name: 'string' },
      description: 'Defines the content of the heading.',
      table: {
        category: 'Story Controls',
        type: { summary: 'string' },
        defaultValue: undefined,
        required: false,
        readonly: false
      },
      control: {
        type: 'text'
      }
    },
    prefix: {
      name: 'Prefix',
      type: { required: false, name: 'string' },
      description: 'Provides the ability to choose a type of prefix.',
      table: {
        category: 'Story Controls',
        type: { summary: prefixes.join('|') },
        defaultValue: undefined,
        required: false,
        readonly: false
      },
      control: {
        type: 'select',
        labels: capitalizeLabels([...prefixes], 'None') // when prop is not required and not default value is presented
      },
      options: [undefined, ...prefixes] // when prop is not required and not default value is presented
    },
    glyphIconName: {
      name: 'GlyphIcon Name',
      type: { required: true, name: 'string' },
      description: 'Defines the name of the glyph icon.',
      if: {
        arg: 'prefix',
        eq: 'GlyphIcon'
      },
      table: {
        category: 'Story Controls',
        type: { summary: glyphicons.join('|') },
        defaultValue: undefined,
        required: true,
        readonly: false
      },
      control: {
        type: 'select',
        labels: glyphicons
      },
      options: glyphicons
    },
    pickboxType: {
      name: 'Pickbox Type',
      type: { required: true, name: 'string' },
      description: 'Defines the type of the pickbox.',
      if: {
        arg: 'prefix',
        eq: 'Pickbox'
      },
      table: {
        category: 'Story Controls',
        type: { summary: pickboxTypes.join('|') },
        defaultValue: undefined,
        required: true,
        readonly: false
      },
      control: {
        type: 'radio',
        labels: capitalizeLabels(pickboxTypes)
      },
      options: pickboxTypes
    },

    // Props
    variant: {
      name: 'Variant',
      type: { required: false, name: 'string' },
      description: 'Defines the name of the heading.',
      table: {
        category: 'Props',
        type: { summary: variants.join('|') },
        defaultValue: { summary: TextDefaultVariants.variant },
        required: false,
        readonly: false
      },
      control: {
        type: 'select',
        labels: capitalizeLabels(variants)
      },
      options: variants
    },
    as: {
      name: 'As',
      type: { required: false, name: 'string' },
      description: 'Defines the tag of the heading.',
      table: {
        category: 'Props',
        type: { summary: TextTagList.join('|') },
        defaultValue: { summary: TextDefaultVariants.as ?? 'None' },
        required: false,
        readonly: false
      },
      control: {
        type: 'select',
        labels: getTagWrappedLabels([...TextTagList], 'None') // when prop is not required and not default value is presented
      },
      options: [undefined, ...TextTagList] // when prop is not required and not default value is presented
    },

    // Slots
    defaultSlot: {
      name: '<slot />',
      control: {
        type: undefined
      },
      description: 'Default slot for the text content.',
      table: {
        category: 'Slots',
        type: undefined,
        defaultValue: undefined
      }
    },
    prefixSlot: {
      name: '<slot name="prefix" />',
      control: {
        type: undefined
      },
      description: 'Extra slot for a prefix content.',
      table: {
        category: 'Slots',
        type: undefined,
        defaultValue: undefined
      }
    }
  },
  parameters: {
    actions: {
      disable: true
    },
    docs: {
      description: {
        component: `This component is a typographic building block used to display body text, labels, notes, and other textual content excluding headings and titles.`
      }
    }
  }
};

// All component stories
type Story = StoryObj<TextStoryArgs>;

export const BodyStory: Story = {
  name: 'Body (basic)',
  ...StoryTemplate({
    args: {},
    parameters: {
      docs: {
        description: {
          story: `This is the basic instance of the text component. It is used to display body text.`
        }
      }
    }
  })
};

export const DisplayStory: Story = {
  name: 'Display',
  ...StoryTemplate({
    args: {
      variant: 'display'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the display text.`
        }
      }
    }
  })
};

export const HeadStory: Story = {
  name: 'Head',
  ...StoryTemplate({
    args: {
      variant: 'head'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the head text.`
        }
      }
    }
  })
};

export const TitleStory: Story = {
  name: 'Title',
  ...StoryTemplate({
    args: {
      variant: 'title'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the title text.`
        }
      }
    }
  })
};

export const SubtitleStory: Story = {
  name: 'Subtitle',
  ...StoryTemplate({
    args: {
      variant: 'subtitle'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the subtitle text.`
        }
      }
    }
  })
};

export const AccentStory: Story = {
  name: 'Accent',
  ...StoryTemplate({
    args: {
      variant: 'accent'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the accent text.`
        }
      }
    }
  })
};

export const LabelStory: Story = {
  name: 'Label',
  ...StoryTemplate({
    args: {
      variant: 'label'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the label text.`
        }
      }
    }
  })
};

export const NoteStory: Story = {
  name: 'Note',
  ...StoryTemplate({
    args: {
      variant: 'note'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the note text.`
        }
      }
    }
  })
};

export const ButtonStory: Story = {
  name: 'Button',
  ...StoryTemplate({
    args: {
      variant: 'button'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the button text.`
        }
      }
    }
  })
};

export const ScriptStory: Story = {
  name: 'Script',
  ...StoryTemplate({
    args: {
      variant: 'script'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the script text.`
        }
      }
    }
  })
};

export default meta;
