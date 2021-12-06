// The values of these constants must correspond to the classnames in Themeable.scss
export const THEME_DEFAULT = 'blackOnWhite';
export const THEMES_INVERT_ONLY = ['blackOnWhite', 'whiteOnBlack'];
export const THEMES_ALL = ['blackOnWhite', 'whiteOnBlack', 'whiteOnBrandPrimary', 'electricOnWhite'];

export type ThemeSupportDefaultOnly = typeof THEME_DEFAULT;
export type ThemeSupportInvertOnly = typeof THEMES_INVERT_ONLY[number];
export type ThemeSupportAll = typeof THEMES_ALL[number];

export type Themeable<T, U = ThemeSupportAll> = T & {
  theme: U
}

export type MaybeThemeable<T, U = ThemeSupportAll> = T & {
  theme?: U
}

export function getThemeClass<T extends ThemeSupportAll>(theme: T | undefined) {
  return theme || undefined;
}
