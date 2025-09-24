"use client"

import { useState } from "react"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Globe, Check } from "lucide-react"

const languages = [
  { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
]

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const currentLanguage = languages.find(lang => lang.code === locale)

  // Debug: log current locale
  console.log('LanguageSwitcher - Current locale:', locale)
  console.log('LanguageSwitcher - Current pathname:', pathname)

  const switchLanguage = (langCode: string) => {
    console.log('Switching to:', langCode)
    console.log('Current pathname:', pathname)

    // Simple approach: just go to the root of the new locale
    const newPathname = `/${langCode}`
    console.log('New pathname:', newPathname)

    router.push(newPathname)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 glass-strong bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-white hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">
          {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
        </span>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className="absolute top-full mt-2 right-0 glass-strong bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden min-w-[140px] z-50"
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => switchLanguage(language.code)}
              className="flex items-center justify-between w-full px-4 py-3 text-sm text-white hover:bg-white/20 transition-colors duration-200"
            >
              <div className="flex items-center space-x-2">
                <span>{language.flag}</span>
                <span>{language.name}</span>
              </div>
              {locale === language.code && (
                <Check className="h-4 w-4 text-green-400" />
              )}
            </button>
          ))}
        </motion.div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}