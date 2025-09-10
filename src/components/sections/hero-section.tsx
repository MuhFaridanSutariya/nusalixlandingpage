"use client"

import { Button } from "../ui/button"
import { ArrowRight, Code, Database, Brain } from "lucide-react"
import { motion } from "framer-motion"
import TextType from "../TextType" // Import TextType

export default function HeroSection() {
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        className="text-xl md:text-4xl font-bold text-balance mb-6 text-white" // Ubah dari text-2xl md:text-6xl
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span>
                            Jadikan teknologi sebagai keunggulan kompetitif Anda dengan <br /> {" "}
                            <TextType
                                text={[
                                    "Data Management",
                                    "Artificial Intelligence",
                                    "Software Development",
                                ]}
                                typingSpeed={100}
                                loop
                                className="gradient-text text-xl md:text-4xl font-bold" // Ubah dari text-2xl md:text-6xl
                            />
                        </span>
                    </motion.div>

                    <motion.p
                        className="text-xl text-white/80 text-pretty mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2, ease: "easeOut" }} // Delay sampai typing selesai
                    >
                        We specialize in Data Management, Artificial Intelligence, and Software Development to help your business
                        thrive in the digital age.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }} // Delay lebih lama
                    >
                        <Button
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 pulse-glow"
                        >
                            Get Started Today
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
                        >
                            View Our Work
                        </Button>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.div
                            className="glass-card rounded-2xl p-8 hover:glass-strong transition-all duration-300 group floating-element"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                        >
                            <motion.div
                                className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Database className="h-8 w-8 text-primary" />
                            </motion.div>
                            <h3 className="font-semibold text-lg mb-3 glass-card-heading">Data Management</h3>
                            <p className="text-muted-foreground text-center leading-relaxed">
                                Optimize your data infrastructure for better insights and performance
                            </p>
                        </motion.div>

                        <motion.div
                            className="glass-card rounded-2xl p-8 hover:glass-strong transition-all duration-300 group floating-element"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                        >
                            <motion.div
                                className="h-16 w-16 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Brain className="h-8 w-8 text-secondary" />
                            </motion.div>
                            <h3 className="font-semibold text-lg mb-3 glass-card-heading">Artificial Intelligence</h3>
                            <p className="text-muted-foreground text-center leading-relaxed">
                                Leverage AI to automate processes and gain competitive advantages
                            </p>
                        </motion.div>

                        <motion.div
                            className="glass-card rounded-2xl p-8 hover:glass-strong transition-all duration-300 group floating-element"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                        >
                            <motion.div
                                className="h-16 w-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Code className="h-8 w-8 text-accent" />
                            </motion.div>
                            <h3 className="font-semibold text-lg mb-3 glass-card-heading">Software Development</h3>
                            <p className="text-muted-foreground text-center leading-relaxed">
                                Custom software solutions tailored to your business needs
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
