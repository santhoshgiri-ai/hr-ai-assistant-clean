import React from "react";
import { motion } from "framer-motion";

const MessageBubble = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex w-full mb-4 ${isUser ? "justify-end" : "justify-start"}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`
          px-4 py-3 max-w-[70%] rounded-2xl text-sm leading-relaxed
          shadow-lg transition-all duration-300
          ${
            isUser
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "bg-white/10 text-gray-200 backdrop-blur-md border border-white/10"
          }
        `}
        >
          {message.content}
        </div>
      </motion.div>
    </div>
  );
};

export default MessageBubble;
