"use client";

import { useEffect, useRef, useState } from "react";

interface ParallaxBannerProps {
  title: string;
  subtitle?: string;
  gradient?: string;
  pattern?: boolean;
}

const ParallaxBanner = ({ 
  title, 
  subtitle, 
  gradient = "from-slate-900 via-slate-800 to-slate-900",
  pattern = true 
}: ParallaxBannerProps) => {
  const [scrollY, setScrollY] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const rect = bannerRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      ref={bannerRef}
      className={`relative w-full py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-br ${gradient}`}
    >
      {/* Professional Background Pattern */}
      {pattern && (
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
              transform: `translateY(${scrollY * 50}px)`,
            }}
          />
        </div>
      )}

      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"
          style={{ transform: `translate(${scrollY * 30}px, ${scrollY * 20}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
          style={{ transform: `translate(${-scrollY * 40}px, ${-scrollY * 25}px)` }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="text-center max-w-4xl mx-auto"
          style={{ 
            transform: `translateY(${scrollY * -15}px)`,
            opacity: 1 - scrollY * 0.3 
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-medium">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default ParallaxBanner;
