"use client"

import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="relative min-h-full flex items-center justify-center overflow-hidden mx-4">

            <div className="z-10 text-center">
                <motion.h1
                    className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Nexus Tools
                </motion.h1>
                <motion.p
                    className="text-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Curated Collection of Modern Development Resources
                </motion.p>
            </div>
        </section>
    )
}



