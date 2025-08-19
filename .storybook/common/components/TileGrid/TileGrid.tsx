import React from 'react';
import './TileGrid.css';

interface TileGridProps {
  children: React.ReactNode;
}

export default function TileGrid({ children }: TileGridProps) {
  return (
    <>
      <div className="tile-grid">{children}</div>
    </>
  );
}
