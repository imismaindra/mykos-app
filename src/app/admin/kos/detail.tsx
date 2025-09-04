"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Kos } from "@/components/admin/data-table/kos-columns"
export default function DetailDialog({
  kos,
  open,
  onOpenChange,
}: {
  kos: Kos | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!kos) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detail Kos</DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          <p><strong>Nama:</strong> {kos.name}</p>
          <p><strong>Alamat:</strong> {kos.address}</p>
          {/* <p><strong>Kota:</strong> {kos.city}</p> */}
          <p><strong>Tipe:</strong> {kos.type}</p>
          <p><strong>Dibuat:</strong> {new Date(kos.createdAt).toLocaleString("id-ID")}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}