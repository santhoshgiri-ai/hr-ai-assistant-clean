import React, { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="p-4 border-t border-white/10 bg-white/5 backdrop-blur-lg">

      <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-4 py-2 shadow-inner">

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
                        if (e.key === "Enter") {
                        onSend(input);
                        setInput("");
                        }
                    }}
          placeholder="Ask anything about HR..."
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
        />

        <button
          onClick={handleSend}
          className="bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 rounded-full text-white hover:scale-105 transition"
        >
          Send
        </button>

      </div>

    </div>
  );
};

export default ChatInput;