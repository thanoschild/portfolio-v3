import LogoTF from "@/components/icons/LogoTF";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { BsCart4 } from "react-icons/bs";
import { RiBloggerLine } from "react-icons/ri";

export const projects = [
  {
    title: "Typeforce",
    description: "Developed a full-stack real-time typing app using Next.js, TypeScript, WebSocket, MongoDB, and Prisma. It features competitive multiplayer races, real-time feedback, theming options, and a global Redis-powered leaderboard. Users can track long-term progress through detailed stats and performance graphs.",
    technologies: ["React", "Next", "Express", "Mongodb", "Redis", "Prisma", "Websocket"],
    image: "/project/typeforce.png",
    link: "https://typeforce.store/",
  },
  {
    title: "Fast Shopping",
    description: "Built a full-stack e-commerce app inspired from Flipkart using React, Express, MongoDB, and Stripe. It supports secure user authentication, product browsing, cart management, and seamless checkout. Designed for scalability with real-time updates and a responsive UI.",
    technologies: ["React", "Express", "Mongodb", "Stripe"],
    image: "/project/fast-shoping.png",
    link: "https://fast-shopping.vercel.app/",
  },
  {
    title: "StartUp Blog",
    description: "Built a blog platform using Next.js, Sanity, and Sentry where users can share and explore startup ideas. Integrated OAuth for secure authentication and implemented full CRUD functionality for posts. The app features real-time content management with error monitoring and a clean, responsive interface.",
    technologies: ["Next", "Sanity", "Sentry", "Oauth"],
    image: "/project/startup-blog.png",
    link: "https://blog-app-godspells-projects.vercel.app/",
  }
];