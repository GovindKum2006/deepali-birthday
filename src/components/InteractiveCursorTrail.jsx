import React, { useEffect } from 'react';

export default function InteractiveCursorTrail() {
  useEffect(() => {
    // Only run if device supports pointer or touch
    const symbols = ['❤️', '💖', '✨', '🌸', '💕', '⭐'];
    let lastTime = 0;

    const spawnParticle = (x, y) => {
      const now = Date.now();
      if (now - lastTime < 45) return; // throttle for 60fps smoothness
      lastTime = now;

      const particle = document.createElement('div');
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      const size = Math.random() * 14 + 12; // 12px to 26px
      const rotate = Math.random() * 60 - 30;
      const moveX = (Math.random() - 0.5) * 60;
      const moveY = -(Math.random() * 50 + 30);

      particle.innerText = symbol;
      particle.className = 'fixed pointer-events-none select-none z-50 text-glow-rose';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.fontSize = `${size}px`;
      particle.style.transform = `translate(-50%, -50%) rotate(${rotate}deg)`;
      particle.style.transition = 'all 1s cubic-bezier(0.2, 0.8, 0.2, 1)';
      particle.style.opacity = '0.9';
      particle.style.filter = 'drop-shadow(0 0 8px rgba(244, 63, 94, 0.8))';

      document.body.appendChild(particle);

      // Trigger animation on next frame
      requestAnimationFrame(() => {
        particle.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)) scale(0.4) rotate(${rotate * 2}deg)`;
        particle.style.opacity = '0';
      });

      // Cleanup
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 1000);
    };

    const handleMouseMove = (e) => {
      spawnParticle(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        spawnParticle(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return null;
}
