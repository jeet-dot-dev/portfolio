"use client";

import React, { useState } from "react";
import { ModeToggle } from "../themes/toogle";
import { Menu, X } from "lucide-react"; // install lucide-react
import { motion } from "framer-motion";

const Appbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="min-w-screen  w-full fixed top-0 z-60 h-[80px] dark:bg-black bg-white flex justify-between items-center px-5 md:px-10"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Left - Branding */}
      <div className="text-lg font-semibold">@code by Jeet</div>

      {/* Right - Desktop Nav + Theme Toggle */}
      <div className="hidden md:flex items-center gap-6">
        <ModeToggle />
        <nav className="flex gap-6 text-lg">
          <span className="hover:underline cursor-pointer" ><a href="#projects">Projects</a></span>
          <span className="hover:underline cursor-pointer"><a href="#hackathon">Hackathon</a></span>
          <span className="hover:underline cursor-pointer"><a href="#contact">Contact</a></span>
        </nav>
      </div>

      {/* Right - Mobile Menu Toggle */}
      <div className="md:hidden flex items-center gap-4">
        <ModeToggle />
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white dark:bg-black flex flex-col items-center gap-6 py-6 md:hidden shadow-md border-t border-gray-200 dark:border-gray-800">
          <span className="hover:underline cursor-pointer"><a href="#projects">Projects</a></span>
          <span className="hover:underline cursor-pointer"><a href="#about">About</a></span>
          <span className="hover:underline cursor-pointer"><a href="#contact">Contact</a></span>
        </div>
      )}
    </motion.div>
  );
};

export default Appbar;
