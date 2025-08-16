import { PREFIX } from '#core/constants/index.js';
import type { KeyValuePairType } from '#storybook/common/components/KeyValuePair/KeyValuePair';
import SpaceTokenBox from '#storybook/common/components/SpaceTokenBox/SpaceTokenBox';
import TileCard from '#storybook/common/components/TileCard/TileCard';
import type { FluidTokenCardProps } from '#storybook/types/CardProps.ts';
import React from 'react';

export default function SpacePaddingCard({ name, item }: FluidTokenCardProps) {
  const size =
    item.$value.min !== item.$value.max
      ? `${item.$value.min} → ${item.$value.max}`
      : item.$value.min;

  const details: KeyValuePairType[] = [
    {
      label: 'Tailwind CSS',
      values: [
        `p-${name}`,
        `px-${name}`,
        `py-${name}`,
        `pt-${name}`,
        `pr-${name}`,
        `pb-${name}`,
        `pl-${name}`
      ]
    },
    {
      label: 'CSS Variable',
      values: [`--mev-size-${name}`]
    }
  ];

  return (
    <React.Fragment>
      <TileCard
        header={
          <SpaceTokenBox text="Padding" style={{ padding: `var(--${PREFIX}-size-${name})` }} />
        }
        title={name}
        subtitle={size}
        details={details}
      />
    </React.Fragment>
  );
}
