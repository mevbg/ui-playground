import sizeTokens from '#design/tokens/size/index.js';
import TokensLayout from '#storybook/common/components/TokensLayout/TokensLayout';
import type { TokenValue } from '#storybook/types';
import SpaceGapCard from './SpaceGapCard';

export default function SpaceGapTokens() {
  const tokens = Object.fromEntries(
    Object.entries(sizeTokens.size)
      .filter(([key]) => key !== '$type')
      .map(([key, value]) => [key.replace('$', ''), value])
  ) as Record<string, TokenValue>;

  return (
    <>
      <TokensLayout
        title="Gap Space Tokens"
        description="This page outlines the gap tokens used in the Playground Design System. These tokens control the spacing between items within layout structures like stacks, grids, and flex containers — ensuring consistent alignment, rhythm, and responsiveness in component compositions."
        tokens={tokens}
        CardComponent={SpaceGapCard}
      />
    </>
  );
}
