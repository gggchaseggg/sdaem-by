export type SvgIconProp = {
  fillColor?: string;
  className?: string;
  width?: number;
  height?: number;
};

export type FavoritesHeartIconProp = SvgIconProp & {
  fillOpacity?: number;
  strokeColor?: string;
};
