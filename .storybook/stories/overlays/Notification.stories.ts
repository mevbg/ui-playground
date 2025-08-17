import type { StoryTemplateFn } from '#storybook/types';
import { capitalizeLabels } from '#storybook/utils';
import { debounce } from '#utils/delays.utils';
import { capitalize } from '#utils/strings.utils';
import {
  positions,
  toastifyDefaultConfig,
  toastifyDefaultType,
  transitions,
  types
} from '@mevbg/nuxt-kit/configs';
import { useNotificationSystem } from '@mevbg/nuxt-kit/useNotificationSystem';
import type { Meta, StoryObj } from '@storybook/vue3';
import merge from 'deepmerge';
import { onBeforeUnmount, onMounted, watch } from 'vue';
import type { ToastContainerOptions, ToastTransition } from 'vue3-toastify';

type NotificationStoryArgs = {
  label: string;
  type: (typeof types)[number];
} & ToastContainerOptions;

let activeToastId;

const PreviewTemplate = ({ label, type, ...config }) => {
  const tab = '  ';
  const {
    autoClose,
    pauseOnHover,
    closeOnClick,
    closeButton,
    hideProgressBar,
    pauseOnFocusLoss,
    transition,
    position
  } = config;
  const customConfig = Object.keys(config).some((key) => config[key] !== toastifyDefaultConfig[key])
    ? `, {${position && position !== toastifyDefaultConfig.position ? `\n${tab}position: '${position}',` : ''}${transition && transition !== toastifyDefaultConfig.transition ? `\n${tab}transition: ${transition},` : ''}${autoClose !== toastifyDefaultConfig.autoClose ? `\n${tab}autoClose: ${autoClose},` : ''}${pauseOnHover !== toastifyDefaultConfig.pauseOnHover ? `\n${tab}pauseOnHover: ${pauseOnHover},` : ''}${closeOnClick !== toastifyDefaultConfig.closeOnClick ? `\n${tab}closeOnClick: ${closeOnClick},` : ''}${closeButton !== toastifyDefaultConfig.closeButton ? `\n${tab}closeButton: ${closeButton},` : ''}${hideProgressBar !== toastifyDefaultConfig.hideProgressBar ? `\n${tab}hideProgressBar: ${hideProgressBar},` : ''}${pauseOnFocusLoss !== toastifyDefaultConfig.pauseOnFocusLoss ? `\n${tab}pauseOnFocusLoss: ${pauseOnFocusLoss}` : ''}\n}`
    : '';

  const notifyFunction = `notify${capitalize(type)}`;

  return `
const { ${notifyFunction} } = useNotificationSystem();

${notifyFunction}('${label}'${customConfig});
  `;
};

const StoryTemplate: StoryTemplateFn<NotificationStoryArgs> = ({ args, parameters }) => ({
  render: (args) => {
    return {
      setup() {
        const notificationSystem = useNotificationSystem();

        const showToast = async (
          toast: NotificationStoryArgs = args,
          toastId: string = 'notification'
        ) => {
          if (activeToastId === toastId) {
            return;
          }

          activeToastId = toastId;

          const { label, autoClose, type, ...restConfig } = toast;

          notificationSystem[`notify${capitalize(type)}`](label, {
            autoClose: autoClose || false,
            toastId,
            ...restConfig
          });
        };

        onMounted(() => setTimeout(() => showToast(args), 1000));
        onBeforeUnmount(() => {
          notificationSystem.clearAll();
          activeToastId = null;
        });

        const debouncedTrigger = debounce((newArgs, toastId) => showToast(newArgs, toastId), 300);
        watch(args, (newArgs) => debouncedTrigger(newArgs, Date.now().toString()));

        const handleClick = () => {
          showToast(args, Date.now().toString());
        };

        const buttonLabel = `Show ${args.type}`;

        return { handleClick, buttonLabel };
      },
      template: `
        <div class="flex flex-col gap-4">
          <div class="flex justify-end">
            <Button @click="handleClick" variant="solid" :label="buttonLabel" />
          </div>
        </div>
      `
    };
  },
  args: {
    label: null,
    type: toastifyDefaultType,
    ...toastifyDefaultConfig,
    ...args
  },
  parameters: {
    ...merge(
      {
        docs: {
          source: {
            transform: (code: string, { args }: { args: NotificationStoryArgs }) =>
              PreviewTemplate(args)
          }
        }
      },
      parameters
    )
  }
});

