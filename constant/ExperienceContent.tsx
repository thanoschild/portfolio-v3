import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    period: "Jun 2023 — Present",
    title: "Software Engineer",
    company: "Equinix",
    description:
      "Built and optimized backend services for high-throughput data ingestion from Oracle, ServiceNow, SharePoint, and Vertex, reducing ingestion time by 90% and improving delivery latency and reliability. Developed multiple microservices using Cloud Run to automate pipeline logic and enhance performance, minimizing manual effort and streamlining data workflows to accelerate engineering processes. Additionally, implemented a Python-based solution to automate audit data collection, reducing quarterly manual effort by 70% and improving compliance efficiency.",
    technologies: ["Java", "Python", "Google Cloud Platform", "SQL", "Kafka", "Docker"],
    link: "https://www.equinix.com/",
  },
  {
    period: "Feb 2023 — Jun 2023",
    title: "Intern",
    company: "Equinix",
    description:
      "Built a DAG visualizer using React and React Flow to allow developers to preview task dependencies before deployment, improving visibility into upstream and downstream tasks and reducing debugging time by 30%. Also developed a data ingestion system using Dataflow to ingest financial data from Oracle Fusion, implementing end-to-end encryption and decryption to ensure data security.",
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