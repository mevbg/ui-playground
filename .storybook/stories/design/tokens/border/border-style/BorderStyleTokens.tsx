import { borderStyle as borderStyleTokens } from '#public/assets/tokens/js/static.js';
import TokensLayout from '#storybook/common/components/TokensLayout/TokensLayout';
import BorderStyleCard from './BorderStyleCard';

export default function BorderStyleTokens() {
  const tokens = borderStyleTokens;

  return (
    <>
      <TokensLayout
        title="Border Style Tokens"
        description="This page outlines the border style tokens defined in the Playground Design System. These tokens govern the visual appearance of borders across UI elements, ensuring consistent visual hierarchy, focus, and separation in component interactions."
        tokens={tokens}
        CardComponent={BorderStyleCard}
      />
    </>
  );
}
