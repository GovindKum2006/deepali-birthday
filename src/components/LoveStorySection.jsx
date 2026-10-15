import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Feather, Compass, Sun, Moon } from 'lucide-react';

export default function LoveStorySection() {
  const cards = [
    {
      icon: Sun,
      title: 'Warmth in Ordinary Days',
      text: 'Every morning feels softer, every moment feels lighter knowing you are in my life.',
      color: 'from-amber-400 to-rose-400',
    },
    {
      icon: Moon,
      title: 'A Rare and Gentle Soul',
      text: 'In a world that rushes endlessly, your kindness brings calm and pure, honest peace.',
      color: 'from-purple-400 to-rose-400',
    },
    {
      icon: Compass,
      title: 'Every Step Forward',
      text: 'Wherever the future takes us, each journey is brighter because we walk it side by side.',
      color: 'from-rose-400 to-pink-500',
    },
  ];

  return (
    <section className="relative py-24 px-4 z-10 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/20 text-rose-300 text-sm mb-3"
        >
          <Feather className="w-3.5 h-3.5 text-rose-400" />
          <span>Whispers of Love</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-script text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-300 to-amber-200 text-glow-rose"
        >
          Our Little Love Story
        </motion.h2>
        <p className="mt-2 text-rose-200/70 text-sm sm:text-base max-w-lg mx-auto">
          Words from the heart, meant just for you.
        </p>
      </div>

      {/* Main Centerpiece Quote Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative rounded-3xl p-8 sm:p-14 glass-card-rose border border-rose-400/40 shadow-2xl overflow-hidden mb-12 text-center group"
      >
        {/* Ambient Glowing backdrop */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-rose-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-rose-500/25 transition-all duration-700" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/25 transition-all duration-700" />

        {/* Decorative Quote Mark */}
        <span className="font-serif text-6xl sm:text-8xl text-rose-400/20 select-none block leading-none mb-2">
          &ldquo;
        </span>

        {/* The Exact Core Prompt Quote */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-rose-100 font-normal leading-relaxed md:leading-loose tracking-wide max-w-3xl mx-auto drop-shadow-sm">
          &ldquo;Some people make ordinary days feel extraordinary. You are one of those rare people who make the world feel warmer, brighter, and more beautiful just by being themselves.&rdquo;
        </p>

        {/* Attribution signature */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-rose-400/50" />
          <Heart className="w-4 h-4 text-rose-400 fill-rose-400 animate-pulse" />
          <span className="font-script text-2xl sm:text-3xl text-amber-200">
            Forever Yours
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-rose-400/50" />
        </div>
      </motion.div>

      {/* Triad of Story Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 + 0.2, duration: 0.7 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-rose-500/20 hover:border-rose-400/40 transition-all duration-300 relative group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-900/60 to-purple-950/60 border border-rose-400/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 text-amber-200" />
              </div>
              <h3 className="text-lg font-semibold text-rose-100 mb-2 font-sans tracking-wide">
                {card.title}
              </h3>
              <p className="text-sm text-rose-200/75 leading-relaxed font-light">
                {card.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
