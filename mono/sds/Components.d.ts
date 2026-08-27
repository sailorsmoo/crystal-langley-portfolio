// Components.d.ts — the complete catalog of the 88 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.ActivityAttributes) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Activity attributes" (node 19989:43613)
export interface ActivityAttributesProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "workout" | "program";
  /** Text content; defaults to "Exercises". */
  text1?: string;
  /** Text content; defaults to "8". */
  text2?: string;
  /** Text content; defaults to "Duration". */
  text3?: string;
  /** Text content; defaults to "35m". */
  text4?: string;
}

// figma layer: "Activity Card" (node 22498:58348)
export interface ActivityCardProps {
  className?: string;
  style?: React.CSSProperties;
  cardType?: "program" | "workout";
  premium?: boolean;
  /** Text content; defaults to "Barre so hard". */
  text1?: string;
  /** Text content; defaults to "Muscle building". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Android-status-bar" (node 22285:57606)
export interface AndroidStatusBarProps {
  className?: string;
  style?: React.CSSProperties;
  darkMode?: boolean;
  /** Text content; defaults to "12:30". */
  text1?: string;
}

// figma layer: "Bottom Sheet" (node 21284:57174)
export interface BottomSheetProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "select photo" | "select video" | "single choice" | "date picker" | "multiple choice" | "radio btn - single choice" | "time picker";
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Text content; defaults to "Label". */
  text2?: string;
  /** Text content; defaults to "Label". */
  text3?: string;
  /** Text content; defaults to "Label". */
  text4?: string;
}

// figma layer: "Buttons" (node 18711:39540)
export interface ButtonsProps {
  className?: string;
  style?: React.CSSProperties;
  filled?: "primary" | "secondary" | "icon" | "link" | "secondary icon";
  state?: "active" | "disabled";
  /** Text content; defaults to "Button". */
  text1?: string;
}

// figma layer: "Buttons" (node 18765:43926)
export interface Buttons2Props {
  className?: string;
  style?: React.CSSProperties;
  filled?: "primary" | "secondary" | "icon" | "link" | "secondary icon" | "primary icon";
  state?: "on" | "off";
  /** Text content; defaults to "Button". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Buttons" (node 21121:52008)
export interface Buttons3Props {
  className?: string;
  style?: React.CSSProperties;
  filled?: "primary" | "secondary" | "icon" | "link" | "secondary icon" | "primary icon";
  state?: "on" | "off";
  /** Text content; defaults to "Button". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "CTA-drawer" (node 21121:52075)
export interface CTADrawerProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Card" (node 12643:26788)
export interface CardProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "selected" | "unselected";
  /** Text content; defaults to "Burn those calories". */
  text1?: string;
}

// figma layer: "Card2" (node 12643:26811)
export interface Card2Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "selected" | "unselected";
  /** Text content; defaults to "I’m in a rush". */
  text1?: string;
}

// figma layer: "Category List" (node 19997:43591)
export interface CategoryListProps {
  className?: string;
  style?: React.CSSProperties;
  listName?: "cardio" | "browse all" | "hiit" | "bare workouts";
  /** Text content; defaults to "HIIT workouts". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Checkbox" (node 20400:45620)
export interface CheckboxProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "selected" | "unselected" | "disabled";
  text?: string;
  /** Text content; defaults to "Text goes here". */
  text1?: string;
}

// figma layer: "chips" (node 4499:32319)
export interface ChipsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "white" | "dark";
  /** Text content; defaults to "Chips". */
  text1?: string;
}

// figma layer: "Concierge Message Component" (node 21121:52363)
export interface ConciergeMessageComponentProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "long message" | "multiple choice" | "single choice (grid)" | "short message" | "single choice" | "typing delay" | "single choice (block)" | "multiple choice (block)" | "single choice (grid) (block)";
  /** Text content; defaults to "Short message". */
  text1?: string;
}

