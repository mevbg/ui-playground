import { fontWeight as fontWeightTokens } from '#public/assets/tokens/js/static.js';
import TokensLayout from '#storybook/common/components/TokensLayout/TokensLayout';
import React from 'react';
import FontWeightCard from './FontWeightCard';

export default function FontWeightTokens() {
  const tokens = fontWeightTokens;

  return (
    <React.Fragment>
      <TokensLayout
        title="Font Weight Tokens"
        description="This page outlines the font weight tokens defined in the Playground Design System. These tokens control the available levels of typographic emphasis — ranging from light to bold — used consistently across text elements to convey hierarchy, structure, and tone."
        tokens={tokens}
        CardComponent={FontWeightCard}
      />
    </React.Fragment>
  );
}
