import React, { useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<TrailPoint[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      });

      // Keep only recent points
      const now = Date.now();
      trailRef.current = trailRef.current.filter(point => now - point.timestamp < 500);
    };

    const drawTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (trailRef.current.length < 2) return;

      const now = Date.now();
      
      for (let i = 1; i < trailRef.current.length; i++) {
        const point = trailRef.current[i];
        const prevPoint = trailRef.current[i - 1];
        const age = now - point.timestamp;
        const opacity = Math.max(0, 1 - age / 500);

        if (opacity <= 0) continue;

        const gradient = ctx.createLinearGradient(
          prevPoint.x, prevPoint.y,
          point.x, point.y
        );
        gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(139, 92, 246, ${opacity * 0.3})`);

        ctx.beginPath();
        ctx.moveTo(prevPoint.x, prevPoint.y);
        ctx.lineTo(point.x, point.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3 * opacity;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Add glow effect
        ctx.beginPath();
        ctx.arc(point.x, point.y, 8 * opacity, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 0.1})`;
        ctx.fill();
      }
    };

    const animate = () => {
      drawTrail();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
};

export default CursorTrail;