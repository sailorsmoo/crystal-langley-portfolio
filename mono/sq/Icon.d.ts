import * as React from 'react';
export type IconName =
  | "Icon401k"
  | "IconClaims"
  | "IconGlobe"
  | "IconHR"
  | "IconMyMedical"
  | "IconPerksWellbeing"
  | "IconProject"
  | "IconStarFilled"
  | "IconUmbrella";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
