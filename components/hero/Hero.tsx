import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import {  ArrowRight, ChevronDown, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo } from "react";

const Hero = () => {


const greetings = useMemo(
  () => [
    "নমস্কার🙏",
    "Bonjour",
    "Hello",
    "Hola",
    "नमस्ते🙏",
    "Annyeong",
  ],
  []
);

  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false); // Add this line

  useEffect(() => {
  const currentWord = greetings[currentGreeting];
  let timeout: ReturnType<typeof setTimeout>;

  if (isTyping) {
    if (displayedText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      }, 150);
    } else {
      timeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
    }
  } else {
    if (displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, 100);
    } else {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
      setIsTyping(true);
    }
  }

  return () => clearTimeout(timeout);
}, [displayedText, currentGreeting, isTyping, greetings]);

  const handleViewResume = () => {
    window.open('/JeetResume.pdf', '_blank');
  };
  return (
    <div className="min-h-screen w-full mb-5 bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-black"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto min-h-screen flex items-center px-6 md:px-12">
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center lg:justify-start order-1 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#16f2b3]/20 to-blue-500/20 rounded-full blur-2xl scale-110"></div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 md:top-0 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
              >
                <Image
                  src="/jeet-transparent.png"
                  alt="Jeet"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white dark:bg-gray-800 rounded-full px-3 py-2 sm:px-6 sm:py-3 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Available for hire
                </span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-4 lg:space-y-6 order-2 lg:order-2"
          >
            {/* Typewriter Greeting */}
            <div className="h-12 sm:h-16 flex items-center justify-center lg:justify-start">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl italic font-light text-gray-500 dark:text-gray-400">
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block ml-1"
                >
                  |
                </motion.span>
              </h1>
            </div>

            {/* Name with Glitch Effect */}
            <div className="space-y-1 lg:space-y-2 relative">
              <motion.h2
                className="text-4xl font-mono sm:text-6xl lg:text-8xl font-extrabold relative cursor-pointer"
                onHoverStart={() => setIsGlitching(true)}
                onHoverEnd={() => setIsGlitching(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-green-400">{">"}</span>
                <span className="ml-2 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  jeet
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-green-400 ml-1"
                >
                  _
                </motion.span>
                {isGlitching && (
                  <>
                    <motion.span
                      className="absolute top-0 left-0 text-red-500 opacity-60"
                      animate={{
                        x: [-4, 4, -2, 3, -1, 0],
                        scaleX: [1, 1.1, 0.9, 1.05, 1],
                      }}
                      transition={{ duration: 0.12, repeat: Infinity }}
                    >
                      {">"}
                      <span className="ml-2">jeet</span>
                      <span className="ml-1">_</span>
                    </motion.span>
                    <motion.span
                      className="absolute top-0 left-2 text-cyan-400 opacity-60"
                      animate={{
                        x: [4, -4, 3, -2, 1, 0],
                        scaleY: [1, 0.95, 1.05, 0.98, 1],
                      }}
                      transition={{
                        duration: 0.12,
                        repeat: Infinity,
                        delay: 0.06,
                      }}
                    >
                      {">"}
                      <span className="ml-2">jeet</span>
                      <span className="ml-1">_</span>
                    </motion.span>
                  </>
                )}
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-600 dark:text-gray-400 font-mono"
              >
                {"<"} Full Stack Developer {"/>"}
              </motion.h3>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed mx-auto lg:mx-0 px-4 lg:px-0"
            >
              Passionate about building polished, intuitive, and thoughtful
              digital products that leave a lasting impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 lg:px-0"
            >
                 <Button 
                onClick={handleViewResume}
                className="bg-gradient-to-r from-[#16f2b3] cursor-pointer to-blue-500 hover:from-[#14d19f] hover:to-blue-600 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Eye className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                View Resume
              </Button>
             <a href="#projects">
               <Button
                variant="outline"
               
                className="border-2 cursor-pointer hidden lg:flex border-gray-300 dark:border-gray-600 hover:border-[#16f2b3] dark:hover:border-[#16f2b3] px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 group"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
             </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-[#16f2b3] transition-colors"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
