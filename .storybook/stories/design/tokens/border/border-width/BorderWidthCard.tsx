import { PREFIX } from '#core/constants/index.js';
import BorderTokenBox from '#storybook/common/components/BorderTokenBox/BorderTokenBox';
import type { KeyValuePairType } from '#storybook/common/components/KeyValuePair/KeyValuePair';
import TileCard from '#storybook/common/components/TileCard/TileCard';
import type { FixedTokenCardProps } from '#storybook/types/CardProps.ts';

export default function BorderWidthCard({ name, item }: FixedTokenCardProps) {
  const details: KeyValuePairType[] = [
    {
      label: 'Tailwind CSS',
      values: [`border-${name}`, `border-x-${name}`, `border-y-${name}`]
    },
    {
      label: 'CSS Variable',
      values: [`--mev-border-width-${name}`]
    },
    {
      label: 'Value',
      values: [item.toString().toLowerCase()]
    }
  ];

  return (
    <>
      <TileCard
        header={
          <BorderTokenBox
            style={{
              width: '20rem',
              borderColor: `var(--${PREFIX}-border-color-gray-weak)`,
              borderStyle: `var(--${PREFIX}-border-style-solid)`,
              borderWidth: `var(--${PREFIX}-border-width-${name})`
            }}
          />
        }
        title={name}
        details={details}
      />
    </>
  );
}
