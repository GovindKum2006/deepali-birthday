import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles, X, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

const LETTER_PARAGRAPHS = [
  "Dear Deepali,",
  "Happy Birthday to someone truly special. ❤️",
  "I hope this new chapter of your life brings you happiness, peace, beautiful surprises, and countless reasons to smile. You deserve all the love and kindness that life has to offer.",
  "May your dreams come closer, your worries become lighter, and your days become brighter.",
  "Today, I just want you to feel celebrated and appreciated for the wonderful person you are.",
  "Happy Birthday, Deepali! 💗",
  "With lots of love,",
  "Govind ❤️"
];

export default function LoveLetterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  const handleOpenEnvelope = () => {
    if (isOpen) return;
    setIsOpen(true);
    setVisibleLines(0);

    // Sparkle burst
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#fda4af', '#e11d48', '#fef08a', '#fb7185', '#fbbf24'],
    });
  };

  // Typewriter effect for paragraphs line-by-line
  useEffect(() => {
    if (!isOpen) {
      setVisibleLines(0);
      return;
    }

    if (visibleLines < LETTER_PARAGRAPHS.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isOpen, visibleLines]);

  return (
    <section className="relative py-24 px-4 z-10 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/20 text-rose-300 text-sm mb-3"
      >
        <Mail className="w-3.5 h-3.5 text-amber-300" />
        <span>A Private Message For You</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-script text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-300 to-amber-200 text-glow-rose mb-4"
      >
        A Secret Love Letter
      </motion.h2>
      <p className="text-rose-200/70 text-sm sm:text-base max-w-md mx-auto mb-12">
        Sealed with eternal love and devotion. Tap the wax seal to unveil what lies within.
      </p>

      {/* Envelope Presentation Stage */}
      <div className="flex justify-center items-center">
        {!isOpen ? (
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleOpenEnvelope}
            className="cursor-pointer relative w-72 sm:w-96 h-48 sm:h-64 rounded-2xl bg-gradient-to-br from-rose-900 via-red-950 to-rose-900 p-1 shadow-2xl box-glow-rose border border-rose-500/30 flex flex-col justify-between overflow-hidden group"
          >
            {/* Triangular envelope flap illusion */}
            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-rose-800 to-rose-900/90 clip-path-triangle border-b border-rose-400/20 shadow-md group-hover:brightness-110 transition-all" />

            {/* Glowing Wax Seal Button in Center */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="relative group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full wax-seal flex flex-col items-center justify-center text-amber-200 border-2 border-rose-300/40 shadow-2xl">
                  <Heart className="w-7 h-7 sm:w-8 sm:h-8 fill-rose-200 text-rose-100 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-serif font-bold text-amber-200 tracking-wider">
                    G &bull; D
                  </span>
                </div>
                {/* Floating sparkle hint */}
                <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-amber-300 animate-bounce" />
              </div>
            </div>

            {/* Commemorative birth date stamp */}
            <div className="absolute top-4 right-4 z-10 border border-dashed border-amber-300/40 px-2.5 py-1 rounded text-[10px] text-amber-200/80 font-serif flex items-center gap-1">
              <Calendar className="w-3 h-3 text-amber-300" />
              <span>18/10/2006</span>
            </div>

            <div className="absolute bottom-4 inset-x-0 text-center z-10">
              <span className="font-script text-xl sm:text-2xl text-rose-200 group-hover:text-amber-200 transition-colors">
                Tap to Break Seal & Read 💌
              </span>
            </div>
          </motion.div>
        ) : null}
      </div>

      {/* Fullscreen Unfolded Letter Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 40, rotateX: 10 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.85, y: 40 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#fffdfa] text-stone-800 rounded-3xl p-8 sm:p-14 shadow-2xl border-4 border-amber-200/80 my-8 text-left"
              style={{
                backgroundImage: 'radial-gradient(#fde68a 0.75px, transparent 0.75px), radial-gradient(#fde68a 0.75px, #fffdfa 0.75px)',
                backgroundSize: '30px 30px',
                backgroundPosition: '0 0, 15px 15px',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors border border-stone-300"
                aria-label="Close letter"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Decorative Header Stamp */}
              <div className="flex items-center justify-between border-b border-rose-200 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-md">
                    <Heart className="w-4 h-4 fill-white" />
                  </div>
                  <div>
                    <span className="font-serif font-bold text-xs sm:text-sm text-rose-900 tracking-wider uppercase block">
                      From Govind&apos;s Heart
                    </span>
                    <span className="text-[11px] text-stone-500">To My Beautiful Deepali (Born 18/10/2006)</span>
                  </div>
                </div>
                <span className="font-serif italic text-xs text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                  20th Birthday Edition ✨
                </span>
              </div>

              {/* Letter Content With Line-by-Line Typewriter Reveal */}
              <div className="space-y-4 font-serif text-base sm:text-lg leading-relaxed text-stone-800">
                {LETTER_PARAGRAPHS.map((paragraph, index) => {
                  const isVisible = index < visibleLines;
                  const isSalutation = index === 0;
                  const isSignoff = index >= LETTER_PARAGRAPHS.length - 2;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.5 }}
                      className={`${
                        isSalutation
                          ? 'font-script text-3xl sm:text-4xl text-rose-900 font-bold mb-2'
                          : isSignoff
                          ? 'font-script text-2xl sm:text-3xl text-rose-950 font-bold'
                          : 'text-stone-700 font-light'
                      } ${!isVisible ? 'hidden' : 'block'}`}
                    >
                      {paragraph}
                    </motion.div>
                  );
                })}

                {/* Subtle loading indicator while typing */}
                {visibleLines < LETTER_PARAGRAPHS.length && (
                  <div className="flex items-center gap-1.5 text-rose-500 pt-2">
                    <Heart className="w-4 h-4 fill-rose-500 animate-pulse" />
                    <span className="text-xs font-sans text-stone-500 italic">Writing with love...</span>
                  </div>
                )}
              </div>

              {/* Wax Seal Stamp on Letter Bottom */}
              <div className="mt-8 pt-4 border-t border-rose-100 flex items-center justify-between text-xs text-stone-400 font-sans">
                <span>Stamped with endless love on 18/10/2006 ❤️</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-1.5 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-800 font-medium text-xs transition-colors"
                >
                  Fold Letter Back ✉️
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
