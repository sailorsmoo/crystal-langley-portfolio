// Components.d.ts — the complete catalog of the 97 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Accordion) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Accordion" (node 472:11934)
export interface AccordionProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "expanded";
}

// figma layer: "_Accordion-Info" (node 472:11914)
export interface AccordionInfoProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Item". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "_Accordion-Info-Expanded" (node 472:11915)
export interface AccordionInfoExpandedProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Highlights". */
  text1?: string;
  /** Text content; defaults to "Acquiring coveted wines has long been a difficult feat—that is, until now. Receive the world’s most desired wines delivered directly to your door and the passionate stories behind them.". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "ArrowLink" (node 4136:16518)
export interface ArrowLinkProps {
  className?: string;
  style?: React.CSSProperties;
  direction?: "leftarrow" | "rightarrow";
  state?: "default" | "disabled" | "hover" | "active";
}

// figma layer: "_ArrowLink" (node 4136:16507)
export interface ArrowLink2Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Shop our Wines". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "_ArrowLinkLeft" (node 4136:16513)
export interface ArrowLinkLeftProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Shop our Wines". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Button" (node 32:2921)
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "primary" | "primary:hover" | "secondary" | "secondary:hover" | "tertiary" | "tertiary:hover" | "quaternary" | "quaternary:hover" | "add to cart" | "add to cart:hover";
}

// figma layer: "_Button_ExtraSm" (node 4136:10678)
export interface ButtonExtraSmProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_Button_Lg" (node 4136:10704)
export interface ButtonLgProps {
  className?: string;
  style?: React.CSSProperties;
  hasText?: boolean;
  text?: string;
  hasLeftIcon?: boolean;
  leftIcon?: React.ReactNode;
  hasRightIcon?: boolean;
  rightIcon?: React.ReactNode;
}

// figma layer: "ButtonMaster" (node 4136:10709)
export interface ButtonMasterProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "button_lg" | "button_md" | "button_sm" | "button_extrasm";
  state?: "active" | "destructive" | "disabled" | "hover" | "outlined" | "textonly" | "primary" | "destructive/active" | "destructive/hover" | "destructive/disabled" | "outlined/white" | "outlined/white/hover" | "active:outlined/white" | "quantity/default" | "quantity/disabled" | "gold" | "gold:hover" | "gold:active" | "gold:adisabled" | "addcart" | "addcart:hover" | "addcart:active" | "addcart:disabled" | "grey/outlined" | "grey/outlined:hover" | "grey/outlined:active" | "outlined:hover" | "black/outlined" | "black/outlined:hover";
}

// figma layer: "_Button_Md" (node 4136:10698)
export interface ButtonMdProps {
  className?: string;
  style?: React.CSSProperties;
  hasText?: boolean;
  leftButton?: React.ReactNode;
  hasLeftIcon?: boolean;
  text?: string;
  hasRightIcon?: boolean;
  rightButton?: React.ReactNode;
}

// figma layer: "_Button_Sm" (node 4136:10673)
export interface ButtonSmProps {
  className?: string;
  style?: React.CSSProperties;
  hasRightIcon?: boolean;
  leftIcon?: React.ReactNode;
  hasText?: boolean;
  text?: string;
  hasLeftIcon?: boolean;
  rightIcon?: React.ReactNode;
}

// figma layer: "CTAS" (node 4136:18333)
export interface CTASProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "add to cart" | "view wine" | "qty" | "hover" | "view:hover" | "type6";
  /** Text content; defaults to "ADD TO CART". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "_CheckBox" (node 453:12221)
export interface CheckBoxProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Make this a default card". */
  text1?: string;
  /** Text content; defaults to "Check this box to send a gift message to the recipient". */
  text2?: string;
}

// figma layer: "_CheckBox:active" (node 453:12222)
export interface CheckBoxActiveProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Make this a default card". */
  text1?: string;
  /** Text content; defaults to "Check this box to send a gift message to the recipient". */
  text2?: string;
}

// figma layer: "Checkbox" (node 453:12235)
export interface CheckboxProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "defaut" | "active" | "disabled" | "active:disabled";
}

