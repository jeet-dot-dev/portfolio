"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Appbar from "@/components/appbar/Appbar";
import Hero from "@/components/hero/Hero";
import Project from "@/components/projects/Project";
import Skills from "@/components/skills/Skills";
import MasonryGallery from "@/components/achievements/Achievements";
import Contact from "@/components/contact/Contact";

export default function Home() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Hero zoom out and fade out
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  // Project slide up and fade in
  const projectY = useTransform(scrollYProgress, [0.2, 0.7], ["130vh", "0vh"]);
  const projectOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0.8, 1]);

  return (
    <div className="dark:bg-black min-h-[250vh] relative" ref={containerRef}>
      {/* Appbar OUTSIDE sticky section so it scrolls away */}
      <Appbar />

      {/* Hero section: sticky and animated */}
      <motion.section
        className="h-screen sticky top-6 mb-5 md:mb-0  md:top-0 flex items-center justify-center z-10"
        style={{ scale: heroScale, opacity: heroOpacity }}
      >
        <Hero />
      </motion.section>

      {/* Project section: slides up from bottom */}
      <motion.section
        className=" flex mb-[20vh] md:mb-[60vh]  items-center justify-center z-20 relative"
        style={{ y: projectY, opacity: projectOpacity }}
      >
        <Project />
      </motion.section>

      {/* Skills sections can go here */}
      <section className="mb-10">
        <Skills />
      </section>

      {/* Achievements section can go here */}
      <section className="mb-10 z-30">
        <MasonryGallery />
      </section>
      {/* {contact me section can go here */}
      <section className="md:mb-10 z-30">
        <Contact />
      </section>
    </div>
  );
}
