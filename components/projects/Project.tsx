import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";

type projectsType = {
  image: string;
  title: string;
  description: string;
  skils: string[];
  liveLink: string;
  githubLink: string;
  isReady?: boolean;
  githubPrivate?: boolean;
};

const Projects: projectsType[] = [
    {
    image: "/project0.png",
    title: "Hire-me",
    description:
      "An AI-powered job interview platform that simulates real interview rounds using OpenAI.",
    skils: ["TypeScript", "Prisma", "OpenAI", "CI/CD", "Redis", "Nextjs"],
    liveLink: "https://hireme.stackzy.tech/",
    githubLink: "https://github.com/jeet-dot-dev/hire-me",
    isReady: true,
  },
      {
    image: "/slyde.png",
    title: "Slyde",
    description:
      "An AI-powered Multimodel Video Generation Platfrom",
    skils: ["TypeScript", "Prisma", "OpenAI", "CI/CD", "Redis", "Nextjs","Dodo Payment","Docker"],
    liveLink: "https://slyde.tech/",
    githubLink: "https://github.com/jeet-dot-dev/hire-me",
    isReady: true,
    githubPrivate: true,
  },
   {
    image: "/project3.png",
    title: "HungerJam",
    description:
      "A responsive food delivery web app with a beautiful UI, smooth animations, and an intuitive user experience.",
    skils: ["JavaScript", "MongoDB", "Stripe", "Express", "React", "Motion"],
    liveLink: "https://hungerjam.vercel.app/",
    githubLink: "https://github.com/jeet-dot-dev/Hungerjam",
    isReady: true,
  },
    {
    image: "/project4.png",
    title: "CodeBlits",
    description:
      "Code-Blitz brings the thrill of a competitive battleground to DSA. It's like chess.com meets 1v1",
    skils: ["JavaScript", "MongoDB", "SocketIO", "Motion"],
    liveLink: "https://code-blitz-ils2dcerh-jeet-mandals-projects.vercel.app/",
    githubLink: "https://github.com/jeet-dot-dev/Code-Blitz",
    isReady: true,
  },


  {
    image: "/project1.png",
    title: "Draw-we",
    description:
      "A real-time collaborative whiteboard app inspired by Excalidraw. Express your ideas visually with others in sync.",
    skils: ["TypeScript", "Prisma", "Turborepo", "WebSocket", "CanvasAPI"],
    liveLink: "https://github.com/jeet-dot-dev/Excalidraw",
    githubLink: "https://github.com/jeet-dot-dev/Excalidraw",
    isReady: false,
  },
 

];

const Project = () => {
  return (
    <div
      className="w-full scroll-mt-24 flex flex-col mt-16 justify-center items-center bg-white dark:bg-black relative overflow-hidden"
      id="projects"
    >
      {/* Background Elements */}
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#16f2b3] via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto px-4">
            Showcasing my latest work and creative solutions in web development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="px-6 md:px-12 mx-auto gap-8 min-w-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {Projects.map((project, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full pt-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <motion.div
                      className="w-full h-60 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={300}
                        className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                          !project.isReady ? "blur-sm" : ""
                        }`}
                        placeholder="blur"
                        blurDataURL="/placeholder.png" // Optional: can be a tiny base64 image
                      />
                    </motion.div>

                    {/* Coming Soon Overlay */}
                    {!project.isReady && (
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="text-center"
                        >
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#16f2b3] via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 drop-shadow-2xl"
                            style={{
                              filter:
                                "drop-shadow(0 0 20px rgba(22, 242, 179, 0.3))",
                            }}
                          >
                            Coming Soon
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-sm font-medium text-white/90 tracking-wider uppercase"
                            style={{
                              textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",
                            }}
                          >
                            Under Development
                          </motion.div>
                        </motion.div>
                      </div>
                    )}

                    {/* Overlay on Hover */}
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#16f2b3] transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.skils.map((skill, skillIndex) => {
                        return (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: skillIndex * 0.05,
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="outline"
                              className="px-3 py-1 bg-gradient-to-r from-[#16f2b3]/10 to-blue-500/10 border-[#16f2b3]/30 text-[#16f2b3] dark:text-[#16f2b3] hover:from-[#16f2b3]/20 hover:to-blue-500/20 transition-all duration-200"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0 gap-3">
                    <motion.div
                      className="flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {project.isReady ? (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#16f2b3] to-blue-500 hover:from-[#14d19f] hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-4 py-2 rounded-md"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      ) : (
                        <div className="w-full inline-flex items-center justify-center gap-2 bg-gray-400 dark:bg-gray-600 text-gray-600 dark:text-gray-300 cursor-not-allowed px-4 py-2 rounded-md">
                          <ExternalLink className="w-4 h-4" />
                          Coming Soon
                        </div>
                      )}
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {project.githubPrivate ? (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div>
                              <Button
                                variant="outline"
                                className="border-2 border-gray-400 dark:border-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed opacity-80"
                                disabled
                              >
                                <div className="flex items-center justify-center gap-2">
                                  <Github className="w-4 h-4" />
                                  GitHub
                                </div>
                              </Button>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>Repository is private</TooltipContent>
                        </Tooltip>
                      ) : (
                        <Button
                          asChild
                          variant="outline"
                          className="border-2 border-gray-400 dark:border-gray-600 hover:border-[#16f2b3] dark:hover:border-[#16f2b3] hover:text-[#16f2b3] text-gray-700 dark:text-gray-300 transition-all duration-300"
                        >
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <Github className="w-4 h-4" />
                            GitHub
                          </a>
                        </Button>
                      )}
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
