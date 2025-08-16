import { PREFIX } from '#core/constants/index.js';
import GapTokenBox from '#storybook/common/components/GapTokenBox/GapTokenBox';
import type { KeyValuePairType } from '#storybook/common/components/KeyValuePair/KeyValuePair';
import TileCard from '#storybook/common/components/TileCard/TileCard';
import type { FluidTokenCardProps } from '#storybook/types/CardProps.ts';
import React from 'react';

export default function SpaceGapCard({ name, item }: FluidTokenCardProps) {
  const size =
    item.$value.min !== item.$value.max
      ? `${item.$value.min} → ${item.$value.max}`
      : item.$value.min;

  const details: KeyValuePairType[] = [
    {
      label: 'Tailwind CSS',
      values: [`gap-${name}`, `gap-x-${name}`, `gap-y-${name}`]
    },
    {
      label: 'CSS Variable',
      values: [`--mev-size-${name}`]
    }
  ];

  return (
    <React.Fragment>
      <TileCard
        header={<GapTokenBox style={{ gap: `var(--${PREFIX}-size-${name})` }} />}
        title={name}
        subtitle={size}
        details={details}
      />
    </React.Fragment>
  );
}