// figma layer: "Content Card_Desktop" (node 4158:21382)
export interface ContentCardDesktopProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "badge" | "release date only";
}

// figma layer: "_Content Card_Desktop" (node 4158:21354)
export interface ContentCardDesktop2Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "CONTENT TYPE". */
  text1?: string;
  /** Text content; defaults to "|". */
  text2?: string;
  /** Text content; defaults to "CONTENT RELEASE DATE". */
  text3?: string;
  /** Text content; defaults to "Event Description or Story Title truncated to fill frame. Event Description or Story Title truncated to fill frame. Event Description or Story Title truncated to fill frame. ". */
  text4?: string;
}

// figma layer: "_Desktop-PriceCard" (node 2193:584)
export interface DesktopPriceCardProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Most Popular". */
  text1?: string;
  /** Text content; defaults to "Price Card". */
  text2?: string;
  /** Text content; defaults to "A brief description explaning the offering (e.g., a wine club)and its unique value proposition.". */
  text3?: string;
  /** Text content; defaults to "$425/month". */
  text4?: string;
}

// figma layer: "Desktop_ProductCard_Horizontal" (node 4136:19077)
export interface DesktopProductCardHorizontalProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "hover";
  scores?: boolean;
  secondaryBadges?: boolean;
  sommBadge?: boolean;
  quantitySelector?: boolean;
  reviews?: boolean;
  /** Text content; defaults to "2022 Mind Your Ps and Qs Columbia Valley Piquette 4-pack". */
  text1?: string;
  /** Text content; defaults to "Breathless Sparkling Wines |  Carneros & Russian River". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Desktop-Split_Content_Block/_Feature Item" (node 2204:783)
export interface DesktopSplitContentBlockFeatureProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Add-on integrations available". */
  text1?: string;
}

// figma layer: "_Desktop-Table" (node 2319:40115)
export interface DesktopTableProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Desktop-Table" (node 2319:43440)
export interface DesktopTable2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Discover Card_Desktop" (node 4158:21368)
export interface DiscoverCardDesktopProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2" | "date only";
  /** Text content; defaults to "Event Description or Story Title truncated to fill frame. Event Description or Story Title truncated to fill frame. Event Description or Story Title truncated to fill frame. Event Description or Story Title truncated to fill frame. Event Description or Story Title truncated to fill frame. Event Description or Story Title truncated to fill frame. ". */
  text1?: string;
}

// figma layer: "favorite-icon" (node 4136:18348)
export interface FavoriteIconProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "saved";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Feature Item" (node 2204:796)
export interface FeatureItemProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "filled";
}

// figma layer: "_Feature Item" (node 2204:782)
export interface FeatureItem2Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "2 to 10 service providers". */
  text1?: string;
}

// figma layer: "Form Control" (node 4155:18669)
export interface FormControlProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "checkbox" | "radio" | "switch";
  state?: "active" | "default" | "disabled" | "hover";
}

// figma layer: "_Form Control/CheckBox" (node 4155:18607)
export interface FormControlCheckBoxProps {
  className?: string;
  style?: React.CSSProperties;
  leftControl?: boolean;
  rightControl?: boolean;
  leftIcon?: React.ReactNode;
  /** Text content; defaults to "Control button heading". */
  text1?: string;
  /** Text content; defaults to "Description of what this control will do". */
  text2?: string;
}

// figma layer: "_Form Control/Radio" (node 4155:18619)
export interface FormControlRadioProps {
  className?: string;
  style?: React.CSSProperties;
  leftControl?: boolean;
  rightControl?: boolean;
  /** Text content; defaults to "Control button heading". */
  text1?: string;
  /** Text content; defaults to "Description of what this control will do". */
  text2?: string;
}

// figma layer: "_Form Control/Switch" (node 4155:18639)
export interface FormControlSwitchProps {
  className?: string;
  style?: React.CSSProperties;
  rightON?: boolean;
  leftController?: boolean;
  rightOFF?: boolean;
  rightControl?: boolean;
  leftON?: boolean;
  leftOFF?: boolean;
  /** Text content; defaults to "Control button heading". */
  text1?: string;
  /** Text content; defaults to "Description of what this control will do". */
  text2?: string;
}

