import React , {useState, useEffect} from 'react'
import Navigation from './components/Navigation'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import TechCard from './components/TechCard'
import Contact from './components/sections/Contact'
import FloatingElements from './components/FloatingElements'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Background floating elements */}
      <FloatingElements />
      
      {/* Navigation */}
      <Navigation 
        activeSection={activeSection}
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
      />
      
      {/* Main content */}
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App