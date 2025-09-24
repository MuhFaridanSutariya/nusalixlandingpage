"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { motion, AnimatePresence } from "framer-motion"

export default function ProjectsSection() {
  const t = useTranslations('projects')
  const [activeFilter, setActiveFilter] = useState("All")

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

  // Get all projects with image indices
  const projects = t.raw('list').map((project: any, index: number) => ({
    ...project,
    imageIndex: index
  }))

  // Define category filters
  const categoryFilters = [
    { key: "All", name: "All Projects" },
    { key: "Healthcare", name: "Healthcare" },
    { key: "Smart City", name: "Smart City" },
    { key: "Public Services", name: "Public Services" },
    { key: "Education", name: "Education" },
    { key: "General Devices", name: "General Devices" },
    { key: "Safety & K3", name: "Safety & K3" },
    { key: "Data Solutions", name: "Data Solutions" }
  ]

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project: any) => project.category === activeFilter)

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

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoryFilters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-2xl border font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-primary to-secondary text-white border-primary/50 shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm text-white/80 border-white/20 hover:bg-white/20 hover:border-white/40'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filter.name}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {filteredProjects.map((project: any, index: number) => (
              <motion.div
                key={`${project.category}-${index}`}
                className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={projectImages[project.imageIndex]}
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
                    </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}