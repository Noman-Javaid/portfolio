"use client";

import { education } from "@/data/portfolio";
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Education</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Academic Background
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Building a strong foundation in software engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 hover:shadow-2xl hover:border-slate-300 transition-all duration-500 animate-fade-in-up">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Icon */}
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-xl shadow-primary-500/20">
                <FaGraduationCap className="text-white text-4xl" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{education.degree}</h3>
                  <p className="text-xl text-primary-600 font-semibold mb-4">{education.institution}</p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-slate-600">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-primary-500" />
                      <span className="font-medium">{education.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-primary-500" />
                      <span className="font-medium">{education.location}</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-4 text-center border border-primary-100 hover:border-primary-300 hover:shadow-md transition-all duration-300">
                    <div className="text-3xl font-bold text-gradient-vibrant">4</div>
                    <div className="text-sm text-slate-600 mt-1 font-medium">Years</div>
                  </div>
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-4 text-center border border-primary-100 hover:border-primary-300 hover:shadow-md transition-all duration-300">
                    <div className="text-3xl font-bold text-gradient-vibrant">BSE</div>
                    <div className="text-sm text-slate-600 mt-1 font-medium">Degree</div>
                  </div>
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-4 text-center border border-primary-100 hover:border-primary-300 hover:shadow-md transition-all duration-300">
                    <div className="text-3xl font-bold text-gradient-vibrant">CS</div>
                    <div className="text-sm text-slate-600 mt-1 font-medium">Major</div>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  Built a strong foundation in software engineering principles, algorithms, data structures, 
                  and modern development practices. Developed problem-solving skills and gained hands-on 
                  experience with various programming languages and technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
