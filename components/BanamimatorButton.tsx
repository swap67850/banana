/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { bananimatorImageDataUrl } from './BanamimatorImage';

interface BanamimatorButtonProps {
  onClick: () => void;
  'aria-label': string;
  disabled?: boolean;
}

const BanamimatorButton: React.FC<BanamimatorButtonProps> = ({ onClick, 'aria-label': ariaLabel, disabled = false }) => {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`transition-transform transform focus:outline-none rounded-full ${disabled ? 'filter grayscale opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95 duration-200'}`}
      aria-label={ariaLabel}
      aria-disabled={disabled}
    >
      <img src={bananimatorImageDataUrl} className="w-36 h-36" alt="Capture or Animate" />
    </button>
  );
};

export default BanamimatorButton;