// figma layer: "DC Banner" (node 22498:58421)
export interface DCBannerProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "promo banner" | "waiting for trainer" | "active - empty" | "active - progress";
  /** Text content; defaults to "Digital Coaching Experience". */
  text1?: string;
  /** Text content; defaults to "Bring training into the palm of your hand. Custom programs to maximize your potential.". */
  text2?: string;
  /** Text content; defaults to "Activities". */
  text3?: string;
  /** Text content; defaults to "Wellness". */
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

// figma layer: "Divider" (node 16320:46269)
export interface DividerProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Drawer" (node 17537:38679)
export interface DrawerProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "00" | "15m" | "30m" | "45m" | "1h" | "1h 15m" | "1h 30m" | "1h 45m" | "2h";
  /** Text content; defaults to "00:00". */
  text1?: string;
}

// figma layer: "Feature Card" (node 20093:46704)
export interface FeatureCardProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "trainer recomendation";
  /** Text content; defaults to "HipHop abs". */
  text1?: string;
}

// figma layer: "Find Your Program" (node 20052:47134)
export interface FindYourProgramProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Find your program". */
  text1?: string;
  /** Text content; defaults to "Find a Strivers program that fits you.". */
  text2?: string;
}

// figma layer: "Hero/Workout detail" (node 15460:27151)
export interface HeroWorkoutDetailProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Back builder 1". */
  text1?: string;
  /** Text content; defaults to "The Fitness Lioness". */
  text2?: string;
}

// figma layer: "Home Video" (node 22498:58663)
export interface HomeVideoProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "not attached" | "replay" | "attached to a trainer";
  /** Text content; defaults to "New message from your trainer". */
  text1?: string;
  /** Text content; defaults to "The Fitness Lioness". */
  text2?: string;
}

// figma layer: "Hour" (node 1403:25)
export interface HourProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "5-7 PM". */
  text1?: string;
}

// figma layer: "icon_fire" (node 7460:50331)
export interface IconFireProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Input Form" (node 1465:340)
export interface InputFormProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "icon+text" | "icon+text+icon" | "text" | "text+icon";
  state?: "active" | "disabled" | "error" | "focused" | "success";
  /** Text content; defaults to "Text goes here". */
  text1?: string;
  /** Text content; defaults to "Label". */
  text2?: string;
  /** Text content; defaults to "Error message". */
  text3?: string;
}

// figma layer: "Input Form" (node 21217:54164)
export interface InputForm4Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "icon+text" | "text" | "icon+text+icon" | "text+icon";
  state?: "active" | "disabled" | "error" | "focused" | "success";
  showLabel?: boolean;
  hideLabel?: boolean;
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Text content; defaults to "Text goes here". */
  text2?: string;
  /** Text content; defaults to "Error message". */
  text3?: string;
}

// figma layer: "intensity Selector" (node 21221:54169)
export interface IntensitySelectorProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Upper Body Flexibility and Stiffness". */
  text1?: string;
  /** Text content; defaults to "Low". */
  text2?: string;
  /** Text content; defaults to "1". */
  text3?: string;
  /** Text content; defaults to "2". */
  text4?: string;
}

// figma layer: "List" (node 9623:68967)
export interface ListProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "off" | "disabled on" | "disabled off" | "on";
  /** Text content; defaults to "Disabled On". */
  text1?: string;
  /** Text content; defaults to "Description goes here". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Loading Bar" (node 18765:44086)
export interface LoadingBarProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "end" | "begin" | "reproducing";
}

// figma layer: "Message bottom interaction" (node 21217:54315)
export interface MessageBottomInteractionProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "message input" | "statement button";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Muscle Groups" (node 21544:55494)
export interface MuscleGroupsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "abs" | "arms" | "back" | "chest" | "full body" | "legs";
  /** Text content; defaults to "Abs". */
  text1?: string;
}

