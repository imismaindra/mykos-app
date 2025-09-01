import { Button } from "@/components/ui/button";
import { Home, LogIn, Phone } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 justify">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Home className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">KosanKu</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#home"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Beranda
          </a>
          <a
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Fasilitas
          </a>
          <a
            href="#location"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Lokasi
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Harga
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Kontak
          </a>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Button className="bg-primary hover:bg-primary/90">
            <Phone className="mr-2 h-4 w-4" />
            Hubungi Kami
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <LogIn className="mr-2 h-4 w-4" />
            <Link href="/auth/login">Masuk</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
