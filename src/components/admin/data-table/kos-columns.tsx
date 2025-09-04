"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

export type Kos = {
  id: number
  uuid: string
  name: string
  address: string
  type: "putra" | "putri" | "campur"
  createdAt: string
  updatedAt: string
}

export function kosColumns({
  onShow,
  onEdit,
  onDelete,
}: {
  onShow: (kos: Kos) => void
  onEdit: (kos: Kos) => void
  onDelete: (uuid: string) => void
}): ColumnDef<Kos>[] {
  return [
    {
      accessorKey: "name",
      header: "Nama Kos",
    },
    {
      accessorKey: "address",
      header: "Alamat Lengkap",
    },
    {
      accessorKey: "type",
      header: "Tipe Kos",
      cell: ({ row }) => {
        const type = row.original.type
        let color: "default" | "secondary" | "destructive" | "blue" | "outline" = "default"
        if (type === "putra") color = "blue"
        else if (type === "putri") color = "secondary"
        else if (type === "campur") color = "destructive"

        return <Badge variant={color}>{type}</Badge>
      },
    },
    {
      accessorKey: "createdAt",
      header: "Dibuat",
      cell: ({ row }) =>
        new Date(row.original.createdAt).toLocaleDateString("id-ID"),
    },
    {
      accessorKey: "updatedAt",
      header: "Diubah",
      cell: ({ row }) =>
        new Date(row.original.updatedAt).toLocaleDateString("id-ID"),
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const kos = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Aksi</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(kos.name)}
              >
                Salin Nama Kos
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onShow(kos)}>Lihat Detail</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onEdit(kos)}>Edit</DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-600"
                onClick={() => onDelete(kos.uuid)}
              >
                Hapus
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]
}
