'use client'

import { motion } from 'framer-motion'
import { useCallback, useMemo } from 'react'

export default function AnimatedBackground() {
    const generateRandomProps = useCallback((index: number) => ({
        width: 50 + (index * 10) % 50,
        height: 50 + (index * 10) % 50,
        top: `${(index * 15) % 100}%`,
        left: `${(index * 20) % 100}%`,
        x: [(index * 10) % 50, -((index * 10) % 50)],
        y: [(index * 10) % 50, -((index * 10) % 50)],
        duration: 15 + (index % 5),
    }), [])

    const particles = useMemo(() => {
        return [...Array(10)].map((_, i) => generateRandomProps(i))
    }, [generateRandomProps])

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
            {particles.map((props, i) => (
                <motion.div
                    key={i}
                    className="fixed bg-white bg-opacity-5 rounded-full"
                    style={{
                        width: props.width,
                        height: props.height,
                        top: props.top,
                        left: props.left,
                    }}
                    animate={{
                        x: props.x,
                        y: props.y,
                    }}
                    transition={{
                        duration: props.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    )
}