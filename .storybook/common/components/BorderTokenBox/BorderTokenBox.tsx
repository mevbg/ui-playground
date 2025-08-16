import React from 'react';
import './BorderTokenBox.css';

interface BorderTokenBoxProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function BorderTokenBox({ className, style }: BorderTokenBoxProps) {
  return (
    <React.Fragment>
      <div className="border-token-box">
        <div className={`border-token-box__object ${className}`} style={style} />
      </div>
    </React.Fragment>
  );
}
