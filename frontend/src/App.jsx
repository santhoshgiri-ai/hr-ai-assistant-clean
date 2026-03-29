import React from 'react';
import ChatContainer from './components/ChatContainer';
import ChatInput from './components/ChatInput';
import { useChat } from './hooks/useChat';

function App() {
  const { messages, loading, sendMessage } = useChat();

 return (
  <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-black">
  {/* // <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900"> */}
  {/* <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black"> */}

    <div className="w-full max-w-4xl h-[90vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-gray-700 backdrop-blur-md bg-white/5">

      {/* Header */}
      <div className="px-6 py-4 text-lg font-semibold text-white border-b border-gray-700 flex items-center justify-between">
        <span>🤖 HR AI Assistant</span>
        <span className="text-sm text-gray-400">Ask anything</span>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-hidden">
        <ChatContainer
          messages={messages}
          loading={loading}
          onSend={sendMessage}
        />
      </div>

      {/* Input */}
      <ChatInput onSend={sendMessage} />

    </div>
  </div>
);
}

export default App;