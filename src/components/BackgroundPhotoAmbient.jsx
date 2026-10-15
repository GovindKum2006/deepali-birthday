import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAssetUrl } from '../utils/assetUrl';

const AMBIENT_PHOTOS_RAW = [
  'deepali-photo-1.jpg',
  'deepali-photo-2.jpg',
  'memories/WhatsApp Image 2026-10-16 at 12.34.26 AM.jpeg',
  'memories/WhatsApp Image 2026-10-16 at 12.34.46 AM.jpeg',
  'memories/WhatsApp Image 2026-10-16 at 12.34.48 AM.jpeg',
  'memories/WhatsApp Image 2026-10-16 at 12.34.55 AM.jpeg',
  'memories/WhatsApp Image 2026-10-16 at 12.34.30 AM.jpeg',
];

const FLOATING_ORBS_RAW = [
  { path: 'deepali-photo-1.jpg', left: '6%', top: '15%', size: 110, rotate: -8, delay: 0, duration: 16 },
  { path: 'deepali-photo-2.jpg', right: '8%', top: '28%', size: 125, rotate: 10, delay: 2, duration: 20 },
  { path: 'memories/WhatsApp Image 2026-10-16 at 12.34.26 AM.jpeg', left: '10%', top: '55%', size: 105, rotate: 6, delay: 4, duration: 18 },
  { path: 'memories/WhatsApp Image 2026-10-16 at 12.34.46 AM.jpeg', right: '7%', top: '70%', size: 115, rotate: -7, delay: 1, duration: 19 },
  { path: 'memories/WhatsApp Image 2026-10-16 at 12.34.48 AM.jpeg', left: '12%', top: '85%', size: 110, rotate: 9, delay: 3, duration: 17 },
];

export default function BackgroundPhotoAmbient() {
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhotoIdx((prev) => (prev + 1) % AMBIENT_PHOTOS_RAW.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentBgUrl = getAssetUrl(AMBIENT_PHOTOS_RAW[currentPhotoIdx]);

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
            backgroundImage: `url('${currentBgUrl}')`,
          }}
        />
      </AnimatePresence>

      {/* Dark romantic gradient mask to preserve contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#120309]/90 via-[#18050f]/85 to-[#0e0207]/95" />

      {/* 2. Floating Translucent Memory Polaroids in the Background */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {FLOATING_ORBS_RAW.map((orb, i) => {
          const orbUrl = getAssetUrl(orb.path);
          return (
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
                  src={orbUrl}
                  alt="Ambient memory"
                  className="w-full h-full object-cover filter brightness-95 contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
