import React from 'react';
import './BoxShadowTokenBox.css';

interface BoxShadowTokenBoxProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function BoxShadowTokenBox({ className, style }: BoxShadowTokenBoxProps) {
  return (
    <>
      <div className="box-shadow-token-box">
        <div className={`box-shadow-token-box__object ${className}`} style={style} />
      </div>
    </>
  );
}
