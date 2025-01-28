"use client"

import React, { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Resource } from "@/app/types"

interface ResourceCardProps {
    resource: Resource
    index: number
}

export default function ResourceCard({ resource, index }: ResourceCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const { left, top, width, height } = cardRef.current.getBoundingClientRect()
        const x = (e.clientX - left) / width
        const y = (e.clientY - top) / height
        cardRef.current.style.transform = `perspective(1000px) rotateY(${(x - 0.5) * 10}deg) rotateX(${(y - 0.5) * -10}deg)`
    }

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = "perspective(1000px) rotateY(0) rotateX(0)"
        }
    }

    return (
        <motion.div
            ref={cardRef}
            className="relative bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden"
            style={{
                boxShadow: isHovered ? "0 0 20px rgba(139, 92, 246, 0.5)" : "none",
                transition: "box-shadow 0.3s ease",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false)
                handleMouseLeave()
            }}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="p-6 relative">
                <div className="flex items-center mb-4">
                    <Image
                        src={`https://www.google.com/s2/favicons?domain=${resource.url}&sz=64`}
                        alt={`${resource.title} logo`}
                        width={32}
                        height={32}
                        className="mr-3"
                    />
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                        {resource.title}
                    </h3>
                    <div
                        className={`ml-2 w-3 h-3 rounded-full ${
                            resource.category === "UI Libraries"
                                ? "bg-green-400"
                                : resource.category === "React Tools"
                                    ? "bg-blue-400"
                                    : resource.category === "Design Resources"
                                        ? "bg-yellow-400"
                                        : resource.category === "Databases"
                                            ? "bg-red-400"
                                            : "bg-purple-400"
                                    
                        }`}
                    />
                </div>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute bottom-2 right-2 hidden md:flex space-x-2"
                    >
                        <button
                            className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-600 transition-colors"
                            onClick={() => navigator.clipboard.writeText(resource.url)}
                        >
                            Copy URL
                        </button>
                        <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition-colors"
                        >
                            Visit
                        </a>
                    </motion.div>
                )}
                <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 text-sm text-purple-400 hover:text-purple-300 md:hidden"
                >
                    Go to page →
                </a>
            </div>
        </motion.div>
    )
}

