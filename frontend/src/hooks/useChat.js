import { useState } from 'react';
import { askAI } from '../services/chatService';

export const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // const sendMessage = async (text) => {
  //   const userMsg = { sender: 'user', text };
  //   setMessages((prev) => [...prev, userMsg]);
  //   setLoading(true);

  //   try {
  //     const aiResponse = await askAI(text);
  //     setMessages((prev) => [...prev, { role: 'ai', content: aiResponse }]);
  //   } catch (err) {
  //     setMessages((prev) => [...prev, { role: 'ai', content: 'Error fetching response' }]);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const sendMessage = async (message) => {
  if (!message.trim()) return;

  // 👉 Add USER message first
  setMessages((prev) => [
    ...prev,
    { role: "user", content: message },
  ]);

  setLoading(true);

  try{

  const aiResponse = await askAI(message);

  // 👉 Add AI response
  setMessages((prev) => [
    ...prev,
    { role: "assistant", content: aiResponse },
  ]);
 } catch (error) {
  setMessages((prev) => [...prev, { role: 'ai', content: 'Error fetching response' }]);

 } finally {
  setLoading(false);
 }
};

  return { messages, loading, sendMessage };
};