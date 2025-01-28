import Hero from "../components/Hero"
import ResourceGrid from "../components/ResourceGrid"
import SearchBar from "../components/SearchBar"
import Footer from "../components/Footer"

export default function Home() {
  return (
      <main className="min-h-screen pt-16">
        <Hero />
        <SearchBar />
        <ResourceGrid />
        <Footer />
      </main>
  )
}

