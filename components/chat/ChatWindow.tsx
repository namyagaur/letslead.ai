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
  pendingTransfer,
  setPendingTransfer,
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
  <>
    <ChatMessage
      key={message.id}
      role={message.role as "user" | "assistant"}
      message={message.content}
      employee={employee}
    />

    {pendingTransfer &&
      message.id === messages[messages.length - 1].id && (
        <div className="mb-6 ml-12 flex gap-3">
          <button className="rounded-full bg-black px-4 py-2 text-sm text-white">
            Connect me
          </button>

          <button className="rounded-full border px-4 py-2 text-sm">
            Stay with Sarah
          </button>
        </div>
      )}
  </>
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