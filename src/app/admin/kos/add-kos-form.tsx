"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, { message: "Nama kos minimal 2 huruf" }),
  address: z.string().min(5, { message: "Alamat wajib diisi" }),
  city: z.string().min(2, { message: "Kota wajib diisi" }),
  type: z.enum(["putra", "putri", "campur"]),
})

export function AddKosForm({ onSuccess }: { onSuccess: () => void }) {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      city: "",
      type: "putra",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    const res = await fetch("/api/kos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
    setLoading(false)

    if (res.ok) {
      form.reset()
      onSuccess()
      setOpen(false)

      toast.success("Kos berhasil ditambahkan 🎉")
    } else {
      toast.error("Gagal menambahkan kos")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Tambah Kos</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Kos</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Kos</FormLabel>
                  <FormControl>
                    <Input placeholder="Kos Ceria" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="Jl. Kapasan No.xx RT00 RW00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kota</FormLabel>
                  <FormControl>
                    <Input placeholder="Surabaya" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipe Kos</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih tipe kos" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="putra">Putra</SelectItem>
                      <SelectItem value="putri">Putri</SelectItem>
                      <SelectItem value="campur">Campur</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={loading}>
              {loading ? "Menyimpan..." : "Simpan"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
