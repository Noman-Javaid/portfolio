"use client";

import { personalInfo } from "@/data/portfolio";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider">
              <FaEnvelope className="text-sm" />
              Contact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Let's <span className="text-slate-600">Connect</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <AnimatedSection animation="fade-right" className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Get in Touch</h3>
              <p className="text-slate-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white border-2 border-slate-200 rounded-lg hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 shadow-md flex-shrink-0">
                  <FaEnvelope className="text-base sm:text-lg" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email</div>
                  <div className="font-semibold text-slate-900 text-sm sm:text-base truncate">{personalInfo.email}</div>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white border-2 border-slate-200 rounded-lg hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 shadow-md flex-shrink-0">
                  <FaPhone className="text-base sm:text-lg" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Phone</div>
                  <div className="font-semibold text-slate-900 text-sm sm:text-base">{personalInfo.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white border-2 border-slate-200 rounded-lg">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-md flex-shrink-0">
                  <FaMapMarkerAlt className="text-base sm:text-lg" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Location</div>
                  <div className="font-semibold text-slate-900 text-sm sm:text-base">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 sm:pt-6">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4">Follow Me</h4>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white border-2 border-slate-200 rounded-lg text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-lg sm:text-xl" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white border-2 border-slate-200 rounded-lg text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-lg sm:text-xl" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Card */}
          <AnimatedSection animation="fade-left" className="flex items-center">
            <div className="w-full bg-white border-2 border-slate-200 rounded-lg sm:rounded-xl p-6 sm:p-8 lg:p-10 text-center hover:shadow-2xl hover:border-slate-300 transition-all duration-500">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Ready to Start?
              </h3>
              
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Whether you have a project in mind, need technical consultation, or just want to connect, feel free to reach out. Let's create something amazing together!
              </p>
              
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="block w-full px-6 py-3 sm:py-4 bg-slate-900 text-white font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Email
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="block w-full px-6 py-3 bg-white border-2 border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300"
                >
                  Call Me
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-center gap-4 sm:gap-6 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium">Fast Response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium">Available 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
