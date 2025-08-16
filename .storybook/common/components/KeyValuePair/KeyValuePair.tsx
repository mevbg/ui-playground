import type { TokenValue } from '#storybook/types/Tokens.ts';
import React, { useState } from 'react';
import CheckmarkIcon from '../CheckmarkIcon/CheckmarkIcon';
import CopyIcon from '../CopyIcon/CopyIcon';
import './KeyValuePair.css';

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
    <React.Fragment>
      <div className="key-value-pair">
        <label>{label}</label>
        {values.map((value, index) => (
          <div key={index} className="code-container">
            <button
              className="copy-button"
              onClick={() => handleCopy(value, index)}
              title={copiedIndex === index ? 'Copied!' : 'Copy to clipboard'}
              aria-label={`Copy ${value} to clipboard`}
            >
              {copiedIndex === index ? <CheckmarkIcon /> : <CopyIcon />}
            </button>
            <div className="code-viewport">
              <code title={value}>{value}</code>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
