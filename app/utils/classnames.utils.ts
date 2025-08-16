import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // Font size custom group
      'font-size': [
        'text-base',
        'text-display-min',
        'text-display-max',
        'text-display',
        'text-head-min',
        'text-head-max',
        'text-head',
        'text-title-min',
        'text-title-max',
        'text-title',
        'text-subtitle-min',
        'text-subtitle-max',
        'text-subtitle',
        'text-accent-min',
        'text-accent-max',
        'text-accent',
        'text-body-min',
        'text-body-max',
        'text-body',
        'text-label-min',
        'text-label-max',
        'text-label',
        'text-note-min',
        'text-note-max',
        'text-note',
        'text-button-min',
        'text-button-max',
        'text-button',
        'text-script-min',
        'text-script-max',
        'text-script'
      ],
      // Text color custom group
      'text-color': [
        'text-black',
        'text-gray20',
        'text-gray40',
        'text-gray60',
        'text-gray80',
        'text-gray90',
        'text-white',
        'text-red50',
        'text-red70',
        'text-red90',
        'text-green50',
        'text-green70',
        'text-green90',
        'text-primary-base',
        'text-primary-inverted',
        'text-red-base',
        'text-green-base',
        'text-gray-strongest',
        'text-gray-strong',
        'text-gray-medium',
        'text-gray-weak',
        'text-gray-weakest'
      ],
      // Border color custom group
      'border-color': [
        'border-gray-weak',
        'border-red',
        'border-transparent',
        'border-black',
        'border-gray20',
        'border-gray40',
        'border-gray60',
        'border-gray80',
        'border-gray90',
        'border-white',
        'border-red50',
        'border-red70',
        'border-red90',
        'border-green50',
        'border-green70',
        'border-green90',
        'border-primary-base',
        'border-primary-inverted',
        'border-red-base',
        'border-green-base',
        'border-gray-strongest',
        'border-gray-strong',
        'border-gray-medium',
        'border-gray-weak',
        'border-gray-weakest'
      ],
      // Border width custom group
      'border-w': [
        'border-base',
        'border-thick',
        'border-x-base',
        'border-x-thick',
        'border-y-base',
        'border-y-thick',
        'border-t-base',
        'border-t-thick',
        'border-r-base',
        'border-r-thick',
        'border-b-base',
        'border-b-thick',
        'border-l-base',
        'border-l-thick'
      ],
      // Border style custom group
      'border-style': ['border-solid', 'border-dashed'],
      // Border radius custom group
      rounded: ['rounded-two', 'rounded-four', 'rounded-full', 'rounded-circle']
    },
    conflictingClassGroups: {
      'font-size': ['font-size'],
      'text-color': ['text-color'],
      'border-color': ['border-color'],
      'border-w': ['border-w'],
      'border-style': ['border-style'],
      rounded: ['rounded']
    }
  }
});

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
