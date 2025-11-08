import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import AboutContact from './components/AboutContact'
import GlobalEffects from './components/GlobalEffects'

function App() {
  return (
    <div className="min-h-screen bg-[#05070a]">
      <GlobalEffects />
      <Hero />
      <Projects />
      <Experience />
      <AboutContact />
    </div>
  )
}

export default App
