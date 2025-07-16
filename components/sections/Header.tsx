import React from "react";
import { headerInfo } from "@/constant";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import Navigation from "@/components/layout/Navigation";
import Link from "next/link";

interface HeaderProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export default function Header({ activeSection, onSectionClick }: HeaderProps) {
  const socialLinks = [
    { icon: LuGithub, 
      href: "https://github.com/thanoschild", 
      label: "GitHub" 
    },
    {
      icon: LuLinkedin,
      href: "https://www.linkedin.com/in/h-sumeet/",
      label: "LinkedIn",
    },
    { icon: RiTwitterXFill, 
      href: "#", 
      label: "Twitter" 
    },
    { icon: LuMail, 
      href: "mailto:hsumeet11@gmail.com", 
      label: "Email" 
    },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-theme-text sm:text-5xl">
          <Link href="/">{headerInfo.name}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-theme-text sm:text-xl">
          {headerInfo.role}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-theme-sub">
          {headerInfo.tagLine}
        </p>

        <Navigation
          activeSection={activeSection}
          onSectionClick={onSectionClick}
        />
      </div>

      {/* Social Links */}
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <li key={label} className="mr-5 text-xs">
            <a
              className="block text-[var(--text-color)] hover:text-[var(--main-color)] transition-colors"
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
