enum BaseColors {
  primary = "primary",
  secondary = "secondary",
}

interface ColorTone {
  default: string;
  dark: string;
}

interface Palette {
  [BaseColors.primary]: ColorTone;
  [BaseColors.secondary]: ColorTone;
}

interface AppTheme {
  theme?: Theme;
  handleChangeTheme?: ThemeType;
}

interface StyledProps extends Omit<AppTheme, "handleChangeTheme"> {}
