import { ai } from "./index";
import { employees } from "@/lib/employees";

export async function routeConversation(message: string) {
  const result = await ai.route([
    {
      role: "user",
      content: message,
    },
  ]);

  return employees[result.employee];
}