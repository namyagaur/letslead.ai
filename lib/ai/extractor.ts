import { Lead } from "@/types/lead";
import { AIMessage } from "./types";

export async function extractLead(
  messages: AIMessage[],
  currentLead: Lead
): Promise<Partial<Lead>> {
  // We'll implement this next.
  return {};
}