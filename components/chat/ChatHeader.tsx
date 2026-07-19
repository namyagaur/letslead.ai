import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Circle } from "lucide-react";

export default function ChatHeader() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-200 bg-white/90 px-6 py-4 backdrop-blur">
      <div className="flex items-center gap-3">
        <Avatar className="h-11 w-11 border border-zinc-200">
          <AvatarFallback className="bg-zinc-100 font-semibold text-zinc-700">
            S
          </AvatarFallback>
        </Avatar>

        <div>
          <h1 className="text-base font-semibold text-zinc-900">
            Sarah
          </h1>

          <p className="text-sm text-zinc-500">
            Lead Concierge
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Circle
          className="fill-green-500 text-green-500"
          size={10}
        />

        <span className="text-sm text-zinc-500">
          Online
        </span>
      </div>
    </header>
  );
}