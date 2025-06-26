import React from 'react'
import { profiles } from '@/constant/ProfileContent'
import SectionHeader from '../core/SectionHeader'
import Card from '../core/Card'

export default function ProfileSection() {
  return (
    <section
      id="profiles"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <SectionHeader title="Profile" />
      <div>
        <ul className="group/list">
          {profiles.map((project, index) => (
            <li key={index} className="mb-12">
              <Card {...project} type="project" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}