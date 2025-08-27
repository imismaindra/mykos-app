import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { sewaUuid: string } }
) {
  try {
    const { sewaUuid } = params;
    const sewa = await prisma.sewa.findUnique({
      where: { uuid: sewaUuid },
      include: { kamar: true, penyewa: true, pembayaran: true },
    });

    if (!sewa) {
      return NextResponse.json(
        { message: "Data tidak ditemukan." },
        { status: 404 }
      );
    }

    return NextResponse.json(sewa, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal Mengambil data.", error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { sewaUuid: string } }
) {
  try {
    const { sewaUuid } = params;
    const body = await req.json();

    const existingSewa = await prisma.sewa.findUnique({
      where: { uuid: sewaUuid },
    });

    if (!existingSewa) {
      return NextResponse.json(
        { message: "Data tidak ditemukan." },
        { status: 404 }
      );
    }

    const updatedSewa = await prisma.sewa.update({
      where: { uuid: sewaUuid },
      data: {
        kamarId: body.kamarId ?? existingSewa.kamarId,
        penyewaId: body.penyewaId ?? existingSewa.penyewaId,
        startDate: body.startDate
          ? new Date(body.startDate)
          : existingSewa.startDate,
        endDate: body.endDate ? new Date(body.endDate) : existingSewa.endDate,
        status: body.status ?? existingSewa.status,
      },
    });

    return NextResponse.json(updatedSewa, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal Memperbarui data.", error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  context: { params: { sewaUuid: string } }
) {
  try {
    const { sewaUuid } = context.params;

    const existingSewa = await prisma.sewa.findUnique({
      where: { uuid: sewaUuid },
    });

    if (!existingSewa) {
      return NextResponse.json(
        { message: "Data tidak ditemukan." },
        { status: 404 }
      );
    }

    await prisma.sewa.delete({
      where: { uuid: sewaUuid },
    });

    return NextResponse.json(
      { message: "Data berhasil dihapus." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal Menghapus data.", error: (error as Error).message },
      { status: 500 }
    );
  }
}
