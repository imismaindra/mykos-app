import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wifi, Shirt, Users, Shield, Car, Utensils } from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "WiFi Super Cepat",
    description:
      "Internet fiber optic 100 Mbps untuk kebutuhan kuliah dan kerja online",
  },
  {
    icon: Shirt,
    title: "Laundry Gratis",
    description: "Fasilitas cuci dan setrika gratis dengan mesin modern",
  },
  {
    icon: Users,
    title: "Ruang Bersama",
    description: "Area santai dan belajar bersama dengan AC dan TV",
  },
  {
    icon: Shield,
    title: "Keamanan 24/7",
    description: "CCTV dan security untuk menjamin keamanan penghuni",
  },
  {
    icon: Car,
    title: "Parkir Luas",
    description: "Area parkir motor dan mobil yang aman dan tertata",
  },
  {
    icon: Utensils,
    title: "Dapur Bersama",
    description: "Dapur lengkap dengan peralatan masak dan kulkas",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Fasilitas Lengkap untuk Kenyamanan Anda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Nikmati berbagai fasilitas modern yang dirancang khusus untuk
            mendukung aktivitas sehari-hari Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 bg-card"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
