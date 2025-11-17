"use client";

import { profile } from "@/data/portfolio";
import { FaCode, FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  const highlights = [
    {
      icon: <FaCode className="text-xl sm:text-2xl" />,
      title: "Full-Stack Expertise",
      description: "Proficient in Ruby on Rails, React, and modern web technologies",
    },
    {
      icon: <FaRocket className="text-xl sm:text-2xl" />,
      title: "Scalable Solutions",
      description: "Building high-performance applications that grow with your business",
    },
    {
      icon: <FaUsers className="text-xl sm:text-2xl" />,
      title: "Team Collaboration",
      description: "Strong communicator working effectively in agile environments",
    },
    {
      icon: <FaLightbulb className="text-xl sm:text-2xl" />,
      title: "Problem Solver",
      description: "Analyzing complex challenges and crafting innovative solutions",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Crafting Digital <span className="text-slate-600">Experiences</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into scalable, user-centric applications
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          {/* Profile Text & Stats */}
          <AnimatedSection animation="fade-right" className="space-y-6">
            <div className="bg-white border-2 border-slate-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:border-slate-300 transition-all duration-500">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {profile.summary}
              </p>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "20+", label: "Projects" },
                { value: "100%", label: "Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 text-center border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Highlights Grid */}
          <AnimatedSection animation="fade-left" className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 text-white rounded-lg sm:rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-md">
                  {highlight.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 text-slate-900">{highlight.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>

        {/* CTA */}
        <AnimatedSection animation="scale" className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 text-white font-semibold rounded-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group"
          >
            <span>Let's Work Together</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
