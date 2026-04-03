import React from 'react'
import HeroText from '../components/HeroText.jsx'

const Hero = () => {
  return (
    <section className='flex items-start justify-center md:justify-start min-h-screen overflow-hidden sm:px-10 px-5 lg:px-15'>
      <HeroText />
    </section>
  )
}

export default Hero;