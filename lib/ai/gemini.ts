import { GoogleGenAI } from "@google/genai";
import { AIProvider, AIMessage, RouteResult } from "./types";

const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});
export class GeminiProvider implements AIProvider {
  async route(messages: AIMessage[]): Promise<RouteResult> {
    throw new Error("Not implemented");
  }

 async chat(messages: AIMessage[]): Promise<string> {
  const response = await client.models.generateContent({
model: "gemini-3.1-flash-lite",    contents: messages
      .map((m) => `${m.role}: ${m.content}`)
      .join("\n"),
  });

  return response.text ?? "";
}
}