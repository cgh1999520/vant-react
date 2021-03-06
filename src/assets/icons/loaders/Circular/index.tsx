import React, { ReactElement } from 'react';
import './index.scss';

interface Props {
  className?: string;
  loadingSize?: string;
  color?: string;
}

export default function CircularLoading({
  className,
  loadingSize,
  color
}: Props): ReactElement {
  return (
    <div
      className='loading circular-loading'
      style={{ height: loadingSize || '20px', width: loadingSize || '20px' }}
    >
      <svg
        className={className}
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle style={{ stroke: color }} cx='50' cy='50' r='45' />
      </svg>
    </div>
  );
}
