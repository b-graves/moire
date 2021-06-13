import React from 'react';

import {
  Pattern as CustomPattern,
  PatternLines,
  PatternCircles,
  PatternWaves,
  PatternHexagons,
  PatternPath,
} from '@visx/pattern';

import { Bar } from '@visx/shape';


function Pattern({ variant, orientation, color, strokeWidth, width, height, layer }) {

  const makePattern = () => {
    const props = { id: layer, orientation, stroke: color, strokeWidth, width, height }
    switch (variant) {
      case "waves":
        return <PatternWaves
          {...props}
        />
      case "circles":
        return <PatternCircles id={layer} height={width} width={width} radius={orientation === "diagonal" ? strokeWidth / 2 : strokeWidth / 2} fill="black" complement={orientation === "diagonal"} />
      case "hexagons":
        return <PatternHexagons
          {...props}
        />
      case "path":
        return <PatternPath
          {...props}
        />
      default:
        return <PatternLines
          {...props}
        />
    }

  }
  return (
    <svg width="100%" height="100%" style={{ zIndex: layer === "top" ? 2 : 1 }}>
      {makePattern()}
      <Bar
        fill={`url(#${layer})`}
        x={0}
        y={0}
        width="100%"
        height="100%"
        rx={0}
      />
    </svg>
  );
}

export default Pattern;
