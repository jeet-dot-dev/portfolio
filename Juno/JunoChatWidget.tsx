"use client";

import { useEffect, useState, useRef } from "react";
import { MessageCircle, X, MoveUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const JunoChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([
    {
      role: "ai",
      text: "👋 Hey there! I'm JUNO — Jeet's personal AI assistant. Ask me anything!",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Pre-defined questions
  const preQuestions = [
    "Tell me about Jeet's projects",
    "What are Jeet's skills?",
    "Jeet's education background",
    "How to contact Jeet?",
    "About hackathons",
    "Work experience"
  ];

  // Periodically show tooltip
  useEffect(() => {
    const interval = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 10000); // every 10s

    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom when messages update
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSubmit = async (customQuestion?: string) => {
    const questionToSubmit = customQuestion || question;
    if (questionToSubmit.trim() === "") return;

    setQuestion("");
    // Add user's message
    setMessages((prev) => [...prev, { role: "user", text: questionToSubmit }]);
    setIsTyping(true);

    try {
      const res = await axios.post("/api/questions", { question: questionToSubmit });
      const topResponse = res.data.reply;

      // Add AI message
      setMessages((prev) => [...prev, { role: "ai", text: topResponse }]);
    } catch (error) {
      console.error("Error submitting question:", error);
      // Try to surface server error message if available
      const serverMessage = (error as any)?.response?.data?.error || (error as Error).message;
      const details = (error as any)?.response?.data?.details;
      const display = details ? `${serverMessage}: ${details}` : serverMessage || "Oops! Something went wrong.";
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: display },
      ]);
    }

    setIsTyping(false);
    setQuestion("");
  };

  const handlePreQuestionClick = (preQuestion: string) => {
    handleSubmit(preQuestion);
  };

  // Function to make links clickable
  const formatTextWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#16f2b3] hover:text-blue-500 underline break-all"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  // Show pre-questions only when there's just the initial AI message
  const showPreQuestions = messages.length === 1 && !isTyping;

  return (
    <>
      {/* Floating Button + Pulse + Tooltip */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
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

        {!isOpen && (
          <span className="absolute w-16 h-16 rounded-full bg-[#16f2b3]/20 animate-ping"></span>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#16f2b3] to-blue-500 text-white shadow-lg hover:scale-105 transition"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
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
            className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[380px] max-w-[calc(100vw-2rem)] max-h-[70vh] bg-white dark:bg-zinc-900 shadow-xl rounded-2xl overflow-hidden flex flex-col z-50"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-zinc-700 font-semibold text-lg text-gray-800 dark:text-white">
              🤖 JUNO
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Ask me anything about Jeet!
              </p>
              <p className="text-xs font-normal text-gray-400 dark:text-gray-500 mt-1">
                For fun purposes • Not always correct
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-lg word-wrap break-words ${
                    msg.role === "user"
                      ? "bg-blue-100 dark:bg-blue-800 self-end ml-auto max-w-[85%]"
                      : "bg-gray-100 dark:bg-zinc-800 max-w-[90%]"
                  }`}
                >
                  {msg.role === "ai" ? formatTextWithLinks(msg.text) : msg.text}
                </div>
              ))}

              {/* Pre-questions */}
              {showPreQuestions && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    Quick questions:
                  </p>
                  <div className="space-y-1">
                    {preQuestions.map((preQ, idx) => (
                      <button
                        key={idx}
                        onClick={() => handlePreQuestionClick(preQ)}
                        className="flex items-center justify-between w-full text-xs p-2 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-lg transition-all duration-200 text-left group"
                      >
                        <span>{preQ}</span>
                        <MoveUpRight className="w-3 h-3 text-gray-400 group-hover:text-[#16f2b3] transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {isTyping && (
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-zinc-800 max-w-[90%] word-wrap break-words">
                  <span className="animate-pulse">JUNO is typing...</span>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="border-t border-gray-200 dark:border-zinc-700 flex"
            >
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
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