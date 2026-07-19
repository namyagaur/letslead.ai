"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { employees } from "@/lib/employees";

type ChatInputProps = {
  onSend: (message: string) => void;
  employee: (typeof employees)[keyof typeof employees];
};

export default function ChatInput({
  onSend,
  employee,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  }

  return (
    <div className="border-t border-zinc-100 bg-white px-6 py-4">
      <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-2 transition-all focus-within:border-zinc-400 focus-within:bg-white">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Message ${employee.name}...`}
          className="border-0 shadow-none focus-visible:ring-0"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSend();
            }
          }}
        />

        <Button
  onClick={handleSend}
  size="icon"
  className="h-9 w-9 rounded-xl"
>
  →
</Button>
      </div>
    </div>
  );
}