import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import { Mail, Github, Linkedin, TwitterIcon, LucideProps } from "lucide-react";
import { motion } from "framer-motion";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type IconType = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  link: string;
  tooltip: string;
};

const Icons: IconType[] = [
  {
    icon: Mail,
    link: "mailto:jeet999dev@gmail.com",
    tooltip: "Email",
  },
  {
    icon: Github,
    link: "https://github.com/jeet-dot-dev",
    tooltip: "Github",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/jeet-mandal",
    tooltip: "Linkedin",
  },
  {
    icon: TwitterIcon,
    link: "https://x.com/jeetdevx",
    tooltip: "Twitter",
  },
];

const Contact = () => {
  return (
    <div
      className="min-h-screen px-4 py-20 relative z-30 bg-white text-black dark:bg-black dark:text-white flex flex-col items-center"
      id="contact"
    >
      <div className="hidden lg:block absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      <div className="hidden lg:block absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-indigo-500 dark:from-[#16f2b3] dark:to-[#6f49fd]">
          Get in Touch
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>

        <form className="space-y-6 text-left">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-white/5 dark:border-white/10 dark:focus:ring-[#16f2b3]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-white/5 dark:border-white/10 dark:focus:ring-[#16f2b3]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-white/5 dark:border-white/10 dark:focus:ring-[#16f2b3]"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-indigo-500 dark:from-[#16f2b3] dark:to-[#6f49fd] py-2 rounded-lg font-medium text-black dark:text-white hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 flex justify-center gap-6 text-gray-500 dark:text-white/80">
          {Icons.map((icon, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <a
                  href={icon.link}
                  target={icon.link.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={icon.link.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                  className="hover:text-green-500 dark:hover:text-[#16f2b3] transition-colors"
                >
                  <icon.icon size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p className="">{icon.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 text-sm text-gray-600 dark:text-gray-400"
        >
          <p>👋 Thanks for visiting my portfolio. Have a great day!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;