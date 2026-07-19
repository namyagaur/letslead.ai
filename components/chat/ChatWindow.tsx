import { ScrollArea } from "@/components/ui/scroll-area";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import QuickActions from "./QuickActions";
import { ChatMessage as Message } from "@/types/chat";
import { employees } from "@/lib/employees";
import { useEffect, useRef } from "react";
import TransferCard from "./TransferCard";

type ChatWindowProps = {
  messages: Message[];
  isTyping: boolean;
  showQuickActions: boolean;
  onQuickAction: (text: string) => void;
  employee: (typeof employees)[keyof typeof employees];
};

export default function ChatWindow({
  messages,
  isTyping,
  showQuickActions,
  onQuickAction,
  employee,
}: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <ScrollArea className="flex-1 px-6 py-6">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          role={message.role}
          message={message.content}
          employee={employee}
        />
      ))}

      {showQuickActions && (
        <QuickActions onSelect={onQuickAction} />
      )}

      {isTyping && <TypingIndicator employee={employee} />}

      <div ref={bottomRef} />
    </ScrollArea>
  );
}