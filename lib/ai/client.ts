import { AIMessage } from "./types";
import { EmployeeId } from "@/lib/employees";
import { RouteResult } from "./types";
import { Lead } from "@/types/lead";

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
export async function extractLead(
  messages: AIMessage[],
  lead: Lead
): Promise<Partial<Lead>> {
  const response = await fetch("/api/ai/extract", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages,
      lead,
    }),
  });

  const data = await response.json();

  return data.updates as Partial<Lead>;
}