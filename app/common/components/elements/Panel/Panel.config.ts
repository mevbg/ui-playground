import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

// Define styles for the Panel component
const PanelStyles = {
  base: 'block',
  background: {
    none: '',
    base: 'bg-primary-base',
    gray: 'bg-gray-weakest'
  },
  rounding: {
    none: '',
    eight: 'rounded-eight',
    twelve: 'rounded-twelve'
  },
  shadow: {
    none: '',
    eight: 'shadow-eight',
    twelve: 'shadow-twelve'
  }
};

// Define default variants for the Panel component
const PanelDefaultVariants = {
  background: 'base',
  rounding: 'none',
  shadow: 'none'
} as const;

// Setup CVA for the Panel component
const { base: PanelBaseStyles, ...PanelVariantsStyles } = PanelStyles;
const PanelVariants = cva(PanelBaseStyles, {
  defaultVariants: PanelDefaultVariants,
  variants: { ...PanelVariantsStyles }
});

// Define type for the Panel component
type PanelVariantProps = VariantProps<typeof PanelVariants>;

// Export
export { PanelDefaultVariants, PanelStyles, PanelVariants, type PanelVariantProps };
