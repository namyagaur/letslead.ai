import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function ChatHeader() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-200 px-6 py-4">
      <div className="flex items-center gap-3">
        <Avatar className="h-11 w-11">
          <AvatarFallback>🏡</AvatarFallback>
        </Avatar>

        <div>
          <h1 className="text-lg font-semibold tracking-tight">
            Sarah
          </h1>

          <p className="text-sm text-zinc-500">
            AI Real Estate Concierge
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-green-500"></div>

        <span className="text-sm text-zinc-500">
          Online
        </span>
      </div>
    </header>
  );
}