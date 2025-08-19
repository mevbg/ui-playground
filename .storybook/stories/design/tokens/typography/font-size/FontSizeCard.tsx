import type { KeyValuePairType } from '#storybook/common/components/KeyValuePair/KeyValuePair';
import TileCard from '#storybook/common/components/TileCard/TileCard';
import TypoTokenBox from '#storybook/common/components/TypoTokenBox/TypoTokenBox';
import type { FluidTokenCardProps } from '#storybook/types/CardProps.ts';

export default function FontSizeCard({ name, item }: FluidTokenCardProps) {
  const size =
    item.$value.min !== item.$value.max
      ? `${item.$value.min} → ${item.$value.max}`
      : item.$value.min;

  const text =
    item.$value.min !== item.$value.max
      ? `
    Този текст е с растящ размер на шрифта от ${item.$value.min} до ${item.$value.max}.
  `
      : `
    Този текст е с фиксиран размер на шрифта на ${item.$value.min}.
  `;

  const details: KeyValuePairType[] = [
    {
      label: 'Tailwind CSS',
      values: [`text-${name}`]
    },
    {
      label: 'CSS Variable',
      values: [`--mev-font-size-${name}`]
    }
  ];

  return (
    <>
      <TileCard
        header={<TypoTokenBox text={text} style={{ fontSize: `var(--mev-font-size-${name})` }} />}
        title={name}
        subtitle={size}
        details={details}
      />
    </>
  );
}
