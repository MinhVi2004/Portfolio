import React from 'react'
import { profile } from '../data/profile'

import { FaStar, FaJava } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiDocker,
  SiGithub
} from "react-icons/si"

const About: React.FC = () => {
  const education = profile.education[0]
  const experience = profile.experience[0]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

      {/* ABOUT */}
      <div className="rounded-2xl border border-slate-200 p-4 bg-white">

        <div className="text-xl font-semibold mb-1.5 flex items-center gap-2">
          About Me
        </div>

        <div className="text-xs text-slate-500 mb-2.5 flex items-center gap-1.5">
          <MdLocationOn className="text-red-500" />
          Software Engineering student based in {profile.location}
        </div>

        <p className="text-slate-600">{profile.careerObjective}</p>

        {/* SKILLS */}
        <div className="mt-3.5">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1.5">
            Skills
          </div>

          <div className="flex flex-col gap-2.5 text-sm">
            <div className="flex flex-wrap gap-3.5 mt-2">

              <SiReact size={22} color="#61DAFB" />
              <SiJavascript size={22} color="#F7DF1E" />
              <SiTypescript size={22} color="#3178C6" />
              <SiNodedotjs size={22} color="#339933" />
              <FaJava size={22} color="#f89820" />
              <SiDocker size={22} color="#2496ED" />
              <SiGithub size={22} color="#181717" />

            </div>
          </div>
        </div>

      </div>


      {/* EDUCATION + EXPERIENCE */}
      <div className="rounded-2xl border border-slate-200 p-4 bg-white">

        <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1.5 flex items-center gap-1.5">
          Education
        </div>

        <div className="flex flex-col gap-2.5 text-sm">
          <div>
            <div className="font-medium">{education.school}</div>
            <div className="text-slate-500 text-xs">
              {education.program} · {education.period}
            </div>
          </div>
        </div>


        {/* EXPERIENCE */}
        <div className="mt-4">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1.5 flex items-center gap-1.5">
            Experience
          </div>

          <div className="flex flex-col gap-2.5 text-sm">
            <div>
              <div className="font-medium">
                {experience.role} · {experience.company}
              </div>
              <div className="text-slate-500 text-xs">{experience.period}</div>
            </div>
            <div className="text-slate-500 text-xs">{experience.summary}</div>
          </div>
        </div>


        {/* ACTIVITIES */}
        <div className="mt-4">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1.5 flex items-center gap-1.5">
            Activities
          </div>

          <div className="flex flex-col gap-2.5 text-sm">
            {profile.activities.map((activity) => (
              <div
                key={activity}
                className="text-slate-500 text-xs flex items-center gap-1.5"
              >
                <FaStar size={10} className="text-amber-500"/>
                {activity}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default About

