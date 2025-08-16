import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

// Define styles for the Pickbox component
const PickboxStyles = {
  base: 'inline-flex select-none gap-x-075x100',
  type: {
    checkbox: '',
    radio: ''
  },
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

// Define default variants for the Pickbox component
const PickboxDefaultVariants = {
  checked: false,
  disabled: false,
  readonly: false
} as const;

// Setup CVA for the Pickbox component
const { base: PickboxBaseStyles, ...PickboxVariantsStyles } = PickboxStyles;
const PickboxVariants = cva(PickboxBaseStyles, {
  defaultVariants: PickboxDefaultVariants,
  variants: { ...PickboxVariantsStyles },
  compoundVariants: []
});

// Define type for the Pickbox component
type PickboxVariantProps = VariantProps<typeof PickboxVariants>;

// Export
export { PickboxDefaultVariants, PickboxStyles, PickboxVariants, type PickboxVariantProps };