// figma layer: "12_icon_add" (node 4136:18329)
export interface IconAdd12Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "16_icon_add" (node 4136:10666)
export interface IconAdd162Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "20-Icon_Caret-Down" (node 471:27251)
export interface IconCaretDown202Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "20-Icon_Caret-Up" (node 471:27257)
export interface IconCaretUp202Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "20-Icon_Check" (node 395:3154)
export interface IconCheck20Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "16_icon_delivery" (node 4136:18353)
export interface IconDelivery16Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "16_icon_favorite" (node 4136:10663)
export interface IconFavorite16Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "16_icon_gift_box" (node 4147:19803)
export interface IconGiftBox16Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "16_icon_logo" (node 4136:18229)
export interface IconLogo16Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "16_Icon_Right" (node 4136:16505)
export interface IconRight16Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "32_icon_shipping_corkscrew" (node 4155:16767)
export interface IconShippingCorkscrew32Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "12_icon_subtract" (node 4136:18325)
export interface IconSubtract12Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "16_icon_up_caret" (node 183:15486)
export interface IconUpCaret16Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "20-Icon_Visibility" (node 187:1234)
export interface IconVisibility20Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Input field_New" (node 183:15581)
export interface InputFieldNewProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "focused" | "filled" | "cannot edit" | "error empty" | "error filled" | "options open" | "options closed";
}

// figma layer: "_Input field_New" (node 183:15545)
export interface InputFieldNew4Props {
  className?: string;
  style?: React.CSSProperties;
  hasInteriorFrame?: boolean;
  hasDropDown?: boolean;
  showTopSection?: boolean;
  hasCounter?: boolean;
  hasLabel?: boolean;
  label?: string;
  counterText?: string;
  hasBottomSection?: boolean;
  iconRight?: React.ReactNode;
  helperText?: string;
  hasHelperText?: boolean;
  labelInputText?: string;
  hasLabelInputText?: boolean;
  iconLeft?: React.ReactNode;
  hasIconRight?: boolean;
  hasAccountability?: boolean;
  hasIconLeft?: boolean;
  /** Text content; defaults to "Option 1". */
  text1?: string;
  /** Text content; defaults to "Option 2". */
  text2?: string;
  /** Text content; defaults to "Option 3". */
  text3?: string;
  /** Text content; defaults to "Option 4". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "ListField" (node 4148:25709)
export interface ListFieldProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "disabled" | "filled" | "hover" | "uc:disabled";
}

// figma layer: "_ListField" (node 4148:25704)
export interface ListField2Props {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
}

// figma layer: "Logo_Master" (node 4146:18511)
export interface LogoMasterProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "black" | "blue" | "white" | "blue header" | "white header";
}

// figma layer: "_Logo_Master" (node 4146:18482)
export interface LogoMaster2Props {
  className?: string;
  style?: React.CSSProperties;
  hasTag?: boolean;
}

// figma layer: "Mobile_Pagination" (node 4146:19528)
export interface MobilePaginationProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "focused" | "hover";
}

// figma layer: "_Mobile_Pagination_Default" (node 4146:19522)
export interface MobilePaginationDefaultProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_Mobile-PriceCard" (node 2193:541)
export interface MobilePriceCardProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Most Popular". */
  text1?: string;
  /** Text content; defaults to "Price Card". */
  text2?: string;
  /** Text content; defaults to "A brief description explaning the offering (e.g., a wine club)and its unique value proposition.". */
  text3?: string;
  /** Text content; defaults to "$425/month". */
  text4?: string;
}

// figma layer: "_Mobile-Table" (node 2343:33280)
export interface MobileTableProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Mobile-Table" (node 2343:35013)
export interface MobileTable2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "NavBreadcrumb" (node 4136:11923)
export interface NavBreadcrumbProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "active";
}

// figma layer: "Nav-Item" (node 2348:24428)
export interface NavItemProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "highlighted";
}

