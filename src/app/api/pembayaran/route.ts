import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET semua pembayaran
export async function GET() {
  try {
    const pembayaran = await prisma.pembayaran.findMany({
      include: { sewa: true }, // ikut data sewa
    });
    return NextResponse.json(pembayaran, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal mengambil data.", error: (error as Error).message },
      { status: 500 }
    );
  }
}

// POST buat pembayaran baru
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { sewaId, amount, dueDate, paidDate, method } = body;

    if (!sewaId || !amount || !dueDate) {
      return NextResponse.json(
        { message: "Data tidak lengkap." },
        { status: 400 }
      );
    }

    // 1. Ambil data sewa + kamar + pembayaran sebelumnya
    const sewa = await prisma.sewa.findUnique({
      where: { id: sewaId },
      include: {
        kamar: true,
        pembayaran: true,
      },
    });

    if (!sewa) {
      return NextResponse.json(
        { message: "Sewa tidak ditemukan." },
        { status: 404 }
      );
    }

    // 2. Hitung total biaya sewa (contoh: hitung per bulan)
    const start = new Date(sewa.startDate);
    const end = new Date(sewa.endDate);

    // hitung selisih bulan
    const monthDiff =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth()) +
      1;

    const totalBiaya = Number(sewa.kamar.price) * monthDiff;

    // 3. Hitung total pembayaran (lama + baru)
    const totalSudahBayar = sewa.pembayaran.reduce(
      (sum, p) => sum + Number(p.amount),
      0
    );
    const totalBaru = totalSudahBayar + Number(amount);

    // 4. Tentukan status
    const status = totalBaru >= totalBiaya ? "lunas" : "belum_lunas";

    // 5. Simpan pembayaran
    const pembayaran = await prisma.pembayaran.create({
      data: {
        sewaId,
        amount,
        dueDate: new Date(dueDate),
        paidDate: paidDate ? new Date(paidDate) : null,
        method: method ?? "cash",
        status,
      },
    });

    return NextResponse.json(
      {
        pembayaran,
        info: {
          totalBiaya,
          totalSudahBayar: totalBaru,
          status,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal menyimpan data.", error: (error as Error).message },
      { status: 500 }
    );
  }
}
