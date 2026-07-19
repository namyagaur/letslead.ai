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
    // Show transfer card inside chat
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: "system",
        content: "",
        createdAt: new Date(),
        metadata: {
          type: "transfer",
          fromEmployeeId: currentEmployee.id,
          toEmployeeId: employee.id,
        },
      },
    ]);

    // Wait for transfer animation
    setTimeout(() => {
      // Switch employee
      setCurrentEmployee(employee);

      // Start a fresh conversation
      setMessages([
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: employee.welcomeMessage,
          createdAt: new Date(),
        },
      ]);

      setShowQuickActions(true);
    }, 1800);
  }
  function getEmployeeForMessage(message: string) {
  const text = message.toLowerCase();

  if (
    text.includes("buy") ||
    text.includes("purchase") ||
    text.includes("first home")
  ) {
    return employees.emily;
  }

  if (
    text.includes("sell") ||
    text.includes("selling") ||
    text.includes("list")
  ) {
    return employees.jessica;
  }

  if (
    text.includes("rent") ||
    text.includes("rental") ||
    text.includes("lease")
  ) {
    return employees.ava;
  }

  if (
    text.includes("mortgage") ||
    text.includes("loan") ||
    text.includes("finance")
  ) {
    return employees.olivia;
  }

  return employees.sarah;
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
      const nextEmployee = getEmployeeForMessage(text);

const sarahMessage: ChatMessage = {
  id: crypto.randomUUID(),
  role: "assistant",
  content:
    nextEmployee.id === "sarah"
      ? "I'd be happy to help you with that."
      : `I'd love to help with that. I'm connecting you with ${nextEmployee.name}, our ${nextEmployee.role}.`,
  createdAt: new Date(),
};

      setMessages((prev) => [...prev, sarahMessage]);

      setIsTyping(false);

      setTimeout(() => {
  const nextEmployee = getEmployeeForMessage(text);

  if (nextEmployee.id === "sarah") {
    return;
  }

  transferToEmployee(nextEmployee);
}, 1000);
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