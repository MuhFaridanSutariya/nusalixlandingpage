"use client"

import { useTranslations } from "next-intl"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

export default function ProjectsSection() {
  const t = useTranslations('projects')

  // Image mapping for projects
  const projectImages = [
    "/projecthealtmate.jpeg",
    "/leafcare.jpeg",
    "/chatbot1.jpeg",
    "/banksampah.jpeg",
    "/absensi.jpeg",
    "/monitoring.jpeg",
    "/k3.jpeg",
    "/data.jpeg",
    "/ngantuk.jpeg"
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-32 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse delay-300" />
      <div className="absolute bottom-32 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1200" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">{t('title')}</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.raw('list').map((project: any, index: number) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={projectImages[index]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="relative p-8">
                <div className="mb-6">
                  <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-4 text-white leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white/90 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, techIndex: number) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs bg-white/10 border-white/30 text-white"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:border-white/50 transition-all duration-300"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}