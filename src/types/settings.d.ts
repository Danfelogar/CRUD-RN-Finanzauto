export interface ThemeState {
  background: string;
  textPrimary: string;
  textSecondary: string;
  divider: string;
  white: string;
  white1: string;
  purple: string;
  grayLight: string;
  gray: string;
  grayLight1: string;
  orange: string;
  orangeLight: string;
  purpleLight: string;
  purpleLight1: string;
  purpleDark: string;
  grayDark: string;
  grayDark1: string;
  grayLight2: string;
  grayLight3: string;
  grayLight4: string;
  grayLight5: string;
  red: string;
  black: string;
}

export interface Pagination {
  pageSize?: number;
  pageNumber?: number;
  totalPage?: number;
  totalData?: number;
}

export interface SettingsState {
  theme: ThemeState;
  pagination: Pagination;
}
