import { ContentInfo } from "@/types";

export const about: ContentInfo[] = [
  {
    text: `I'm a developer passionate about building scalable backend systems and real-time data pipelines. I enjoy solving complex problems where data structures and algorithms are key. Alongside backend systems I build pixel-perfect, production-ready user interfaces.`,
  },
  {
    text: `Currently, I'm a Software Engineer at Equinix, focusing on backend infrastructure and real-time systems. I work with technologies like Kafka, Docker, and Google Cloud Platform to design and maintain critical backend services that powers our platform.`,
    links: [
      {
        match: "Equinix",
        href: "https://www.equinix.com/",
      },
      {
        match: "Google Cloud Platform",
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