"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"
import { Kos } from "@/components/admin/data-table/kos-columns"
const formSchema = z.object({
  name: z.string().min(2),
  address: z.string().min(5),
  city: z.string().min(2),
  type: z.enum(["putra", "putri", "campur"]),
})

export function EditKosForm({
  kos,
  open,
  onOpenChange,
  onSuccess,
}: {
  kos: Kos | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
}) {
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: kos ?? { name: "", address: "", city: "", type: "putra" },
  })

  useEffect(() => {
    if (kos) form.reset(kos)
  }, [kos, form])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!kos) return
    setLoading(true)
    const res = await fetch(`/api/kos/${kos.uuid}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
    setLoading(false)

    if (res.ok) {
      onSuccess()
      onOpenChange(false)
      toast.success("Kos berhasil diperbarui")
    } else {
      toast.error("Gagal mengupdate kos")
    }
  }

  if (!kos) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Kos</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField name="name" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Nama</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="address" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Alamat</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="city" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Kota</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="type" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Tipe</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                  <SelectContent>
                    <SelectItem value="putra">Putra</SelectItem>
                    <SelectItem value="putri">Putri</SelectItem>
                    <SelectItem value="campur">Campur</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
            <Button type="submit" disabled={loading}>
              {loading ? "Menyimpan..." : "Simpan"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
