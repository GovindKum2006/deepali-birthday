import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, RotateCcw, Calendar, Music } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FinalSurprise({ onReplay }) {
  useEffect(() => {
    // Launch celebratory fireworks effect periodically when in view
    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 40 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#f43f5e', '#fb7185', '#fbbf24', '#e11d48'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#a855f7', '#fb7185', '#fde047', '#38bdf8'],
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const handleReplayClick = () => {
    // Confetti fanfare on replay
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#facc15', '#fbcfe8'],
    });

    if (onReplay) onReplay();
  };

  return (
    <section className="relative min-h-[90vh] py-24 px-4 z-10 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Huge Heart-shaped ambient background glow */}
      <div className="absolute w-[450px] h-[450px] bg-rose-600/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute w-[350px] h-[350px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none -top-10 animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-3xl mx-auto relative glass-card-gold rounded-3xl p-8 sm:p-14 border border-amber-300/40 shadow-2xl"
      >
        {/* Animated Heart Icon Stage */}
        <div className="relative inline-block mb-6">
          <motion.div
            animate={{
              scale: [1, 1.15, 1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-rose-600 via-pink-500 to-amber-400 p-1 flex items-center justify-center shadow-xl box-glow-rose mx-auto"
          >
            <div className="w-full h-full rounded-full bg-rose-950/90 flex items-center justify-center">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 fill-rose-500 text-rose-400 animate-pulse" />
            </div>
          </motion.div>
          {/* Sparkles around heart */}
          <Sparkles className="absolute -top-1 -right-1 w-6 h-6 text-amber-300 animate-spin-slow" />
          <Sparkles className="absolute -bottom-1 -left-1 w-5 h-5 text-amber-200 animate-bounce" />
        </div>

        {/* Milestone Date Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/70 border border-amber-300/30 text-amber-200 text-xs sm:text-sm font-medium mb-4">
          <Calendar className="w-3.5 h-3.5 text-amber-300" />
          <span>18/10/2006 — 20 Golden Years of Deepali</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        </div>

        {/* Grand Final Birthday Message */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-script text-4xl sm:text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-300 to-amber-200 text-glow-rose leading-tight mb-4"
        >
          Happy Birthday, Deepali! 🎂❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-serif italic text-lg sm:text-2xl text-rose-100 font-normal leading-relaxed max-w-xl mx-auto"
        >
          &ldquo;Keep smiling, keep shining, and never forget how special you are.&rdquo;
        </motion.p>

        {/* Dedication badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2 text-rose-300/80 text-sm font-sans"
        >
          <span>With all my love, always</span>
          <span>•</span>
          <span className="font-semibold text-amber-300">Govind ❤️</span>
          <span>•</span>
          <span className="text-rose-400 font-serif italic flex items-center gap-1">
            <Music className="w-3.5 h-3.5 text-rose-400 inline" />
            Tum Hi Ho
          </span>
        </motion.div>

        {/* Replay Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-10"
        >
          <button
            id="replay-surprise-button"
            onClick={handleReplayClick}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-medium text-white transition-all duration-300 transform hover:scale-105 active:scale-95 bg-gradient-to-r from-rose-600 via-purple-600 to-pink-600 box-glow-rose hover:box-glow-gold border border-rose-300/40"
          >
            <RotateCcw className="w-5 h-5 text-amber-200 group-hover:-rotate-90 transition-transform duration-300" />
            <span>Replay Our Little Surprise 💕</span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </button>
        </motion.div>
      </motion.div>

      {/* Footer copyright / love note */}
      <footer className="mt-16 text-rose-400/50 text-xs sm:text-sm font-sans flex items-center justify-center gap-1.5">
        <span>Handcrafted with all my love for Deepali (18/10/2006)</span>
        <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 inline" />
        <span>• 2026</span>
      </footer>
    </section>
  );
}
