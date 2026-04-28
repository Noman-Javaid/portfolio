"use client";

import { useEffect, useRef } from "react";

const COLORS = [
  "#c9a87c",
  "#d4af7a",
  "#e8c4b8",
  "#b76e79",
  "#f5e6d3",
  "#8b7355",
  "#fff8f0",
];

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vr: number;
  w: number;
  h: number;
  color: string;
  drag: number;
  kind: 0 | 1 | 2;
};

function burst(
  particles: Particle[],
  width: number,
  originY: number,
  count: number,
  spread: number
) {
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
    const speed = spread * (0.4 + Math.random() * 0.9);
    const kind = (i % 3) as 0 | 1 | 2;
    particles.push({
      x: width * (0.2 + Math.random() * 0.6),
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - Math.random() * 4,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.25,
      w: 4 + Math.random() * 6,
      h: 6 + Math.random() * 10,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]!,
      drag: 0.988 + Math.random() * 0.008,
      kind,
    });
  }
}

export function WeddingConfetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles = particlesRef.current;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    let burstTimeout: ReturnType<typeof setTimeout> | undefined;
    let burstInterval: ReturnType<typeof setInterval> | undefined;

    const w = window.innerWidth;
    const h = window.innerHeight;

    if (!reduced) {
      burst(particles, w, -20, 80, 9);
      burstTimeout = setTimeout(() => burst(particles, w, h * 0.15, 50, 7), 400);
      burstInterval = setInterval(() => {
        if (particles.length < 120) {
          burst(particles, w, -10, 12, 5);
        }
      }, 2800);
    }

    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 16, 2);
      last = now;
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]!;
        p.vy += 0.12 * dt;
        p.vx *= p.drag;
        p.vy *= p.drag;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rot += p.vr * dt;

        if (p.y > height + 40 || p.x < -40 || p.x > width + 40) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.85;
        if (p.kind === 0) {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        } else if (p.kind === 1) {
          ctx.beginPath();
          ctx.arc(0, 0, p.w * 0.6, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -p.h * 0.5);
          ctx.lineTo(p.w * 0.5, p.h * 0.5);
          ctx.lineTo(-p.w * 0.5, p.h * 0.5);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
      if (burstTimeout) clearTimeout(burstTimeout);
      if (burstInterval) clearInterval(burstInterval);
      particles.length = 0;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5] mix-blend-multiply opacity-90"
    />
  );
}
