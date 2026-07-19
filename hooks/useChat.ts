"use client";

import { useState } from "react";
import { ChatMessage } from "@/types/chat";

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

  return {
    messages,
    setMessages,
  };
}