"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Mail, Phone, MapPin, Clock, Copy, Check } from "lucide-react"

export default function ContactSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with technology? Get in touch with our team to discuss your project
            requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Options */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get in Touch
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
                    {copied ? 'Email Copied!' : 'Copy Email Address'}
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
                <a 
                  href="https://wa.me/6285391938708?text=Hi%20Nusalix%20Tech,%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%20my%20project?" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-3 h-5 w-5 text-green-600" />
                  <div className="text-left">
                    <div className="font-semibold">General Inquiry</div>
                    <div className="text-sm opacity-80">Chat via WhatsApp</div>
                  </div>
                </a>
              </Button>
              
              {/* WhatsApp Project Quote */}
              <Button
                asChild
                variant="outline"
                className="w-full justify-start glass border-green-500/20 hover:bg-green-500/10 h-14"
              >
                <a 
                  href="https://wa.me/6285391938708?text=Hi%20Nusalix%20Tech,%20I%20would%20like%20to%20request%20a%20project%20quote.%20Here%20are%20the%20details:%0A%0AProject%20Type:%20[Web%20Development/AI/Data%20Management/IoT/Game%20Development/Branding]%0ATimeline:%20%0ABudget%20Range:%20%0A%0AProject%20Details:%20" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-3 h-5 w-5 text-green-600" />
                  <div className="text-left">
                    <div className="font-semibold">Request Project Quote</div>
                    <div className="text-sm opacity-80">Get pricing via WhatsApp</div>
                  </div>
                </a>
              </Button>
              
              {/* WhatsApp Partnership */}
              <Button
                asChild
                variant="outline"
                className="w-full justify-start glass border-green-500/20 hover:bg-green-500/10 h-14"
              >
                <a 
                  href="https://wa.me/6285391938708?text=Hi%20Nusalix%20Tech,%20I'm%20interested%20in%20exploring%20a%20partnership%20opportunity.%20Let's%20discuss%20further." 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-3 h-5 w-5 text-green-600" />
                  <div className="text-left">
                    <div className="font-semibold">Partnership Inquiry</div>
                    <div className="text-sm opacity-80">Collaborate via WhatsApp</div>
                  </div>
                </a>
              </Button>
              
              {/* Phone Call */}
              <Button
                asChild
                variant="outline"
                className="w-full justify-start glass border-primary/20 hover:bg-primary/10 h-14"
              >
                <a href="tel:+6285391938708">
                  <Phone className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">Call Directly</div>
                    <div className="text-sm opacity-80">+62 853 9193 8708</div>
                  </div>
                </a>
              </Button>
            </div>

            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground text-center">
                📱 WhatsApp links open directly in app • 📧 Email can be copied for your convenience
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">nusalixtech@gmail.com</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyEmail}
                      className="h-6 w-6 p-0"
                    >
                      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <a 
                    href="tel:+6285391938708" 
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    +62 853 9193 8708
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Office</h3>
                  <p className="text-muted-foreground">Berau, Kalimantan Timur, Indonesia</p>
                  <p className="text-muted-foreground">Sangata, Kalimantan Timur, Indonesia</p>
                  <p className="text-muted-foreground">Balikapapan, Kalimantan Timur, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 hover:glass-strong transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                  <p className="text-muted-foreground">24/7 Support, All Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}