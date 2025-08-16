import { borderWidth as borderWidthTokens } from '#public/assets/tokens/js/static.js';
import TokensLayout from '#storybook/common/components/TokensLayout/TokensLayout';
import React from 'react';
import BorderWidthCard from './BorderWidthCard';

export default function BorderWidthTokens() {
  const tokens = borderWidthTokens;

  return (
    <React.Fragment>
      <TokensLayout
        title="Border Width Tokens"
        description="This page outlines the border width tokens defined in the Playground Design System. These tokens control the thickness of borders applied across components, ensuring consistent visual weight, hierarchy, and structural clarity throughout the interface."
        tokens={tokens}
        CardComponent={BorderWidthCard}
      />
    </React.Fragment>
  );
}
