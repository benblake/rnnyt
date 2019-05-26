import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../Icon";

export const BookmarkOutline = ({ fillColor, scale }: IconProps) => {
  const width = 24 * scale;
  const height = 24 * scale;
  return (
    <Svg style={{ width, height }} width={width} height={height}>
      <Path d="M0 0h24v24H0V0z" fill="none" scale={scale} />
      <Path
        d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12z"
        fill={fillColor}
        scale={scale}
      />
    </Svg>
  );
};
