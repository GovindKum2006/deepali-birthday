import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AMBIENT_PHOTOS = [
  '/deepali-photo-1.jpg',
  '/deepali-photo-2.jpg',
  '/memories/WhatsApp Image 2026-10-16 at 12.34.26 AM.jpeg',
  '/memories/WhatsApp Image 2026-10-16 at 12.34.46 AM.jpeg',
  '/memories/WhatsApp Image 2026-10-16 at 12.34.48 AM.jpeg',
  '/memories/WhatsApp Image 2026-10-16 at 12.34.55 AM.jpeg',
  '/memories/WhatsApp Image 2026-10-16 at 12.34.30 AM.jpeg',
];

// Floating Polaroid Memory Orbs that drift in the background
const FLOATING_ORBS = [
  { src: '/deepali-photo-1.jpg', left: '6%', top: '15%', size: 110, rotate: -8, delay: 0, duration: 16 },
  { src: '/deepali-photo-2.jpg', right: '8%', top: '28%', size: 125, rotate: 10, delay: 2, duration: 20 },
  { src: '/memories/WhatsApp Image 2026-10-16 at 12.34.26 AM.jpeg', left: '10%', top: '55%', size: 105, rotate: 6, delay: 4, duration: 18 },
  { src: '/memories/WhatsApp Image 2026-10-16 at 12.34.46 AM.jpeg', right: '7%', top: '70%', size: 115, rotate: -7, delay: 1, duration: 19 },
  { src: '/memories/WhatsApp Image 2026-10-16 at 12.34.48 AM.jpeg', left: '12%', top: '85%', size: 110, rotate: 9, delay: 3, duration: 17 },
];

export default function BackgroundPhotoAmbient() {
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);

  // Smooth cinematic background photo transition every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhotoIdx((prev) => (prev + 1) % AMBIENT_PHOTOS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Cinematic Ken Burns Ambient Backdrop */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPhotoIdx}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 0.18, scale: 1.12 }}
          exit={{ opacity: 0, scale: 1.16 }}
          transition={{ duration: 3.5, ease: 'easeInOut' }}
          className="absolute inset-0 bg-cover bg-center filter blur-md"
          style={{
            backgroundImage: `url('${AMBIENT_PHOTOS[currentPhotoIdx]}')`,
          }}
        />
      </AnimatePresence>

      {/* Dark romantic gradient mask to preserve perfect contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#120309]/90 via-[#18050f]/85 to-[#0e0207]/95" />

      {/* 2. Floating Translucent Memory Polaroids in the Background */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {FLOATING_ORBS.map((orb, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-15, 20, -15],
              rotate: [orb.rotate, orb.rotate + 6, orb.rotate - 6, orb.rotate],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              repeat: Infinity,
              duration: orb.duration,
              delay: orb.delay,
              ease: 'easeInOut',
            }}
            className="absolute rounded-2xl p-2 bg-gradient-to-br from-rose-400/25 via-pink-500/15 to-amber-300/20 backdrop-blur-md border border-rose-300/30 shadow-2xl shadow-rose-950/40"
            style={{
              width: orb.size,
              height: orb.size * 1.25,
              left: orb.left,
              right: orb.right,
              top: orb.top,
            }}
          >
            <div className="w-full h-full rounded-xl overflow-hidden relative shadow-inner">
              <img
                src={orb.src}
                alt="Ambient memory"
                className="w-full h-full object-cover filter brightness-95 contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
