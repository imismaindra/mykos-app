import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: Promise<{ kosuuid: string }> }
) {
  const { kosuuid } = await context.params;
  const kos = await prisma.kos.findUnique({
    where: { uuid: kosuuid },
    include: { kamar: true },
  });

  if (!kos)
    return NextResponse.json({ message: "Kos not found" }, { status: 404 });
  return NextResponse.json(kos);
}

export async function PATCH(
  req: Request,
  context: { params: Promise<{ kosuuid: string }> }
) {
  const { kosuuid } = await context.params;
  const body = await req.json();
  const kos = await prisma.kos.update({
    where: { uuid: kosuuid },
    data: body,
  });
  return NextResponse.json(kos);
}
export async function DELETE(
  req: Request,
  context: { params: Promise<{ kosuuid: string }> }
) {
  const { kosuuid } = await context.params;
  await prisma.kos.delete({
    where: { uuid: kosuuid },
  });
  return NextResponse.json({ message: "Kos deleted" });
}
