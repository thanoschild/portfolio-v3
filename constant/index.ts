import { HeaderInfo, ContentInfo, Experience } from "@/types";

export const headerInfo: HeaderInfo = {
  name: "Sumeet Haldar",
  role: "Software Engineer",
  tagLine: "Driven by purpose, grounded in precision and built for production.",
};

export const footerInfo: ContentInfo[] = [
  {
    text: `Coded in yours favorite Visual Studio Code. Built with Next.js and Tailwind CSS, and deployed on Vercel. All text is set in the Roboto font.`,
    links: [
      {
        match: "Visual Studio Code",
        href: "https://code.visualstudio.com/",
      },
      {
        match: "Next.js",
        href: "https://nextjs.org/",
      },
      {
        match: "Tailwind CSS",
        href: "https://tailwindcss.com/",
      },
      {
        match: "Vercel",
        href: "https://vercel.com/",
      },
      {
        match: "Roboto",
        href: "https://fonts.google.com/specimen/Roboto",
      },
    ],
  },
];

export const sections = ["about", "experience", "projects"];
