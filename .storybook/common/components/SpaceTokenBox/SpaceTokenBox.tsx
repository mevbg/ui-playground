import React from 'react';
import './SpaceTokenBox.css';

interface SpaceTokenBoxProps {
  text?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SpaceTokenBox({
  text = 'Отстояние',
  className,
  style
}: SpaceTokenBoxProps) {
  return (
    <React.Fragment>
      <div className={`space-token-box ${className}`}>
        <div className="space-token-box__content" style={style}>
          <div className="space-token-box__content-text">{text}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
