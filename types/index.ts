export interface HeaderInfo {
  name: string;
  role: string;
  tagLine: string;
}

export interface LinkInfo {
  match: string;
  href: string;
}

export interface ContentInfo {
  text: string;
  bold?: string[];  // Making bold optional since it might not always be needed
  links?: LinkInfo[];
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  link: string;
}