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
  bg: '#0F172A',
  main: '#5EEAD4',
  sub: '#94a3b8',
  subAlt: "#162445",
  text: '#E2E8F0',
  textSub: "#64748B",
  spotlight: "#1D4ED8"
};

export const themes = [
  "green", "blue", "purple", "orange", "white"
]

export function extractThemeColors(json: ThemeJSON): ThemeColors {
  return {
    bg: json['--bg-color']?.trim() ?? '#191a1b',
    main: json['--main-color']?.trim() ?? '#79a617',
    sub: json['--sub-color']?.trim() ?? '#48494b',
    subAlt: json['--sub-alt-color']?.trim() ?? '#141516',
    text: json['--text-color']?.trim() ?? '#e7eae0',
    textSub: json['--text-sub-color']?.trim() ?? '#a5a5b0',
    spotlight: json['--spotlight']?.trim() ?? '#1D4ED8',
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