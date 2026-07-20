import { AIMessage } from "./types";

import { EmployeeId } from "@/lib/employees";

export async function chat(
  employee: EmployeeId,
  messages: AIMessage[]
) {  const response = await fetch("/api/ai/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
  employee,
  messages,
}),
  });

  const data = await response.json();

  return data.reply as string;
}