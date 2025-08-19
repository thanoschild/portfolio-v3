import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Sumeet Haldar",
  description: "A collection of projects built by Sumeet Haldar, featuring web applications, real-time systems, and AI-powered solutions using modern technologies and cloud services.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}