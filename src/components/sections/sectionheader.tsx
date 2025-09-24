"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Button } from "../ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import LanguageSwitcher from "../LanguageSwitcher"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations('header')

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-[100] glass-strong border-b border-white/10 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="flex items-center space-x-3">
                <motion.div
                  className="h-16 w-20 flex items-center justify-center ml-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/logonew.png"
                    alt="Nusalix Technology Logo"
                    width={64}
                    height={64}
                    className="w-36 h-8"
                  />
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {[
              { key: "aboutUs", label: t('navigation.aboutUs') },
              { key: "services", label: t('navigation.services') },
              { key: "projects", label: t('navigation.projects') },
              { key: "contact", label: t('navigation.contact') }
            ].map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link
                  href={`#${item.key.toLowerCase().replace(" ", "")}`}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="glass-strong bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 transition-all duration-300 shadow-lg pulse-glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('getStarted')}
              </Button>
            </motion.div>
            <LanguageSwitcher />
          </nav>

          {/* Mobile menu button & Language Switcher */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="glass hover:glass-strong"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/10 glass-card rounded-b-lg mt-2">
                {[
                  { key: "aboutUs", label: t('navigation.aboutUs') },
                  { key: "services", label: t('navigation.services') },
                  { key: "projects", label: t('navigation.projects') },
                  { key: "contact", label: t('navigation.contact') }
                ].map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <Link
                      href={`#${item.key.toLowerCase().replace(" ", "")}`}
                      className="block px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="px-3 py-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Button
                    className="w-full glass-strong bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 transition-all duration-300"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t('getStarted')}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
