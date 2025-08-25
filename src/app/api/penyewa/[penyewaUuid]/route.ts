import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: { penyewaUuid: string } }
) {
  const { penyewaUuid } = context.params;

  // Fetch penyewa by UUID
  const penyewa = await prisma.penyewa.findUnique({
    where: { uuid: penyewaUuid },
    include: { user: true, sewa: true },
  });

  if (!penyewa) {
    return NextResponse.json({ error: "Pennyewa tidak ada." }, { status: 404 });
  }

  return NextResponse.json(penyewa);
}
export async function PATCH(
  req: Request,
  context: { params: { penyewaUuid: string } }
) {
  const { penyewaUuid } = context.params;
  const body = await req.json();

  // Update penyewa by UUID
  const penyewa = await prisma.penyewa.updateMany({
    where: { uuid: penyewaUuid },
    data: body,
  });

  if (penyewa.count === 0) {
    return NextResponse.json({ error: "Pennyewa tidak ada." }, { status: 404 });
  }

  return NextResponse.json({ message: "Penyewa berhasil diupdate." });
}
export async function DELETE(
  req: Request,
  context: { params: { penyewaUuid: string } }
) {
  const { penyewaUuid } = context.params;

  // Delete penyewa by UUID
  const penyewa = await prisma.penyewa.deleteMany({
    where: { uuid: penyewaUuid },
  });

  if (penyewa.count === 0) {
    return NextResponse.json({ error: "Pennyewa tidak ada." }, { status: 404 });
  }

  return NextResponse.json({ message: "Penyewa berhasil dihapus." });
}
