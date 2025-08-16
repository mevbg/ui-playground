import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

// Define styles for the Chip component
const ChipStyles = {
  base: 'inline-block text-accent leading-100 py-050x050 px-250x300 rounded-full border-base border-solid select-none',
  selected: {
    false: 'border-gray60',
    true: 'border-transparent bg-red50 text-white'
  },
  readonly: {
    false: 'cursor-pointer',
    true: 'pointer-events-none'
  }
};

// Define default variants for the Chip component
const ChipDefaultVariants = {
  selected: false,
  readonly: false
} as const;

// Setup CVA for the Chip component
const { base: ChipBaseStyles, ...ChipVariantsStyles } = ChipStyles;
const ChipVariants = cva(ChipBaseStyles, {
  defaultVariants: ChipDefaultVariants,
  variants: { ...ChipVariantsStyles },
  compoundVariants: []
});

// Define type for the Chip component
type ChipVariantProps = VariantProps<typeof ChipVariants>;

// Export
export { ChipDefaultVariants, ChipStyles, ChipVariants, type ChipVariantProps };
