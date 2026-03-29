import React, { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import Loader from "./Loader";

const ChatContainer = ({ messages, loading, onSend }) => {
  const scrollRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Handle quick question click
  const handleQuickQuestion = (question) => {
    onSend(question);
  };

  return (
    <div className="flex flex-col h-full p-6 overflow-y-auto bg-transparent text-white">
      
      {/* Empty State */}
      {messages.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            HR AI Assistant
          </h1>

          <p className="text-gray-400 mb-8 max-w-md text-base">
            Ask anything about HR policies, leaves, salary, and more.
          </p>

          {/* Quick Questions */}
          <div className="flex flex-wrap justify-center gap-3 max-w-lg">
            {[
              "What is notice period?",
              "Explain leave policy",
              "Salary structure",
              "Employee benefits",
            ].map((q, i) => (
              <button
                key={i}
                onClick={() => handleQuickQuestion(q)}
                className="px-5 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-200 backdrop-blur-md"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex flex-col gap-3">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} message={msg} />
        ))}
      </div>

      {/* Loader (AI typing feel) */}
      {loading && (
        <div className="mt-2">
          <Loader />
        </div>
      )}

      <div ref={scrollRef}></div>
    </div>
  );
};

export default ChatContainer;