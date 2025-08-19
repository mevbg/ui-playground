import { PREFIX } from '#core/constants/index.js';
import type { KeyValuePairType } from '#storybook/common/components/KeyValuePair/KeyValuePair';
import SpaceTokenBox from '#storybook/common/components/SpaceTokenBox/SpaceTokenBox';
import TileCard from '#storybook/common/components/TileCard/TileCard';
import type { FluidTokenCardProps } from '#storybook/types/CardProps.ts';

export default function SpaceMarginCard({ name, item }: FluidTokenCardProps) {
  const size =
    item.$value.min !== item.$value.max
      ? `${item.$value.min} → ${item.$value.max}`
      : item.$value.min;

  const details: KeyValuePairType[] = [
    {
      label: 'Tailwind CSS',
      values: [
        `m-${name}`,
        `mx-${name}`,
        `my-${name}`,
        `mt-${name}`,
        `mr-${name}`,
        `mb-${name}`,
        `ml-${name}`
      ]
    },
    {
      label: 'CSS Variable',
      values: [`--mev-size-${name}`]
    }
  ];

  return (
    <>
      <TileCard
        header={<SpaceTokenBox text="Margin" style={{ margin: `var(--${PREFIX}-size-${name})` }} />}
        title={name}
        subtitle={size}
        details={details}
      />
    </>
  );
}
