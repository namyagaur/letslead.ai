"use client";

import { useState } from "react";
import { ChatMessage } from "@/types/chat";
import { defaultEmployee, employees } from "@/lib/employees";
import { routeConversation } from "@/lib/ai/router";
import { chat } from "@/lib/ai/client";
import { AIMessage } from "@/lib/ai/types";

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

  const [currentEmployee, setCurrentEmployee] = useState<
  (typeof employees)[keyof typeof employees]
>(defaultEmployee);

  function transferToEmployee(
    employee: (typeof employees)[keyof typeof employees]
  ) {
    // Show transfer card
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
    }, 1800);
  }

 async function sendMessage(text: string) {
  const userMessage: ChatMessage = {
    id: crypto.randomUUID(),
    role: "user",
    content: text,
    createdAt: new Date(),
  };



  const updatedMessages = [...messages, userMessage];

setMessages(updatedMessages);
  setShowQuickActions(false);
  setIsTyping(true);

  // Decide who should handle the conversation
  const nextEmployee = await routeConversation(text);

  // Wait for typing animation
  setTimeout(async () => {
const history: AIMessage[] = updatedMessages
  .filter(
    (message): message is ChatMessage & {
      role: "user" | "assistant";
    } =>
      message.role === "user" || message.role === "assistant"
  )
  .map((message) => ({
    role: message.role,
    content: message.content,
  }));

const reply = await chat(
  currentEmployee.id,
  history
);
    const aiMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: reply,
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, aiMessage]);
    setIsTyping(false);

    if (nextEmployee.id === "sarah") {
      return;
    }

    setTimeout(() => {
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