"use client";

import { experience } from "@/data/portfolio";
import { FaBriefcase, FaCheckCircle, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white section-pattern relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider">
              <FaBriefcase className="text-sm" />
              Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Professional <span className="text-slate-600">Journey</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Building innovative solutions and delivering excellence
          </p>
        </AnimatedSection>

        {/* Experience Card */}
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-up" className="relative">
            {/* Professional Timeline */}
            <div className="absolute left-0 top-8 w-1 h-full bg-gradient-to-b from-slate-900 via-slate-600 to-transparent opacity-20 hidden lg:block"></div>
            <div className="absolute left-0 top-8 w-3 h-3 bg-slate-900 rounded-full hidden lg:block"></div>

            <div className="lg:ml-12 bg-white border-2 border-slate-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 hover:shadow-2xl hover:border-slate-300 transition-all duration-500">
              {/* Company Header */}
              <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-8">
                <div className="space-y-3 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                      <FaBriefcase className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{experience.company}</h3>
                      <p className="text-slate-600 font-semibold text-lg sm:text-xl mt-1">{experience.position}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 ml-0 sm:ml-18">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-slate-500" />
                      <span className="font-medium">{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-slate-500" />
                      <span className="font-medium">{experience.location}</span>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold shadow-sm">
                  Currently Working
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-200 mb-8"></div>

              {/* Responsibilities */}
              <div className="space-y-4">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-slate-900 rounded-full"></div>
                  Key Responsibilities & Achievements
                </h4>
                <div className="grid gap-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 hover:shadow-sm transition-all duration-300 group"
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-slate-900 rounded-full flex items-center justify-center mt-0.5">
                        <FaCheckCircle className="text-white text-xs" />
                      </div>
                      <p className="text-slate-700 leading-relaxed text-sm sm:text-base">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Stats */}
              <div className="mt-10 pt-8 border-t border-slate-200">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { value: "20+", label: "Projects Delivered" },
                    { value: "5+", label: "Technologies" },
                    { value: "100%", label: "On-Time" },
                    { value: "3+", label: "Years Growth" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all duration-300">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Experience;
