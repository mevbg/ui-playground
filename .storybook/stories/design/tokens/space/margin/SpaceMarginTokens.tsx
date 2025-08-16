import sizeTokens from '#design/tokens/size/index.js';
import TokensLayout from '#storybook/common/components/TokensLayout/TokensLayout';
import React from 'react';
import SpaceMarginCard from './SpaceMarginCard';

export default function SpaceMarginTokens() {
  const tokens = Object.fromEntries(
    Object.entries(sizeTokens.size)
      .filter(([key]) => key !== '$type')
      .map(([key, value]) => [key.replace('$', ''), value])
  );

  return (
    <React.Fragment>
      <TokensLayout
        title="Margin Space Tokens"
        description="This page outlines the margin space tokens defined in the Playground Design System. These tokens govern the external spacing between elements, helping to maintain consistent layout rhythm, separation, and visual clarity throughout the interface."
        tokens={tokens}
        CardComponent={SpaceMarginCard}
      />
    </React.Fragment>
  );
}
