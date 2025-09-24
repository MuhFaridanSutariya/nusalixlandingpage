"use client"

import { useTranslations } from "next-intl"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

export default function ProjectsSection() {
  const t = useTranslations('projects')
  const projects = [
    {
      title: "Healthmate – Dokter dalam Genggaman)",
      description:
        "Aplikasi pintar untuk booking dokter dan rekomendasi tenaga medis terbaik sesuai kebutuhan kesehatan Anda.",
      technologies: ["Mobile Apps", "AI Recommendation System", "Telemedicine"],
      category: "Healthmate",
      image: "/projecthealtmate.jpeg",
    },
    {
      title: "Si Tani – Pertanian Cerdas untuk Kota Modern",
      description:
        "Platform smart city untuk membantu petani dalam perencanaan, pemantauan, dan distribusi hasil tani secara efisien.",
      technologies: ["IoT Sensor", "Mobile App", "Dashboard Analitik"],
      category: "Si Tani (Smart City)",
      image: "/leafcare.jpeg",
    },
    {
      title: "Pengaduan Masyarakat Berbasis WA (Berau AI)",
      description:
        "Saluran aduan publik berbasis AI di WhatsApp untuk respons cepat dan transparan.",
      technologies: ["WhatsApp API", "Chatbot AI", "Dashboard Monitoring"],
      category: "Layanan Masyarakat",
      image: "/chatbot1.jpeg",
    },
    {
      title: "Bank Sampah Digital Berbasis Android",
      description:
        "Program pengelolaan sampah dengan sistem tabungan, menukar sampah menjadi nilai ekonomis.",
      technologies: ["Mobile App", "RFID Card", "Database Management"],
      category: "Layanan Masyarakat",
      image: "/banksampah.jpeg",
    },
    {
      title: "Absensi Cerdas dengan AI & IoT",
      description:
        "Sistem absensi modern dengan AI Camera dan sensor sidik jari berbasis IoT untuk keamanan dan efisiensi.",
      technologies: ["AI Camera", "IoT Fingerprint Sensor", "Cloud Database"],
      category: "Perangkat Umum",
      image: "/absensi.jpeg",
    },
    {
      title: "Smart Monitoring Siswa",
      description:
        "Solusi digital untuk memantau kehadiran, aktivitas, dan perkembangan siswa secara real-time.",
      technologies: ["Mobile Application", "Database Management"],
      category: "Pendidikan",
      image: "/monitoring.jpeg",
    },
    {
      title: "Deteksi K3 untuk Lingkungan Kerja Aman",
      description:
        "Sistem deteksi otomatis untuk mendukung penerapan K3, mencegah kecelakaan kerja lebih dini.",
      technologies: ["AI Camera", "IoT Sensor", "Safety Analytics"],
      category: "K3 Detections",
      image: "/k3.jpeg",
    },
    {
      title: "Manajemen Data Terintegrasi",
      description:
        "Mengumpulkan, menyimpan, dan menganalisis data dari IoT, database, hingga berkas manual secara terpusat.",
      technologies: ["Data Lake", "Database System", "ETL Tools", "Data Warehouse"],
      category: "Data Management",
      image: "/data.jpeg",
    },
    {
      title: "Ngantuk Detection (Microsleep & Distraksi)",
      description:
        "Teknologi deteksi microsleep & distraksi berbasis AI untuk menjaga keselamatan dan produktivitas kerja.",
      technologies: ["AI Camera", " Wearable Device", "Real-time Alert System"],
      category: "Perangkat Umum",
      image: "/ngantuk.jpeg",
    },
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-32 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse delay-300" />
      <div className="absolute bottom-32 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1200" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Our Projects</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Explore some of our successful projects that showcase our expertise in delivering innovative technology
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover:glass-strong transition-all duration-300 group flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
  <div className="flex items-center justify-between mb-3">
    <Badge variant="secondary" className="glass border-primary/30 text-white bg-white/10">
      {project.category}
    </Badge>
  </div>
  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
    {project.title}
  </h3>
  <p className="text-white/80 mb-4 leading-relaxed flex-1">
    {project.description}
  </p>
  <div className="flex flex-wrap gap-2">
    {project.technologies.map((tech, techIndex) => (
      <Badge key={techIndex} variant="outline" className="text-xs glass border-primary/20">
        {tech}
      </Badge>
    ))}
  </div>
</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="glass-strong border-primary/30 hover:bg-primary/20 transition-all duration-300 bg-transparent"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
