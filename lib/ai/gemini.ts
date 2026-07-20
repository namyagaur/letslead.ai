import { GoogleGenAI } from "@google/genai";
import { AIProvider, AIMessage, RouteResult } from "./types";
import { SARAH_SYSTEM_PROMPT } from "./prompts";

const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});
export class GeminiProvider implements AIProvider {
  async route(messages: AIMessage[]): Promise<RouteResult> {
    throw new Error("Not implemented");
  }

 async chat(messages: AIMessage[]): Promise<string> {
  const response = await client.models.generateContent({
model: "gemini-3.1-flash-lite",   contents: [
  {
    role: "user",
    parts: [
      {
        text: `
${SARAH_SYSTEM_PROMPT}

User: ${messages[messages.length - 1].content}
        `,
      },
    ],
  },
],
  });

  return response.text ?? "";
}
}