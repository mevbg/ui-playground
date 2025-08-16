import { boxShadow as boxShadowTokens } from '#public/assets/tokens/js/static.js';
import TokensLayout from '#storybook/common/components/TokensLayout/TokensLayout';
import React from 'react';
import BoxShadowCard from './BoxShadowCard';

export default function BoxShadowTokens() {
  const tokens = boxShadowTokens;

  return (
    <React.Fragment>
      <TokensLayout
        title="Box Shadow Tokens"
        description="This page outlines the box shadow tokens defined in the Playground Design System. These tokens provide standardized shadow values that create depth, elevation, and visual separation between UI elements, helping users understand the interface hierarchy."
        tokens={tokens}
        CardComponent={BoxShadowCard}
      />
    </React.Fragment>
  );
}
