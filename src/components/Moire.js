import React, { useState, useEffect } from "react"

import Pattern from './Pattern';

import "./Moire.css"

function Moire({ spin, sideways, upAndDown, speed, variant, orientation, color, strokeWidth, width, height }) {

  let movementClass = "";
  if (spin) {
    movementClass += "spin "
  }
  if (sideways) {
    movementClass += "moveSideways "
  }
  if (upAndDown) {
    movementClass += "moveUpAndDown "
  }

  let duration = 25000;

  switch (speed) {
    case "very fast":
      duration = 5000
      break
    case "fast":
      duration = 10000
      break
    case "medium":
      duration = 20000
      break
    case "slow":
      duration = 35000
      break
    case "very slow":
      duration = 50000
      break
    default:
      duration = 20000
  }


  return (
    <div style={{ height: "100%", width: "100%", display: "flex" }}>
      <div className="patternContainer" style={{ margin: "auto", position: "relative" }}>
        <div className={movementClass} style={{ animationDuration: duration + "ms", height: "100%", width: "100%", position: "absolute", top: 0, left: 0 }}>
          <Pattern variant={variant} orientation={orientation} width={width} height={height} strokeWidth={strokeWidth} color={color} layer="top" />
        </div>
        <Pattern variant={variant} orientation={orientation} width={width} height={height} strokeWidth={strokeWidth} color={color} layer="bottom" />
      </div>
    </div>
  );
}

export default Moire;
