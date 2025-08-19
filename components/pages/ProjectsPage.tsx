'use client'

import { allProjects } from "@/constant/ProjectContent";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import ProjectCard from "../core/ProjectCard";
import { metadata } from '@/lib/projectMetadata'

export { metadata }

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-theme-bg text-theme-sub">
      <div className="mx-auto min-h-screen max-w-4xl px-6 py-12 font-sans md:px-12 md:py-16">
        {/* Header */}
        <header className="mb-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-theme-text hover:text-theme-main transition-colors mb-8"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              <FaArrowLeftLong className="text-sm" />
            </span>
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold tracking-tight text-theme-text sm:text-5xl mb-4">
            All Projects
          </h1>
        </header>

        {/* Projects Grid */}
        <div className="space-y-12">
          <ul className="group/list space-y-6">
            {allProjects.map((project, index) => (
              <li key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  github={project.github}
                  link={project.link}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}