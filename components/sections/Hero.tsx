"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white">
      {/* Clean Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(100,116,139,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(100,116,139,0.03),transparent_50%)]"></div>
      </div>
      
      {/* Subtle Parallax Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-slate-200/20 to-transparent rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: "transform 0.5s ease-out"
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-br from-slate-200/20 to-transparent rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`,
            transition: "transform 0.5s ease-out"
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Professional Typography */}
          <div className={`space-y-8 text-center lg:text-left order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Professional Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-slate-900 text-white rounded-lg shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide">Available for Work</span>
            </div>

            {/* Main Heading - Clean Typography */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                <span className="block mb-2">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <div className="inline-block">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-600 border-l-4 border-slate-900 pl-4">
                  Full-Stack Software Engineer
                </h2>
              </div>
            </div>

            {/* Professional Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Specialized in building scalable web applications using <span className="font-semibold text-slate-900">Next.js</span>, <span className="font-semibold text-slate-900">Ruby on Rails</span>, and <span className="font-semibold text-slate-900">MERN Stack</span>. Delivering enterprise-grade solutions with <span className="font-semibold text-slate-900">3+ years</span> of professional experience.
            </p>

            {/* CTA Buttons - Professional Style */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-sm" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 font-medium rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>

            {/* Professional Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right Content - Professional Profile Display */}
          <div className={`space-y-8 order-1 lg:order-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Professional Profile Image */}
            <div className="flex flex-col items-center">
              <div className="relative group">
                {/* Sophisticated Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
                
                {/* Image Container */}
                <div className="relative">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 overflow-hidden rounded-full border-4 border-white shadow-2xl ring-4 ring-slate-100">
                    <Image
                      src="/profile-image.jpeg"
                      alt="M Noman Javaid"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                      sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                    />
                  </div>
                  
                  {/* Professional Status Indicator */}
                  <div className="absolute bottom-6 right-6">
                    <div className="relative">
                      <div className="w-8 h-8 bg-emerald-500 border-4 border-white rounded-full shadow-lg"></div>
                      <div className="absolute inset-0 w-8 h-8 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Name Display */}
              <div className="mt-6 text-center lg:hidden">
                <h3 className="text-2xl font-bold text-slate-900">{personalInfo.name}</h3>
                <p className="text-slate-600 mt-1 font-medium">Software Engineer</p>
              </div>
            </div>

            {/* Professional Stats Grid */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:max-w-none">
              {[
                { value: "3+", label: "Years Exp." },
                { value: "20+", label: "Projects" },
                { value: "5+", label: "Tech Stacks" }
              ].map((stat, index) => (
                <div key={index} className="bg-white border-2 border-slate-200 rounded-lg p-5 text-center hover:shadow-lg hover:border-slate-300 transition-all duration-300 group">
                  <div className="text-3xl font-bold text-slate-900 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                  <div className="text-sm text-slate-600 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <a 
        href="#about"
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        aria-label="Scroll to about section"
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-2 group-hover:border-slate-900 transition-all duration-300">
          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full group-hover:bg-slate-900 animate-bounce"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
