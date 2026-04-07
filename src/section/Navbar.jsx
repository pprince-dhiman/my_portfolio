import { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"

function Navigation() {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
      <li className="text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a className="text-lg md:text-base hover:text-white transition-colors" href="#home">
          Home
        </a>
      </li>
      <li className="text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a className="text-lg md:text-base hover:text-white transition-colors" href="#about">
          About
        </a>
      </li>
      <li className="text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a className="text-lg md:text-base hover:text-white transition-colors" href="#projects">
          Projects
        </a>
      </li>
      <li className="text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a className="text-lg md:text-base hover:text-white transition-colors" href="#work">
          Work
        </a>
      </li>
      <li className="text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a className="text-lg md:text-base hover:text-white transition-colors" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className='fixed inset-x-0 z-50 w-full backdrop-blur-lg'>
      <div className='mx-auto sm:px-10 px-5 lg:px-15 max-w-7xl'>
        <div className='flex items-center justify-between py-2 sm:py-0'>
          <a href="/"
            className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'
          >Prince</a>

          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                key="box"
              />
            ) : null}
          </AnimatePresence>

          <motion.button whileTap={{ y: 1 }}
            className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'
            onClick={() => setIsOpen(!isOpen)}>
            {
              <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='h-6 w-6' />
            }
          </motion.button>

          <nav className='hidden sm:flex'>
            <Navigation />
          </nav>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div key='mobile-menu'
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{duration: 0.5}}
              className="block overflow-hidden text-center sm:hidden">
              <nav className="pb-5">
                <Navigation />
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Navbar