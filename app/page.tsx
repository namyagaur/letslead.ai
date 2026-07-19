"use client";

import { useChat } from "@/hooks/useChat";
import { ChatMessage } from "@/types/chat";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatWindow from "@/components/chat/ChatWindow";
import ChatInput from "@/components/chat/ChatInput";

export default function Home() {
const { messages, sendMessage, isTyping } = useChat();
  
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 p-6">
      <div className="flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border bg-white shadow-xl">
        <ChatHeader />
        <ChatWindow
  messages={messages}
  isTyping={isTyping}
/>
<ChatInput onSend={sendMessage} />
</div>
    </main>
  );
}