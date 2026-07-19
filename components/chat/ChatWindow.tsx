import { ChatMessage as ChatMessageType } from "@/types/chat";
import ChatMessage from "./ChatMessage";

interface ChatWindowProps {
  messages: ChatMessageType[];
}

export default function ChatWindow({ messages }: ChatWindowProps) {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          role={message.role}
          message={message.content}
        />
      ))}
    </div>
  );
}