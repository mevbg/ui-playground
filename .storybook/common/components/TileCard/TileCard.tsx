import { capitalize } from '#utils/strings.utils';
import React from 'react';
import type { KeyValuePairType } from '../KeyValuePair/KeyValuePair';
import KeyValuePair from '../KeyValuePair/KeyValuePair';
import './TileCard.css';

interface CardProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  header: React.ReactNode;
  controllers?: React.ReactNode;
  details: KeyValuePairType[];
  className?: string;
}

export default function Card({
  title,
  subtitle,
  children,
  header,
  controllers,
  details,
  className
}: CardProps) {
  return (
    <React.Fragment>
      <div className={`tile-card ${className}`}>
        <div className="tile-card-head">{header}</div>

        <div className="tile-card-body">
          <div className="tile-card-heading">
            <h3 className="sbdocs-title tile-card-title">{capitalize(title)}</h3>
            {subtitle && <h4 className="tile-card-subtitle">{subtitle}</h4>}
          </div>

          <div className="tile-card-details">
            {children}
            {details.map((detail, index) => (
              <KeyValuePair key={index} label={detail.label} values={detail.values} />
            ))}
          </div>

          {controllers && <div className="tile-card-controllers">{controllers}</div>}
        </div>
      </div>
    </React.Fragment>
  );
}