// figma layer: "Navbar" (node 8936:54186)
export interface NavbarProps {
  className?: string;
  style?: React.CSSProperties;
  menu?: "home" | "invite" | "explore" | "profile";
  /** Text content; defaults to "Home". */
  text1?: string;
  /** Text content; defaults to "Explore". */
  text2?: string;
  /** Text content; defaults to "Invite". */
  text3?: string;
  /** Text content; defaults to "Profile". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "Navbar/Indicator" (node 16320:46271)
export interface NavbarIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Notification" (node 20347:45347)
export interface NotificationProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "plan & subscriptions" | "product announcements" | "trainer motivational messages";
  /** Text content; defaults to "Notification Title (35 characters).". */
  text1?: string;
  /** Text content; defaults to "Notification text message with Max Body Length here: 73 characters ...". */
  text2?: string;
  /** Text content; defaults to "13 min". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Photo_avatar" (node 19997:45895)
export interface PhotoAvatarProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "photo" | "empty";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "play button" (node 17671:38386)
export interface PlayButtonProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "play-dark" | "play-light";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Premium Tag" (node 21575:56301)
export interface PremiumTagProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "upgrade to" | "premium";
  /** Text content; defaults to "UPGRADE TO PREMIUM". */
  text1?: string;
}

// figma layer: "Program-Head-Corporate" (node 19217:40545)
export interface ProgramHeadCorporateProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "3Pillar Global". */
  text1?: string;
  /** Text content; defaults to "170 users". */
  text2?: string;
}

// figma layer: "Program-Head-Individual" (node 19217:40544)
export interface ProgramHeadIndividualProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Intermediate program". */
  text1?: string;
}

// figma layer: "Program in progress Home" (node 20426:46785)
export interface ProgramInProgressHomeProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "25%". */
  text1?: string;
  /** Text content; defaults to "Standing Dumbbell Shoulder Press". */
  text2?: string;
  /** Text content; defaults to "4/12 workouts". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Progress bar" (node 21240:55087)
export interface ProgressBarProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "black" | "white";
}

// figma layer: "Progress Wheel" (node 16695:42576)
export interface ProgressWheelProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "completed" | "in progress";
  /** Text content; defaults to "44%". */
  text1?: string;
  /** Text content; defaults to "Completed". */
  text2?: string;
}

// figma layer: "Radiobutton" (node 20395:45893)
export interface RadiobuttonProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "selected" | "unselected" | "disabled";
  text?: string;
  /** Text content; defaults to "Text goes here". */
  text1?: string;
}

// figma layer: "Search Field" (node 17673:38812)
export interface SearchFieldProps {
  className?: string;
  style?: React.CSSProperties;
  darkMode?: boolean;
  type?: "default" | "cancel" | "scribble";
  /** Text content; defaults to "Search". */
  text1?: string;
}

// figma layer: "24/Simple" (node 199:11075)
export interface Simple24Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "24/Simple" (node 4499:31533)
export interface Simple242Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "24/Simple" (node 22441:57901)
export interface Simple243Props {
  className?: string;
  style?: React.CSSProperties;
  fAIcon?: string;
}

// figma layer: "32/Simple" (node 55:15)
export interface Simple32Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "32/Simple" (node 4499:31323)
export interface Simple322Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Sliders" (node 20347:45607)
export interface SlidersProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "00 - :30" | "30m - 1h 15m";
  /** Text content; defaults to ":00". */
  text1?: string;
  /** Text content; defaults to ":30". */
  text2?: string;
}

// figma layer: "Spinner" (node 1652:10354)
export interface SpinnerProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Status Bar / iPhone 6, 7, 8, SE" (node 17673:38747)
export interface StatusBarIPhone67Props {
  className?: string;
  style?: React.CSSProperties;
  darkMode?: boolean;
  /** Text content; defaults to "9:41 AM". */
  text1?: string;
  /** Text content; defaults to "100%". */
  text2?: string;
  /** Text content; defaults to "Figma". */
  text3?: string;
}

