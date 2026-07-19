type ChatMessageProps = {
  role: "user" | "assistant";
  message: string;
};

export default function ChatMessage({
  role,
  message,
}: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`mb-4 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-black text-white"
            : "bg-muted text-foreground"
        }`}
      >
        {message}
      </div>
    </div>
  );
}