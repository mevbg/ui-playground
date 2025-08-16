import React from 'react';
interface CopyIconProps {
  width?: string | number;
  height?: string | number;
}

export default function CopyIcon({ width = 16, height = 16 }: CopyIconProps) {
  return (
    <React.Fragment>
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <rect
          x="9"
          y="9"
          width="13"
          height="13"
          rx="2"
          ry="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </React.Fragment>
  );
}
