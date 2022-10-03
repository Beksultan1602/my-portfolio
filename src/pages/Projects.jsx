import React from 'react'
import pages from '../assets/png/pages.png'
import outdoor from '../assets/png/outdoor.png'
import megamaster from '../assets/png/megamaster.png'
import Project from '../components/Project/Project'
import { motion } from 'framer-motion'

const allProjects = [
    {title: 'MEGAMASTER', link: 'https://dry-dusk-50491.herokuapp.com/', image: megamaster},
    {title: 'PAGES', link: 'https://beksultan1602.github.io/pages-second/', image: pages},
    {title: 'OUTDOOR EXPLORATION', link: 'https://beksultan1602.github.io/outdoor-landing/', image: outdoor},
    {title: 'OGOGO TV', link: 'https://zesty-fudge-a9d909.netlify.app/', image: outdoor},
    {title: 'LYRIKS', link: 'https://fantastic-crepe-0a0d1f.netlify.app/', image: outdoor},
]

const textAnimation = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

const Projects = () => {
  return (
    <div id='work' className='bg-neutral-300 px-4 py-28 sm:py-40 text-neutral-900' >
        <div className="container mx-auto px-2">
            <motion.div
                initial='hidden'
                whileInView="visible"
                viewport={{ amount: 0.2 }}
            >
                <motion.h1 
                    custom={1} 
                    variants={textAnimation} 
                    className='text-center text-5xl mb-16'
                >
                    Some of my projects
                </motion.h1>
                <div>
                    {allProjects.map((project, index) => (
                        <Project key={index} project={project} />
                    ))}
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Projects