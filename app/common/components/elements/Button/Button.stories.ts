import type { StoryTemplateFn } from '#storybook/types';
import { capitalizeLabels } from '#storybook/utils';
import type { Meta, StoryObj } from '@storybook/vue3';
import merge from 'deepmerge';
import { glyphicons } from '../GlyphIcon/GlyphIcon.config';
import { ButtonDefaultVariants, ButtonStyles } from './Button.config';
import Button from './Button.vue';

type ButtonVariants = keyof typeof ButtonStyles.variant;
type ButtonSizes = keyof typeof ButtonStyles.size;

const variants = Object.keys(ButtonStyles.variant) as ButtonVariants[];
const sizes = Object.keys(ButtonStyles.size) as ButtonSizes[];

type ButtonStoryArgs = {
  // place for argTypes as custom controls
} & InstanceType<typeof Button>['$props'];

const StoryTemplate: StoryTemplateFn<ButtonStoryArgs> = ({ args, parameters }) => ({
  render: (args) => {
    return {
      components: { Button },
      setup() {
        const handleClick = (event: MouseEvent) => {
          args.onClick?.(event);
        };
        return { args, handleClick };
      },
      template: `
        <Button 
          :label="args.label"
          :icon-prefix="args.iconPrefix"
          :icon-suffix="args.iconSuffix"
          :variant="args.variant"
          :size="args.size"
          :disabled="args.disabled"
          :loading="args.loading"
          :stretched="args.stretched"
          @click="handleClick"
        />
      `
    };
  },
  args: {
    label: 'Обнови',
    iconPrefix: undefined,
    iconSuffix: undefined,
    ...ButtonDefaultVariants,
    ...args
  },
  parameters: {
    ...merge(
      {
        docs: {
          source: {
            transform: (
              code: string,
              {
                args: { label, variant, size, disabled, loading, stretched, iconPrefix, iconSuffix }
              }: {
                args: ButtonStoryArgs;
              }
            ) =>
              `<Button label="${label}"${variant !== ButtonDefaultVariants.variant ? ` variant="${variant}"` : ''}${size !== ButtonDefaultVariants.size ? ` size="${size}"` : ''}${disabled ? ` disabled` : ''}${loading ? ` loading` : ''}${stretched ? ` stretched` : ''}${iconPrefix ? ` icon-prefix="${iconPrefix}"` : ''}${iconSuffix ? ` icon-suffix="${iconSuffix}"` : ''} />`
          }
        }
      },
      parameters
    )
  }
});

// Meta configuration of component stories
const meta: Meta<ButtonStoryArgs> = {
  title: 'Common Elements/Button',
  component: Button,
  argTypes: {
    // Props
    label: {
      name: 'Label',
      type: { required: true, name: 'string' },
      description: 'Defines the label of the button.',
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
    iconPrefix: {
      name: 'Icon Prefix',
      type: { required: false, name: 'string' },
      description: 'Defines the prefix glyph icon. It will be rendered before the label.',
      table: {
        category: 'Props',
        type: { summary: glyphicons.join('|') },
        defaultValue: undefined,
        required: false,
        readonly: false
      },
      control: {
        type: 'select',
        labels: capitalizeLabels([...glyphicons], 'None')
      },
      options: [undefined, ...glyphicons]
    },
    iconSuffix: {
      name: 'Icon Suffix',
      type: { required: false, name: 'string' },
      description: 'Defines the suffix glyph icon. It will be rendered after the label.',
      table: {
        category: 'Props',
        type: { summary: glyphicons.join('|') },
        defaultValue: undefined,
        required: false,
        readonly: false
      },
      control: {
        type: 'select',
        labels: capitalizeLabels([...glyphicons], 'None')
      },
      options: [undefined, ...glyphicons]
    },
    variant: {
      name: 'Variant',
      type: { required: false, name: 'string' },
      description: 'Defines the variant of the button.',
      table: {
        category: 'Props',
        type: { summary: variants.join('|') },
        defaultValue: { summary: ButtonDefaultVariants.variant },
        required: false,
        readonly: false
      },
      control: {
        type: 'select',
        labels: capitalizeLabels(variants)
      },
      options: variants
    },
    size: {
      name: 'Size',
      type: { required: false, name: 'string' },
      description: 'Defines the size of the button.',
      table: {
        category: 'Props',
        type: { summary: sizes.join('|') },
        defaultValue: { summary: ButtonDefaultVariants.size },
        required: false,
        readonly: true
      },
      control: {
        type: 'radio',
        labels: capitalizeLabels(sizes)
      },
      options: sizes
    },
    disabled: {
      name: 'Disabled',
      type: { required: false, name: 'boolean' },
      description: 'Defines whether the button is disabled or not.',
      if: {
        arg: 'loading',
        truthy: false
      },
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
    loading: {
      name: 'Loading',
      type: { required: false, name: 'boolean' },
      description: 'Defines whether the button is loading or not.',
      if: {
        arg: 'disabled',
        truthy: false
      },
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
      description: 'Defines whether the button is stretched or not.',
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

    // Events
    onClick: {
      name: 'onClick',
      action: 'onClick',
      description: 'Triggered when the button is clicked.',
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
        component: `The Button component is a versatile interactive element that provides consistent styling and behavior across the application. It supports multiple variants (primary, secondary, tertiary, ghost), different states (disabled, loading), and flexible layout options to accommodate various use cases.`
      }
    }
  }
};

// All component stories
type Story = StoryObj<ButtonStoryArgs>;

export const SolidStory: Story = {
  name: 'Solid',
  ...StoryTemplate({
    args: {
      variant: 'solid'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the solid button.`
        }
      }
    }
  })
};

export const OutlinedStory: Story = {
  name: 'Outlined',
  ...StoryTemplate({
    args: {
      variant: 'outlined'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the outlined button.`
        }
      }
    }
  })
};

export const PaleStory: Story = {
  name: 'Pale',
  ...StoryTemplate({
    args: {
      variant: 'pale'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the pale button.`
        }
      }
    }
  })
};

export const GhostStory: Story = {
  name: 'Ghost',
  ...StoryTemplate({
    args: {
      variant: 'ghost'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the ghost button.`
        }
      }
    }
  })
};

export const FloatingStory: Story = {
  name: 'Floating',
  ...StoryTemplate({
    args: {
      variant: 'floating'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the floating button.`
        }
      }
    }
  })
};

export default meta;
