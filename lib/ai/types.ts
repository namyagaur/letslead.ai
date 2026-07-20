import { EmployeeId } from "@/lib/employees";

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