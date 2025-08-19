import type { KeyValuePairType } from '#storybook/common/components/KeyValuePair/KeyValuePair';
import TileCard from '#storybook/common/components/TileCard/TileCard';
import TypoTokenBox from '#storybook/common/components/TypoTokenBox/TypoTokenBox';
import type { FixedTokenCardProps } from '#storybook/types/CardProps.ts';

export default function FontFamilyCard({ name, item }: FixedTokenCardProps) {
  const details: KeyValuePairType[] = [
    {
      label: 'Tailwind CSS',
      values: [`font-${name}`]
    },
    {
      label: 'CSS Variable',
      values: [`--mev-font-family-${name}`]
    },
    {
      label: 'Value',
      values: [item]
    }
  ];

  return (
    <>
      <style>{`
        .font-family-card-${name} {
          font-family: var(--mev-font-family-${name}) !important;
        }
      `}</style>
      <TileCard
        header={<TypoTokenBox className={`font-family-card-${name}`} />}
        title={name}
        details={details}
      />
    </>
  );
}
