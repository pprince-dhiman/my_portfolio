import Navbar from './section/Navbar.jsx'
import Hero from './section/Hero.jsx'
import About from './section/About.jsx'
import Projects from './section/Projects.jsx'
import Experience from './section/Experience.jsx'
import Contact from './section/Contact.jsx'
import Footer from './section/Footer.jsx'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className='container max-w-7xl mx-auto'>
      <Toaster />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App