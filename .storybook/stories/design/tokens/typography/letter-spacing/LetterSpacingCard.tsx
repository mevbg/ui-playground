import type { KeyValuePairType } from '#storybook/common/components/KeyValuePair/KeyValuePair';
import TileCard from '#storybook/common/components/TileCard/TileCard';
import TypoTokenBox from '#storybook/common/components/TypoTokenBox/TypoTokenBox';
import type { FixedTokenCardProps } from '#storybook/types/CardProps.ts';

export default function LetterSpacingCard({ name, item }: FixedTokenCardProps) {
  const details: KeyValuePairType[] = [
    {
      label: 'Tailwind CSS',
      values: [`tracking-${name}`]
    },
    {
      label: 'CSS Variable',
      values: [`--mev-letter-spacing-${name}`]
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
            text="Кърнинг"
            style={{ letterSpacing: `var(--mev-letter-spacing-${name})` }}
          />
        }
        title={name}
        details={details}
      />
    </>
  );
}
