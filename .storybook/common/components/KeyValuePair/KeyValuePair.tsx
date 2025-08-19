/** @jsxImportSource react */
import type { TokenValue } from '#storybook/types/Tokens.ts';
import { useState } from 'react';
import CheckmarkIcon from '../CheckmarkIcon/CheckmarkIcon';
import CopyIcon from '../CopyIcon/CopyIcon';
import './KeyValuePair.css';

// Helper function to extract string value from TokenValue
const getStringValue = (value: TokenValue): string => {
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value === 'object' && '$value' in value) {
    if (typeof value.$value === 'string') {
      return value.$value;
    }
    if (typeof value.$value === 'object') {
      return `${value.$value.min} - ${value.$value.max}`;
    }
  }
  return String(value);
};

export type KeyValuePairType = {
  label: string;
  values: TokenValue[];
};

export default function KeyValuePair({ label, values }: KeyValuePairType) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (value: string, index: number) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <>
      <div className="key-value-pair">
        <label>{label}</label>
        {values.map((value, index) => (
          <div key={index} className="code-container">
            <button
              className="copy-button"
              onClick={() => handleCopy(getStringValue(value), index)}
              title={copiedIndex === index ? 'Copied!' : 'Copy to clipboard'}
              aria-label={`Copy ${getStringValue(value)} to clipboard`}
            >
              {copiedIndex === index ? <CheckmarkIcon /> : <CopyIcon />}
            </button>
            <div className="code-viewport">
              <code title={getStringValue(value)}>{getStringValue(value)}</code>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
