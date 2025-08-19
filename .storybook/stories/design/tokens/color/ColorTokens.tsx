import ColorGroup from './ColorGroup';

export default function ColorTokens({ data }) {
  return (
    <>
      {data.map((group, index) => (
        <ColorGroup group={group} key={index} />
      ))}
    </>
  );
}
