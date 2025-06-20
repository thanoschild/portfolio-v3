import { ContentInfo } from "@/types";

export const about: ContentInfo[] = [
  {
    text: `I'm a developer passionate about building scalable backend systems and real-time data pipelines. I enjoy solving complex problems where data structures and algorithms are key. Beyond scalable systems, I bring ideas to life with pixel-perfect, production-ready user interfaces.`,
  },
  {
    text: `Currently, I'm a Software Engineer at Equinix, where I focus on building robust infrastructure and real-time services. I design and maintain critical components that deliver reliable, scalable cloud solutions powering our global platform.`,
    links: [
      {
        match: "Equinix",
        href: "https://www.equinix.com/",
      },
      {
        match: "cloud solutions",
        href: "https://cloud.google.com/",
      },
    ],
  },
  {
    text: `I enjoy playing BGMI and cricket in my free time, as they help me relax, stay sharp, and maintain a healthy balance between focus and fun.`,
    links: [
      {
        match: "BGMI",
        href: "https://www.battlegroundsmobileindia.com/",
      },
    ],
  },
];