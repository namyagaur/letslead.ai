import { NextRequest, NextResponse } from "next/server";
import { ai } from "@/lib/ai";

export async function POST(req: NextRequest) {
  const { messages, lead } = await req.json();

  const updates = await ai.extractLead(messages, lead);

  return NextResponse.json({
    updates,
  });
}