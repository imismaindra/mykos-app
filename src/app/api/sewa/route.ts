import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const sewa = await prisma.sewa.findMany({
      include: { kamar: true, penyewa: true, pembayaran: true },
    });
    return NextResponse.json(sewa, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal Mengambil data.", error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.kamarId || !body.penyewaId || !body.startDate || !body.endDate) {
      return NextResponse.json(
        { message: "Data tidak lengkap." },
        { status: 400 }
      );
    }

    const sewa = await prisma.sewa.create({
      data: {
        kamarId: body.kamarId,
        penyewaId: body.penyewaId,
        startDate: new Date(body.startDate),
        endDate: new Date(body.endDate),
        status: body.status ?? undefined, // kalau kosong pakai default di schema
      },
    });

    return NextResponse.json(sewa, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal Menyimpan data.", error: (error as Error).message },
      { status: 500 }
    );
  }
}
