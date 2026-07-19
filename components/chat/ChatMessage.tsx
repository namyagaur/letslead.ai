import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { employees } from "@/lib/employees";

type ChatMessageProps = {
  role: "user" | "assistant";
  message: string;
  employee: (typeof employees)[keyof typeof employees];
};

export default function ChatMessage({
  role,
  message,
  employee,
}: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={`mb-6 flex items-end gap-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <Avatar className="h-10 w-10 shrink-0 border border-zinc-200">
          <Image
            src={employee.avatar}
            alt={employee.name}
            width={40}
            height={40}
            className="h-full w-full rounded-full object-cover"
          />
        </Avatar>
      )}

      <div
        className={`max-w-[65%] rounded-3xl px-4 py-2 text-[15px] leading-relaxed shadow-sm ${
          isUser
            ? "rounded-br-md bg-black text-white"
            : "rounded-bl-md bg-zinc-100 text-zinc-900"
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