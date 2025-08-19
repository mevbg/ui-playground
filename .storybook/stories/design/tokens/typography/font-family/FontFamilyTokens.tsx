import { fontFamily as fontFamilyTokens } from '#public/assets/tokens/js/static.js';
import TokensLayout from '#storybook/common/components/TokensLayout/TokensLayout';
import FontFamilyCard from './FontFamilyCard';

export default function FontFamilyTokens() {
  const { icon, ...tokens } = fontFamilyTokens;

  return (
    <>
      <TokensLayout
        title="Font Family Tokens"
        description="This page outlines the font family tokens defined in the Playground Design System. These tokens control the typographic foundation of the interface, specifying which font stacks are applied for primary content, alternative cases, or system fallbacks — ensuring consistency, readability, and cross-platform reliability."
        tokens={tokens}
        CardComponent={FontFamilyCard}
      />
    </>
  );
}
