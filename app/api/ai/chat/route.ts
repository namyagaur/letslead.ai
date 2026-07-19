import { NextRequest, NextResponse } from "next/server";
import { ai } from "@/lib/ai";

export async function GET() {
  const reply = await ai.chat([
    {
      role: "user",
      content: "Say hello in one sentence.",
    },
  ]);

  return NextResponse.json({
    reply,
  });
}

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const reply = await ai.chat(messages);

  return NextResponse.json({
    reply,
  });
}