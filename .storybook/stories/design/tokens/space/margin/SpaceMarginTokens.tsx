import sizeTokens from '#design/tokens/size/index.js';
import TokensLayout from '#storybook/common/components/TokensLayout/TokensLayout';
import type { TokenValue } from '#storybook/types';
import SpaceMarginCard from './SpaceMarginCard';

export default function SpaceMarginTokens() {
  const tokens = Object.fromEntries(
    Object.entries(sizeTokens.size)
      .filter(([key]) => key !== '$type')
      .map(([key, value]) => [key.replace('$', ''), value])
  ) as Record<string, TokenValue>;

  return (
    <>
      <TokensLayout
        title="Margin Space Tokens"
        description="This page outlines the margin space tokens defined in the Playground Design System. These tokens govern the external spacing between elements, helping to maintain consistent layout rhythm, separation, and visual clarity throughout the interface."
        tokens={tokens}
        CardComponent={SpaceMarginCard}
      />
    </>
  );
}
