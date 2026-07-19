export type Role = "user" | "assistant" | "system";

export interface ChatMessage {
  id: string;
  role: Role;
  content: string;
  createdAt: Date;

  metadata?: {
    type?: "transfer";
    fromEmployeeId?: string;
    toEmployeeId?: string;
  };
}