import type { KeyValuePairType } from '#storybook/common/components/KeyValuePair/KeyValuePair';
import TileCard from '#storybook/common/components/TileCard/TileCard';
import TypoTokenBox from '#storybook/common/components/TypoTokenBox/TypoTokenBox';
import type { FixedTokenCardProps } from '#storybook/types/CardProps.ts';
import { toKebabCase } from '#utils/strings.utils';

export default function FontWeightCard({ name, item }: FixedTokenCardProps) {
  const details: KeyValuePairType[] = [
    {
      label: 'Tailwind CSS',
      values: [`font-${toKebabCase(name)}`]
    },
    {
      label: 'CSS Variable',
      values: [`--mev-font-weight-${toKebabCase(name)}`]
    },
    {
      label: 'Value',
      values: [item]
    }
  ];

  return (
    <>
      <TileCard
        header={
          <TypoTokenBox
            text="Удебеляване"
            style={{ fontWeight: `var(--mev-font-weight-${toKebabCase(name)})` }}
          />
        }
        title={name}
        details={details}
      />
    </>
  );
}
