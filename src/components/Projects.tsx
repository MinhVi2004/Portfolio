import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { profile } from '../data/profile'

const Projects: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">Personal Projects</h2>

      {/* Splide Slideshow - Center Mode with 3 visible slides */}
      <div className="mb-8">
        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            arrows: true,
            pagination: false,
            drag: true,
            gap: '0.5rem',
            focus: 'center',
            start: 1,
            breakpoints: {
              768: {
                perPage: 1,
                focus: 'center',
              },
            },
          }}
          className="splide-custom splide-center"
        >
          {profile.projects.map((project) => (
            <SplideSlide key={project.title} className="splide-slide-custom">
              <article className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
                <div className="relative rounded-t-2xl overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="font-semibold text-base">{project.title}</div>
                  <div className="text-slate-500 text-xs">
                    {project.role}
                    {project.duration ? ` · ${project.duration}` : ''}
                  </div>
                  <p className="text-slate-600 text-sm mt-2 line-clamp-2">{project.description}</p>
                  <div className="text-slate-500 text-xs mt-2">{project.tech.join(' · ')}</div>
                  <div className="flex flex-wrap gap-2 text-xs mt-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-600 no-underline hover:underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* All Projects Grid */}
      {/* <div className="grid grid-cols-1 gap-4">
        {profile.projects.map((project) => (
          <article key={project.title} className="rounded-2xl border border-slate-200 p-4 bg-white grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <div className="flex justify-between items-start gap-3">
                <div>
                  <div className="font-semibold text-base">{project.title}</div>
                  <div className="text-slate-500 text-xs">
                    {project.role}
                    {project.duration ? ` · ${project.duration}` : ''}
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm mt-1.5">{project.description}</p>
              <div className="text-slate-500 text-xs mt-2">{project.tech.join(' · ')}</div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 no-underline hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div> */}
    </div>
  )
}

export default Projects

