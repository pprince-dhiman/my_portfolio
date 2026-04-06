import Navbar from './section/Navbar.jsx'
import Hero from './section/Hero.jsx'
import About from './section/About.jsx'
import Projects from './section/Projects.jsx'
import Experience from './section/Experience.jsx'

const App = () => {
  return (
    <div className='container max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      {/* testimonial */}
      <section className='min-h-screen' />
      {/* contact */}
      <section className='min-h-screen' />
      {/* footer */}
      <section className='min-h-screen' />
    </div>
  )
}

export default App