import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X, ZoomIn, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const ALL_MEMORIES = [
  { src: '/deepali-photo-1.jpg', caption: 'Deepali\'s grace and sweet smile' },
  { src: '/deepali-photo-2.jpg', caption: 'Govind & Deepali together, smiling under the sun' },
  { src: '/memories/WhatsApp Image 2026-10-16 at 12.34.26 AM.jpeg', caption: 'Radiant happiness & effortless style' },
  { src: '/memories/WhatsApp Image 2026-10-16 at 12.34.28 AM.jpeg', caption: 'Fun memories and endless laughter' },
  { src: '/memories/WhatsApp Image 2026-10-16 at 12.34.30 AM.jpeg', caption: 'Cherished moments with friends' },
  { src: '/memories/WhatsApp Image 2026-10-16 at 12.34.46 AM.jpeg', caption: 'A sunlit day filled with gentle breezes' },
  { src: '/memories/WhatsApp Image 2026-10-16 at 12.34.48 AM.jpeg', caption: 'College days & proud milestones together' },
  { src: '/memories/WhatsApp Image 2026-10-16 at 12.34.51 AM.jpeg', caption: 'Unforgettable smiles and college corridor vibes' },
  { src: '/memories/WhatsApp Image 2026-10-16 at 12.34.52 AM.jpeg', caption: 'Deepali\'s thoughtful and sweet moments' },
  { src: '/memories/WhatsApp Image 2026-10-16 at 12.34.53 AM.jpeg', caption: 'Pure candid beauty' },
  { src: '/memories/WhatsApp Image 2026-10-16 at 12.34.54 AM.jpeg', caption: 'Shy giggles and cute candid memories' },
  { src: '/memories/WhatsApp Image 2026-10-16 at 12.34.55 AM.jpeg', caption: 'Serenity and quiet grace' },
  { src: '/memories/WhatsApp Image 2026-10-16 at 12.34.57 AM.jpeg', caption: 'Another chapter in our beautiful story' },
  { src: '/memories/WhatsApp Image 2026-10-16 at 12.34.27 AM.jpeg', caption: 'Looking towards a future full of dreams' },
];

export default function PhotosSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // 3D Tilt calculation for Photo 2
  const polaroidRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!polaroidRef.current) return;
    const rect = polaroidRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Max tilt 12 degrees
    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative py-24 px-4 z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/50 border border-rose-500/20 text-rose-300 text-sm mb-3"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Frames of Forever</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-script text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-300 to-amber-200 text-glow-rose"
        >
          Cherished Moments
        </motion.h2>
        <p className="mt-2 text-rose-200/70 text-sm sm:text-base max-w-md mx-auto">
          Every glance, every smile, captured in our universe.
        </p>
      </div>

      {/* Two Photos Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center justify-items-center">
        {/* Photo 1: Animated Royal Glowing Frame */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-sm group"
        >
          {/* Floating heart badges around the frame */}
          <div className="absolute -top-4 -left-4 z-20 w-10 h-10 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-lg shadow-rose-900/60 border border-rose-300/40 animate-float-slow">
            <Heart className="w-5 h-5 fill-white text-white" />
          </div>
          <div className="absolute -bottom-3 -right-3 z-20 w-8 h-8 rounded-full bg-amber-500/90 text-white flex items-center justify-center shadow-lg shadow-amber-900/60 border border-amber-300/40 animate-float-medium">
            <Sparkles className="w-4 h-4 text-amber-100" />
          </div>

          {/* Ornate Frame Container */}
          <div
            onClick={() => setSelectedImage({ src: '/deepali-photo-1.jpg', caption: 'One picture, a thousand beautiful feelings ❤️' })}
            className="cursor-pointer relative rounded-3xl p-3.5 bg-gradient-to-b from-rose-400/30 via-pink-500/20 to-amber-400/30 backdrop-blur-xl border border-rose-300/30 shadow-2xl shadow-rose-950/50 hover:shadow-rose-500/20 transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-rose-950/50">
              <img
                src="/deepali-photo-1.jpg"
                alt="Deepali portrait"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              {/* Gradient shadow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* View larger icon indicator */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-center">
                <div className="inline-block p-1 mb-1">
                  <Heart className="w-4 h-4 text-rose-400 fill-rose-400 mx-auto animate-pulse" />
                </div>
                <p className="font-serif italic text-lg sm:text-xl text-rose-100 font-medium tracking-wide drop-shadow-md">
                  &ldquo;One picture, a thousand beautiful feelings ❤️&rdquo;
                </p>
                <span className="text-xs text-rose-300/70 tracking-wider uppercase mt-1 block">
                  Tap to view larger
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Photo 2: Elegant Polaroid-style Frame with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-sm"
        >
          {/* Polaroid Washi Tape Decoration at Top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-amber-100/30 backdrop-blur-sm border-t border-b border-amber-200/40 rotate-1 shadow-md z-20 pointer-events-none" />

          {/* Interactive 3D tilt polaroid container */}
          <div
            ref={polaroidRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => setSelectedImage({ src: '/deepali-photo-2.jpg', caption: 'My favourite memories have you in them 💗' })}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="cursor-pointer bg-stone-100/95 text-stone-900 rounded-xl p-4 pb-6 polaroid-frame transition-shadow duration-300 hover:shadow-2xl hover:shadow-rose-500/25 group"
          >
            {/* Photo Inside Polaroid */}
            <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden bg-stone-300 shadow-inner">
              <img
                src="/deepali-photo-2.jpg"
                alt="Govind and Deepali memory"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-rose-900/10 mix-blend-multiply pointer-events-none" />
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Handwritten Polaroid Caption */}
            <div className="mt-4 text-center px-2">
              <p className="font-script text-2xl sm:text-3xl text-rose-800 leading-tight">
                &ldquo;My favourite memories have you in them 💗&rdquo;
              </p>
              <div className="flex items-center justify-center gap-1.5 mt-1 text-stone-500 text-xs">
                <span>Govind & Deepali</span>
                <span>•</span>
                <span>Forever & Always</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bonus Memory Gallery Toggle */}
      <div className="mt-16 text-center">
        <button
          id="view-all-memories-button"
          onClick={() => setShowGallery(!showGallery)}
          className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-200 text-sm font-medium hover:bg-rose-900/80 hover:border-rose-400 transition-all duration-300 shadow-lg"
        >
          <ImageIcon className="w-4 h-4 text-amber-300" />
          <span>{showGallery ? 'Hide Precious Memory Vault' : 'View All 14 Precious Memories 📸'}</span>
        </button>
      </div>

      {/* Expandable Gallery of All 14 Memories */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden mt-10"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 rounded-3xl bg-rose-950/30 border border-rose-500/20 backdrop-blur-md">
              {ALL_MEMORIES.map((photo, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedImage(photo)}
                  className="group cursor-pointer relative aspect-[3/4] rounded-xl overflow-hidden bg-rose-950/60 border border-white/10 shadow-md"
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2.5 flex items-end">
                    <p className="text-[11px] text-rose-100 font-light line-clamp-2 leading-tight">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl max-h-[90vh] flex flex-col items-center bg-rose-950/40 border border-rose-400/30 rounded-2xl p-3 sm:p-4 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-rose-200 hover:text-white border border-white/20 transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[75vh] w-auto overflow-hidden rounded-xl">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className="max-h-[75vh] max-w-full object-contain rounded-xl"
                />
              </div>

              <div className="mt-3 text-center px-4 py-1">
                <p className="font-serif italic text-rose-100 text-base sm:text-lg">
                  {selectedImage.caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
