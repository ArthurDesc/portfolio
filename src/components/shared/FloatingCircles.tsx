import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface FloatingCirclesProps {
  count?: number;
  opacity?: number;
  scale?: number;
  speed?: number;
}

export const FloatingCircles: React.FC<FloatingCirclesProps> = ({
  count = 4,
  opacity = 0.05,
  scale = 1,
  speed = 1,
}) => {
  const circles = useMemo(() => 
    [...Array(count)].map((_, i) => ({
      background: i % 2 === 0 
        ? `rgba(139, 92, 246, ${opacity})` 
        : `rgba(167, 139, 250, ${opacity})`,
      width: `${Math.random() * 300 + 200}px`,
      height: `${Math.random() * 300 + 200}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animateX: [0, Math.random() * 200 - 100, Math.random() * 150 - 75, 0],
      animateY: [0, Math.random() * 150 - 75, Math.random() * 200 - 100, 0],
      rotate: [0, Math.random() * 45 - 22.5],
      duration: (Math.random() * 20 + 25) / speed,
    })), [count, opacity, speed]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            background: circle.background,
            width: circle.width,
            height: circle.height,
            left: circle.left,
            top: circle.top,
          }}
          animate={{
            x: circle.animateX,
            y: circle.animateY,
            scale: [1, 1.1 * scale, 0.95 * scale, 1],
            rotate: circle.rotate,
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            times: [0, 0.4, 0.7, 1]
          }}
        />
      ))}
    </div>
  );
}; 