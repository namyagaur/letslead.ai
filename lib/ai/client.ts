import { AIMessage } from "./types";
import { EmployeeId } from "@/lib/employees";
import { RouteResult } from "./types";

export async function chat(
  employee: EmployeeId,
  messages: AIMessage[]
) {
  const response = await fetch("/api/ai/chat", {
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

export async function route(
  message: string
): Promise<RouteResult> {
  const response = await fetch("/api/ai/route", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });

return (await response.json()) as RouteResult;
}