// figma layer: "_Nav-Item" (node 2348:24421)
export interface NavItem2Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Link". */
  text1?: string;
}

// figma layer: "NavTab/Desktop" (node 4136:11857)
export interface NavTabDesktopProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "hover" | "active" | "disabled";
}

// figma layer: "2ndBadge" (node 4136:18365)
export interface NdBadge2Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "does not ship to";
  /** Text content; defaults to "Comp. Shipping on 6+". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Price" (node 4136:18313)
export interface PriceProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "sold out";
  regPrice?: boolean;
  /** Text content; defaults to "$300.00". */
  text1?: string;
  /** Text content; defaults to "Reg: $380.00". */
  text2?: string;
}

// figma layer: "Price Card" (node 2195:916)
export interface PriceCardProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "desktop" | "mobile" | "tablet";
}

// figma layer: "Primary-Badge" (node 4147:19728)
export interface PrimaryBadgeProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "exclusive" | "last chance" | "shipping promo" | "bundle" | "sold out";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "_Primary-Badge" (node 4147:19725)
export interface PrimaryBadge2Props {
  className?: string;
  style?: React.CSSProperties;
  hasIcon?: boolean;
  badgeTitle?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Quote Block" (node 4155:16783)
export interface QuoteBlockProps {
  className?: string;
  style?: React.CSSProperties;
  fill?: "filled" | "outline";
}

// figma layer: "_QuoteBlock" (node 4155:16778)
export interface QuoteBlock2Props {
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  hasIcon?: boolean;
  /** Text content; defaults to "From our sommeliers". */
  text1?: string;
  /** Text content; defaults to "“Describe why we curated this wine set, and for what occasion”". */
  text2?: string;
}

// figma layer: "_Quoteblock" (node 4155:16772)
export interface QuoteblockProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  hasIcon?: boolean;
  /** Text content; defaults to "From our sommeliers". */
  text1?: string;
  /** Text content; defaults to "“Describe why we curated this wine set, and for what occasion”". */
  text2?: string;
}

// figma layer: "Radio-Button" (node 453:13871)
export interface RadioButtonProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "active" | "disabled" | "active:disabled";
}

// figma layer: "_Radio-Button" (node 453:13841)
export interface RadioButton2Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Make this a default card". */
  text1?: string;
  /** Text content; defaults to "Check this box to send a gift message to the recipient". */
  text2?: string;
}

// figma layer: "Reviews" (node 4136:18263)
export interface ReviewsProps {
  className?: string;
  style?: React.CSSProperties;
  rating?: "no reviews" | "5" | "4.5" | "4" | "3.5" | "3";
  /** Text content; defaults to "5.0". */
  text1?: string;
}

// figma layer: "_SMSN_dot" (node 4136:14599)
export interface SMSNDotProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_SMSN_ring" (node 4136:14602)
export interface SMSNRingProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_SMSN_stamp" (node 4136:14605)
export interface SMSNStampProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Score" (node 4136:18221)
export interface ScoreProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "JD|90". */
  text1?: string;
}

// figma layer: "Scores" (node 4136:18224)
export interface ScoresProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "ScrollBar" (node 4136:18238)
export interface ScrollBarProps {
  className?: string;
  style?: React.CSSProperties;
  view?: "default" | "2" | "3" | "4";
}

// figma layer: "Shelf Talker" (node 4147:19816)
export interface ShelfTalkerProps {
  className?: string;
  style?: React.CSSProperties;
  device?: "desktop" | "mobile";
}

// figma layer: "_ShelfTalker_Desktop" (node 4147:19810)
export interface ShelfTalkerDesktopProps {
  className?: string;
  style?: React.CSSProperties;
  hasIcon?: boolean;
  swapIcon?: React.ReactNode;
  /** Text content; defaults to "Featured Gift Setss". */
  text1?: string;
}

// figma layer: "_ShelfTalker_Mobile" (node 4147:19813)
export interface ShelfTalkerMobileProps {
  className?: string;
  style?: React.CSSProperties;
  hasIcon?: boolean;
  swapIcon?: React.ReactNode;
  /** Text content; defaults to "Featured Gift Setss". */
  text1?: string;
}

