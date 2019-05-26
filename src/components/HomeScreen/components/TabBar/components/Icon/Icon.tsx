import React from "react";
import {
  BookmarkFilled,
  BookmarkOutline,
  SearchFilled,
  SearchOutline,
  StarFilled,
  StarOutline,
} from "./icons";

interface Props {
  icon:
    | "bookmark-filled"
    | "bookmark-outline"
    | "search-filled"
    | "search-outline"
    | "star-filled"
    | "star-outline";
  fillColor: string;
  scale: number;
}

export interface IconProps {
  fillColor: string;
  scale: number;
}

const iconMap: { [key: string]: React.FC<IconProps> } = {
  "bookmark-filled": BookmarkFilled,
  "bookmark-outline": BookmarkOutline,
  "search-filled": SearchFilled,
  "search-outline": SearchOutline,
  "star-filled": StarFilled,
  "star-outline": StarOutline,
};

export const Icon = ({ icon, fillColor, scale }: Props) => {
  const Comp = iconMap[icon];

  return <Comp fillColor={fillColor} scale={scale} />;
};

Icon.defaultProps = {
  fillColor: "#ffffff",
  scale: 1,
};
