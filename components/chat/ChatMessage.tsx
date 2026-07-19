import { Avatar, AvatarFallback } from "@/components/ui/avatar";import Image from "next/image";
import { defaultEmployee } from "@/lib/employees";
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
    <div
      className={`mb-6 flex items-end gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
  <Avatar className="h-10 w-10 shrink-0 border border-zinc-200">
    <Image
      src={defaultEmployee.avatar}
      alt={defaultEmployee.name}
      width={40}
      height={40}
      className="h-full w-full rounded-full object-cover"
    />
  </Avatar>
)}

      <div
        className={`max-w-[70%] rounded-3xl px-5 py-3 text-[15px] leading-7 shadow-sm ${
          isUser
            ? "bg-black text-white rounded-br-md"
            : "bg-zinc-100 text-zinc-900 rounded-bl-md"
        }`}
      >
        {message}
      </div>

      {isUser && (
        <Avatar className="h-9 w-9">
          <AvatarFallback>👤</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}