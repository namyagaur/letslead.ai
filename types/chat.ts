import { EmployeeId } from "@/lib/employees";

export type Role = "user" | "assistant" | "system";

export interface ChatMessage {
  id: string;
  role: Role;
  content: string;
  createdAt: Date;

  employeeId?: EmployeeId;

  metadata?: {
    type?: "transfer";
    fromEmployeeId?: EmployeeId;
    toEmployeeId?: EmployeeId;
  };
}