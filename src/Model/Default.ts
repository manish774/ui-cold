export type ThemeMode = "dark" | "light";

export interface tableConfig {
  paginationRequired?: boolean;
  mode?: ThemeMode;
  title: string | JSX.Element;
  columns: ColumnProps[];
  showHeaderCount?: boolean;
  minHeight?: string;
}

export interface HoverActionProp {
  name: string;
  onclick: (item: any) => any;
}
export interface ColumnProps {
  render?: (item: any) => JSX.Element;
  name: string;
  id: string;
  searchable?: boolean;
  sortable?: boolean;
  hoverAction?: HoverActionProp[];
  hideAble?: boolean;
  hideOnstart?: boolean;
  highLight?: { color: string };
}

export interface TableProps {
  records: any[];
  pageSize: number;
  config: tableConfig;
}
