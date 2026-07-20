import { GoogleGenAI } from "@google/genai";
import { AIProvider, AIMessage, RouteResult } from "./types";
import { getPrompt } from "./prompts";
import { EmployeeId } from "@/lib/employees";
const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});
export class GeminiProvider implements AIProvider {
  async route(messages: AIMessage[]): Promise<RouteResult> {
  const conversation = messages
    .map((message) => `${message.role}: ${message.content}`)
    .join("\n");

  const response = await client.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: `
You are a router for a real estate AI company.

Choose exactly one employee:

- sarah → General inquiries
- emily → Buying a home
- jessica → Selling a home
- megan → Mortgage & financing
- sophia → Scheduling/viewings
- olivia → Luxury properties
- ava → Investment properties
- chloe → Customer support

Conversation:
${conversation}

Respond ONLY in JSON.

Example:
{
  "employee": "emily",
  "reason": "User wants to buy a house."
}
`,
  });

  return JSON.parse(response.text ?? "{}");
}

 async chat(
  employee: EmployeeId,
  messages: AIMessage[]
): Promise<string> {
  const conversation = messages
    .map((message) => `${message.role}: ${message.content}`)
    .join("\n");

  const response = await client.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: `
${getPrompt(employee)}
Conversation:
${conversation}

Continue the conversation as ${employee}.`,
  });

  return response.text ?? "";
}
}