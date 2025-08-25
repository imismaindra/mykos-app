import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: Promise<{ kosuuid: string }> }
) {
  const { kosuuid } = await context.params;
  const kamarList = await prisma.kamar.findMany({
    where: { kos: { uuid: kosuuid } },
  });
  return NextResponse.json(kamarList);
}

export async function POST(
  req: Request,
  context: { params: Promise<{ kosuuid: string }> }
) {
  const { kosuuid } = await context.params;
  const body = await req.json();

  const kos = await prisma.kos.findUnique({ where: { uuid: kosuuid } });
  if (!kos)
    return NextResponse.json({ message: "Kos not found" }, { status: 404 });

  const kamar = await prisma.kamar.create({
    data: {
      kosId: kos.id,
      number: body.number,
      size: body.size,
      price: body.price,
      status: body.status ?? "kosong",
    },
  });
  return NextResponse.json(kamar, { status: 201 });
}
