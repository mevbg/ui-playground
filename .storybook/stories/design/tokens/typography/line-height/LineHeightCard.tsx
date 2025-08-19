import type { KeyValuePairType } from '#storybook/common/components/KeyValuePair/KeyValuePair';
import TileCard from '#storybook/common/components/TileCard/TileCard';
import TypoTokenBox from '#storybook/common/components/TypoTokenBox/TypoTokenBox';
import type { FixedTokenCardProps } from '#storybook/types/CardProps.ts';

export default function LineHeightCard({ name, item }: FixedTokenCardProps) {
  const details: KeyValuePairType[] = [
    {
      label: 'Tailwind CSS',
      values: [`leading-${name}`]
    },
    {
      label: 'CSS Variable',
      values: [`--mev-line-height-${name}`]
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
            text="България организира ексклузивно, практическо обучение за брокери с фокус върху темата „Силата на етичната продажба“."
            style={{ lineHeight: `var(--mev-line-height-${name})` }}
          />
        }
        title={name}
        details={details}
      />
    </>
  );
}
