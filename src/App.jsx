import React, { useState, useRef, useEffect } from 'react';
import BackgroundPhotoAmbient from './components/BackgroundPhotoAmbient';
import ParticleBackground from './components/ParticleBackground';
import InteractiveCursorTrail from './components/InteractiveCursorTrail';
import MusicPlayer from './components/MusicPlayer';
import HeroSection from './components/HeroSection';
import PhotosSection from './components/PhotosSection';
import BirthdayCake from './components/BirthdayCake';
import LoveStorySection from './components/LoveStorySection';
import LoveLetterModal from './components/LoveLetterModal';
import FinalSurprise from './components/FinalSurprise';

export default function App() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const photosRef = useRef(null);

  // Auto-start music on first touch or click anywhere if user hasn't explicitly muted
  useEffect(() => {
    const handleFirstInteraction = () => {
      setIsPlayingMusic(true);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const handleOpenSurprise = () => {
    setIsPlayingMusic(true);
    if (photosRef.current) {
      photosRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#110309] text-rose-50 overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* 1. Cinematic Ambient Background with Photos & Floating Polaroids */}
      <BackgroundPhotoAmbient />

      {/* 2. Dynamic Canvas Ambient with Shooting Stars, Rose Petals, Glowing Hearts */}
      <ParticleBackground />

      {/* 3. Interactive Floating Cursor Trail (Hearts & Sparkles on touch/mouse) */}
      <InteractiveCursorTrail />

      {/* 4. Floating Romantic Music Controller (Arijit Singh - Tum Hi Ho) */}
      <MusicPlayer
        isPlaying={isPlayingMusic}
        onTogglePlay={() => setIsPlayingMusic(!isPlayingMusic)}
      />

      {/* 5. Opening Welcome Screen with Photo Badges & Glowing Typography */}
      <HeroSection onOpenSurprise={handleOpenSurprise} />

      {/* Main Experience Flow */}
      <div ref={photosRef} className="relative z-10 space-y-12 pb-16">
        {/* 6. Two Personal Photos & 14-Photo Memory Vault */}
        <PhotosSection />

        {/* 7. Interactive Birthday Cake with Candle Blowing */}
        <BirthdayCake onWishMade={() => setIsPlayingMusic(true)} />

        {/* 8. Our Little Love Story */}
        <LoveStorySection />

        {/* 9. Secret Wax-Sealed Love Letter */}
        <LoveLetterModal />

        {/* 10. Grand Finale & Replay */}
        <FinalSurprise onReplay={handleReplay} />
      </div>
    </div>
  );
}
