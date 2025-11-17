"use client";

import { skills } from "@/data/portfolio";
import { FaCode, FaDatabase, FaTools, FaPalette, FaServer } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode className="text-xl sm:text-2xl" />,
      skills: skills.languages,
    },
    {
      title: "Frameworks",
      icon: <FaServer className="text-xl sm:text-2xl" />,
      skills: skills.frameworks,
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-xl sm:text-2xl" />,
      skills: skills.databases,
    },
    {
      title: "Tools & Services",
      icon: <FaTools className="text-xl sm:text-2xl" />,
      skills: skills.tools,
    },
    {
      title: "Other Technologies",
      icon: <FaPalette className="text-xl sm:text-2xl" />,
      skills: skills.other,
    },
  ];

  const achievements = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks with enthusiasm",
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Best Practices",
      description: "Following industry standards and clean code principles rigorously",
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Continuous Learning",
      description: "Always exploring emerging technologies and industry trends",
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-slate-50 section-pattern relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider">
              <FaCode className="text-sm" />
              Skills
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Technical <span className="text-slate-600">Expertise</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
              className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 border-2 border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 text-white rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md">
                  {category.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2.5 sm:px-3 py-1.5 bg-slate-50 text-slate-700 rounded-md text-xs sm:text-sm font-medium hover:bg-slate-100 hover:text-slate-900 hover:shadow-sm transition-all duration-300 border border-slate-200 hover:border-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => (
            <AnimatedSection
              key={index}
              animation="scale"
              delay={index * 100}
              className="bg-white border-2 border-slate-200 rounded-lg sm:rounded-xl p-6 sm:p-8 text-center hover:shadow-xl hover:border-slate-300 transition-all duration-500 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-slate-900 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                {achievement.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">{achievement.title}</h4>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {achievement.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
