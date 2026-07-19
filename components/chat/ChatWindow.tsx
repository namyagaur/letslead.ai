import ChatMessage from "./ChatMessage";

export default function ChatWindow() {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <ChatMessage
        role="assistant"
        message="👋 Hi! I'm Sarah, your AI real estate assistant. How can I help you today?"
      />

      <ChatMessage
        role="user"
        message="I'm looking for a 2 BHK in Dallas."
      />
    </div>
  );
}