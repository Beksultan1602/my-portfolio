import React, { useState } from 'react'
import MyBtn from '../components/Button/MyBtn'
import './Navbar.css'
import { Link, animateScroll as scroll } from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import { motion } from 'framer-motion'
const variants = {
    open: { opacity: 1, x: 0},
    closed: { opacity: 0, x: "-100%"},
};
const Navbar = ({ textEnter, textLeave }) => {
const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='pt-12 px-4 bg-neutral-900'>
        <div className="container mx-auto px-2">
            <nav className='flex justify-between items-center'>
                <h2 onMouseEnter={textEnter} onMouseLeave={textLeave} className='my-name cursor-pointer text-neutral-300'>Keldibaev Beksultan</h2>
                <ul className='hidden lg:flex gap-12 items-center'>
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500}  onMouseEnter={textEnter} onMouseLeave={textLeave} className='un cursor-pointer text-neutral-300'>ABOUT</Link> 
                    <Link to="work" spy={true} smooth={true} offset={50} duration={500} onMouseEnter={textEnter} onMouseLeave={textLeave} className='un cursor-pointer text-neutral-300'>WORK</Link>
                    <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <MyBtn>
                            LET'S TALK
                        </MyBtn>
                    </li>
                </ul>
                <GiHamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} className='fill-neutral-300 w-8 h-8 block lg:hidden'/>
                <motion.ul  
                    className='flex z-10 lg:hidden flex-col bg-neutral-300  gap-12 items-start fixed h-screen top-0 left-0 w-full sm:w-1/2 px-4 py-12'
                    animate={isMenuOpen ? "open" : "closed"}
                    variants={variants}    
                >
                    <ImCross onClick={() => setIsMenuOpen(false)} className='absolute right-6 top-6 ' />
                    <Link onClick={() => setIsMenuOpen(false)} to="about" spy={true} smooth={true} offset={50} duration={500}  onMouseEnter={textEnter} onMouseLeave={textLeave} className='ur cursor-pointer text-neutral-900'>ABOUT</Link> 
                    <Link onClick={() => setIsMenuOpen(false)} to="work" spy={true} smooth={true} offset={50} duration={500} onMouseEnter={textEnter} onMouseLeave={textLeave} className='ur cursor-pointer text-neutral-900'>WORK</Link>
                </motion.ul> 
                
            </nav>
        </div>
    </div>
  )
}

export default Navbar