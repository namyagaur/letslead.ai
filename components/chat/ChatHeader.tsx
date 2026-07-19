import { Circle } from "lucide-react";
import Image from "next/image";
import { employees } from "@/lib/employees";

type ChatHeaderProps = {
  employee: (typeof employees)[keyof typeof employees];
};

export default function ChatHeader({ employee }: ChatHeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-200 bg-white/90 px-6 py-4 backdrop-blur">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 overflow-hidden rounded-full border border-zinc-200 bg-white shadow-sm">
          <Image
            src={employee.avatar}
            alt={employee.name}
            width={48}
            height={48}
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-[15px] font-semibold tracking-tight text-zinc-900">
            {employee.name}
          </h1>

          <p className="text-sm text-zinc-500">
            {employee.role}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Circle
          className="fill-green-500 text-green-500"
          size={10}
        />

        <span className="text-sm text-zinc-500">
          {employee.status}
        </span>
      </div>
    </header>
  );
}