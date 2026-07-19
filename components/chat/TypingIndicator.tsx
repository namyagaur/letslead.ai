import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { employees } from "@/lib/employees";

type TypingIndicatorProps = {
  employee: (typeof employees)[keyof typeof employees];
};

export default function TypingIndicator({
  employee,
}: TypingIndicatorProps) {
  return (
    <div className="mb-6 flex items-end gap-3">
      <Avatar className="h-10 w-10 shrink-0 border border-zinc-200">
        <Image
          src={employee.avatar}
          alt={employee.name}
          width={40}
          height={40}
          className="h-full w-full rounded-full object-cover"
        />
      </Avatar>

      <div className="rounded-3xl rounded-bl-md bg-zinc-100 px-5 py-4">
        <div className="flex gap-1">
          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500"></span>
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-zinc-500"
            style={{ animationDelay: "0.15s" }}
          />
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-zinc-500"
            style={{ animationDelay: "0.3s" }}
          />
        </div>
      </div>
    </div>
  );
}