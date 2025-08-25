import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: Promise<{ kosuuid: string; uuid: string }> }
) {
  const { kosuuid, uuid } = await context.params;

  const kamar = await prisma.kamar.findFirst({
    where: {
      uuid,
      kos: { uuid: kosuuid },
    },
  });
  if (!kamar)
    return NextResponse.json({ error: "kamar not found" }, { status: 404 });
  return NextResponse.json(kamar);
}

export async function PATCH(
  req: Request,
  context: { params: Promise<{ kosuuid: string; uuid: string }> }
) {
  const { kosuuid, uuid } = await context.params;
  const body = await req.json;

  const kamar = await prisma.kamar.updateMany({
    where: {
      uuid,
      kos: { uuid: kosuuid },
    },
    data: body,
  });

  if (kamar.count === 0)
    return NextResponse.json({ error: "kamar not found" }, { status: 404 });
  return NextResponse.json({ message: "Kamar updated" });
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ kosuuid: string; uuid: string }> }
) {
  const { kosuuid, uuid } = await context.params;

  const kamar = await prisma.kamar.deleteMany({
    where: { uuid, kos: { uuid: kosuuid } },
  });

  if (!kamar)
    return NextResponse.json({ error: "kamar not found" }, { status: 404 });
  return NextResponse.json({ message: "kamar deleted" });
}
