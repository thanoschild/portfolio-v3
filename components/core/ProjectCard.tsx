import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import TechBadge from "./TechBadge";
import { HiMiniArrowUpRight } from "react-icons/hi2";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  github,
  link,
}: ProjectCardProps) {
  return (
    <div className="relative py-6 rounded-lg bg-theme-card hover:bg-theme-card-hover transition-all duration-300 mx-auto">
      <div className="flex items-start justify-between mb-4">
        {link ? (
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <h3 className="text-md font-semibold text-theme-text hover:text-theme-main transition-colors cursor-pointer group">
              <span>{title}</span>
              <HiMiniArrowUpRight
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-theme-main motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              />
            </h3>
          </Link>
        ) : (
          <h3 className="text-md font-semibold text-theme-text">
            <span>{title}</span>
          </h3>
        )}
        <div className="flex items-center gap-3">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-theme-sub hover:text-theme-main transition-colors"
            >
              {" "}
              <span>Github</span>
              <FaGithub className="" />
            </Link>
          )}
        </div>
      </div>

      <p className="text-theme-sub text-sm mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <TechBadge key={index} technology={tech} />
        ))}
      </div>
    </div>
  );
}
