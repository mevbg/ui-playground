import fontSizeTokens from '#design/tokens/typo/font-size.tokens.js';
import TokensLayout from '#storybook/common/components/TokensLayout/TokensLayout';
import React from 'react';
import FontSizeCard from './FontSizeCard';

export default function FontSizeTokens() {
  const { base, basePercentage, ...rest } = fontSizeTokens;
  const tokens = Object.fromEntries(
    Object.entries(rest)
      .filter(([key]) => key !== '$type')
      .map(([key, value]) => [key.replace('$', ''), value])
  );

  return (
    <React.Fragment>
      <TokensLayout
        title="Font Size Tokens"
        description="This page outlines the font size tokens defined in the Playground Design System. These tokens represent a consistent typographic scale used across headings, body text, captions, and UI elements — ensuring readability, visual hierarchy, and responsive behavior across all viewports."
        tokens={tokens}
        CardComponent={FontSizeCard}
      />
    </React.Fragment>
  );
}
