"use client";

import { profile } from "@/data/portfolio";
import { FaCode, FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      icon: <FaCode className="text-2xl" />,
      title: "Full-Stack Expertise",
      description: "Proficient in Ruby on Rails, React, and modern web technologies",
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Scalable Solutions",
      description: "Building high-performance applications that grow with your business",
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Team Collaboration",
      description: "Strong communicator working effectively in agile environments",
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "Problem Solver",
      description: "Analyzing complex challenges and crafting innovative solutions",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">About Me</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Crafting Digital Experiences
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transforming ideas into scalable, user-centric applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Profile Text */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="glass-effect rounded-2xl p-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                {profile.summary}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 text-center border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-gradient-vibrant">3+</div>
                <div className="text-sm text-slate-600 mt-2 font-medium">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-gradient-vibrant">20+</div>
                <div className="text-sm text-slate-600 mt-2 font-medium">Projects</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-gradient-vibrant">100%</div>
                <div className="text-sm text-slate-600 mt-2 font-medium">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-down">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900">{highlight.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/20"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
