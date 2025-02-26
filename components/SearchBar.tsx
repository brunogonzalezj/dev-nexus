"use client"

import React, { useState } from "react"
import { resources } from "@/app/utils/helpers"

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("")
    const [suggestions, setSuggestions] = useState<string[]>([])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchTerm(value)

        if (value.length > 1) {
            const filteredSuggestions = resources
                .filter(
                    (resource) =>
                        resource.title.toLowerCase().includes(value.toLowerCase()) ||
                        resource.description.toLowerCase().includes(value.toLowerCase()),
                )
                .map((resource) => resource.title)
                .slice(0, 5)
            setSuggestions(filteredSuggestions)
        } else {
            setSuggestions([])
        }
    }

    return (
        <div className="relative max-w-md sm:mx-auto mt-8 mx-4 ">
            <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full mt-2 bg-gray-800 rounded-lg shadow-lg">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                            onClick={() => {
                                setSearchTerm(suggestion)
                                setSuggestions([])
                            }}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

