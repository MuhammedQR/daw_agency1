"use client";

import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/motion";
import HeroFX from "./HeroFX"; // أو "@/components/HeroFX" حسب مسارك

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32 pb-16 bg-[hsl(var(--surface))]">
      {/* يغطي كامل مساحة الهيرو */}
      <HeroFX
  className="absolute inset-0 w-full h-full pointer-events-none "
  
/>

      <div className="container-app relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-[hsl(var(--content))]">
              We build modern <span className="text-brand-primary">websites</span> & apps
            </h1>
            <p className="mt-4 text-lg text-[hsl(var(--muted))]">
              NexGen Solutions delivers high-quality web experiences with React, Next.js, and Tailwind.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="cta" href="#contact" aria-label="Start your project">Start your project</Button>
              <Button variant="outline" href="/portfolio" aria-label="See our work">See our work</Button>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative">
            {/* Simple decorative illustration */}
            <svg
              role="img"
              aria-label="Abstract web illustration"
              className="w-full h-auto"
              viewBox="0 0 600 400"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#1E3A8A" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="600" height="400" rx="24" fill="url(#g1)" opacity="0.08" />
              <g fill="none" stroke="#1E3A8A" strokeOpacity="0.2">
                <circle cx="300" cy="200" r="160" />
                <circle cx="300" cy="200" r="120" />
                <circle cx="300" cy="200" r="80" />
              </g>
              <g>
                <rect x="80" y="120" width="440" height="180" rx="16" fill="#fff" />
                <rect x="110" y="150" width="160" height="20" rx="6" fill="#1E3A8A" opacity="0.9" />
                <rect x="110" y="180" width="200" height="12" rx="6" fill="#6B7280" opacity="0.6" />
                <rect x="110" y="200" width="260" height="12" rx="6" fill="#6B7280" opacity="0.4" />
                <rect x="110" y="240" width="120" height="36" rx="10" fill="#10B981" opacity="0.9" />
              </g>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
