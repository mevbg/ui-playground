import { letterSpacing as letterSpacingTokens } from '#public/assets/tokens/js/static.js';
import TokensLayout from '#storybook/common/components/TokensLayout/TokensLayout';
import React from 'react';
import LetterSpacingCard from './LetterSpacingCard';

export default function LetterSpacingTokens() {
  const tokens = letterSpacingTokens;

  return (
    <React.Fragment>
      <TokensLayout
        title="Letter Spacing Tokens"
        description="This page outlines the letter spacing tokens defined in the Playground Design System. These tokens control the spacing between characters across different typographic styles, helping to optimize legibility, visual density, and the overall tone of textual elements."
        tokens={tokens}
        CardComponent={LetterSpacingCard}
      />
    </React.Fragment>
  );
}
