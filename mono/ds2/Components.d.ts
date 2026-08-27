// Components.d.ts — the complete catalog of the 12 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Badge) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Badge" (node 1:303)
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Badge" (node 1:321)
export interface Badge2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Button" (node 1:237)
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Button" (node 1:255)
export interface Button2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "FilterChip" (node 1:387)
export interface FilterChipProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "FilterChip" (node 1:402)
export interface FilterChip2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "GoalCard" (node 1:691)
export interface GoalCardProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Main Content" (node 1:51)
export interface MainContentProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "MuscleGroupTile" (node 1:726)
export interface MuscleGroupTileProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Section" (node 1:416)
export interface SectionProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Section" (node 1:549)
export interface Section2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Section" (node 1:852)
export interface Section3Props {
  className?: string;
  style?: React.CSSProperties;
}

declare const Badge: React.FC<BadgeProps>;
declare const Badge2: React.FC<Badge2Props>;
declare const Button: React.FC<ButtonProps>;
declare const Button2: React.FC<Button2Props>;
declare const FilterChip: React.FC<FilterChipProps>;
declare const FilterChip2: React.FC<FilterChip2Props>;
declare const GoalCard: React.FC<GoalCardProps>;
declare const MainContent: React.FC<MainContentProps>;
declare const MuscleGroupTile: React.FC<MuscleGroupTileProps>;
declare const Section: React.FC<SectionProps>;
declare const Section2: React.FC<Section2Props>;
declare const Section3: React.FC<Section3Props>;
declare global {
  interface Window {
    Badge: React.FC<BadgeProps>;
    Badge2: React.FC<Badge2Props>;
    Button: React.FC<ButtonProps>;
    Button2: React.FC<Button2Props>;
    FilterChip: React.FC<FilterChipProps>;
    FilterChip2: React.FC<FilterChip2Props>;
    GoalCard: React.FC<GoalCardProps>;
    MainContent: React.FC<MainContentProps>;
    MuscleGroupTile: React.FC<MuscleGroupTileProps>;
    Section: React.FC<SectionProps>;
    Section2: React.FC<Section2Props>;
    Section3: React.FC<Section3Props>;
  }
}
