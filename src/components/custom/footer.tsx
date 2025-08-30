import { Button } from "@/components/ui/button";
import {
  Home,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-muted py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">KosanKu</span>
            </div>
            <p className="text-muted-foreground">
              Kosan modern dengan fasilitas lengkap untuk mahasiswa dan pekerja
              muda di Depok.
            </p>
            <div className="flex space-x-3">
              <Button
                size="sm"
                variant="outline"
                className="p-2 bg-transparent"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="p-2 bg-transparent"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="p-2 bg-transparent"
              >
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Menu Cepat</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-primary transition-colors"
                >
                  Fasilitas
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="hover:text-primary transition-colors"
                >
                  Lokasi
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-primary transition-colors"
                >
                  Harga
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Layanan</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Tur Virtual</li>
              <li>Booking Online</li>
              <li>Maintenance 24/7</li>
              <li>Konsultasi Gratis</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Kontak Kami</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">
                  Jl. Margonda Raya No. 123, Depok
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@kosanku.com</span>
              </div>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Hubungi Sekarang
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 KosanKu. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
