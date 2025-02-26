"use client"

import { useState } from "react"
import ResourceCard from "./ResourceCard"
import { resources } from "@/app/utils/helpers"

const categories = ["All", "UI Libraries", "React Tools", "Design Resources", "Databases", "Backend Tools"]

export default function ResourceGrid() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredResources =
        selectedCategory === "All" ? resources : resources.filter((resource) => resource.category === selectedCategory)

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-full ${
                            selectedCategory === category ? "bg-purple-500 text-white" : "bg-gray-700 text-gray-300"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 mx-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource, index) => (
                    <ResourceCard key={resource.url} resource={resource} index={index} />
                ))}
            </div>
        </section>
    )
}

