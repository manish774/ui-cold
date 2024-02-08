export type linkProps<R> = {
  name: string;
  label: R;
  linkTo: string;
};
export interface HeaderProps<T> {
  linkRightPanel: linkProps<T>[];
  brandName: React.ReactElement;
}
