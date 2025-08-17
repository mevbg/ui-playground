import sizeTokens from '#design/tokens/size/index.js';
import TokensLayout from '#storybook/common/components/TokensLayout/TokensLayout';
import type { TokenValue } from '#storybook/types';
import React from 'react';
import SpacePaddingCard from './SpacePaddingCard';

export default function SpacePaddingTokens() {
  const tokens = Object.fromEntries(
    Object.entries(sizeTokens.size)
      .filter(([key]) => key !== '$type')
      .map(([key, value]) => [key.replace('$', ''), value])
  ) as Record<string, TokenValue>;

  return (
    <React.Fragment>
      <TokensLayout
        title="Padding Space Tokens"
        description="This page outlines the padding space tokens used in the Playground Design System. These tokens control the internal spacing within components — ensuring consistent layout structure, breathing room, and alignment across various UI elements and screen sizes."
        tokens={tokens}
        CardComponent={SpacePaddingCard}
      />
    </React.Fragment>
  );
}
