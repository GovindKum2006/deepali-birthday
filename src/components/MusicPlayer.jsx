import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Heart, Disc3 } from 'lucide-react';

export default function MusicPlayer({ isPlaying, onTogglePlay }) {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.warn('Audio autoplay blocked, waiting for user interaction:', err);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/arijit-singh-tum-hi-ho.mp3"
        loop
        preload="auto"
      />

      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group">
        {/* Glow indicator label with Song Title */}
        <div
          onClick={onTogglePlay}
          className={`cursor-pointer hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
            isPlaying
              ? 'bg-rose-950/85 border border-rose-500/50 text-rose-200 shadow-xl shadow-rose-950/50 backdrop-blur-xl'
              : 'bg-black/70 border border-white/10 text-rose-300/80 backdrop-blur-md hover:border-rose-400/30'
          }`}
        >
          <Disc3 className={`w-4 h-4 ${isPlaying ? 'text-amber-300 animate-[spin_4s_linear_infinite]' : 'text-rose-400'}`} />
          <div className="flex flex-col text-left">
            <span className="font-semibold text-rose-100 flex items-center gap-1">
              Tum Hi Ho
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
            </span>
            <span className="text-[10px] text-amber-200/90 font-light">
              Arijit Singh • Special Love Track
            </span>
          </div>

          {/* Equalizer Wave bars */}
          {isPlaying && !isMuted && (
            <div className="flex items-end gap-0.5 h-4 w-4 ml-1">
              <span className="w-1 bg-rose-400 rounded-full animate-[bounce_0.8s_infinite_100ms] h-full" />
              <span className="w-1 bg-amber-300 rounded-full animate-[bounce_1.1s_infinite_300ms] h-3/4" />
              <span className="w-1 bg-rose-300 rounded-full animate-[bounce_0.9s_infinite_200ms] h-4/5" />
            </div>
          )}
        </div>

        {/* Play/Pause Button */}
        <button
          id="music-play-button"
          onClick={onTogglePlay}
          className={`relative p-3.5 sm:p-4 rounded-full text-white transition-all duration-300 shadow-2xl backdrop-blur-xl flex items-center justify-center ${
            isPlaying
              ? 'bg-gradient-to-tr from-rose-600 to-rose-400 box-glow-rose scale-105'
              : 'bg-rose-950/90 border border-rose-500/40 hover:border-rose-400 hover:scale-105'
          }`}
          aria-label={isPlaying ? 'Pause Tum Hi Ho' : 'Play Tum Hi Ho by Arijit Singh'}
          title={isPlaying ? 'Pause Tum Hi Ho' : 'Play Tum Hi Ho by Arijit Singh'}
        >
          <Music className={`w-5 h-5 ${isPlaying ? 'animate-[spin_10s_linear_infinite] text-amber-200' : 'text-rose-300'}`} />
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
          )}
        </button>

        {/* Mute/Unmute quick toggle if playing */}
        {isPlaying && (
          <button
            id="music-mute-button"
            onClick={toggleMute}
            className="p-2.5 rounded-full bg-black/70 border border-rose-500/30 text-rose-200 hover:text-white hover:bg-rose-950/80 transition-all duration-200 backdrop-blur-md"
            aria-label={isMuted ? 'Unmute music' : 'Mute music'}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-rose-300" />}
          </button>
        )}
      </div>
    </>
  );
}
