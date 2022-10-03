import React from 'react';
import {
    motion,
} from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll'

const Footer = ({ textEnter, textLeave }) => {

  return (
    <div className='bg-neutral-900 text-neutral-300 pt-40 pb-16 px-4'>
        <div className="container mx-auto px-2">
            <div>
                <motion.h1  onMouseEnter={textEnter} onMouseLeave={textLeave} className='mx-auto flex justify-center max-w-xl sm:text-7xl text-5xl font-bold text-center'>LET'S TALK</motion.h1>
                <div className='pt-40'>
                    <div className='flex justify-between lg:items-end flex-col lg:flex-row items-start gap-16 lg:gap-0'>
                        <motion.ul  className='flex gap-6 lg:flex-nowrap flex-wrap'>
                            <li>
                                <p>DEVELOPER BY:</p>
                                <p>BESKULTAN KELDIBAEV</p>
                            </li>
                            <li>
                                <p>DESIGNED BY:</p>
                                <p>BEKSULTAN KELDIBAEV</p>
                            </li>
                        </motion.ul>
                        <motion.div >
                            <p>SOCIALS:</p>
                            <ul className='flex gap-6 items-end'>
                                <li>
                                    <a target='_blank' href="https://github.com/Beksultan1602">GITHUB</a>
                                </li>
                                <li>
                                    <a target='_blank' href="https://t.me/Whyqwer">TELEGRAM</a>
                                </li>
                                <li>
                                    <a href="">LINKED IN</a>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.ul  className='flex gap-6 items-end'>
                            <li>
                                <p>WORKS FROM:</p>
                                <p>2022 - PRESENT</p>
                            </li>
                            <Link to="top" spy={true} smooth={true} offset={0} duration={500}>
                                <p className='cursor-pointer'>BACK TO TOP</p>
                            </Link>
                        </motion.ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer