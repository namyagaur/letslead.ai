import { NextRequest, NextResponse } from "next/server";
import { ai } from "@/lib/ai";

export async function GET() {
  const reply = await ai.chat("sarah", [
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
const { employee, messages } = await req.json();

const reply = await ai.chat(employee, messages);
  return NextResponse.json({
    reply,
  });
}