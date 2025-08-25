import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const penyewa = await prisma.penyewa.findMany({
      include: { user: true, sewa: true },
    });
    return NextResponse.json(penyewa);
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal Mengambil data.", error },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const penyewa = await prisma.penyewa.create({
      data: {
        userId: body.userId,
        ktp: body.noKtp,
        phone: body.noTelp,
      },
    });
    return NextResponse.json(penyewa, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal Menyimpan data.", error },
      { status: 500 }
    );
  }
}
