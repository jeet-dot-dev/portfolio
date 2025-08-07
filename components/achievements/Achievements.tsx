"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const achievements = [
  {
    title: "Hackathon Win",
    image: "/achieve/achieve4.png",
    info: "Explaining Code-Blitz : Tired of coding alone in your dark room, Code-Blitz brings the thrill of a competitive battleground to DSA. It's like chess.com meets 1v1 LeetCode, powered by AI!",
  },
  {
    title: "Topper Award",
    image: "/achieve/achieve5.png",
    info: "Receiving the runner-up award at the Code for Change Hackathon, organized by NSHM Knowledge Campus in collaboration with Open Source Student Development Club.",
  },
  {
    title: "GitHub Contributions",
    image: "/achieve/achieve1.png",
    info: "🏆 Team Nexus proudly secured the Runner-Up position at the Code for Change Hackathon organized by NSHM Knowledge Campus in collaboration with Open Source Student Development Club.",
  },
  {
    title: "College Project Fair",
    image: "/achieve/achieve2.png",
    info: "Group photo of the top three winning teams at the Code for Change Hackathon, organized by NSHM Knowledge Campus.",
  },
  {
    title: "Volunteering",
    image: "/achieve/achieve3.png",
    info: "What an incredible journey it was at Hack4Bengal 2025, held from June 20–22 at Sister Nivedita University. Three days packed with intense coding, sleepless nights, endless caffeine, and boundless creativity. 💻☕🌙",
  },
];

const Achievements = () => {
  const [flippedItems, setFlippedItems] = useState(new Set());
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleItemClick = (index: number) => {
    const newFlipped = new Set(flippedItems);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
    }
    setFlippedItems(newFlipped);
  };

  const handleMouseEnter = (index: number) => {
    if (isClient && window.innerWidth > 768) {
      setHoveredItem(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div
      className="w-full px-4 z-30 relative py-10 bg-white dark:bg-black"
      id="hackathon"
    >
      <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#16f2b3] via-blue-500 to-purple-600 bg-clip-text text-transparent text-center mb-11">
        Hackathon Moments
      </h2>

      <div className="max-w-6xl mx-auto columns-3 gap-4 space-y-4">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer group relative"
            onClick={() => handleItemClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "1000px" }}
          >
            <div className="relative w-full">
              {/* Card container with flip effect */}
              <div
                className="relative w-full transition-transform duration-700 ease-in-out transform-gpu"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${
                    flippedItems.has(index) || hoveredItem === index
                      ? "180"
                      : "0"
                  }deg)`,
                }}
              >
                {/* Front side - Image */}
                <div
                  className="w-full relative"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500} // or auto-resize using layout="responsive"
                    height={300}
                    className="w-full h-auto object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>

                {/* Back side - Info */}
                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#16f2b3]/95 via-blue-500/95 to-purple-600/95 rounded-lg flex flex-col justify-center items-center p-6 text-white"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-[5px] md:text-base text-center leading-relaxed">
                    {item.info}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Instructions */}
      <div className="text-center mt-8 text-gray-600 dark:text-gray-400 text-sm">
        <p className="md:hidden text-muted-foreground animate-pulse">
          Tap on images to see details
        </p>
        <p className="hidden md:block  text-muted-foreground animate-pulse">
          Hover over images to see details
        </p>
      </div>

      <style jsx>{`
        .transform-gpu {
          transform: translateZ(0);
        }
      `}</style>
    </div>
  );
};

export default Achievements;
