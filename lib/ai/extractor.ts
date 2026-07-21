import { GoogleGenAI } from "@google/genai";
import { Lead } from "@/types/lead";
import { AIMessage } from "./types";

const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function extractLead(
  messages: AIMessage[],
  currentLead: Lead
): Promise<Partial<Lead>> {
  const conversation = messages
    .map((m) => `${m.role}: ${m.content}`)
    .join("\n");

  const response = await client.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: `
You are an information extraction engine.

Extract ONLY new lead information from the conversation.

Current Lead:
${JSON.stringify(currentLead)}

Conversation:
${conversation}

Return ONLY valid JSON.

Example:

{
  "budget": "400k",
  "city": "Noida"
}

If nothing new was learned, return:

{}
`,
  });

  return JSON.parse(response.text ?? "{}");
}