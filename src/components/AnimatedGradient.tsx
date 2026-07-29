'use client';

import { useEffect, useRef } from 'react';

export function AnimatedGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(
        canvas.width * (0.5 + 0.3 * Math.sin(time * 0.5)),
        canvas.height * (0.3 + 0.2 * Math.cos(time * 0.7)),
        0,
        canvas.width * (0.5 + 0.3 * Math.sin(time * 0.5)),
        canvas.height * (0.3 + 0.2 * Math.cos(time * 0.7)),
        canvas.width * 0.6
      );

      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.03)');
      gradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.02)');
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}