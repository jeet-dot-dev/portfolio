"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion"; // fix import from motion/react → framer-motion

type Social = {
  id: number;
  name: string;
  link: string;
  image: string;
};

export const AnimatedTooltip = ({ items }: { items: Social[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const x = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 15 };
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event: any) => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <div className="flex gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative"
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 260, damping: 10 },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{ translateX: translateX, rotate: rotate, whiteSpace: "nowrap" }}
                className="absolute -top-14 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="text-white font-semibold">{item.name}</div>
              </motion.div>
            )}
          </AnimatePresence>

<a href={item.link} target="_blank" rel="noopener noreferrer">
  <div className="w-10 h-10 overflow-hidden rounded-full bg-white dark:bg-white shadow-md">
    <img
      src={item.image}
      alt={item.name}
      onMouseMove={handleMouseMove}
      className="w-full h-full object-cover"
    />
  </div>
</a>


        </div>
      ))}
    </div>
  );
};
