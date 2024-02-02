type size = "large" | "medium" | "small";
export type BadgeProps<T> = {
  label: T;
  bgColor?: string;
  size?: size;
  type?: "bordered" | "default";
  theme?: "primary" | "secondary" | "success" | "danger";
  style?: React.CSSProperties;
};

export interface CircleBadgeProps<T> {
  labels: T[];
  size?: size;
}
