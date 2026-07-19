"use client";

import { useState } from "react";
import { ChatMessage } from "@/types/chat";
import { defaultEmployee, employees } from "@/lib/employees";
export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content: defaultEmployee.welcomeMessage,
      createdAt: new Date(),
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [currentEmployee, setCurrentEmployee] =
  useState(defaultEmployee);
  function transferToEmployee(
  employee: (typeof employees)[keyof typeof employees]
) {
  setCurrentEmployee(employee);

  setMessages([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content: employee.welcomeMessage,
      createdAt: new Date(),
    },
  ]);

  setShowQuickActions(true);
}
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
  const sarahMessage: ChatMessage = {
    id: crypto.randomUUID(),
    role: "assistant",
    content:
      "I'd love to help with that. I'm connecting you with Emily, our Buyer Specialist.",
    createdAt: new Date(),
  };

  setMessages((prev) => [...prev, sarahMessage]);

  setIsTyping(false);

  setTimeout(() => {
    transferToEmployee(employees.emily);
  }, 1200);
}, 1200);
  }

  return {
  messages,
  setMessages,
  sendMessage,
  isTyping,
  setIsTyping,
  showQuickActions,
  setShowQuickActions,
  currentEmployee,
  setCurrentEmployee,
};
}