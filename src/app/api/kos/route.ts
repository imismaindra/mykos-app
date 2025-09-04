import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const kosList = await prisma.kos.findMany({
    include: { kamar: true },
  });
  return NextResponse.json(kosList);
}

export async function POST(request: Request) {
  const body = await request.json();
  const kos = await prisma.kos.create({
    data: {
      name: body.name,
      address: body.address,
      city: body.city,
      type: body.type,
    },
  });
  return NextResponse.json(kos, { status: 201 });
}
