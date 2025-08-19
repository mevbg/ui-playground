import { lineHeight as lineHeightTokens } from '#public/assets/tokens/js/static.js';
import TokensLayout from '#storybook/common/components/TokensLayout/TokensLayout';
import type { TokenValue } from '#storybook/types';
import LineHeightCard from './LineHeightCard';

export default function LineHeightTokens() {
  const { none, ...tokens } = Object.fromEntries(
    Object.entries(lineHeightTokens).map(([key, value]) => [key.replace('$', ''), value])
  ) as Record<string, TokenValue>;

  return (
    <>
      <TokensLayout
        title="Line Height Tokens"
        description="This page outlines the line height tokens defined in the Playground Design System. These tokens control the vertical rhythm of text, ensuring optimal readability, visual balance, and spacing consistency across various text sizes and components."
        tokens={tokens}
        CardComponent={LineHeightCard}
      />
    </>
  );
}
