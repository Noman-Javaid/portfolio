"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import { FaChevronDown, FaExternalLinkAlt, FaGlobe } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

interface Project {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  color: string;
  link?: string;
}

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Featured <span className="text-slate-600">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A showcase of impactful projects demonstrating full-stack expertise and innovative solutions
          </p>
        </AnimatedSection>

        <div className="space-y-4 sm:space-y-6">
          {(projects as Project[]).map((project, index) => (
            <AnimatedSection 
              key={index}
              animation="fade-up"
              delay={index * 50}
              className="bg-white rounded-lg sm:rounded-xl border-2 border-slate-200 overflow-hidden hover:shadow-2xl hover:border-slate-300 transition-all duration-500"
            >
              {/* Project Header */}
              <div className="p-5 sm:p-6 lg:p-8 border-b-2 border-slate-200 bg-slate-50">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-2 h-2 bg-slate-900 rounded-full shadow-sm"></div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                          {project.title}
                        </h3>
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group"
                        >
                          <FaGlobe className="text-xs" />
                          <span className="hidden sm:inline">View Live</span>
                          <span className="sm:hidden">Live</span>
                        </a>
                      )}
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">{project.description}</p>
                    
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2.5 sm:px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-medium rounded-md hover:border-slate-300 hover:shadow-sm transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2.5 sm:px-3 py-1 bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium rounded-md">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => toggleProject(index)}
                    className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-white hover:bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 transition-all duration-300 border border-slate-200 hover:border-slate-300"
                    aria-label={expandedProject === index ? "Collapse project" : "Expand project"}
                  >
                    <FaChevronDown
                      className={`text-base transition-transform duration-300 ${
                        expandedProject === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Expandable Details */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  expandedProject === index ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 sm:p-6 lg:p-8 space-y-6 bg-white">
                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-4 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1 h-4 bg-slate-900 rounded-full"></span>
                      Key Highlights
                    </h4>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3 text-slate-600">
                          <span className="inline-block w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="leading-relaxed text-sm sm:text-base">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* All Technologies */}
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-4 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1 h-4 bg-slate-900 rounded-full"></span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 sm:px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 rounded-md text-xs sm:text-sm font-medium hover:border-slate-300 hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Collapse Prompt */}
              {expandedProject !== index && (
                <div className="px-5 sm:px-6 lg:px-8 pb-5 sm:pb-6 bg-slate-50">
                  <button
                    onClick={() => toggleProject(index)}
                    className="w-full py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-300 flex items-center justify-center gap-2 group"
                  >
                    View Details 
                    <FaChevronDown className="text-xs group-hover:translate-y-0.5 transition-transform duration-300" />
                  </button>
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="scale" className="text-center mt-12 sm:mt-16">
          <p className="text-slate-600 mb-6 text-sm sm:text-base">Interested in collaborating on your next project?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 text-white font-semibold rounded-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group"
          >
            <span>Let's Discuss</span>
            <FaExternalLinkAlt className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
