"use client"

import { useEffect, useState } from "react"
import { DataTable } from "@/components/admin/data-table/data-table"
import { kosColumns, Kos } from "@/components/admin/data-table/kos-columns"
import { AddKosForm } from "./add-kos-form"

export default function KosPage() {
  const [data, setData] = useState<Kos[]>([])

  const fetchData = () => {
    fetch("/api/kos")
      .then((res) => res.json())
      .then(setData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container mx-auto py-10 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Manajemen Kos</h2>
          <p className="text-sm text-muted-foreground">
            Kelola daftar kos, alamat, dan data terkait.
          </p>
        </div>
        <AddKosForm onSuccess={fetchData} />
      </div>

      <DataTable columns={kosColumns} data={data} searchPlaceholder="Cari kos..." />
    </div>
  )
}
