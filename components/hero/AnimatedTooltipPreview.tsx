"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const socials = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/jeet", // replace with your URL
    image: "/icons/github.png", // store locally or use online URL
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://linkedin.com/in/jeet",
    image: "/icons/linkedin.png",
  },
  {
    id: 3,
    name: "Twitter",
    link: "mailto:jeet@example.com",
    image: "/icons/twitter.png",
  },
    {
    id: 4,
    name: "Discord",
    link: "mailto:jeet@example.com",
    image: "/icons/discord.png",
  },
];


export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={socials} />
    </div>
  );
}
