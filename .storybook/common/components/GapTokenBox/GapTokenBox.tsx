import React from 'react';
import './GapTokenBox.css';

interface GapTokenBoxProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function GapTokenBox({ className, style }: GapTokenBoxProps) {
  return (
    <React.Fragment>
      <div className={`gap-token-box ${className}`}>
        <div className="gap-token-box__grid" style={style}>
          <div className="gap-token-box__cell">Cell</div>
          <div className="gap-token-box__cell">Cell</div>
          <div className="gap-token-box__cell">Cell</div>
          <div className="gap-token-box__cell">Cell</div>
        </div>
      </div>
    </React.Fragment>
  );
}
