"use client"

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
  name: string
  address: string
  createdAt: string
  updatedAt: string
}

export const columns: ColumnDef<Kos>[] = [
  {
    accessorKey: "name",
    header: "Nama Kos",
  },
  {
    accessorKey: "address",
    header: "Alamat Lengkap",
  },
  {
    accessorKey: "createdAt",
    header: "Dibuat",
    cell: ({ row }) => {
      const date = new Date(row.original.createdAt)
      return date.toLocaleDateString("id-ID")
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Diubah",
    cell: ({ row }) => {
      const date = new Date(row.original.updatedAt)
      return date.toLocaleDateString("id-ID")
    },
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
            <DropdownMenuItem onClick={() => alert(`Lihat detail kos ${kos.name}`)}>
              Lihat Detail
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert(`Edit kos ${kos.name}`)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              Hapus
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
