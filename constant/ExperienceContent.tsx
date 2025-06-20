import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    period: "Jun 2023 — Present",
    title: "Software Engineer",
    company: "Equinix",
    description:
      "Designed and developed scalable batch and streaming systems to ingest data from platforms like Oracle, ServiceNow, SharePoint, and Vertex, reducing data ingestion time by over 90% and significantly improving performance and reliability. Built microservices using Cloud Run to automate pipeline logic and streamline data workflows, reducing developer effort. Additionally, developed a Python-based solution to automate audit data collection, cutting manual effort by 70% and simplifying compliance processes.",
    technologies: ["Java", "Python", "Google Cloud Platform", "SQL"],
    link: "https://www.equinix.com/",
  },
  {
    period: "Feb 2023 — Jun 2023",
    title: "Intern",
    company: "Equinix",
    description:
      "Built a DAG visualizer using React and React Flow to help developers preview task dependencies before deployment, improving visibility into upstream/downstream tasks and reducing debugging time by 30%. Also developed a secure data ingestion system using Dataflow to bring in financial data from Oracle Fusion, implementing end-to-end encryption and decryption to ensure data security.",
    technologies: [
      "Java",
      "Python",
      "Google Cloud Platform",
      "Javascript",
      "React",
    ],
    link: "https://www.equinix.com/",
  },
  {
    period: "May 2022 — Jun 2022",
    title: "Web Developer Intern",
    company: "Infinos Technologies LLP",
    description:
      "Built the main web page with responsive design and animations to enhance user experience across devices. Ensured high performance and stability for a smooth and reliable user interface.",
    technologies: [
      "Javascript",
      "React",
      "Docker"
    ],
    link: "https://www.infinostech.com/",
  },
];