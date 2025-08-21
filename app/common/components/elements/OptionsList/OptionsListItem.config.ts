import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

// Define styles for the OptionsListItem component
const OptionsListItemStyles = {
  base: `block w-full text-primary-base text-label leading-100 border-base border-solid border-transparent select-none`,
  selected: {
    false: '',
    true: ''
  },
  disabled: {
    false: 'cursor-pointer',
    true: 'pointer-events-none'
  }
};

// Define default variants for the OptionsListItem component
const OptionsListItemDefaultVariants = {
  selected: false,
  disabled: false
} as const;

// Setup CVA for the OptionsListItem component
const { base: OptionsListItemBaseStyles, ...OptionsListItemVariantsStyles } = OptionsListItemStyles;
const OptionsListItemVariants = cva(OptionsListItemBaseStyles, {
  defaultVariants: OptionsListItemDefaultVariants,
  variants: { ...OptionsListItemVariantsStyles },
  compoundVariants: []
});

// Define type for the OptionsListItem component
type OptionsListItemVariantProps = VariantProps<typeof OptionsListItemVariants>;

// Export
export {
  OptionsListItemDefaultVariants,
  OptionsListItemStyles,
  OptionsListItemVariants,
  type OptionsListItemVariantProps
};
