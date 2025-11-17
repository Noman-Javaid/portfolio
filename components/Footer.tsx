"use client";

import { personalInfo } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {personalInfo.name.split(' ')[0]}<br />{personalInfo.name.split(' ').slice(1).join(' ')}
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              Full-Stack Software Engineer specializing in building exceptional digital experiences.
            </p>
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-white hover:text-slate-900 rounded-lg transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-blue-600 rounded-lg transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-white hover:text-slate-900 rounded-lg transition-all duration-300 hover:-translate-y-1"
                aria-label="Email"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300 text-sm sm:text-base inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              {[
                "Web Development",
                "Full-Stack Solutions",
                "API Development",
                "Technical Consulting",
              ].map((service) => (
                <li key={service} className="text-slate-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-2 text-slate-400 hover:text-white transition-colors duration-300 group text-sm sm:text-base"
                >
                  <FaEnvelope className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="break-all">{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 group text-sm sm:text-base"
                >
                  <FaPhone className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm sm:text-base">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs sm:text-sm">
            <span className="text-slate-400">
              Built with <span className="text-red-500">♥</span> using Next.js
            </span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-4 sm:right-8 w-11 h-11 sm:w-12 sm:h-12 bg-white text-slate-900 rounded-lg flex items-center justify-center hover:bg-slate-100 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-base sm:text-lg group-hover:-translate-y-0.5 transition-transform duration-300" />
      </button>
    </footer>
  );
};

export default Footer;
