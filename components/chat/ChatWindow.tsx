"use client";

import { useEffect, useRef } from "react";
import { ChatMessage as ChatMessageType } from "@/types/chat";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import QuickActions from "./QuickActions";

interface ChatWindowProps {
  messages: ChatMessageType[];
  isTyping: boolean;
  showQuickActions: boolean;
  onQuickAction: (value: string) => void;
}
export default function ChatWindow({
  messages,
  isTyping,
  showQuickActions,
  onQuickAction,
}: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-6">
      {messages.map((message, index) => (
  <div key={message.id}>
    <ChatMessage
      role={message.role}
      message={message.content}
    />

    {index === 0 &&
      message.role === "assistant" &&
      showQuickActions && (
        <QuickActions
          onSelect={onQuickAction}
        />
      )}
  </div>
))}

      {isTyping && <TypingIndicator />}

      <div ref={bottomRef} />
    </div>
  );
}