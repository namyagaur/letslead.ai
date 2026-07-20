import { NextRequest, NextResponse } from "next/server";
import { ai } from "@/lib/ai";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const result = await ai.route([
    {
      role: "user",
      content: message,
    },
  ]);

  return NextResponse.json(result);
}