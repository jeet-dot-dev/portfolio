"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Create multiple spring variants with different stiffness for trailing effect
  const x1 = useSpring(cursorX, { damping: 20, stiffness: 300 });
  const y1 = useSpring(cursorY, { damping: 20, stiffness: 300 });

  const x2 = useSpring(cursorX, { damping: 20, stiffness: 250 });
  const y2 = useSpring(cursorY, { damping: 20, stiffness: 250 });

  const x3 = useSpring(cursorX, { damping: 20, stiffness: 200 });
  const y3 = useSpring(cursorY, { damping: 20, stiffness: 200 });

  const x4 = useSpring(cursorX, { damping: 20, stiffness: 150 });
  const y4 = useSpring(cursorY, { damping: 20, stiffness: 150 });

  const x5 = useSpring(cursorX, { damping: 20, stiffness: 100 });
  const y5 = useSpring(cursorY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  // Styles for each cursor layer
  const trails = [
    { x: x1, y: y1, size: "w-5 h-5", color: "bg-black dark:bg-white" },
    { x: x2, y: y2, size: "w-4 h-4", color: "bg-neutral-800 dark:bg-neutral-100" },
    { x: x3, y: y3, size: "w-3 h-3", color: "bg-neutral-600 dark:bg-neutral-200" },
    { x: x4, y: y4, size: "w-2 h-2", color: "bg-neutral-500 dark:bg-neutral-300" },
    { x: x5, y: y5, size: "w-1.5 h-1.5", color: "bg-neutral-400 dark:bg-neutral-400" },
  ];

  return (
    <>
      {trails.map((trail, index) => (
        <motion.div
          key={index}
          className={`${trail.size} ${trail.color} rounded-full fixed pointer-events-none top-0 left-0 z-[999] hidden md:block`}
          style={{ x: trail.x, y: trail.y, translate: "-50% -50%" }}
        />
      ))}
    </>
  );
};

export default Cursor;
