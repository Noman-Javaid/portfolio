"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WeddingConfetti } from "./WeddingConfetti";

const script = "font-[family-name:var(--font-wedding-script)]";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Ornament() {
  return (
    <svg
      className="mx-auto h-10 w-32 text-white/45"
      viewBox="0 0 120 36"
      fill="none"
      aria-hidden
    >
      <path
        d="M60 4v28M20 18h80M40 18c0-6 8-10 20-10s20 4 20 10-8 10-20 10-20-4-20-10z"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <circle cx="60" cy="18" r="2.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function FloatingPetals() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white/18"
          style={{
            width: 6 + (i % 4) * 4,
            height: 6 + (i % 3) * 3,
            left: `${(i * 7.5) % 100}%`,
            top: `${(i * 11) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0.2, 0.55, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + (i % 5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}

type Props = {
  walimaOnly?: boolean;
};

export function WeddingInvitationExperience({ walimaOnly = false }: Props) {
  const reduce = useReducedMotion();

  return (
    <main className="relative h-[100dvh] overflow-hidden bg-[#050617] text-white">
      {!reduce && <WeddingConfetti />}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(255,255,255,0.18),transparent),radial-gradient(ellipse_70%_60%_at_10%_20%,rgba(236,72,153,0.28),transparent),radial-gradient(ellipse_70%_55%_at_90%_35%,rgba(59,130,246,0.26),transparent),radial-gradient(ellipse_80%_70%_at_55%_110%,rgba(245,158,11,0.2),transparent)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:22px_22px]" />
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(120%_80%_at_30%_15%,rgba(34,197,94,0.16),transparent_55%),radial-gradient(120%_80%_at_80%_30%,rgba(168,85,247,0.18),transparent_55%)]"
          animate={{ opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <FloatingPetals />

      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col px-4 pb-5 pt-5 sm:px-10 sm:pb-10 sm:pt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-3xl border border-white/12 bg-white/10 shadow-[0_30px_110px_-35px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.08)_inset] backdrop-blur-2xl"
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-fuchsia-400/0 via-fuchsia-300/70 to-sky-300/0" />
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-fuchsia-500/25 blur-3xl" aria-hidden />
          <div className="absolute -left-24 top-40 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" aria-hidden />

          <div className="flex flex-col px-6 py-7 sm:px-12 sm:py-10">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-white/70 sm:text-[13px]"
            >
              Wedding Invitation
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-3 text-center text-[28px] font-semibold leading-snug text-white sm:text-4xl"
            >
              Mr &amp; Mrs Javaid
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-3 text-center text-[17px] leading-relaxed text-white/80 sm:text-lg"
            >
              invite you to celebrate the wedding ceremony of their son
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 text-center"
            >
              <p className={`text-[44px] leading-tight text-white drop-shadow-[0_10px_40px_rgba(236,72,153,0.18)] sm:text-6xl ${script}`}>
                Muhammad Noman Javaid
              </p>
              <p className="mt-2 text-[15px] font-medium italic tracking-wide text-white/60 sm:text-base">
                with
              </p>
              <p className={`mt-1 text-[44px] leading-tight text-white drop-shadow-[0_10px_40px_rgba(59,130,246,0.18)] sm:text-6xl ${script}`}>
                Noor Fatima
              </p>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-7"
            >
              <Ornament />
            </motion.div>

            <motion.section
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className={
                walimaOnly
                  ? "mt-6"
                  : "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
              }
            >
              {!walimaOnly && (
                <motion.article
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-white/12 to-white/5 p-4 shadow-[0_16px_50px_-20px_rgba(0,0,0,0.6)] sm:p-5"
                >
                  <div className="absolute inset-0 opacity-80 [background:radial-gradient(120%_80%_at_30%_10%,rgba(236,72,153,0.28),transparent_55%),radial-gradient(120%_80%_at_90%_60%,rgba(245,158,11,0.22),transparent_50%)]" />
                  <div className="relative">
                    <p className="text-center text-[10px] font-semibold uppercase tracking-[0.32em] text-white/70">
                      Barat
                    </p>
                    <p className="mt-2 text-center text-lg font-semibold text-white">
                      Wednesday — 13 May 2026
                    </p>

                    <ul className="mt-3 space-y-2 text-center text-[15px] text-white/85 sm:text-base">
                      <li>
                        <span className="font-semibold text-white">Sehra bandi</span>
                        <span className="mx-1.5 text-white/30">·</span>
                        6:00 PM
                      </li>
                      <li>
                        <span className="font-semibold text-white">Departure of barat</span>
                        <span className="mx-1.5 text-white/30">·</span>
                        7:00 PM
                      </li>
                    </ul>

                    <p className="mt-3 border-t border-white/10 pt-3 text-center text-[15px] leading-relaxed text-white/80 sm:text-base">
                      <span className="font-semibold text-white/90">Venue</span>
                      <br />
                      House E9/2D, Street 6A, Lane 4
                      <br />
                      Cavalry Ground, Lahore
                    </p>
                  </div>
                </motion.article>
              )}

              <motion.article
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-white/12 to-white/5 p-4 shadow-[0_16px_50px_-20px_rgba(0,0,0,0.6)] sm:p-5"
              >
                <div className="absolute inset-0 opacity-80 [background:radial-gradient(120%_80%_at_20%_20%,rgba(59,130,246,0.26),transparent_55%),radial-gradient(120%_80%_at_90%_70%,rgba(236,72,153,0.18),transparent_55%)]" />
                <div className="relative">
                  <p className="text-center text-[10px] font-semibold uppercase tracking-[0.32em] text-white/70">
                    Walima
                  </p>
                  <p className="mt-2 text-center text-lg font-semibold text-white">
                    Thursday — 14 May 2026
                  </p>

                  <ul className="mt-3 space-y-2 text-center text-[15px] text-white/85 sm:text-base">
                    <li>
                      <span className="font-semibold text-white">Guest welcome</span>
                      <span className="mx-1.5 text-white/30">·</span>
                      7:00 PM
                    </li>
                    <li>
                      <span className="font-semibold text-white">Dinner</span>
                      <span className="mx-1.5 text-white/30">·</span>
                      9:00 PM
                    </li>
                  </ul>

                  <p className="mt-3 border-t border-white/10 pt-3 text-center text-[15px] leading-relaxed text-white/80 sm:text-base">
                    <span className="font-semibold text-white/90">Venue</span>
                    <br />
                    Noor Jahan Banquet
                    <br />
                    Barkat Market, Lahore
                  </p>
                </div>
              </motion.article>
            </motion.section>

            <motion.section
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
                Contacts
              </p>
              <div className="mt-3 flex flex-col items-stretch gap-2.5 sm:flex-row sm:justify-center">
                <a
                  href="tel:+923224792282"
                  className="rounded-full border border-white/14 bg-white/10 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-white/15 active:scale-[0.99]"
                >
                  0322-4792282
                </a>
                <a
                  href="tel:+923065195681"
                  className="rounded-full border border-white/14 bg-white/10 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-white/15 active:scale-[0.99]"
                >
                  0306-5195681
                </a>
              </div>

              <p className="mt-4 text-center text-sm leading-relaxed text-white/60">
                We would be honoured by your presence.
              </p>
            </motion.section>
          </div>

          <motion.div
            aria-hidden
            className="h-2.5 bg-gradient-to-r from-fuchsia-400/40 via-sky-400/35 to-amber-300/40"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

      </div>
    </main>
  );
}