// Meta configuration of component stories
const meta: Meta<NotificationStoryArgs> = {
  title: 'Overlays/Notification',
  argTypes: {
    label: {
      name: 'label',
      type: { required: true, name: 'string' },
      description: 'Provides the notification text.',
      table: {
        category: 'Story Controls',
        type: { summary: 'string' },
        defaultValue: null,
        required: true,
        readonly: false
      },
      control: {
        type: 'text'
      }
    },
    type: {
      name: 'type',
      type: { required: false, name: 'string' },
      description: 'Determines the type of the notification bar.',
      table: {
        category: 'Story Controls',
        type: { summary: types.join('|') },
        defaultValue: { summary: toastifyDefaultType },
        required: false,
        readonly: false
      },
      control: {
        type: 'select',
        labels: capitalizeLabels([...types])
      },
      options: types
    },
    position: {
      name: 'position',
      type: { required: false, name: 'string' },
      description: 'Determines the position where the notification bar will appear.',
      table: {
        category: 'Story Controls',
        type: { summary: positions.join('|') },
        defaultValue: {
          summary: toastifyDefaultConfig.position as ToastContainerOptions['position']
        },
        required: false,
        readonly: false
      },
      control: {
        type: 'select',
        labels: capitalizeLabels(positions)
      },
      options: positions
    },
    transition: {
      name: 'transition',
      type: { required: false, name: 'string' },
      description: 'Determines the transition type of the notification.',
      table: {
        category: 'Story Controls',
        type: { summary: transitions.join('|') },
        defaultValue: { summary: toastifyDefaultConfig.transition as ToastTransition },
        required: false,
        readonly: false
      },
      control: {
        type: 'select',
        labels: capitalizeLabels(transitions)
      },
      options: transitions
    },
    autoClose: {
      name: 'autoClose',
      type: { required: false, name: 'number' },
      description:
        'Determines the delay (in ms) to close the notification. If set to false, the notification needs to be closed manually.',
      table: {
        category: 'Story Controls',
        type: { summary: 'number' },
        defaultValue: { summary: toastifyDefaultConfig.autoClose.toString() },
        required: false,
        readonly: false
      },
      control: {
        type: 'number'
      }
    },
    pauseOnHover: {
      name: 'pauseOnHover',
      type: { required: false, name: 'boolean' },
      description: 'Determines whether to keep the timer running or not on hover.',
      table: {
        category: 'Story Controls',
        type: { summary: 'boolean' },
        defaultValue: { summary: toastifyDefaultConfig.pauseOnHover.toString() },
        required: false,
        readonly: false
      },
      control: {
        type: 'boolean'
      }
    },
    closeButton: {
      name: 'closeButton',
      type: { required: false, name: 'boolean' },
      description: 'Determines whether to show or not a close button.',
      table: {
        category: 'Story Controls',
        type: { summary: 'boolean' },
        defaultValue: { summary: toastifyDefaultConfig.closeButton.toString() },
        required: false,
        readonly: false
      },
      control: {
        type: 'boolean'
      }
    },
    closeOnClick: {
      name: 'closeOnClick',
      type: { required: false, name: 'boolean' },
      description: 'Determines whether to dismiss or not the toast on click.',
      table: {
        category: 'Story Controls',
        type: { summary: 'boolean' },
        defaultValue: { summary: toastifyDefaultConfig.closeOnClick.toString() },
        required: false,
        readonly: false
      },
      control: {
        type: 'boolean'
      }
    },
    hideProgressBar: {
      name: 'hideProgressBar',
      type: { required: false, name: 'boolean' },
      description: 'Determines whether to display or not the progress bar (remaining time).',
      table: {
        category: 'Story Controls',
        type: { summary: 'boolean' },
        defaultValue: { summary: toastifyDefaultConfig.hideProgressBar.toString() },
        required: false,
        readonly: false
      },
      control: {
        type: 'boolean'
      }
    },
    pauseOnFocusLoss: {
      name: 'pauseOnFocusLoss',
      type: { required: false, name: 'boolean' },
      description: 'Determines whether to pause or not the timer when the window loses focus.',
      table: {
        category: 'Story Controls',
        type: { summary: 'boolean' },
        defaultValue: { summary: toastifyDefaultConfig.pauseOnFocusLoss.toString() },
        required: false,
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
        component: `Notification is a small bar with information that appears when an important event happens.`
      }
    }
  }
};

// All component stories
type Story = StoryObj<NotificationStoryArgs>;

export const InfoStory: Story = {
  name: 'Info',
  ...StoryTemplate({
    args: {
      label: 'В системата има нови данни.',
      type: 'info'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the info-type notification.`
        }
      }
    }
  })
};

export const SuccessStory: Story = {
  name: 'Success',
  ...StoryTemplate({
    args: {
      label: 'Вашите данни са записани успешно.',
      type: 'success'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the success-type notification.`
        }
      }
    }
  })
};

export const WarningStory: Story = {
  name: 'Warning',
  ...StoryTemplate({
    args: {
      label: 'Сигурни ли сте, че желаете да изтриете този запис?',
      type: 'warning'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the warning-type notification.`
        }
      }
    }
  })
};

export const ErrorStory: Story = {
  name: 'Error',
  ...StoryTemplate({
    args: {
      label: 'Възникна грешка при записването на данните.',
      type: 'error'
    },
    parameters: {
      docs: {
        description: {
          story: `This is the error-type notification.`
        }
      }
    }
  })
};

export default meta;
