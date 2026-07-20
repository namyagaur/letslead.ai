"use client";

import { useState } from "react";
import { ChatMessage } from "@/types/chat";
import { defaultEmployee, employees } from "@/lib/employees";
import { chat, route } from "@/lib/ai/client";
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

const [history, setHistory] = useState<AIMessage[]>([]);
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
const [pendingTransfer, setPendingTransfer] = useState<
  (typeof employees)[keyof typeof employees] | null
>(null);

  function transferToEmployee(
    employee: (typeof employees)[keyof typeof employees]
  ) {
    // Show transfer card
    setMessages((prev) => [
  ...prev,
  {
    id: crypto.randomUUID(),
    role: "assistant",
    content: employee.welcomeMessage,
    createdAt: new Date(),
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
  async function confirmTransfer() {
  if (!pendingTransfer) return;

  transferToEmployee(pendingTransfer);
  setPendingTransfer(null);
}

function cancelTransfer() {
  setPendingTransfer(null);
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
const result = await route(text);
const nextEmployee = employees[result.employee];
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

if (nextEmployee.id !== currentEmployee.id) {
  setMessages((prev) => [
    ...prev,
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content: `I think ${nextEmployee.name}, our ${nextEmployee.role}, would be the best person to help you with this. Would you like me to connect you?`,
      createdAt: new Date(),
    },
  ]);

  setPendingTransfer(nextEmployee);
  setIsTyping(false);
  return;
}

const reply = await chat(currentEmployee.id, history);
    const aiMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: reply,
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, aiMessage]);
    setIsTyping(false);

    
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
   pendingTransfer,
  setPendingTransfer,
  confirmTransfer,
  cancelTransfer,
};
}