import { PREFIX } from '#core/constants/index.js';
import BorderTokenBox from '#storybook/common/components/BorderTokenBox/BorderTokenBox';
import type { KeyValuePairType } from '#storybook/common/components/KeyValuePair/KeyValuePair';
import TileCard from '#storybook/common/components/TileCard/TileCard';
import type { FixedTokenCardProps } from '#storybook/types/CardProps.ts';
import { toKebabCase } from '#utils/strings.utils';
import React from 'react';

export default function BorderColorCard({ name, item }: FixedTokenCardProps) {
  const details: KeyValuePairType[] = [
    {
      label: 'Tailwind CSS',
      values: [`border-${toKebabCase(name)}`]
    },
    {
      label: 'CSS Variable',
      values: [`--${PREFIX}-border-color-${toKebabCase(name)}`]
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
              borderStyle: `var(--${PREFIX}-border-style-solid)`,
              borderColor: `var(--${PREFIX}-border-color-${toKebabCase(name)})`
            }}
          />
        }
        title={name}
        details={details}
      />
    </React.Fragment>
  );
}
