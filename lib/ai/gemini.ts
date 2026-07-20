import { GoogleGenAI } from "@google/genai";
import { AIProvider, AIMessage, RouteResult } from "./types";
import { getPrompt } from "./prompts";
import { EmployeeId } from "@/lib/employees";
const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});
export class GeminiProvider implements AIProvider {
  async route(messages: AIMessage[]): Promise<RouteResult> {
    throw new Error("Not implemented");
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

Continue the conversation as Sarah.
`,
  });

  return response.text ?? "";
}
}