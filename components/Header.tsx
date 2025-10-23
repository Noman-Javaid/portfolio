"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "GitHub", href: "#github" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled
          ? "glass-effect premium-shadow py-3 md:py-4"
          : "bg-white/40 backdrop-blur-md py-4 md:py-6"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Animated Full Name */}
          <a 
            href="#home" 
            className="relative group"
          >
            <div className="flex items-center gap-3">
              {/* Animated Name */}
              <div className="relative overflow-hidden">
                <div className="flex items-center gap-2">
                  {/* First Name */}
                  <span className="text-xl sm:text-2xl font-bold tracking-tight flex">
                    {['N', 'o', 'm', 'a', 'n'].map((letter, index) => (
                      <span
                        key={`first-${index}`}
                        className="inline-block transition-all duration-500 hover:text-primary-600 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                        style={{
                          animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                          background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>

                  {/* Animated Separator */}
                  <span 
                    className="w-1 h-6 sm:h-7 bg-gradient-to-b from-primary-400 via-primary-600 to-accent-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"
                    style={{
                      animation: 'scaleY 0.8s ease-out 0.5s both'
                    }}
                  />

                  {/* Last Name */}
                  <span className="text-xl sm:text-2xl font-bold tracking-tight flex">
                    {['J', 'a', 'v', 'a', 'i', 'd'].map((letter, index) => (
                      <span
                        key={`last-${index}`}
                        className="inline-block transition-all duration-500 hover:text-accent-600 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                        style={{
                          animation: `fadeInUp 0.6s ease-out ${(index + 5) * 0.1}s both`,
                          background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                </div>

                {/* Animated Underline */}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out rounded-full origin-left"
                  style={{
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 3s ease-in-out infinite'
                  }}
                />
              </div>

              {/* Animated Badge */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1">
                <div className="relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full blur opacity-50 animate-pulse" />
                  <span className="relative px-2 py-1 text-[10px] font-semibold bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full shadow-lg">
                    DEV
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100/50 rounded-lg transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 premium-shadow hover:premium-shadow-lg transition-all duration-500 hover:-translate-y-1 focus-ring"
          >
            Let's Talk
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-down">
            <ul className="flex flex-col space-y-2 bg-white/80 backdrop-blur-xl rounded-xl p-4 shadow-xl">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  className="block text-center px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

