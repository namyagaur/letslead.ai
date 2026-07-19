"use client";

import { useState } from "react";
import { ChatMessage } from "@/types/chat";
import { defaultEmployee } from "@/lib/employees";
export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "👋 Hi! I'm Sarah, your AI real estate assistant. How can I help you today?",
      createdAt: new Date(),
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [currentEmployee, setCurrentEmployee] =
  useState(defaultEmployee);
  async function sendMessage(text: string) {
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setShowQuickActions(false);
    setIsTyping(true);

    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "This is a fake AI response. Next we'll replace this with Gemini.",
        createdAt: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      setIsTyping(false);
    }, 1200);
  }

  return {
  messages,
  sendMessage,
  isTyping,
  showQuickActions,
  currentEmployee,
  setCurrentEmployee,
};
}