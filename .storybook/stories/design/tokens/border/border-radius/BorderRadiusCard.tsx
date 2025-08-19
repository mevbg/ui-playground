import BorderTokenBox from '#storybook/common/components/BorderTokenBox/BorderTokenBox';
import type { KeyValuePairType } from '#storybook/common/components/KeyValuePair/KeyValuePair';
import TileCard from '#storybook/common/components/TileCard/TileCard';
import type { FixedTokenCardProps } from '#storybook/types/CardProps.ts';

export default function BorderRadiusCard({ name, item }: FixedTokenCardProps) {
  const details: KeyValuePairType[] = [
    {
      label: 'Tailwind CSS',
      values: [`rounded-${name}`]
    },
    {
      label: 'CSS Variable',
      values: [`--mev-border-radius-${name}`]
    },
    {
      label: 'Value',
      values: [item.toString().toLowerCase()]
    }
  ];

  return (
    <>
      <style>{`
        .border-radius-card-${name} {
          width: ${name === 'full' ? '20rem' : '7rem'};
          height: ${name === 'full' ? '5rem' : '7rem'};
          border: var(--mev-border-width-base) var(--mev-border-style-solid) var(--mev-border-color-gray-weak) !important;
          border-radius: var(--mev-border-radius-${name});
        }
      `}</style>
      <TileCard
        header={<BorderTokenBox className={`border-radius-card-${name}`} />}
        title={name}
        details={details}
      />
    </>
  );
}
