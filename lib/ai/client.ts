import { AIMessage } from "./types";

export async function chat(messages: AIMessage[]) {
  const response = await fetch("/api/ai/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ messages }),
  });

  const data = await response.json();

  return data.reply as string;
}