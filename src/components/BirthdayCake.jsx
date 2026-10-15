import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Flame, Wind, RotateCcw, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BirthdayCake({ onWishMade }) {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [isBlowing, setIsBlowing] = useState(false);

  const handleMakeWish = () => {
    if (candlesBlown) return;
    setIsBlowing(true);

    // Short delay simulating blowing
    setTimeout(() => {
      setCandlesBlown(true);
      setIsBlowing(false);

      // Trigger massive romantic confetti burst
      const end = Date.now() + 3000;
      const colors = ['#f43f5e', '#fb7185', '#f59e0b', '#fbbf24', '#fbcfe8', '#e11d48'];

      (function frame() {
        confetti({
          particleCount: 6,
          angle: 60,
          spread: 60,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 6,
          angle: 120,
          spread: 60,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();

      if (onWishMade) onWishMade();
    }, 600);
  };

  const handleRelight = () => {
    setCandlesBlown(false);
  };

  return (
    <section className="relative py-24 px-4 z-10 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card-rose rounded-3xl p-8 sm:p-12 border border-rose-400/30 relative overflow-hidden"
      >
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-sm mb-3">
          <Calendar className="w-3.5 h-3.5 text-amber-300" />
          <span>18/10/2006 • Celebrating 20 Beautiful Years</span>
        </div>

        <h2 className="font-script text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-300 to-amber-200 text-glow-rose">
          The 20th Birthday Cake
        </h2>

        {/* Cake Illustration Stage */}
        <div className="relative w-72 sm:w-88 h-72 mx-auto mt-8 flex flex-col items-center justify-end">
          {/* Candles Container with Number 20 Banner */}
          <div className="flex justify-center items-end gap-5 sm:gap-7 z-20 mb-[-4px]">
            {[0, 1, 2, 3].map((idx) => (
              <div key={idx} className="relative flex flex-col items-center">
                {/* Flame or Smoke */}
                {!candlesBlown ? (
                  <div
                    className={`candle-flame transition-all duration-300 ${
                      isBlowing ? 'scale-75 opacity-50 blur-sm' : ''
                    }`}
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    <div className="w-4 h-6 rounded-full bg-gradient-to-t from-rose-600 via-amber-400 to-yellow-100 shadow-[0_0_18px_#fbbf24]" />
                  </div>
                ) : (
                  <div className="candle-smoke text-stone-400 text-xs flex flex-col items-center pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400/60 blur-xs" />
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-400/40 blur-xs mt-1" />
                  </div>
                )}

                {/* Candle Wick */}
                <div className="w-0.5 h-2.5 bg-stone-700 mt-0.5" />

                {/* Candle Body */}
                <div className="w-3 sm:w-3.5 h-14 rounded-t-sm bg-gradient-to-r from-rose-200 via-pink-100 to-rose-300 shadow-md relative overflow-hidden border-t border-rose-200">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(225,29,72,0.3)_4px,rgba(225,29,72,0.3)_8px)]" />
                </div>
              </div>
            ))}
          </div>

          {/* Tier 1 (Top Tier) */}
          <div className="relative w-44 sm:w-48 h-16 rounded-2xl bg-gradient-to-b from-rose-200 via-pink-100 to-rose-300 shadow-lg border-2 border-rose-300/60 z-10 flex flex-col justify-between overflow-hidden">
            {/* Strawberry Cream Frosting drips */}
            <div className="w-full flex justify-around">
              <span className="w-5 h-3 rounded-b-full bg-rose-400 shadow-sm" />
              <span className="w-6 h-4 rounded-b-full bg-rose-500 shadow-sm" />
              <span className="w-5 h-2.5 rounded-b-full bg-rose-400 shadow-sm" />
              <span className="w-6 h-4.5 rounded-b-full bg-rose-500 shadow-sm" />
              <span className="w-4 h-3 rounded-b-full bg-rose-400 shadow-sm" />
            </div>
            {/* 18/10/2006 Golden Inscription */}
            <div className="text-center font-serif text-[11px] sm:text-xs text-rose-900 font-bold tracking-wider">
              18 • 10 • 2006
            </div>
            {/* Sugar Pearls row */}
            <div className="flex justify-evenly pb-1">
              <span className="w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_4px_#fde047]" />
              <span className="w-2 h-2 rounded-full bg-rose-400 shadow-sm" />
              <span className="w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_4px_#fde047]" />
              <span className="w-2 h-2 rounded-full bg-rose-400 shadow-sm" />
              <span className="w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_4px_#fde047]" />
            </div>
          </div>

          {/* Tier 2 (Bottom Tier) */}
          <div className="relative w-68 sm:w-76 h-24 rounded-2xl bg-gradient-to-b from-rose-300 via-pink-200 to-rose-400 shadow-xl border-2 border-rose-300/70 z-0 flex flex-col justify-between -mt-2 overflow-hidden">
            {/* Upper chocolate/strawberry drips */}
            <div className="w-full flex justify-around">
              <span className="w-7 h-4 rounded-b-full bg-rose-500 shadow-sm" />
              <span className="w-8 h-6 rounded-b-full bg-rose-600 shadow-sm" />
              <span className="w-7 h-4.5 rounded-b-full bg-rose-500 shadow-sm" />
              <span className="w-8 h-7 rounded-b-full bg-rose-600 shadow-sm" />
              <span className="w-6 h-4 rounded-b-full bg-rose-500 shadow-sm" />
              <span className="w-7 h-5 rounded-b-full bg-rose-600 shadow-sm" />
            </div>

            {/* Middle decorative text */}
            <div className="text-center">
              <span className="font-script text-xl sm:text-2xl text-rose-900 font-bold tracking-wider drop-shadow-sm">
                Deepali ❤️ 20th Birthday
              </span>
            </div>

            {/* Base Pearls & Gold Rim */}
            <div className="flex justify-around pb-2 bg-gradient-to-r from-amber-400/20 via-rose-500/20 to-amber-400/20 py-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <span
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-amber-200 border border-amber-400/80 shadow-[0_0_5px_#fde047]"
                />
              ))}
            </div>
          </div>

          {/* Golden Cake Stand */}
          <div className="w-72 sm:w-80 h-3 rounded-full bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 shadow-2xl border-t border-yellow-100 z-0 mt-1" />
          <div className="w-28 h-4 rounded-b-lg bg-gradient-to-r from-amber-600 via-amber-400 to-amber-700 shadow-md" />
        </div>

        {/* Action Button: Make a Wish */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {!candlesBlown ? (
            <button
              id="make-a-wish-button"
              onClick={handleMakeWish}
              disabled={isBlowing}
              className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-medium text-white transition-all duration-300 transform hover:scale-105 active:scale-95 bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600 box-glow-gold border border-amber-300/40"
            >
              <Wind className="w-5 h-5 text-amber-100 group-hover:rotate-12 transition-transform" />
              <span>Make a Wish ✨</span>
              <Sparkles className="w-4 h-4 text-yellow-200 animate-spin-slow" />
            </button>
          ) : (
            <button
              id="relight-candles-button"
              onClick={handleRelight}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose-950/70 border border-rose-500/40 text-rose-200 text-sm font-medium hover:bg-rose-900/90 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Light Candles Again 🕯️</span>
            </button>
          )}
        </div>

        {/* Revealed Romantic Wish Message */}
        <AnimatePresence>
          {candlesBlown && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-rose-900/50 via-purple-950/40 to-rose-950/60 border border-rose-400/40 shadow-2xl relative"
            >
              <div className="flex justify-center gap-2 text-amber-300 mb-2">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <Heart className="w-5 h-5 text-rose-400 fill-rose-400 animate-bounce" />
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>

              <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-rose-100 font-medium leading-relaxed drop-shadow-md">
                &ldquo;May your smile always shine brighter than every star in the sky.&rdquo;
              </p>

              <p className="mt-3 text-sm text-rose-300/80 font-light">
                Happy 20th Birthday, Deepali (18/10/2006) — Your wish is sealed in the stars ❤️
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
