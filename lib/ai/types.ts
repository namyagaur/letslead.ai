import { EmployeeId } from "@/lib/employees";
import { Lead } from "@/types/lead";

export interface AIResponse {
  reply: string;

  leadUpdates?: Partial<Lead>;

  shouldTransfer?: boolean;

  nextEmployee?: EmployeeId | null;
}
export interface AIMessage {
  role:  "user" | "assistant";
  content: string;
}

export interface RouteResult {
  employee: EmployeeId;
  reason: string;
}

export interface AIProvider {
  route(messages: AIMessage[]): Promise<RouteResult>;

  chat(
  employee: EmployeeId,
  messages: AIMessage[]
): Promise<string>;
}