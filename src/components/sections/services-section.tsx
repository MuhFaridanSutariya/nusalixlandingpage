"use client"

import { useTranslations } from "next-intl"
import { Button } from "../ui/button"
import { Database, Brain, Code, Wifi, Palette, Gamepad } from "lucide-react"

export default function ServicesSection() {
  const t = useTranslations('services')

  const services = [
    {
      icon: Database,
      key: "dataManagement"
    },
    {
      icon: Brain,
      key: "artificialIntelligence"
    },
    {
      icon: Code,
      key: "softwareDevelopment"
    },
    {
      icon: Wifi,
      key: "iotIntegration"
    },
    {
      icon: Gamepad,
      key: "gameDevelopment"
    },
    {
      icon: Palette,
      key: "brandingDesign"
    },
  ]

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Animated Background Blurs */}
      <div className="absolute inset-0 " />
      <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-400/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header dengan Glass Effect */}
        <div className="text-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent mb-4">
              {t('title')}
            </h2>
            <p className="text-xl text-white/80 text-pretty max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-full"
            >
              {/* Glass Card dengan Multiple Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative h-full p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-500 group-hover:scale-105 group-hover:border-white/30 flex flex-col">
                
                {/* Icon dengan Glass Effect */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-green-400/30 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white drop-shadow-lg" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.3)]">
                  {t(`list.${service.key}.title`)}
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed flex-1 [text-shadow:0_1px_5px_rgba(0,0,0,0.2)]">
                  {t(`list.${service.key}.description`)}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {t.raw(`list.${service.key}.features`).map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center text-sm text-white/90">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-green-400 mr-3 shadow-sm" />
                      <span className="[text-shadow:0_1px_3px_rgba(0,0,0,0.2)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Glass Button */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Button
                    variant="outline"
                    className="relative w-full bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-semibold hover:bg-white/30 hover:border-white/50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {t('learnMore')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}