"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import { FaChevronDown, FaExternalLinkAlt, FaGlobe } from "react-icons/fa";

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
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of impactful projects demonstrating full-stack expertise and innovative solutions
          </p>
        </div>

        <div className="space-y-6">
          {(projects as Project[]).map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Project Header */}
              <div className="p-6 lg:p-8 border-b border-slate-200 bg-slate-50/50">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          {project.title}
                        </h3>
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                          <FaGlobe className="text-xs" />
                          View Live
                        </a>
                      )}
                    </div>
                    <p className="text-slate-600 leading-relaxed">{project.description}</p>
                    
                    {/* Tech Pills - Always Visible */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.slice(0, 4).map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-medium rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium rounded-md">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => toggleProject(index)}
                    className="flex-shrink-0 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center text-slate-700 transition-all duration-300"
                    aria-label="Expand project"
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
                <div className="p-6 lg:p-8 space-y-6 bg-white">
                  {/* Highlights */}
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Key Highlights</h4>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3 text-slate-600">
                          <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* All Technologies */}
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 rounded-md text-sm font-medium hover:border-slate-300 hover:bg-slate-100 transition-all duration-300"
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
                <div className="px-6 lg:px-8 pb-6 bg-slate-50/50">
                  <button
                    onClick={() => toggleProject(index)}
                    className="w-full py-3 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    View Details <span className="text-xs">↓</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">Interested in collaborating on your next project?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/20"
          >
            Let's Discuss
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
