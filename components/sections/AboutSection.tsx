import React from 'react';
import { formatText } from '@/lib/formatText';
import SectionHeader from '@/components/core/SectionHeader';
import { about } from '@/constant/AboutContent';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <SectionHeader title="About" />
      <div className="space-y-4">
        {about.map(({ text, bold, links }, idx) => (
          <p key={idx}>{formatText(text, bold, links)}</p>
        ))}
      </div>
    </section>
  );
};
