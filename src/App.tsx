import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Architecture from './sections/Architecture'
import Cloud from './sections/Cloud'
import Highlights from './sections/Highlights'
import Resume from './sections/Resume'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Architecture />
        <Cloud />
        <Highlights />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App