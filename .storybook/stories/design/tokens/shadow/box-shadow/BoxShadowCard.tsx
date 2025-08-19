import BoxShadowTokenBox from '#storybook/common/components/BoxShadowTokenBox/BoxShadowTokenBox';
import type { KeyValuePairType } from '#storybook/common/components/KeyValuePair/KeyValuePair';
import TileCard from '#storybook/common/components/TileCard/TileCard';
import type { FixedTokenCardProps } from '#storybook/types/CardProps';

export default function BoxShadowCard({ name, item }: FixedTokenCardProps) {
  const details: KeyValuePairType[] = [
    {
      label: 'Tailwind CSS',
      values: [`shadow-${name}`]
    },
    {
      label: 'CSS Variable',
      values: [`--mev-box-shadow-${name}`]
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
          <BoxShadowTokenBox
            style={{
              width: '20rem',
              boxShadow: `var(--mev-box-shadow-${name})`
            }}
          />
        }
        title={name}
        details={details}
      />
    </>
  );
}
