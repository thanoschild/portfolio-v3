export interface ThemeColors {
  bg: string;
  main: string;
  sub: string;
  text: string;
  textSub: string;
  subAlt: string;
  spotlight: string;
}

export const themeColorVariables = {
  bg: '--bg-color',
  main: '--main-color',
  sub: '--sub-color',
  text: '--text-color',
  textSub: '--text-sub-color',
  subAlt: '--sub-alt-color',
  spotlight: '--spotlight'
} as const;

export interface ThemeJSON {
  '--bg-color'?: string;
  '--main-color'?: string;
  '--sub-color'?: string;
  '--sub-alt-color'?: string;
  '--text-color'?: string;
  '--text-sub-color'?: string;
  '--spotlight'?: string;
}

export const defaultTheme = "purple";

export const defaultThemeColors: ThemeColors = {
  bg: '#1A132F',
  main: '#ac5af6',
  sub: '#c0acfb',
  subAlt: "#2B1D4F",
  text: '#F3E8FF',
  textSub: "#D8B4FE",
  spotlight: "#8B5CF6"
};

export const themes = [
  "green", "blue", "purple", "orange", "white"
]

export function extractThemeColors(json: ThemeJSON): ThemeColors {
  return {
    bg: json['--bg-color']?.trim() ?? '#1A132F',
    main: json['--main-color']?.trim() ?? '#ac5af6',
    sub: json['--sub-color']?.trim() ?? '#c0acfb',
    subAlt: json['--sub-alt-color']?.trim() ?? '#2B1D4F',
    text: json['--text-color']?.trim() ?? '#F3E8FF',
    textSub: json['--text-sub-color']?.trim() ?? '#D8B4FE',
    spotlight: json['--spotlight']?.trim() ?? '#8B5CF6',
  };
}

export async function getThemeColors(name: string): Promise<ThemeColors> {
  try {
    const response = await fetch(`themes/${name}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load theme: ${name}`);
    }
    const json = await response.json();
    return extractThemeColors(json);
  } catch (error) {
    console.error(`Failed to load theme: ${name}`, error);
    return defaultThemeColors;
  }
}