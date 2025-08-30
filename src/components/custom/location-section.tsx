import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Bus } from "lucide-react";

const nearbyPlaces = [
  { name: "Universitas Indonesia", distance: "5 menit jalan kaki", icon: "🎓" },
  { name: "Mall Depok", distance: "10 menit berkendara", icon: "🛍️" },
  { name: "Stasiun Depok", distance: "15 menit berkendara", icon: "🚉" },
  { name: "Rumah Sakit", distance: "8 menit berkendara", icon: "🏥" },
  { name: "Supermarket", distance: "3 menit jalan kaki", icon: "🛒" },
  { name: "Food Court", distance: "2 menit jalan kaki", icon: "🍜" },
];

export function LocationSection() {
  return (
    <section id="location" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Lokasi Strategis di Jantung Kota
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Berada di lokasi yang sangat strategis dengan akses mudah ke
            berbagai fasilitas penting
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="mb-6 border-0 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  Alamat Lengkap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base">
                  Jl. Margonda Raya No. 123, Depok, Jawa Barat 16424
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nearbyPlaces.map((place, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted/30"
                >
                  <span className="text-2xl">{place.icon}</span>
                  <div>
                    <p className="font-medium">{place.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {place.distance}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              <img
                src="/google-maps-location-view-of-boarding-house-in-urb.png"
                alt="Peta Lokasi Kosan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Bus className="h-4 w-4 text-primary" />
                <span>Akses Transportasi Mudah</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
