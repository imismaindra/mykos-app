import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Kamar Standard",
    price: "1.200.000",
    period: "/bulan",
    description: "Cocok untuk mahasiswa dengan budget terbatas",
    features: [
      "Kamar 3x3 meter",
      "Kasur single + lemari",
      "Meja belajar",
      "WiFi unlimited",
      "Listrik termasuk",
      "Air bersih 24 jam",
    ],
    popular: false,
  },
  {
    name: "Kamar Deluxe",
    price: "1.800.000",
    period: "/bulan",
    description: "Pilihan terbaik dengan fasilitas lengkap",
    features: [
      "Kamar 4x4 meter",
      "Kasur queen + lemari besar",
      "Meja belajar + kursi ergonomis",
      "AC pribadi",
      "Kamar mandi dalam",
      "WiFi unlimited",
      "Listrik termasuk",
    ],
    popular: true,
  },
  {
    name: "Kamar Premium",
    price: "2.500.000",
    period: "/bulan",
    description: "Kemewahan maksimal untuk profesional muda",
    features: [
      "Kamar 5x5 meter",
      "Kasur king + walk-in closet",
      "Area kerja terpisah",
      "AC + kipas angin",
      "Kamar mandi premium",
      "Balkon pribadi",
      "WiFi dedicated",
      "Cleaning service mingguan",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Pilihan Harga yang Sesuai Budget Anda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Berbagai pilihan kamar dengan harga transparan tanpa biaya
            tersembunyi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Paling Populer
                  </div>
                </div>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">
                    Rp {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/90"
                  }`}
                >
                  Pilih Kamar Ini
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            * Harga sudah termasuk listrik, air, dan WiFi. Deposit 1 bulan di
            muka.
          </p>
          <Button variant="outline" size="lg">
            Lihat Semua Kamar Tersedia
          </Button>
        </div>
      </div>
    </section>
  );
}
