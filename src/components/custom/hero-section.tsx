import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/modern-boarding-house-interior-with-comfortable-fu.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Rumah Nyaman Jauh dari Rumah
          </h1>
          <p className="text-lg md:text-xl mb-8 text-balance opacity-90">
            Kosan modern dengan fasilitas lengkap untuk mahasiswa dan pekerja
            muda. Lokasi strategis, harga terjangkau, dan lingkungan yang aman.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Lihat Kamar Tersedia
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
            >
              Tur Virtual
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Dekat Kampus & Pusat Kota</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-current" />
              <span>Rating 4.8/5 dari 200+ penghuni</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
