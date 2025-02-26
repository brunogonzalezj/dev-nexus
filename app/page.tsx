'use client'

import Hero from "../components/Hero"
import ResourceGrid from "../components/ResourceGrid"
import SearchBar from "../components/SearchBar"
import Footer from "../components/Footer"
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
      <main className="min-h-screen pt-16">
          <AnimatedBackground/>
          <Hero/>
          <SearchBar/>
          <ResourceGrid/>
          <Footer/>
      </main>
  )
}
