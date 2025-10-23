"use client";

import { experience } from "@/data/portfolio";
import { FaBriefcase, FaCheckCircle, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-white section-pattern">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Experience</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Professional Journey
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Building innovative solutions and delivering excellence
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute left-0 top-8 w-4 h-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full shadow-lg shadow-primary-500/30 hidden lg:block"></div>
            <div className="absolute left-2 top-16 bottom-0 w-px bg-gradient-to-b from-primary-500 to-accent-500 opacity-30 hidden lg:block"></div>

            <div className="lg:ml-12 glass-effect rounded-2xl p-8 lg:p-10 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
              {/* Company Header */}
              <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                      <FaBriefcase className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{experience.company}</h3>
                      <p className="text-primary-600 font-semibold text-lg">{experience.position}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-primary-500" />
                      <span className="font-medium">{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-primary-500" />
                      <span className="font-medium">{experience.location}</span>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold border border-primary-200">
                  Currently Working
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8"></div>

              {/* Responsibilities */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-slate-900 mb-6">Key Responsibilities & Achievements</h4>
                <div className="grid gap-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <FaCheckCircle className="text-primary-600 text-sm" />
                      </div>
                      <p className="text-slate-700 leading-relaxed text-sm lg:text-base">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Stats */}
              <div className="mt-10 pt-8 border-t border-slate-200">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-gradient-vibrant mb-2">10+</div>
                    <div className="text-sm text-slate-600 font-medium">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-gradient-vibrant mb-2">5+</div>
                    <div className="text-sm text-slate-600 font-medium">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-gradient-vibrant mb-2">100%</div>
                    <div className="text-sm text-slate-600 font-medium">On-Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-gradient-vibrant mb-2">3+</div>
                    <div className="text-sm text-slate-600 font-medium">Years Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