// figma layer: "SomeBadge" (node 4136:18235)
export interface SomeBadgeProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Somm Favorite". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Stamp" (node 4136:14633)
export interface StampProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "smsn_dot" | "smsn_ring" | "smsn_stamp";
  color?: "black" | "blue" | "white";
}

// figma layer: "StoryCard" (node 4158:20721)
export interface StoryCardProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover";
}

// figma layer: "_StoryCard" (node 4158:20712)
export interface StoryCard2Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "News". */
  text1?: string;
  /** Text content; defaults to "Experience Sommsation in Park City 2023". */
  text2?: string;
  /** Text content; defaults to "Sundance Film Festival returned to Park City this year, celebrating independent filmmakers and their works of art in-person for the first time in 3 years. Sommsation delightfully joined the festivities with our own premiere of the Sommsation Lounge - an intimate wine experience pop-up curated to sip, connect and celebrate with Sundance Festival attendees and wine lovers alike.-". */
  text3?: string;
  /** Text content; defaults to "By Sommsation - January 2023". */
  text4?: string;
}

// figma layer: "Tab" (node 452:15732)
export interface TabProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "active";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "_Tab" (node 452:15725)
export interface Tab2Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Link". */
  text1?: string;
}

// figma layer: "TabFilter/Desktop" (node 4136:11807)
export interface TabFilterDesktopProps {
  className?: string;
  style?: React.CSSProperties;
  states?: "default" | "active" | "disabled" | "hover" | "gift card default" | "gift card active" | "text only";
}

// figma layer: "Table" (node 2343:68173)
export interface TableProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "desktop" | "mobile" | "tablet";
}

// figma layer: "_TableCell" (node 2315:16591)
export interface TableCellProps {
  className?: string;
  style?: React.CSSProperties;
  showCheckmark?: boolean;
  show?: boolean;
  showAddOn?: boolean;
  /** Text content; defaults to "--". */
  text1?: string;
  /** Text content; defaults to "add-on available". */
  text2?: string;
}

// figma layer: "_Table-Header" (node 2315:15244)
export interface TableHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Features". */
  text1?: string;
}

// figma layer: "Table-Header" (node 2315:15247)
export interface TableHeader2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_Table-Section-Header" (node 2315:16599)
export interface TableSectionHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Customer". */
  text1?: string;
}

// figma layer: "_Table-Top-Section" (node 2319:11493)
export interface TableTopSectionProps {
  className?: string;
  style?: React.CSSProperties;
  show4thTableHeader?: boolean;
}

// figma layer: "Table-Top-Section" (node 2319:11504)
export interface TableTopSection2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_Tablet-PriceCard" (node 2193:750)
export interface TabletPriceCardProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Most Popular". */
  text1?: string;
  /** Text content; defaults to "Price Card". */
  text2?: string;
  /** Text content; defaults to "A brief description explaning the offering (e.g., a wine club)and its unique value proposition.". */
  text3?: string;
  /** Text content; defaults to "$425/month". */
  text4?: string;
}

// figma layer: "_Tablet-Table" (node 2343:24489)
export interface TabletTableProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Tablet-Table" (node 2343:26222)
export interface TabletTable2Props {
  className?: string;
  style?: React.CSSProperties;
}

