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
    <div className="border-t border-zinc-200 bg-white p-5">
      <div className="flex items-center gap-3 rounded-full border border-zinc-300 bg-white px-3 py-2 shadow-sm transition-all focus-within:border-black">
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
          className="rounded-full"
        >
          →
        </Button>
      </div>
    </div>
  );
}