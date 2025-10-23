"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 px-4 sm:px-6 relative overflow-hidden section-pattern">
      {/* Premium Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/4 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-primary-400/20 to-primary-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-accent-400/20 to-accent-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 glass-effect rounded-full premium-shadow">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-700">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight text-balance">
                Hi, I'm <br className="hidden sm:block" />
                <span className="text-gradient-vibrant">{personalInfo.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-600 text-balance">
                Full-Stack Software Engineer
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 text-balance">
              Specializing in <span className="font-semibold text-slate-900">Ruby on Rails</span>, <span className="font-semibold text-slate-900">React.js</span>, and <span className="font-semibold text-slate-900">MERN Stack</span>. 
              Crafting scalable, high-performance web applications with <span className="font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded">3+ years</span> of hands-on experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 premium-shadow hover:premium-shadow-lg transition-all duration-500 hover:-translate-y-1 focus-ring"
              >
                View My Work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-sm" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 glass-effect text-slate-900 font-medium rounded-xl hover:bg-white/90 transition-all duration-500 hover:-translate-y-1 hover:premium-shadow-lg focus-ring"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center glass-effect rounded-xl text-slate-700 hover:text-slate-900 hover:-translate-y-1 premium-shadow hover:premium-shadow-lg transition-all duration-500 focus-ring group"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center glass-effect rounded-xl text-slate-700 hover:text-blue-600 hover:-translate-y-1 premium-shadow hover:premium-shadow-lg transition-all duration-500 focus-ring group"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center glass-effect rounded-xl text-slate-700 hover:text-primary-600 hover:-translate-y-1 premium-shadow hover:premium-shadow-lg transition-all duration-500 focus-ring group"
                aria-label="Email"
              >
                <FaEnvelope className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Content - Stats & Info Cards */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up lg:animate-fade-in-down">
            {/* Main Info Card */}
            <div className="glass-effect rounded-2xl p-6 sm:p-8 space-y-5 sm:space-y-6 premium-shadow card-hover">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500">Location</div>
                    <div className="text-base font-semibold text-slate-900">{personalInfo.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500">Email</div>
                    <a href={`mailto:${personalInfo.email}`} className="text-base font-semibold text-slate-900 hover:text-primary-600 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500">Phone</div>
                    <a href={`tel:${personalInfo.phone}`} className="text-base font-semibold text-slate-900 hover:text-primary-600 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="glass-effect rounded-xl p-4 sm:p-6 text-center card-hover premium-shadow group">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-vibrant">3+</div>
                <div className="text-xs sm:text-sm text-slate-600 mt-1">Years Exp.</div>
              </div>
              <div className="glass-effect rounded-xl p-4 sm:p-6 text-center card-hover premium-shadow group">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-vibrant">14</div>
                <div className="text-xs sm:text-sm text-slate-600 mt-1">Projects</div>
              </div>
              <div className="glass-effect rounded-xl p-4 sm:p-6 text-center card-hover premium-shadow group">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-vibrant">5+</div>
                <div className="text-xs sm:text-sm text-slate-600 mt-1">Tech Stacks</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about"
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
        aria-label="Scroll to about section"
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-2 group-hover:border-slate-600 premium-shadow transition-all duration-500">
          <div className="w-1.5 h-1.5 bg-slate-600 rounded-full animate-pulse"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
