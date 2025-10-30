"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaDownload } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Sleek Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary-50/30"></div>
      
      {/* Subtle Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-primary-200/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-7 animate-fade-in-up text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-emerald-700">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 bg-clip-text text-transparent">{personalInfo.name}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700">
                Full-Stack Software Engineer
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Specializing in <span className="font-semibold text-slate-900">Next.js</span>, <span className="font-semibold text-slate-900">Ruby on Rails</span>, and <span className="font-semibold text-slate-900">MERN Stack</span>. 
              Crafting scalable web applications with <span className="font-semibold text-primary-600">3+ years</span> of experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-primary-600/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-sm" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 font-semibold rounded-xl hover:border-slate-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:shadow-md transition-all duration-300 group"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-700 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-700 hover:text-primary-600 hover:border-primary-200 hover:shadow-md transition-all duration-300 group"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image with Stats */}
          <div className="space-y-8 animate-fade-in-up lg:animate-fade-in-down order-1 lg:order-2">
            {/* Profile Image - Compact & Rounded */}
            <div className="flex flex-col items-center">
              <div className="relative group">
                {/* Gradient Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Circular Image Container */}
                <div className="relative">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 overflow-hidden rounded-full border-4 border-white shadow-2xl">
                    <Image
                      src="/profile-image.jpeg"
                      alt="M Noman Javaid"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Online Status Badge */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-emerald-500 border-4 border-white rounded-full shadow-lg"></div>
                </div>
              </div>
              
              {/* Name & Title */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-slate-900">{personalInfo.name}</h3>
                <p className="text-slate-600 mt-1 font-medium">Software Engineer</p>
              </div>
            </div>

            {/* Sleek Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white border border-slate-100 rounded-2xl p-5 text-center hover:shadow-lg hover:border-primary-200 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">3+</div>
                <div className="text-sm text-slate-600 mt-1 font-medium">Years Exp.</div>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-5 text-center hover:shadow-lg hover:border-primary-200 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">14</div>
                <div className="text-sm text-slate-600 mt-1 font-medium">Projects</div>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-5 text-center hover:shadow-lg hover:border-primary-200 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-slate-600 mt-1 font-medium">Tech Stacks</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sleek Scroll Indicator */}
      <a 
        href="#about"
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
        aria-label="Scroll to about section"
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-2 group-hover:border-primary-500 transition-all duration-300">
          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
