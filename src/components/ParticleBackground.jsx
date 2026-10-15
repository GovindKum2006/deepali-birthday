import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle system: Stars, Hearts, Rose Petals, and Shooting Stars
    const starsCount = Math.min(width > 768 ? 70 : 40, 90);
    const petalsCount = Math.min(width > 768 ? 26 : 16, 32);
    const heartsCount = Math.min(width > 768 ? 22 : 14, 26);

    // Stars
    const stars = Array.from({ length: starsCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.6 + 0.5,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.025 + 0.008,
      color: Math.random() > 0.4 ? '#fde047' : '#ffffff',
    }));

    // Petals
    const petals = Array.from({ length: petalsCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 9 + 6,
      speedY: Math.random() * 0.7 + 0.45,
      speedX: Math.random() * 0.6 - 0.3,
      angle: Math.random() * Math.PI * 2,
      spinSpeed: (Math.random() - 0.5) * 0.025,
      opacity: Math.random() * 0.45 + 0.3,
      color: Math.random() > 0.5 ? '#f43f5e' : '#fda4af',
    }));

    // Floating Hearts
    const hearts = Array.from({ length: heartsCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 11 + 6,
      speedY: Math.random() * 0.5 + 0.3,
      floatOffset: Math.random() * Math.PI * 2,
      floatSpeed: Math.random() * 0.03 + 0.015,
      opacity: Math.random() * 0.4 + 0.25,
      color: Math.random() > 0.6 ? '#fb7185' : '#e11d48',
    }));

    // Shooting Stars (Meteors)
    const shootingStars = [];
    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width * 0.8,
        y: Math.random() * (height * 0.4),
        length: Math.random() * 120 + 80,
        speed: Math.random() * 8 + 10,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 deg down-right
        opacity: 1,
        life: 0,
        maxLife: 60,
      });
    };

    let shootingStarTimer = setInterval(() => {
      if (Math.random() > 0.3) spawnShootingStar();
    }, 3500);

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Draw Heart Helper
    const drawHeart = (ctx, x, y, size, color, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(0, topCurveHeight);
      ctx.bezierCurveTo(-size / 2, -size / 2, -size, topCurveHeight / 2, 0, size);
      ctx.bezierCurveTo(size, topCurveHeight / 2, size / 2, -size / 2, 0, topCurveHeight);
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;
      ctx.shadowColor = color;
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.restore();
    };

    // Draw Petal Helper
    const drawPetal = (ctx, x, y, size, angle, color, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.quadraticCurveTo(size * 0.8, -size * 0.3, size * 0.6, size * 0.8);
      ctx.quadraticCurveTo(0, size, -size * 0.6, size * 0.8);
      ctx.quadraticCurveTo(-size * 0.8, -size * 0.3, 0, -size);
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;
      ctx.shadowColor = color;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
    };

    let tick = 0;
    const render = () => {
      tick += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Mouse Glow
      if (mouse.x > 0 && mouse.y > 0) {
        const mouseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 180);
        mouseGrad.addColorStop(0, 'rgba(251, 113, 133, 0.15)');
        mouseGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = mouseGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // 1. Twinkling Stars
      stars.forEach((star) => {
        star.alpha += star.speed;
        const currentAlpha = Math.abs(Math.sin(star.alpha)) * 0.8 + 0.2;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = currentAlpha;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 10;
        ctx.fill();
      });

      // 2. Shooting Stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.life++;
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity = Math.max(0, 1 - s.life / s.maxLife);

        ctx.save();
        ctx.beginPath();
        const tailX = s.x - Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;
        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, 'rgba(251, 191, 36, 0)');
        grad.addColorStop(0.7, `rgba(251, 113, 133, ${s.opacity * 0.5})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${s.opacity})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.2;
        ctx.shadowColor = '#fbbf24';
        ctx.shadowBlur = 14;
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();
        ctx.restore();

        if (s.life >= s.maxLife) {
          shootingStars.splice(i, 1);
        }
      }

      // 3. Drifting Rose Petals
      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(tick + p.size) * 0.9 + p.speedX;
        p.angle += p.spinSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        drawPetal(ctx, p.x, p.y, p.size, p.angle, p.color, p.opacity);
      });

      // 4. Floating Hearts
      hearts.forEach((h) => {
        h.y -= h.speedY;
        h.floatOffset += h.floatSpeed;
        const sway = Math.sin(h.floatOffset) * 1.4;

        if (h.y < -30) {
          h.y = height + 30;
          h.x = Math.random() * width;
        }

        drawHeart(ctx, h.x + sway, h.y, h.size, h.color, h.opacity);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(shootingStarTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
}
