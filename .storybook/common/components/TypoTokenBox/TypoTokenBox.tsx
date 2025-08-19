import React from 'react';
import './TypoTokenBox.css';

interface TypoTokenBoxProps {
  text?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function TypoTokenBox({
  text = 'За миг бях в чужд, скърцащ, плюшен фотьойл.',
  className,
  style
}: TypoTokenBoxProps) {
  return (
    <>
      <div className={`typo-token-box ${className}`} style={style}>
        {text}
      </div>
    </>
  );
}
