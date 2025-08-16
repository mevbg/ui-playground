import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

// Define styles for the Button component
const ButtonStyles = {
  base: 'relative border-thick border-solid inline-flex items-center cursor-pointer select-none justify-center rounded-full transition-colors disabled:opacity-50 disabled:pointer-events-none disabled:border-transparent',
  variant: {
    solid: 'border-transparent bg-red50 text-white',
    outlined: 'border-red text-red50 bg-transparent',
    pale: 'border-gray-medium text-gray-medium bg-transparent',
    ghost: 'border-transparent bg-transparent text-red50',
    floating: 'border-transparent bg-primary-base text-red50 shadow-twelve'
  },
  size: {
    regular: 'py-100x150 px-300x400'
  },
  disabled: {
    false: null,
    true: 'bg-gray-medium text-gray-strongest pointer-events-none'
  },
  loading: {
    false: null,
    true: 'pointer-events-none'
  },
  stretched: {
    false: null,
    true: 'w-full'
  }
};

// Define default variants for the Button component
const ButtonDefaultVariants = {
  variant: 'solid',
  size: 'regular',
  disabled: false,
  loading: false,
  stretched: false
} as const;

// Setup CVA for the Button component
const { base: ButtonBaseStyles, ...ButtonVariantsStyles } = ButtonStyles;
const ButtonVariants = cva(ButtonBaseStyles, {
  defaultVariants: ButtonDefaultVariants,
  variants: { ...ButtonVariantsStyles },
  compoundVariants: [
    {
      variant: 'outlined',
      disabled: true,
      className: 'border-transparent'
    },
    {
      variant: 'pale',
      disabled: true,
      className: 'border-transparent'
    }
  ]
});

// Define type for the Button component
type ButtonVariantProps = VariantProps<typeof ButtonVariants>;

// Export
export { ButtonDefaultVariants, ButtonStyles, ButtonVariants, type ButtonVariantProps };
