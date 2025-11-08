import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[78vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle vignette + grid distortion overlay that won't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
        >
          India’s Home for Competitive Gaming
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-white/80"
        >
          Join daily tournaments, climb leaderboards, and earn rewards. Built for BGMI, Valorant, CoD Mobile and more.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex items-center gap-3"
        >
          <a href="#tournaments" className="inline-flex items-center justify-center rounded-md bg-emerald-500 text-black font-semibold px-5 py-3 hover:brightness-110 transition">
            Browse Tournaments
          </a>
          <a href="#market" className="inline-flex items-center justify-center rounded-md border border-white/20 text-white px-5 py-3 hover:bg-white/10 transition">
            Explore Market
          </a>
        </motion.div>
      </div>

      {/* Soft grid dots overlay (pure CSS, no negative z-index) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(#9ef99b_1px,transparent_1px)] [background-size:24px_24px]" />
    </section>
  );
}
