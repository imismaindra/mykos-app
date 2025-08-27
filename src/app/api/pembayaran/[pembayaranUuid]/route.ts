import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET detail pembayaran
export async function GET(
  _: Request,
  { params }: { params: { pembayaranUuid: string } }
) {
  try {
    const pembayaran = await prisma.pembayaran.findUnique({
      where: { uuid: params.pembayaranUuid },
      include: { sewa: true },
    });

    if (!pembayaran) {
      return NextResponse.json(
        { message: "Data tidak ditemukan." },
        { status: 404 }
      );
    }

    return NextResponse.json(pembayaran, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Gagal mengambil detail data.",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

// PUT update pembayaran
export async function PUT(
  req: Request,
  { params }: { params: { pembayaranUuid: string } }
) {
  try {
    const body = await req.json();
    const { amount, dueDate, paidDate, status, method } = body;

    const pembayaran = await prisma.pembayaran.update({
      where: { uuid: params.pembayaranUuid },
      data: {
        amount,
        dueDate: dueDate ? new Date(dueDate) : undefined,
        paidDate: paidDate ? new Date(paidDate) : undefined,
        status,
        method,
      },
    });

    return NextResponse.json(pembayaran, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal update data.", error: (error as Error).message },
      { status: 500 }
    );
  }
}

// DELETE hapus pembayaran
export async function DELETE(
  _: Request,
  { params }: { params: { pembayaranUuid: string } }
) {
  try {
    await prisma.pembayaran.delete({
      where: { uuid: params.pembayaranUuid },
    });
    return NextResponse.json({ message: "Berhasil dihapus." }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal hapus data.", error: (error as Error).message },
      { status: 500 }
    );
  }
}