// figma layer: "Status Bar / iPhone X (or newer)" (node 17673:38864)
export interface StatusBarIPhoneXOrProps {
  className?: string;
  style?: React.CSSProperties;
  darkMode?: boolean;
  type?: "default" | "phone (green)" | "navigation (blue)" | "recording (red)" | "mic active" | "video active";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Strivers_concierge" (node 20360:45689)
export interface StriversConciergeProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Strivers". */
  text1?: string;
  /** Text content; defaults to "Program builder". */
  text2?: string;
}

// figma layer: "Strivers-light/Day progress" (node 22827:2754)
export interface StriversLightDayProgressProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "normal" | "current day";
  day3Letters?: string;
  icon?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Strivers-light/Input Form" (node 22827:2705)
export interface StriversLightInputFormProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "disabled" | "focused" | "error" | "success";
}

// figma layer: "Strivers-light/Premium badge" (node 22827:2638)
export interface StriversLightPremiumBadgeProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "free (upgrade)" | "premium";
  /** Text content; defaults to "Premium". */
  text1?: string;
}

// figma layer: "Strivers-light/Status Icon" (node 22827:2745)
export interface StriversLightStatusIconProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "checked" | "needed" | "missed" | "empty";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Strivers-light/Title + Nav" (node 22827:2716)
export interface StriversLightTitleNavProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "screen title" | "search + nav" | "home screen";
  notification?: boolean;
  iconLeft2?: boolean;
  pageTitle?: string;
  textBtn?: boolean;
  iconLeft1?: boolean;
  iconRight2?: boolean;
  navTextBtn?: string;
  iconRight1?: boolean;
  /** Text content; defaults to "Text". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "Strivers-light/Top Navigation" (node 22827:2769)
export interface StriversLightTopNavigationProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "top bar" | "home screen";
}

// figma layer: "Strivers-light/Week progress bar" (node 22827:2761)
export interface StriversLightWeekProgressBarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "Strivers_logo" (node 19997:43794)
export interface StriversLogoProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "white" | "black";
}

// figma layer: "Strivers_Logo" (node 22827:2612)
export interface StriversLogo2Props {
  className?: string;
  style?: React.CSSProperties;
  color?: "dark" | "white";
}

// figma layer: "Strivers_small logo" (node 22827:2932)
export interface StriversSmallLogoProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "dark" | "white";
}

// figma layer: "Strivers-xSTJ_logo" (node 22498:58695)
export interface StriversXSTJLogoProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "white" | "black";
}

// figma layer: "Strivers-xTSJ_logo" (node 22827:2937)
export interface StriversXTSJLogoProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "white" | "black";
}

// figma layer: "TItle - Bottom Sheet" (node 20339:46500)
export interface TItleBottomSheetProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "heading" | "heading + description";
  done?: "on" | "off";
  /** Text content; defaults to "Heading". */
  text1?: string;
  /** Text content; defaults to "Done". */
  text2?: string;
  /** Text content; defaults to "Select the intensity level you prefer for your workout". */
  text3?: string;
}

// figma layer: "TSJ-light/Input Form" (node 22827:2661)
export interface TSJLightInputFormProps {
  className?: string;
  style?: React.CSSProperties;
  label?: boolean;
  state?: "default" | "focused" | "disabled" | "error" | "success";
  rightIcon?: boolean;
  leftIcon?: boolean;
  labelText?: string;
  text?: string;
  helpMessage?: boolean;
  helpMessageText?: string;
  /** Text content; defaults to "Label". */
  text1?: string;
}

// figma layer: "TSJ_Logo" (node 1435:2645)
export interface TSJLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Tab" (node 5098:34516)
export interface TabProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "active" | "disabled" | "focused";
  /** Text content; defaults to "Event Level 2". */
  text1?: string;
}

// figma layer: "Tab" (node 16397:34427)
export interface Tab3Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "user";
  property2?: "active" | "focused" | "disabled";
  /** Text content; defaults to "Tab". */
  text1?: string;
}

// figma layer: "Tabs, User" (node 16397:34440)
export interface TabsUserProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "two tabs" | "three tabs";
}

