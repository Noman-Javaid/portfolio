"use client";

interface SectionDividerProps {
  variant?: "wave" | "dots" | "gradient" | "curve";
  flip?: boolean;
  className?: string;
}

const SectionDivider = ({ variant = "wave", flip = false, className = "" }: SectionDividerProps) => {
  if (variant === "wave") {
    return (
      <div className={`relative w-full overflow-hidden ${className}`} style={{ transform: flip ? "scaleY(-1)" : "none" }}>
        <svg 
          className="w-full h-12 md:h-16 lg:h-20" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" 
            fill="currentColor"
            className="text-white"
          />
        </svg>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={`relative w-full py-8 md:py-12 overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-slate-300 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 50}ms`, opacity: 0.3 + (i % 3) * 0.2 }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div className={`relative w-full h-16 md:h-24 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100/50 to-transparent" />
      </div>
    );
  }

  if (variant === "curve") {
    return (
      <div className={`relative w-full overflow-hidden ${className}`} style={{ transform: flip ? "scaleY(-1)" : "none" }}>
        <svg 
          className="w-full h-16 md:h-24" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" 
            fill="currentColor"
            className="text-slate-50"
          />
        </svg>
      </div>
    );
  }

  return null;
};

export default SectionDivider;


