"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "../ui/button"
import { Mail, Phone, MapPin, Clock, Copy, Check } from "lucide-react"

export default function ContactSection() {
  const t = useTranslations('contact')
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('nusalixtech@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
      <div className="absolute top-20 right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500" />
      <div className="absolute bottom-20 left-32 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">{t('title')}</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Options */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t('letConnect')}
            </h3>

            <div className="space-y-4">
              {/* Copy Email */}
              <Button
                onClick={copyEmail}
                className="w-full justify-start glass-strong bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 transition-all duration-300 h-14"
              >
                {copied ? <Check className="mr-3 h-5 w-5" /> : <Copy className="mr-3 h-5 w-5" />}
                <div className="text-left">
                  <div className="font-semibold">
                    {copied ? 'Email Berhasil Disalin!' : t('copyEmail')}
                  </div>
                  <div className="text-sm opacity-80">nusalixtech@gmail.com</div>
                </div>
              </Button>

              {/* WhatsApp General */}
              <Button
                asChild
                variant="outline"
                className="w-full justify-start glass border-green-500/20 hover:bg-green-500/10 h-14"
              >
                <a href="https://wa.me/6285391938708?text=Halo, saya ingin konsultasi mengenai proyek teknologi..." target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-3 h-5 w-5 text-green-500" />
                  <div className="text-left">
                    <div className="font-semibold">{t('generalConsultation')}</div>
                    <div className="text-sm opacity-70">{t('chatWhatsApp')}</div>
                  </div>
                </a>
              </Button>

              {/* WhatsApp Quote */}
              <Button
                asChild
                variant="outline"
                className="w-full justify-start glass border-blue-500/20 hover:bg-blue-500/10 h-14"
              >
                <a href="https://wa.me/6285391938708?text=Halo, saya ingin meminta penawaran untuk proyek..." target="_blank" rel="noopener noreferrer">
                  <Mail className="mr-3 h-5 w-5 text-blue-500" />
                  <div className="text-left">
                    <div className="font-semibold">{t('requestQuote')}</div>
                    <div className="text-sm opacity-70">{t('getPriceWhatsApp')}</div>
                  </div>
                </a>
              </Button>

              {/* WhatsApp Partnership */}
              <Button
                asChild
                variant="outline"
                className="w-full justify-start glass border-purple-500/20 hover:bg-purple-500/10 h-14"
              >
                <a href="https://wa.me/6285391938708?text=Halo, saya tertarik untuk menjalin kemitraan bisnis..." target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-3 h-5 w-5 text-purple-500" />
                  <div className="text-left">
                    <div className="font-semibold">{t('businessPartnership')}</div>
                    <div className="text-sm opacity-70">{t('collaborateWhatsApp')}</div>
                  </div>
                </a>
              </Button>

              {/* Direct Call */}
              <Button
                asChild
                variant="outline"
                className="w-full justify-start glass border-orange-500/20 hover:bg-orange-500/10 h-14"
              >
                <a href="tel:+6285391938708">
                  <Phone className="mr-3 h-5 w-5 text-orange-500" />
                  <div className="text-left">
                    <div className="font-semibold">{t('directCall')}</div>
                    <div className="text-sm opacity-70">+62 853 9193 8708</div>
                  </div>
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              {t('whatsappNote')}
            </p>
          </div>

          {/* Contact Information */}
          <div className="glass-card rounded-2xl p-8">
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">{t('email')}</h4>
                  <p className="text-muted-foreground">nusalixtech@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold">{t('phone')}</h4>
                  <p className="text-muted-foreground">+62 853 9193 8708</p>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold">{t('office')}</h4>
                  <div className="text-muted-foreground">
                    {t.raw('offices').map((office: string, index: number) => (
                      <p key={index}>{office}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold">{t('operatingHours')}</h4>
                  <p className="text-muted-foreground">{t('support247')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}