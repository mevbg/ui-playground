import TileGrid from '#storybook/common/components/TileGrid/TileGrid';
import ColorCard from './ColorCard';

export default function ColorGroup({ group: { title, items } }) {
  return (
    <>
      <h2 className="sbdocs-title">{title}</h2>
      <TileGrid>
        {items.map((item, key) => (
          <ColorCard color={item} key={key} />
        ))}
      </TileGrid>
    </>
  );
}
