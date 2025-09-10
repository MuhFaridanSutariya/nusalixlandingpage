import Link from "next/link"
import { Button } from "../ui/button"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">© 2025 Nusalix Tech. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-blue-400 hover:bg-white/10 transition-all duration-300 h-12 w-12">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-blue-400 hover:bg-white/10 transition-all duration-300 h-12 w-12">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-blue-400 hover:bg-white/10 transition-all duration-300 h-12 w-12">
                <Twitter className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-blue-400 hover:bg-white/10 transition-all duration-300 h-12 w-12">
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}