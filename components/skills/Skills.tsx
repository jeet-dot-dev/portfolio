"use client";
import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

// Category → Skills
const skillMap: Record<string, string[]> = {
  "Programming Languages": ["JavaScript", "TypeScript", "C", "C++"],
  "Frameworks & Libraries": [
    "React",
    "Next.js",
    "Express.js",
    "Hono",
    "Mongoose",
    "Prisma",
    "Zustand",
    "Tailwind CSS",
    "Framer Motion",
    "ShadCN/UI",
  ],
  Database: ["MongoDB", "PostgreSQL", "SQL"],
  Tools: [
    "Git",
    "GitHub",
    "Turborepo",
    "Monorepo",
    "Docker",
    "CI/CD",
    "RESTful API",
    "OpenAI API",
  ],
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "ShadCN/UI",
    "Zustand",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Hono",
    "RESTful API",
    "OpenAI API",
    "Serverless",
  ],
};

const allSkills = Array.from(new Set(Object.values(skillMap).flat()));

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>("All");

  const filteredSkills =
    activeFilter === "All" || !activeFilter
      ? allSkills
      : skillMap[activeFilter];

  return (
    <div className="w-full mt-28 px-4 flex flex-col gap-5 items-center justify-center min-h-[600px]">
      <div className="hidden lg:block absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>

      <h2 className="text-5xl md:text-6xl  font-bold bg-gradient-to-r from-[#16f2b3] via-blue-500 to-purple-600 bg-clip-text text-transparent text-center mb-6">
        My Skills
      </h2>

      {/* Filter Badges */}
      <div className="flex flex-wrap justify-center gap-3 z-10 max-w-4xl">
        {/* All Filter */}
        <Badge
          variant={activeFilter === "All" ? "default" : "outline"}
          onClick={() => setActiveFilter("All")}
          className="cursor-pointer px-4 py-2 text-sm
          bg-gradient-to-r from-[#16f2b3]/10 to-blue-500/10 border-[#16f2b3]/30 text-[#16f2b3] dark:text-[#16f2b3] hover:from-[#16f2b3]/20 hover:to-blue-500/20 transition-all duration-200
          hover:scale-105 flex items-center gap-2"
        >
          All
          {activeFilter === "All" && <Check size={16} />}
        </Badge>

        {/* Category Filters */}
        {Object.keys(skillMap).map((category) => {
          const isActive = activeFilter === category;

          return (
            <Badge
              key={category}
              variant={isActive ? "default" : "outline"}
              onClick={() =>
                setActiveFilter(activeFilter === category ? "All" : category)
              }
              className="cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105 flex items-center gap-2"
            >
              {category}
              {isActive && <Check size={16} />}
            </Badge>
          );
        })}
      </div>

      {/* Skills List */}
      <div className="grid grid-cols-3  md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-4 max-w-full px-4 sm:px-8 md:px-12 lg:px-20 justify-center mt-6 items-center">
        <AnimatePresence>
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex justify-center"
            >
              <Badge
                variant="default"
                className="text-sm px-4 py-2 w-full max-w-[120px] text-center"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skills;
