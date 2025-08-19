import React from "react";
import { projects } from "@/constant/ProjectContent";
import SectionHeader from "@/components/core/SectionHeader";
import Card from "@/components/core/Card";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <SectionHeader title="Projects" />
      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <Card {...project} type="project" />
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Link
            className="inline-flex items-center leading-tight font-semibold text-theme-text group"
            aria-label="View All Projects"
            href="/projects"
          >
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:text-[var(--main-color)] motion-reduce:transition-none">
                View All Projects
              </span>
              <GoArrowUpRight
                className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:text-[var(--main-color)] group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
