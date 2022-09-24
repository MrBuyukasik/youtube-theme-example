import { ThemeType } from "./ThemeProvider";

export const colors: Partial<Record<ThemeType, Palette>> = {
  light: {
    primary: {
      default: "red",
      dark: "#F20303",
    },
    secondary: {
      default: "blue",
      dark: "#0037FF",
    },
  },
  dark: {
    primary: {
      default: "green",
      dark: "green",
    },
    secondary: {
      default: "grey",
      dark: "grey",
    },
  },
};
