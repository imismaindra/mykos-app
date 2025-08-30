import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Putri",
    role: "Mahasiswa UI",
    content:
      "Kosan yang sangat nyaman dan bersih. Fasilitasnya lengkap dan lokasinya dekat dengan kampus. Pemilik kosan juga sangat ramah dan responsif.",
    rating: 5,
    avatar: "/young-indonesian-female-student-smiling.png",
  },
  {
    name: "Ahmad Rizki",
    role: "Software Developer",
    content:
      "WiFi super cepat dan stabil, cocok banget buat kerja remote. Lingkungannya tenang dan aman. Recommended untuk pekerja muda!",
    rating: 5,
    avatar: "/young-indonesian-male-professional-smiling.png",
  },
  {
    name: "Dina Maharani",
    role: "Mahasiswa Pascasarjana",
    content:
      "Sudah 2 tahun tinggal di sini dan sangat puas. Kamar bersih, fasilitas terawat, dan harga sangat reasonable untuk area Depok.",
    rating: 5,
    avatar: "/young-indonesian-female-graduate-student-smiling.png",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Apa Kata Penghuni Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Testimoni dari penghuni yang telah merasakan kenyamanan tinggal di
            kosan kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-popover">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-popover-foreground mb-6 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-popover-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
