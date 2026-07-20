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
  pendingTransfer: (typeof employees)[keyof typeof employees] | null;
setPendingTransfer: React.Dispatch<
  React.SetStateAction<
    (typeof employees)[keyof typeof employees] | null
  >
>;
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
<ScrollArea className="h-full flex-1">
  <div className="px-6 py-6">
   {messages.map((message) => {
  if (
    message.role === "system" &&
    message.metadata?.type === "transfer"
  ) {
    return (
      <TransferCard
        key={message.id}
        from={employees[message.metadata.fromEmployeeId as keyof typeof employees]}
        to={employees[message.metadata.toEmployeeId as keyof typeof employees]}
      />
    );
  }

  return (
    <ChatMessage
      key={message.id}
      role={message.role as "user" | "assistant"}
      message={message.content}
      employee={employee}
    />
  );
})}

      {showQuickActions && (
        <QuickActions onSelect={onQuickAction} />
      )}

      {isTyping && <TypingIndicator employee={employee} />}

      <div ref={bottomRef} />

    
  </div>
     
    </ScrollArea>
  );
}