declare const Accordion: React.FC<AccordionProps>;
declare const AccordionInfo: React.FC<AccordionInfoProps>;
declare const AccordionInfoExpanded: React.FC<AccordionInfoExpandedProps>;
declare const ArrowLink: React.FC<ArrowLinkProps>;
declare const ArrowLink2: React.FC<ArrowLink2Props>;
declare const ArrowLinkLeft: React.FC<ArrowLinkLeftProps>;
declare const Button: React.FC<ButtonProps>;
declare const ButtonExtraSm: React.FC<ButtonExtraSmProps>;
declare const ButtonLg: React.FC<ButtonLgProps>;
declare const ButtonMaster: React.FC<ButtonMasterProps>;
declare const ButtonMd: React.FC<ButtonMdProps>;
declare const ButtonSm: React.FC<ButtonSmProps>;
declare const CTAS: React.FC<CTASProps>;
declare const CheckBox: React.FC<CheckBoxProps>;
declare const CheckBoxActive: React.FC<CheckBoxActiveProps>;
declare const Checkbox: React.FC<CheckboxProps>;
declare const ContentCardDesktop: React.FC<ContentCardDesktopProps>;
declare const ContentCardDesktop2: React.FC<ContentCardDesktop2Props>;
declare const DesktopPriceCard: React.FC<DesktopPriceCardProps>;
declare const DesktopProductCardHorizontal: React.FC<DesktopProductCardHorizontalProps>;
declare const DesktopSplitContentBlockFeature: React.FC<DesktopSplitContentBlockFeatureProps>;
declare const DesktopTable: React.FC<DesktopTableProps>;
declare const DesktopTable2: React.FC<DesktopTable2Props>;
declare const DiscoverCardDesktop: React.FC<DiscoverCardDesktopProps>;
declare const FavoriteIcon: React.FC<FavoriteIconProps>;
declare const FeatureItem: React.FC<FeatureItemProps>;
declare const FeatureItem2: React.FC<FeatureItem2Props>;
declare const FormControl: React.FC<FormControlProps>;
declare const FormControlCheckBox: React.FC<FormControlCheckBoxProps>;
declare const FormControlRadio: React.FC<FormControlRadioProps>;
declare const FormControlSwitch: React.FC<FormControlSwitchProps>;
declare const IconAdd12: React.FC<IconAdd12Props>;
declare const IconAdd162: React.FC<IconAdd162Props>;
declare const IconCaretDown202: React.FC<IconCaretDown202Props>;
declare const IconCaretUp202: React.FC<IconCaretUp202Props>;
declare const IconCheck20: React.FC<IconCheck20Props>;
declare const IconDelivery16: React.FC<IconDelivery16Props>;
declare const IconFavorite16: React.FC<IconFavorite16Props>;
declare const IconGiftBox16: React.FC<IconGiftBox16Props>;
declare const IconLogo16: React.FC<IconLogo16Props>;
declare const IconRight16: React.FC<IconRight16Props>;
declare const IconShippingCorkscrew32: React.FC<IconShippingCorkscrew32Props>;
declare const IconSubtract12: React.FC<IconSubtract12Props>;
declare const IconUpCaret16: React.FC<IconUpCaret16Props>;
declare const IconVisibility20: React.FC<IconVisibility20Props>;
declare const InputFieldNew: React.FC<InputFieldNewProps>;
declare const InputFieldNew4: React.FC<InputFieldNew4Props>;
declare const ListField: React.FC<ListFieldProps>;
declare const ListField2: React.FC<ListField2Props>;
declare const LogoMaster: React.FC<LogoMasterProps>;
declare const LogoMaster2: React.FC<LogoMaster2Props>;
declare const MobilePagination: React.FC<MobilePaginationProps>;
declare const MobilePaginationDefault: React.FC<MobilePaginationDefaultProps>;
declare const MobilePriceCard: React.FC<MobilePriceCardProps>;
declare const MobileTable: React.FC<MobileTableProps>;
declare const MobileTable2: React.FC<MobileTable2Props>;
declare const NavBreadcrumb: React.FC<NavBreadcrumbProps>;
declare const NavItem: React.FC<NavItemProps>;
declare const NavItem2: React.FC<NavItem2Props>;
declare const NavTabDesktop: React.FC<NavTabDesktopProps>;
declare const NdBadge2: React.FC<NdBadge2Props>;
declare const Price: React.FC<PriceProps>;
declare const PriceCard: React.FC<PriceCardProps>;
declare const PrimaryBadge: React.FC<PrimaryBadgeProps>;
declare const PrimaryBadge2: React.FC<PrimaryBadge2Props>;
declare const QuoteBlock: React.FC<QuoteBlockProps>;
declare const QuoteBlock2: React.FC<QuoteBlock2Props>;
declare const Quoteblock: React.FC<QuoteblockProps>;
declare const RadioButton: React.FC<RadioButtonProps>;
declare const RadioButton2: React.FC<RadioButton2Props>;
declare const Reviews: React.FC<ReviewsProps>;
declare const SMSNDot: React.FC<SMSNDotProps>;
declare const SMSNRing: React.FC<SMSNRingProps>;
declare const SMSNStamp: React.FC<SMSNStampProps>;
declare const Score: React.FC<ScoreProps>;
declare const Scores: React.FC<ScoresProps>;
declare const ScrollBar: React.FC<ScrollBarProps>;
declare const ShelfTalker: React.FC<ShelfTalkerProps>;
declare const ShelfTalkerDesktop: React.FC<ShelfTalkerDesktopProps>;
declare const ShelfTalkerMobile: React.FC<ShelfTalkerMobileProps>;
declare const SomeBadge: React.FC<SomeBadgeProps>;
declare const Stamp: React.FC<StampProps>;
declare const StoryCard: React.FC<StoryCardProps>;
declare const StoryCard2: React.FC<StoryCard2Props>;
declare const Tab: React.FC<TabProps>;
declare const Tab2: React.FC<Tab2Props>;
declare const TabFilterDesktop: React.FC<TabFilterDesktopProps>;
declare const Table: React.FC<TableProps>;
declare const TableCell: React.FC<TableCellProps>;
declare const TableHeader: React.FC<TableHeaderProps>;
declare const TableHeader2: React.FC<TableHeader2Props>;
declare const TableSectionHeader: React.FC<TableSectionHeaderProps>;
declare const TableTopSection: React.FC<TableTopSectionProps>;
declare const TableTopSection2: React.FC<TableTopSection2Props>;
declare const TabletPriceCard: React.FC<TabletPriceCardProps>;
declare const TabletTable: React.FC<TabletTableProps>;
declare const TabletTable2: React.FC<TabletTable2Props>;
declare global {
  interface Window {
    Accordion: React.FC<AccordionProps>;
    AccordionInfo: React.FC<AccordionInfoProps>;
    AccordionInfoExpanded: React.FC<AccordionInfoExpandedProps>;
    ArrowLink: React.FC<ArrowLinkProps>;
    ArrowLink2: React.FC<ArrowLink2Props>;
    ArrowLinkLeft: React.FC<ArrowLinkLeftProps>;
    Button: React.FC<ButtonProps>;
    ButtonExtraSm: React.FC<ButtonExtraSmProps>;
    ButtonLg: React.FC<ButtonLgProps>;
    ButtonMaster: React.FC<ButtonMasterProps>;
    ButtonMd: React.FC<ButtonMdProps>;
    ButtonSm: React.FC<ButtonSmProps>;
    CTAS: React.FC<CTASProps>;
    CheckBox: React.FC<CheckBoxProps>;
    CheckBoxActive: React.FC<CheckBoxActiveProps>;
    Checkbox: React.FC<CheckboxProps>;
    ContentCardDesktop: React.FC<ContentCardDesktopProps>;
    ContentCardDesktop2: React.FC<ContentCardDesktop2Props>;
    DesktopPriceCard: React.FC<DesktopPriceCardProps>;
    DesktopProductCardHorizontal: React.FC<DesktopProductCardHorizontalProps>;
    DesktopSplitContentBlockFeature: React.FC<DesktopSplitContentBlockFeatureProps>;
    DesktopTable: React.FC<DesktopTableProps>;
    DesktopTable2: React.FC<DesktopTable2Props>;
    DiscoverCardDesktop: React.FC<DiscoverCardDesktopProps>;
    FavoriteIcon: React.FC<FavoriteIconProps>;
    FeatureItem: React.FC<FeatureItemProps>;
    FeatureItem2: React.FC<FeatureItem2Props>;
    FormControl: React.FC<FormControlProps>;
    FormControlCheckBox: React.FC<FormControlCheckBoxProps>;
    FormControlRadio: React.FC<FormControlRadioProps>;
    FormControlSwitch: React.FC<FormControlSwitchProps>;
    IconAdd12: React.FC<IconAdd12Props>;
    IconAdd162: React.FC<IconAdd162Props>;
    IconCaretDown202: React.FC<IconCaretDown202Props>;
    IconCaretUp202: React.FC<IconCaretUp202Props>;
    IconCheck20: React.FC<IconCheck20Props>;
    IconDelivery16: React.FC<IconDelivery16Props>;
    IconFavorite16: React.FC<IconFavorite16Props>;
    IconGiftBox16: React.FC<IconGiftBox16Props>;
    IconLogo16: React.FC<IconLogo16Props>;
    IconRight16: React.FC<IconRight16Props>;
    IconShippingCorkscrew32: React.FC<IconShippingCorkscrew32Props>;
    IconSubtract12: React.FC<IconSubtract12Props>;
    IconUpCaret16: React.FC<IconUpCaret16Props>;
    IconVisibility20: React.FC<IconVisibility20Props>;
    InputFieldNew: React.FC<InputFieldNewProps>;
    InputFieldNew4: React.FC<InputFieldNew4Props>;
    ListField: React.FC<ListFieldProps>;
    ListField2: React.FC<ListField2Props>;
    LogoMaster: React.FC<LogoMasterProps>;
    LogoMaster2: React.FC<LogoMaster2Props>;
    MobilePagination: React.FC<MobilePaginationProps>;
    MobilePaginationDefault: React.FC<MobilePaginationDefaultProps>;
    MobilePriceCard: React.FC<MobilePriceCardProps>;
    MobileTable: React.FC<MobileTableProps>;
    MobileTable2: React.FC<MobileTable2Props>;
    NavBreadcrumb: React.FC<NavBreadcrumbProps>;
    NavItem: React.FC<NavItemProps>;
    NavItem2: React.FC<NavItem2Props>;
    NavTabDesktop: React.FC<NavTabDesktopProps>;
    NdBadge2: React.FC<NdBadge2Props>;
    Price: React.FC<PriceProps>;
    PriceCard: React.FC<PriceCardProps>;
    PrimaryBadge: React.FC<PrimaryBadgeProps>;
    PrimaryBadge2: React.FC<PrimaryBadge2Props>;
    QuoteBlock: React.FC<QuoteBlockProps>;
    QuoteBlock2: React.FC<QuoteBlock2Props>;
    Quoteblock: React.FC<QuoteblockProps>;
    RadioButton: React.FC<RadioButtonProps>;
    RadioButton2: React.FC<RadioButton2Props>;
    Reviews: React.FC<ReviewsProps>;
    SMSNDot: React.FC<SMSNDotProps>;
    SMSNRing: React.FC<SMSNRingProps>;
    SMSNStamp: React.FC<SMSNStampProps>;
    Score: React.FC<ScoreProps>;
    Scores: React.FC<ScoresProps>;
    ScrollBar: React.FC<ScrollBarProps>;
    ShelfTalker: React.FC<ShelfTalkerProps>;
    ShelfTalkerDesktop: React.FC<ShelfTalkerDesktopProps>;
    ShelfTalkerMobile: React.FC<ShelfTalkerMobileProps>;
    SomeBadge: React.FC<SomeBadgeProps>;
    Stamp: React.FC<StampProps>;
    StoryCard: React.FC<StoryCardProps>;
    StoryCard2: React.FC<StoryCard2Props>;
    Tab: React.FC<TabProps>;
    Tab2: React.FC<Tab2Props>;
    TabFilterDesktop: React.FC<TabFilterDesktopProps>;
    Table: React.FC<TableProps>;
    TableCell: React.FC<TableCellProps>;
    TableHeader: React.FC<TableHeaderProps>;
    TableHeader2: React.FC<TableHeader2Props>;
    TableSectionHeader: React.FC<TableSectionHeaderProps>;
    TableTopSection: React.FC<TableTopSectionProps>;
    TableTopSection2: React.FC<TableTopSection2Props>;
    TabletPriceCard: React.FC<TabletPriceCardProps>;
    TabletTable: React.FC<TabletTableProps>;
    TabletTable2: React.FC<TabletTable2Props>;
  }
}
