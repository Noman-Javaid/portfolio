"use client";

import { education } from "@/data/portfolio";
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider">
              <FaGraduationCap className="text-sm" />
              Education
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Academic <span className="text-slate-600">Background</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Building a strong foundation in software engineering
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="scale" className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-slate-200 hover:shadow-2xl hover:border-slate-300 transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8">
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                <FaGraduationCap className="text-white text-3xl sm:text-4xl" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{education.degree}</h3>
                  <p className="text-lg sm:text-xl text-slate-600 font-semibold mb-4">{education.institution}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-600 text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-slate-500" />
                      <span className="font-medium">{education.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-slate-500" />
                      <span className="font-medium">{education.location}</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-slate-200"></div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { value: "4", label: "Years" },
                    { value: "BSSE", label: "Degree" },
                    { value: "CS", label: "Major" }
                  ].map((item, index) => (
                    <div key={index} className="bg-slate-50 rounded-lg p-4 text-center border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-300">
                      <div className="text-2xl sm:text-3xl font-bold text-slate-900">{item.value}</div>
                      <div className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Built a strong foundation in software engineering principles, algorithms, data structures, 
                  and modern development practices. Developed problem-solving skills and gained hands-on 
                  experience with various programming languages and technologies.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Education;
