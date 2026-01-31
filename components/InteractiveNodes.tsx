import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  originX: number;
  y: number;
  originY: number;
  active: number;
  circle: { radius: number };
  closest: Point[];
}

const InteractiveNodes: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number, height: number, points: Point[], target: { x: number; y: number };
    let animateHeader = true;

    const getDistance = (p1: { x: number; y: number }, p2: { x: number; y: number }): number =>
      Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);

    const initHeader = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      target = { x: width / 2, y: height / 2 };
      canvas.width = width;
      canvas.height = height;

      points = [];
      const spacing = Math.max(width, height) / 24;
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const px = x + Math.random() * spacing;
          const py = y + Math.random() * spacing;
          points.push({
            x: px,
            originX: px,
            y: py,
            originY: py,
            active: 0,
            circle: { radius: 0.5 + Math.random() * 1.5 },
            closest: [], // Will be populated later
          });
        }
      }

      points.forEach(p1 => {
        const closest: Point[] = [];
        points.forEach(p2 => {
          if (p1 !== p2) {
            if (closest.length < 5) {
              closest.push(p2);
            } else {
              for (let k = 0; k < 5; k++) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  break;
                }
              }
            }
          }
        });
        p1.closest = closest;
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      target.x = e.pageX || e.clientX;
      target.y = e.pageY || e.clientY;
    };

    const animate = () => {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        points.forEach(p => {
          const dist = getDistance(target, p);
          if (dist < 35000) {
            p.active = 0.5;
          } else if (dist < 90000) {
            p.active = 0.2;
          } else {
            p.active = 0.04;
          }

          p.closest.forEach(c => {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(c.x, c.y);
            ctx.strokeStyle = `rgba(255,173,30,${p.active})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          });

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.circle.radius, 0, 2 * Math.PI);
          ctx.fillStyle = `rgba(255,255,255,${p.active * 1.5})`;
          ctx.fill();

          p.x += (p.originX + (Math.sin(Date.now() / 1500 + p.originY) * 12) - p.x) * 0.03;
          p.y += (p.originY + (Math.cos(Date.now() / 1500 + p.originX) * 12) - p.y) * 0.03;
        });
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', initHeader);
    initHeader();
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', initHeader);
      animateHeader = false;
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none opacity-50" />;
};

export default InteractiveNodes;
