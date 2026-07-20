"use client";

import { useChat } from "@/hooks/useChat";
import { ChatMessage } from "@/types/chat";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatWindow from "@/components/chat/ChatWindow";
import ChatInput from "@/components/chat/ChatInput";
import TransferOverlay from "@/components/chat/TransferOverlay";

export default function Home() {
const {
  messages,
  sendMessage,
  isTyping,
  showQuickActions,
  currentEmployee,
  pendingTransfer,
  setPendingTransfer,
} = useChat();

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 p-6">
<div className="relative flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border bg-white shadow-xl">       
  {/* {transfer && (
  <TransferOverlay
    from={transfer.from}
    to={transfer.to}
  />
)} */}
  <ChatHeader employee={currentEmployee} />
        <div className="flex-1 overflow-hidden">
  <ChatWindow
  messages={messages}
  isTyping={isTyping}
  showQuickActions={showQuickActions}
  onQuickAction={sendMessage}
  employee={currentEmployee}
  pendingTransfer={pendingTransfer}
  setPendingTransfer={setPendingTransfer}
/>
</div>
<ChatInput
  onSend={sendMessage}
  employee={currentEmployee}
/>
</div>
    </main>
  );
}