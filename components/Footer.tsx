"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { resources } from "@/app/utils/helpers"

export default function Footer() {
    const [randomPicks, setRandomPicks] = useState(getRandomPicks())

    useEffect(() => {
        const interval = setInterval(
            () => {
                setRandomPicks(getRandomPicks())
            },
            24 * 60 * 60 * 1000,
        ) // Change every 24 hours

        return () => clearInterval(interval)
    }, [])

    function getRandomPicks() {
        const shuffled = [...resources].sort(() => 0.5 - Math.random())
        return shuffled.slice(0, 3)
    }

    return (
        <footer className="bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 text-center">Daily Random Picks</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {randomPicks.map((pick, index) => (
                        <motion.div
                            key={pick.url}
                            className="bg-gray-800 p-4 rounded-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="font-semibold mb-2">{pick.title}</h3>
                            <p className="text-sm text-gray-400 mb-2">{pick.description}</p>
                            <a
                                href={pick.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-400 hover:text-purple-300"
                            >
                                Visit site
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

