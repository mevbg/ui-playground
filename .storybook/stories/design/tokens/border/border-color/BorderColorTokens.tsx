import { borderColor as borderColorTokens } from '#public/assets/tokens/js/static.js';
import TokensLayout from '#storybook/common/components/TokensLayout/TokensLayout';
import React from 'react';
import BorderColorCard from './BorderColorCard';

export default function BorderColorTokens() {
  const tokens = borderColorTokens;

  return (
    <React.Fragment>
      <TokensLayout
        title="Border Color Tokens"
        description="This page outlines the border color tokens defined in the Playground Design System. These tokens assign specific colors to border elements based on context — such as neutral dividers, interactive states, or validation feedback — ensuring visual clarity and consistency across components."
        tokens={tokens}
        CardComponent={BorderColorCard}
      />
    </React.Fragment>
  );
}
