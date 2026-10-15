import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Gift, Calendar, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getAssetUrl } from '../utils/assetUrl';

export default function HeroSection({ onOpenSurprise }) {
  const photo1 = getAssetUrl('deepali-photo-1.jpg');
  const photo2 = getAssetUrl('deepali-photo-2.jpg');

  const handleOpenClick = () => {
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#f43f5e', '#fb7185', '#fef08a', '#fda4af', '#facc15', '#e11d48'],
      shapes: ['circle'],
      scalar: 1.25,
    });

    onOpenSurprise();
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 text-center z-10 overflow-hidden">
      {/* Decorative ambient glowing circles */}
      <div className="absolute w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-3xl pointer-events-none -top-20 -left-20 animate-pulse-glow" />
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl pointer-events-none -bottom-20 -right-20 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Floating Photo Badges Flanking the Hero Area */}
      <motion.div
        animate={{
          y: [-12, 14, -12],
          rotate: [-4, 3, -4],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: 'easeInOut',
        }}
        className="hidden lg:flex absolute left-8 xl:left-16 top-1/3 -translate-y-1/2 flex-col items-center p-2 rounded-2xl bg-gradient-to-br from-rose-500/20 via-pink-500/10 to-amber-300/20 backdrop-blur-md border border-rose-400/30 shadow-2xl shadow-rose-950/50"
      >
        <div className="w-28 xl:w-36 aspect-[3/4] rounded-xl overflow-hidden relative shadow-md">
          <img
            src={photo1}
            alt="Deepali portrait"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute bottom-1.5 inset-x-0 text-[10px] text-rose-200 font-serif text-center">
            My Beautiful Queen ✨
          </span>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [14, -12, 14],
          rotate: [4, -3, 4],
        }}
        transition={{
          repeat: Infinity,
          duration: 6.5,
          delay: 1,
          ease: 'easeInOut',
        }}
        className="hidden lg:flex absolute right-8 xl:right-16 top-1/3 -translate-y-1/2 flex-col items-center p-2 rounded-2xl bg-gradient-to-br from-amber-400/20 via-rose-500/10 to-pink-500/20 backdrop-blur-md border border-amber-300/30 shadow-2xl shadow-rose-950/50"
      >
        <div className="w-28 xl:w-36 aspect-[3/4] rounded-xl overflow-hidden relative shadow-md">
          <img
            src={photo2}
            alt="Govind and Deepali"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute bottom-1.5 inset-x-0 text-[10px] text-amber-200 font-serif text-center">
            Us, Always ❤️
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="max-w-4xl mx-auto flex flex-col items-center relative"
      >
        {/* Sweet floating badge with Birth Date: 18/10/2006 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-950/70 border border-rose-500/40 text-rose-200 text-xs sm:text-sm md:text-base font-medium mb-6 backdrop-blur-md shadow-lg shadow-rose-950/50"
        >
          <Calendar className="w-4 h-4 text-amber-300" />
          <span className="tracking-wide">Born 18 October 2006 (18/10/2006)</span>
          <span className="text-rose-400">•</span>
          <span className="text-amber-200 font-serif">20 Radiant Years</span>
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse ml-0.5" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-script text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-400 to-amber-200 text-glow-rose leading-tight pb-3"
        >
          Happy Birthday, My Deepali ❤️
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-rose-100/90 font-light max-w-2xl leading-relaxed font-sans px-4"
        >
          Today is not just your birthday; it&apos;s a celebration of the beautiful person who makes my world special.
        </motion.p>

        {/* Special Milestone Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-amber-200/90 font-serif italic"
        >
          <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
          <span>18/10/2006 — The day the stars aligned to bring you into this world</span>
          <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
        </motion.div>

        {/* Romantic Call to action button with pulsing aura rings */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 relative"
        >
          <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-rose-500/40 to-pink-500/40 blur-lg animate-pulse" />

          <button
            id="open-surprise-button"
            onClick={handleOpenClick}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-medium text-white transition-all duration-300 transform hover:scale-105 active:scale-95 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 box-glow-rose hover:box-glow-gold overflow-hidden border border-rose-300/40"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

            <Gift className="w-6 h-6 text-amber-200 group-hover:rotate-12 transition-transform duration-300 animate-bounce" />
            <span className="tracking-wide font-medium">Open Your Surprise 🎁</span>
            <Heart className="w-5 h-5 text-rose-200 fill-rose-200 group-hover:scale-125 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Soft hint text below */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-6 text-xs sm:text-sm text-rose-300/60 font-light flex items-center gap-1.5"
        >
          <span>Crafted with endless love & cherished memories</span>
          <span>✨</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
