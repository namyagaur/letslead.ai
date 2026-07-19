import { employees } from "@/lib/employees";

export async function routeConversation(message: string) {
  const text = message.toLowerCase();

  if (text.includes("buy") || text.includes("purchase")) {
    return employees.emily;
  }

  if (text.includes("sell") || text.includes("listing")) {
    return employees.jessica;
  }

  if (
    text.includes("mortgage") ||
    text.includes("loan") ||
    text.includes("finance")
  ) {
    return employees.olivia;
  }

  if (
    text.includes("rent") ||
    text.includes("lease") ||
    text.includes("rental")
  ) {
    return employees.ava;
  }

  return employees.sarah;
}