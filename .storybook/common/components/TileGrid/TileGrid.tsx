import React from 'react';
import './TileGrid.css';

interface TileGridProps {
  children: React.ReactNode;
}

export default function TileGrid({ children }: TileGridProps) {
  return (
    <React.Fragment>
      <div className="tile-grid">{children}</div>
    </React.Fragment>
  );
}
