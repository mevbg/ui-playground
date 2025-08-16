import { PREFIX } from '#core/constants/index.js';
import BorderTokenBox from '#storybook/common/components/BorderTokenBox/BorderTokenBox';
import type { KeyValuePairType } from '#storybook/common/components/KeyValuePair/KeyValuePair';
import TileCard from '#storybook/common/components/TileCard/TileCard';
import type { FixedTokenCardProps } from '#storybook/types/CardProps.ts';
import React from 'react';

export default function BorderStyleCard({ name, item }: FixedTokenCardProps) {
  const details: KeyValuePairType[] = [
    {
      label: 'Tailwind CSS',
      values: [`border-${name}`]
    },
    {
      label: 'CSS Variable',
      values: [`--mev-border-style-${name}`]
    },
    {
      label: 'Value',
      values: [item]
    }
  ];

  return (
    <React.Fragment>
      <TileCard
        header={
          <BorderTokenBox
            style={{
              width: '20rem',
              borderWidth: `var(--${PREFIX}-border-width-base)`,
              borderColor: `var(--${PREFIX}-border-color-gray-weak)`,
              borderStyle: `var(--${PREFIX}-border-style-${name})`
            }}
          />
        }
        title={name}
        details={details}
      />
    </React.Fragment>
  );
}
