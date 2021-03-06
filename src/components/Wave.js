import React, { useState } from 'react';
import { css } from '@emotion/core';

export default function Wave() {
  const [waves, setWaves] = useState(0);
  const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

  return (
    <button
      type="button"
      css={css`
        background: rebeccapurple;
        border: none;
        color: #fff;
        font-size: 1.25rem;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  );
}