// figma layer: "Tag" (node 4499:31402)
export interface TagProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "colored" | "outline";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "_Time" (node 17673:38845)
export interface TimeProps {
  className?: string;
  style?: React.CSSProperties;
  darkMode?: boolean;
  type?: "default" | "green" | "blue" | "red";
  /** Text content; defaults to "9:41". */
  text1?: string;
}

// figma layer: "Toasts" (node 19989:43643)
export interface ToastsProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "⚠️ alert" | "❌ error banner" | "📝 info" | "✅ succes" | "⏳ loadign";
  /** Text content; defaults to "There was an error when adding this activity to your schedule. Learn More.s". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Toggle" (node 4226:31813)
export interface ToggleProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "disabled off" | "enabled on" | "off" | "on";
}

// figma layer: "toggle - button" (node 17115:37390)
export interface ToggleButtonProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "selected" | "unselected";
  /** Text content; defaults to "I’m in a rush". */
  text1?: string;
}

// figma layer: "toggle-square" (node 20360:45512)
export interface ToggleSquareProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "selected" | "unselected";
  /** Text content; defaults to "Low". */
  text1?: string;
}

// figma layer: "Top Navigation" (node 17673:39031)
export interface TopNavigationProps {
  className?: string;
  style?: React.CSSProperties;
  darkMode?: boolean;
  type?: "default" | "search" | "large title" | "large title + search";
  modalStack?: boolean;
  device?: "iphone 6/7/8/se" | "iphone x (or newer)";
  /** Text content; defaults to "􀆉". */
  text1?: string;
  /** Text content; defaults to "Left Title". */
  text2?: string;
  /** Text content; defaults to "Title". */
  text3?: string;
  /** Text content; defaults to "Right Title". */
  text4?: string;
}

// figma layer: "Topbar" (node 3285:29831)
export interface TopbarProps {
  className?: string;
  style?: React.CSSProperties;
  logoOrTitle?: "title";
  title?: "text" | "icons" | "text icon";
  /** Text content; defaults to "9:00 AM". */
  text1?: string;
  /** Text content; defaults to "100%". */
  text2?: string;
  /** Text content; defaults to "Verizon". */
  text3?: string;
  /** Text content; defaults to "Page title". */
  text4?: string;
}

// figma layer: "Trainer card" (node 20056:50327)
export interface TrainerCardProps {
  className?: string;
  style?: React.CSSProperties;
  trainerType?: "strivers trainer" | "tsj trainer";
  /** Text content; defaults to "Jane Cooper". */
  text1?: string;
  /** Text content; defaults to "@andrebiachi". */
  text2?: string;
}

// figma layer: "UnreadNotifications" (node 7664:49627)
export interface UnreadNotificationsProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "2". */
  text1?: string;
}

// figma layer: "Update date" (node 21586:56759)
export interface UpdateDateProps {
  className?: string;
  style?: React.CSSProperties;
  date?: string;
  /** Text content; defaults to "Last Update:". */
  text1?: string;
}

// figma layer: "User avatar" (node 20360:45763)
export interface UserAvatarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "User Name". */
  text1?: string;
  /** Text content; defaults to "Program builder". */
  text2?: string;
}

// figma layer: "User Messages" (node 20360:45987)
export interface UserMessagesProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "user - long message" | "user - short message";
  /** Text content; defaults to "Short message". */
  text1?: string;
}

// figma layer: "Vlogo-icon-32px" (node 20993:54937)
export interface VlogoIcon32pxProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "yellow" | "black";
}

// figma layer: "We Believe in You" (node 21121:52065)
export interface WeBelieveInYouProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "We Believe In You". */
  text1?: string;
  /** Text content; defaults to "The Fitness Lioness and WAAM want to send you workout and motivation notifications because we want to cheer you on to reach your goals.". */
  text2?: string;
  /** Text content; defaults to "Please tap “Allow” at the prompt.". */
  text3?: string;
}

