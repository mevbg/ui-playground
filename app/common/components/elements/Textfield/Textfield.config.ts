import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

// Define styles for the Textfield component
const TextfieldStyles = {
  base: 'text-accent p-075x100 border-base border-solid border-gray-weak focus:border-red',
  type: {
    text: null,
    search: null,
    password: null,
    email: null,
    url: null,
    tel: null,
    number: null,
    textarea: null
  },
  disabled: {
    false: null,
    true: 'bg-gray-weakest text-gray-strongest pointer-events-none'
  },
  centered: {
    false: null,
    true: 'text-center'
  },
  stretched: {
    false: null,
    true: 'w-full'
  }
};

// Define default variants for the Textfield component
const TextfieldDefaultVariants = {
  type: 'text'
} as const;

// Setup CVA for the Textfield component
const { base: TextfieldBaseStyles, ...TextfieldVariantsStyles } = TextfieldStyles;
const TextfieldVariants = cva(TextfieldBaseStyles, {
  variants: { ...TextfieldVariantsStyles }
});

// Define type for the Textfield component
type TextfieldVariantProps = VariantProps<typeof TextfieldVariants>;

// Export
export { TextfieldDefaultVariants, TextfieldStyles, TextfieldVariants, type TextfieldVariantProps };
