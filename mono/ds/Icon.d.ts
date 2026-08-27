import * as React from 'react';
export type IconName =
  | "IconAdd12"
  | "IconAdd16"
  | "IconCaretDown20"
  | "IconCaretUp20"
  | "IconCheck20"
  | "IconConfirmCircleFilled16"
  | "IconDelivery16"
  | "IconDownCaret16"
  | "IconFavorite16"
  | "IconGiftBox16"
  | "IconLeftCaret24"
  | "IconLogo16"
  | "IconRight16"
  | "IconShippingCorkscrew32"
  | "IconSubtract12"
  | "IconUpCaret16"
  | "IconVisibility20"
  | "IconsBrandAmExStyleDefault"
  | "IconsBrandAmExStyleInverted"
  | "IconsBrandAmExStyleInvertedMonochrome"
  | "IconsBrandAmExStyleMonochrome"
  | "IconsBrandDiscoverStyleDefault"
  | "IconsBrandDiscoverStyleInverted"
  | "IconsBrandDiscoverStyleInvertedMonochrome"
  | "IconsBrandDiscoverStyleMonochrome"
  | "IconsBrandMastercardStyleDefault"
  | "IconsBrandMastercardStyleInverted"
  | "IconsBrandMastercardStyleInvertedMonochrome"
  | "IconsBrandMastercardStyleMonochrome"
  | "IconsBrandVisaStyleDefault"
  | "IconsBrandVisaStyleInverted"
  | "IconsBrandVisaStyleInvertedMonochrome"
  | "IconsBrandVisaStyleMonochrome";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
