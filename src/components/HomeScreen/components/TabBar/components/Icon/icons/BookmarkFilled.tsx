import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../Icon";

export const BookmarkFilled = ({ fillColor, scale }: IconProps) => {
  const width = 24 * scale;
  const height = 24 * scale;
  return (
    <Svg style={{ width, height }} width={width} height={height}>
      <Path d="M0 0h24v24H0V0z" fill="none" scale={scale} />
      <Path
        d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
        fill={fillColor}
        scale={scale}
      />
    </Svg>
  );
};
