import { borderRadius as borderRadiusTokens } from '#public/assets/tokens/js/static.js';
import TokensLayout from '#storybook/common/components/TokensLayout/TokensLayout';
import type { TokenValue } from '#storybook/types/Tokens';
import React from 'react';
import BorderRadiusCard from './BorderRadiusCard';

export default function BorderRadiusTokens() {
  const tokens: Record<string, TokenValue> = Object.fromEntries(
    Object.entries(borderRadiusTokens).map(([key, value]) => [
      key.replace('$', ''),
      value as TokenValue
    ])
  );

  return (
    <React.Fragment>
      <TokensLayout
        title="Border Radius Tokens"
        description="This page outlines the border radius tokens defined in the Playground Design System. These tokens govern the curvature of corners across UI elements, ensuring consistent visual hierarchy, focus, and separation in component interactions."
        tokens={tokens}
        CardComponent={BorderRadiusCard}
      />
    </React.Fragment>
  );
}
