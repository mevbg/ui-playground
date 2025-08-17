import * as PrimitiveColors from '#design/constants/colors/primitive-colors.constants.js';
import ArticleWrapper from '#storybook/common/components/ArticleWrapper/ArticleWrapper';
import { getStorybookColorData, orderColorGroupsByTitle } from '#storybook/utils';
import React from 'react';
import ColorTokens from '../ColorTokens';

const data = orderColorGroupsByTitle(getStorybookColorData(PrimitiveColors, 'primitive'), [
  'Monochrome',
  'Red',
  'Green'
]);

export default function PrimitiveColorTokens() {
  return (
    <React.Fragment>
      <div className="sb-unstyled">
        <ArticleWrapper title="Primitive Color Tokens">
          <p>
            This page outlines the primitive color tokens defined in the Playground Design System.
            These tokens represent the raw, context-independent color palette from which all
            contextual colors (such as background, text, or states) are derived. They serve as the
            foundational building blocks for consistent color usage throughout the interface.
          </p>
        </ArticleWrapper>

        <ColorTokens data={data} />
      </div>
    </React.Fragment>
  );
}
