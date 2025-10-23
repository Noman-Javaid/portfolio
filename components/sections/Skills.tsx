"use client";

import { skills } from "@/data/portfolio";
import { FaCode, FaDatabase, FaTools, FaPalette, FaServer } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode className="text-2xl" />,
      skills: skills.languages,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frameworks",
      icon: <FaServer className="text-2xl" />,
      skills: skills.frameworks,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-2xl" />,
      skills: skills.databases,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Tools & Services",
      icon: <FaTools className="text-2xl" />,
      skills: skills.tools,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Other Technologies",
      icon: <FaPalette className="text-2xl" />,
      skills: skills.other,
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white section-pattern">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Skills</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-effect rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Fast Learner</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Quick to adapt to new technologies and frameworks with enthusiasm
            </p>
          </div>
          <div className="glass-effect rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Best Practices</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Following industry standards and clean code principles rigorously
            </p>
          </div>
          <div className="glass-effect rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Continuous Learning</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Always exploring emerging technologies and industry trends
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
