"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export function DeleteKosDialog({
  kosUuid,
  open,
  onOpenChange,
  onSuccess,
}: {
  kosUuid: string
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
}) {
  const handleDelete = async () => {
    if (!kosUuid) return

    await fetch(`/api/kos/${kosUuid}`, { method: "DELETE" })
    onSuccess()
    onOpenChange(false)
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Yakin hapus kos?</AlertDialogTitle>
          <AlertDialogDescription>
            Data kos dengan UUID <b>{kosUuid}</b> akan dihapus permanen. 
            Tindakan ini tidak bisa dibatalkan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>
            Hapus
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