// figma layer: "Week List" (node 19997:73505)
export interface WeekListProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "black" | "white";
  /** Text content; defaults to "M". */
  text1?: string;
  /** Text content; defaults to "T". */
  text2?: string;
  /** Text content; defaults to "W". */
  text3?: string;
  /** Text content; defaults to "T". */
  text4?: string;
}

// figma layer: "weeks-changer" (node 18979:39679)
export interface WeeksChangerProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Week 1". */
  text1?: string;
  /** Text content; defaults to "(Current) ". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

declare const ActivityAttributes: React.FC<ActivityAttributesProps>;
declare const ActivityCard: React.FC<ActivityCardProps>;
declare const AndroidStatusBar: React.FC<AndroidStatusBarProps>;
declare const BottomSheet: React.FC<BottomSheetProps>;
declare const Buttons: React.FC<ButtonsProps>;
declare const Buttons2: React.FC<Buttons2Props>;
declare const Buttons3: React.FC<Buttons3Props>;
declare const CTADrawer: React.FC<CTADrawerProps>;
declare const Card: React.FC<CardProps>;
declare const Card2: React.FC<Card2Props>;
declare const CategoryList: React.FC<CategoryListProps>;
declare const Checkbox: React.FC<CheckboxProps>;
declare const Chips: React.FC<ChipsProps>;
declare const ConciergeMessageComponent: React.FC<ConciergeMessageComponentProps>;
declare const DCBanner: React.FC<DCBannerProps>;
declare const Divider: React.FC<DividerProps>;
declare const Drawer: React.FC<DrawerProps>;
declare const FeatureCard: React.FC<FeatureCardProps>;
declare const FindYourProgram: React.FC<FindYourProgramProps>;
declare const HeroWorkoutDetail: React.FC<HeroWorkoutDetailProps>;
declare const HomeVideo: React.FC<HomeVideoProps>;
declare const Hour: React.FC<HourProps>;
declare const IconFire: React.FC<IconFireProps>;
declare const InputForm: React.FC<InputFormProps>;
declare const InputForm4: React.FC<InputForm4Props>;
declare const IntensitySelector: React.FC<IntensitySelectorProps>;
declare const List: React.FC<ListProps>;
declare const LoadingBar: React.FC<LoadingBarProps>;
declare const MessageBottomInteraction: React.FC<MessageBottomInteractionProps>;
declare const MuscleGroups: React.FC<MuscleGroupsProps>;
declare const Navbar: React.FC<NavbarProps>;
declare const NavbarIndicator: React.FC<NavbarIndicatorProps>;
declare const Notification: React.FC<NotificationProps>;
declare const PhotoAvatar: React.FC<PhotoAvatarProps>;
declare const PlayButton: React.FC<PlayButtonProps>;
declare const PremiumTag: React.FC<PremiumTagProps>;
declare const ProgramHeadCorporate: React.FC<ProgramHeadCorporateProps>;
declare const ProgramHeadIndividual: React.FC<ProgramHeadIndividualProps>;
declare const ProgramInProgressHome: React.FC<ProgramInProgressHomeProps>;
declare const ProgressBar: React.FC<ProgressBarProps>;
declare const ProgressWheel: React.FC<ProgressWheelProps>;
declare const Radiobutton: React.FC<RadiobuttonProps>;
declare const SearchField: React.FC<SearchFieldProps>;
declare const Simple24: React.FC<Simple24Props>;
declare const Simple242: React.FC<Simple242Props>;
declare const Simple243: React.FC<Simple243Props>;
declare const Simple32: React.FC<Simple32Props>;
declare const Simple322: React.FC<Simple322Props>;
declare const Sliders: React.FC<SlidersProps>;
declare const Spinner: React.FC<SpinnerProps>;
declare const StatusBarIPhone67: React.FC<StatusBarIPhone67Props>;
declare const StatusBarIPhoneXOr: React.FC<StatusBarIPhoneXOrProps>;
declare const StriversConcierge: React.FC<StriversConciergeProps>;
declare const StriversLightDayProgress: React.FC<StriversLightDayProgressProps>;
declare const StriversLightInputForm: React.FC<StriversLightInputFormProps>;
declare const StriversLightPremiumBadge: React.FC<StriversLightPremiumBadgeProps>;
declare const StriversLightStatusIcon: React.FC<StriversLightStatusIconProps>;
declare const StriversLightTitleNav: React.FC<StriversLightTitleNavProps>;
declare const StriversLightTopNavigation: React.FC<StriversLightTopNavigationProps>;
declare const StriversLightWeekProgressBar: React.FC<StriversLightWeekProgressBarProps>;
declare const StriversLogo: React.FC<StriversLogoProps>;
declare const StriversLogo2: React.FC<StriversLogo2Props>;
declare const StriversSmallLogo: React.FC<StriversSmallLogoProps>;
declare const StriversXSTJLogo: React.FC<StriversXSTJLogoProps>;
declare const StriversXTSJLogo: React.FC<StriversXTSJLogoProps>;
declare const TItleBottomSheet: React.FC<TItleBottomSheetProps>;
declare const TSJLightInputForm: React.FC<TSJLightInputFormProps>;
declare const TSJLogo: React.FC<TSJLogoProps>;
declare const Tab: React.FC<TabProps>;
declare const Tab3: React.FC<Tab3Props>;
declare const TabsUser: React.FC<TabsUserProps>;
declare const Tag: React.FC<TagProps>;
declare const Time: React.FC<TimeProps>;
declare const Toasts: React.FC<ToastsProps>;
declare const Toggle: React.FC<ToggleProps>;
declare const ToggleButton: React.FC<ToggleButtonProps>;
declare const ToggleSquare: React.FC<ToggleSquareProps>;
declare const TopNavigation: React.FC<TopNavigationProps>;
declare const Topbar: React.FC<TopbarProps>;
declare const TrainerCard: React.FC<TrainerCardProps>;
declare const UnreadNotifications: React.FC<UnreadNotificationsProps>;
declare const UpdateDate: React.FC<UpdateDateProps>;
declare const UserAvatar: React.FC<UserAvatarProps>;
declare const UserMessages: React.FC<UserMessagesProps>;
declare const VlogoIcon32px: React.FC<VlogoIcon32pxProps>;
declare const WeBelieveInYou: React.FC<WeBelieveInYouProps>;
declare const WeekList: React.FC<WeekListProps>;
declare const WeeksChanger: React.FC<WeeksChangerProps>;
declare global {
  interface Window {
    ActivityAttributes: React.FC<ActivityAttributesProps>;
    ActivityCard: React.FC<ActivityCardProps>;
    AndroidStatusBar: React.FC<AndroidStatusBarProps>;
    BottomSheet: React.FC<BottomSheetProps>;
    Buttons: React.FC<ButtonsProps>;
    Buttons2: React.FC<Buttons2Props>;
    Buttons3: React.FC<Buttons3Props>;
    CTADrawer: React.FC<CTADrawerProps>;
    Card: React.FC<CardProps>;
    Card2: React.FC<Card2Props>;
    CategoryList: React.FC<CategoryListProps>;
    Checkbox: React.FC<CheckboxProps>;
    Chips: React.FC<ChipsProps>;
    ConciergeMessageComponent: React.FC<ConciergeMessageComponentProps>;
    DCBanner: React.FC<DCBannerProps>;
    Divider: React.FC<DividerProps>;
    Drawer: React.FC<DrawerProps>;
    FeatureCard: React.FC<FeatureCardProps>;
    FindYourProgram: React.FC<FindYourProgramProps>;
    HeroWorkoutDetail: React.FC<HeroWorkoutDetailProps>;
    HomeVideo: React.FC<HomeVideoProps>;
    Hour: React.FC<HourProps>;
    IconFire: React.FC<IconFireProps>;
    InputForm: React.FC<InputFormProps>;
    InputForm4: React.FC<InputForm4Props>;
    IntensitySelector: React.FC<IntensitySelectorProps>;
    List: React.FC<ListProps>;
    LoadingBar: React.FC<LoadingBarProps>;
    MessageBottomInteraction: React.FC<MessageBottomInteractionProps>;
    MuscleGroups: React.FC<MuscleGroupsProps>;
    Navbar: React.FC<NavbarProps>;
    NavbarIndicator: React.FC<NavbarIndicatorProps>;
    Notification: React.FC<NotificationProps>;
    PhotoAvatar: React.FC<PhotoAvatarProps>;
    PlayButton: React.FC<PlayButtonProps>;
    PremiumTag: React.FC<PremiumTagProps>;
    ProgramHeadCorporate: React.FC<ProgramHeadCorporateProps>;
    ProgramHeadIndividual: React.FC<ProgramHeadIndividualProps>;
    ProgramInProgressHome: React.FC<ProgramInProgressHomeProps>;
    ProgressBar: React.FC<ProgressBarProps>;
    ProgressWheel: React.FC<ProgressWheelProps>;
    Radiobutton: React.FC<RadiobuttonProps>;
    SearchField: React.FC<SearchFieldProps>;
    Simple24: React.FC<Simple24Props>;
    Simple242: React.FC<Simple242Props>;
    Simple243: React.FC<Simple243Props>;
    Simple32: React.FC<Simple32Props>;
    Simple322: React.FC<Simple322Props>;
    Sliders: React.FC<SlidersProps>;
    Spinner: React.FC<SpinnerProps>;
    StatusBarIPhone67: React.FC<StatusBarIPhone67Props>;
    StatusBarIPhoneXOr: React.FC<StatusBarIPhoneXOrProps>;
    StriversConcierge: React.FC<StriversConciergeProps>;
    StriversLightDayProgress: React.FC<StriversLightDayProgressProps>;
    StriversLightInputForm: React.FC<StriversLightInputFormProps>;
    StriversLightPremiumBadge: React.FC<StriversLightPremiumBadgeProps>;
    StriversLightStatusIcon: React.FC<StriversLightStatusIconProps>;
    StriversLightTitleNav: React.FC<StriversLightTitleNavProps>;
    StriversLightTopNavigation: React.FC<StriversLightTopNavigationProps>;
    StriversLightWeekProgressBar: React.FC<StriversLightWeekProgressBarProps>;
    StriversLogo: React.FC<StriversLogoProps>;
    StriversLogo2: React.FC<StriversLogo2Props>;
    StriversSmallLogo: React.FC<StriversSmallLogoProps>;
    StriversXSTJLogo: React.FC<StriversXSTJLogoProps>;
    StriversXTSJLogo: React.FC<StriversXTSJLogoProps>;
    TItleBottomSheet: React.FC<TItleBottomSheetProps>;
    TSJLightInputForm: React.FC<TSJLightInputFormProps>;
    TSJLogo: React.FC<TSJLogoProps>;
    Tab: React.FC<TabProps>;
    Tab3: React.FC<Tab3Props>;
    TabsUser: React.FC<TabsUserProps>;
    Tag: React.FC<TagProps>;
    Time: React.FC<TimeProps>;
    Toasts: React.FC<ToastsProps>;
    Toggle: React.FC<ToggleProps>;
    ToggleButton: React.FC<ToggleButtonProps>;
    ToggleSquare: React.FC<ToggleSquareProps>;
    TopNavigation: React.FC<TopNavigationProps>;
    Topbar: React.FC<TopbarProps>;
    TrainerCard: React.FC<TrainerCardProps>;
    UnreadNotifications: React.FC<UnreadNotificationsProps>;
    UpdateDate: React.FC<UpdateDateProps>;
    UserAvatar: React.FC<UserAvatarProps>;
    UserMessages: React.FC<UserMessagesProps>;
    VlogoIcon32px: React.FC<VlogoIcon32pxProps>;
    WeBelieveInYou: React.FC<WeBelieveInYouProps>;
    WeekList: React.FC<WeekListProps>;
    WeeksChanger: React.FC<WeeksChangerProps>;
  }
}
