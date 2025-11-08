import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[520px] sm:h-[560px] md:h-[620px] lg:h-[720px] w-full">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" />
      </div>

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto max-w-6xl px-4 pb-10 sm:pb-14 md:pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Live tournaments every hour
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              The Indian Esports Platform for Pros & Rising Stars
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Host, compete, and win in real-time tournaments. Secure payouts, battle pass progression, and a vibrant marketplace — all in one sleek, mobile‑first experience.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <motion.button
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -2 }}
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 sm:px-5 py-2.5 font-semibold text-white shadow-lg shadow-emerald-500/30"
              >
                Get Started
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -2 }}
                className="inline-flex items-center justify-center rounded-lg bg-white/10 px-4 sm:px-5 py-2.5 font-semibold text-white border border-white/10 backdrop-blur hover:bg-white/15"
              >
                Explore Tournaments
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
