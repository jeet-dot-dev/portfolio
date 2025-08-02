"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const JunoChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Periodically show tooltip
  useEffect(() => {
    const interval = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 3000); // every 10s

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Floating Button + Pulse + Tooltip */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="mb-2 bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg"
            >
              Ask JUNO about Jeet!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Ring */}
        {!isOpen && (
          <span className="absolute w-16 h-16 rounded-full bg-[#16f2b3]/20 animate-ping"></span>
        )}

        {/* Chat Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#16f2b3] to-blue-500 text-white shadow-lg hover:scale-105 transition"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chatbox"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-[350px] max-h-[70vh] bg-white dark:bg-zinc-900 shadow-xl rounded-2xl overflow-hidden flex flex-col z-50"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-zinc-700 font-semibold text-lg text-gray-800 dark:text-white">
              🤖 JUNO
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Ask me anything about Jeet!
              </p>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div className="bg-gray-100 dark:bg-zinc-800 p-3 rounded-lg">
                👋 Hey there! I&apos;m JUNO — Jeet&apos;s personal AI assistant. Ask me anything!
              </div>
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Add your send logic here
              }}
              className="border-t border-gray-200 dark:border-zinc-700 flex"
            >
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
              />
              <button
                type="submit"
                className="px-4 text-[#16f2b3] font-semibold hover:text-blue-500 transition"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default JunoChatWidget;
