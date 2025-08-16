import React from 'react';
import ColorGroup from './ColorGroup';

export default function ColorTokens({ data }) {
  return (
    <React.Fragment>
      {data.map((group, index) => (
        <ColorGroup group={group} key={index} />
      ))}
    </React.Fragment>
  );
}
