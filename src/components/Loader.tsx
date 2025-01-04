// components/Loader.tsx

import 'ldrs/ring';
import React from 'react';

interface LoaderProps {
  size?: number;
  color?: string;
  speed?: number; // If applicable, based on ldrs options
}

export function Loader({ size = 40, color = "#fffff", speed = 2 }: LoaderProps) {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="loader" style={{ width: size, height: size }}>
        <div className="ring" style={{ borderColor: color, animationDuration: `${speed}s` }} />
      </div>
    </div>
  );
}
