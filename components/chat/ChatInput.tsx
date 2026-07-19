"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  return (
    <div className="border-t p-4">
      <div className="flex gap-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />

        <Button>Send</Button>
      </div>
    </div>
  );
}