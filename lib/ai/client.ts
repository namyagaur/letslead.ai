export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const reply = await ai.chat(messages);

  return NextResponse.json({
    reply,
  });
}