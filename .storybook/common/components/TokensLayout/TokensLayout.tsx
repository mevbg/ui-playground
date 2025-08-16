import type { CardComponentProps } from '#storybook/types/CardProps.ts';
import type { TokenValue } from '#storybook/types/Tokens.ts';
import React from 'react';
import ArticleWrapper from '../ArticleWrapper/ArticleWrapper';
import TileGrid from '../TileGrid/TileGrid';

export default function TokensLayout({
  title,
  description,
  tokens,
  CardComponent
}: {
  title: string;
  description?: string;
  tokens: Record<string, TokenValue>;
  CardComponent: React.ComponentType<CardComponentProps>;
}) {
  return (
    <React.Fragment>
      <div className="sb-unstyled">
        <ArticleWrapper title={title}>
          <p>{description}</p>
        </ArticleWrapper>

        <TileGrid>
          {Object.keys(tokens).map((item, index) => {
            const tokenValue = tokens[item];
            return <CardComponent key={index} name={item} item={tokenValue} />;
          })}
        </TileGrid>
      </div>
    </React.Fragment>
  );
}
