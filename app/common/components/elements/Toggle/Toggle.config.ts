import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

// Define styles for the Toggle component
const ToggleStyles = {
  base: 'inline-flex select-none gap-x-075x100',
  checked: {
    false: '',
    true: ''
  },
  disabled: {
    false: 'cursor-pointer',
    true: 'pointer-events-none'
  },
  readonly: {
    false: 'cursor-pointer',
    true: 'pointer-events-none'
  }
};

// Define default variants for the Toggle component
const ToggleDefaultVariants = {
  checked: false,
  disabled: false,
  readonly: false
} as const;

// Setup CVA for the Toggle component
const { base: ToggleBaseStyles, ...ToggleVariantsStyles } = ToggleStyles;
const ToggleVariants = cva(ToggleBaseStyles, {
  defaultVariants: ToggleDefaultVariants,
  variants: { ...ToggleVariantsStyles },
  compoundVariants: []
});

// Define type for the Toggle component
type ToggleVariantProps = VariantProps<typeof ToggleVariants>;

// Export
export { ToggleDefaultVariants, ToggleStyles, ToggleVariants, type ToggleVariantProps };
