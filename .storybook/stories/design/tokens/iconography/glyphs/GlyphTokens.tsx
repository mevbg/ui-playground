import { icons } from '#design/configs/icons.config.js';
import ArticleWrapper from '#storybook/common/components/ArticleWrapper/ArticleWrapper';
import { IconGallery, IconItem } from '@storybook/addon-docs/blocks';
import React from 'react';

export default function GlyphTokens() {
  return (
    <React.Fragment>
      <div className="sb-unstyled">
        <ArticleWrapper title="Iconography Tokens">
          <p>
            This page outlines the iconography tokens defined in the Playground Design System. These
            tokens represent the standardized set of icons used across the platform, defining their
            semantic names and corresponding glyph references. They ensure consistent icon usage,
            scalability, and visual coherence throughout the user interface.
          </p>
        </ArticleWrapper>

        <IconGallery>
          {Object.keys(icons.list).map((icon) => (
            <IconItem name={icon} key={icon}>
              <i data-i={icon} />
            </IconItem>
          ))}
        </IconGallery>
      </div>
    </React.Fragment>
  );
}
