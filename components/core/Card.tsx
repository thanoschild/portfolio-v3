import React, { ReactElement } from "react";
import TechBadge from "@/components/core/TechBadge";
import Image from "next/image";
import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";

interface BaseCardProps {
  technologies: string[];
  title: string;
  description: string;
  link: string;
}

interface ExperienceCardProps extends BaseCardProps {
  type: "experience";
  period: string;
  company: string;
  subtitle?: string;
}

interface ProjectCardProps extends BaseCardProps {
  type: "project";
  image?: string;
  icon?: ReactElement<{ className?: string }>;
}

type CardProps = ExperienceCardProps | ProjectCardProps;

export default function Card(props: CardProps) {
  const isProject = props.type === "project";

  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[var(--sub-alt-color)]/80 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

      {!isProject ? (
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-theme-text-sub sm:col-span-2 whitespace-nowrap">
          {props.period}
        </header>
      ) : null}

      <div
        className={`z-10 ${
          isProject ? "sm:order-2 sm:col-span-6" : "sm:col-span-6"
        }`}
      >
        <h3 className="font-medium leading-snug">
          <div>
            <Link
              className="inline-flex items-baseline font-semibold leading-tight text-theme-text hover:text-theme-main group/link text-base"
              href={props.link}
              target="_blank"
              rel="noreferrer"
              aria-label={
                isProject ? props.title : `${props.title} at ${props.company}`
              }
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {props.title}
                {!isProject && (
                  <span className="inline-block">&nbsp;- {props.company}</span>
                )}
                <HiMiniArrowUpRight
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>
          {!isProject && props.subtitle && (
            <div className="text-theme-text-sub" aria-hidden="true">
              {props.subtitle}
            </div>
          )}
        </h3>
        <p className="mt-2 text-sm leading-normal text-theme-sub">{props.description}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {props.technologies.map((tech) => (
            <li key={tech} className="mr-1.5 mt-2">
              <TechBadge technology={tech} />
            </li>
          ))}
        </ul>
      </div>

      {isProject && props.image && (
        <Image
          alt=""
          loading="lazy"
          width={200}
          height={120}
          decoding="async"
          className="rounded border-2 border-[var(--text-color)]/10 transition group-hover:border-[var(--text-color)]/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          style={{ color: "transparent" }}
          src={props.image}
        />
      )}

      {/* ... */}
      {isProject && props.icon && (
        <div className="mt-4 sm:mt-0 flex items-center justify-center sm:order-1 sm:col-span-2 sm:translate-y-1">
          {React.cloneElement(props.icon, {
            className:
              "h-16 w-16 text-theme-text transition-transform duration-200 ease-in-out group-hover:scale-110 group-hover:text-[var(--main-color)]",
          })}
        </div>
      )}
    </div>
  );
}
