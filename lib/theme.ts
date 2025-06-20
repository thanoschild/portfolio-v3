export interface ThemeColors {
  bg: string;
  main: string;
  sub: string;
  text: string;
  textSub: string;
  subAlt: string;
}

export interface CustomTheme {
  id: string;
  name: string;
  colors: ThemeColors;
}

export const themeColorVariables = {
  bg: '--bg-color',
  main: '--main-color',
  sub: '--sub-color',
  text: '--text-color',
  textSub: '--text-sub-color',
  subAlt: '--sub-alt-color',
} as const;

export const defaultTheme = "green";

export const defaultThemeColors: ThemeColors = {
  bg: '#191a1b',
  main: '#79a617',
  sub: '#48494b',
  text: '#e7eae0',
  textSub: "#a5a5b0",
  subAlt: "#141516",
};

export const availableThemes: Record<string, string> = {
  orange: "#f66e0d",
  blue: "#007acc",
  green: "#79a617",
  pink: "#f44c7f",
  yellow: "#e2b714"
};
