import React from 'react';
import { projects } from '@/constant/ProjectContent';
import SectionHeader from '@/components/core/SectionHeader';
import Card from '@/components/core/Card';


const ProjectsSection: React.FC = () => {

  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      <SectionHeader title="Projects" />
      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <Card {...project} type="project"/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;