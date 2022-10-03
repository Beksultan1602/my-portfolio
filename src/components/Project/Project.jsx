import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import pages from '../../assets/png/pages.png'
import outdoor from '../../assets/png/outdoor.png'
import { BsArrowRight } from 'react-icons/bs'
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
const lineAnim = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}
const Project = ({ project }) => {
    
    const [showImage, setShowImage] = useState(false)
    const handleShowImage = () => {
        setShowImage(true)
    }
    const handleHideImage = () => {
        setShowImage(false)
    
    }
  return (
    <motion.div 
        transition={{ duration: 0.3 }}  
        onMouseOver={() => handleShowImage()} 
        onMouseOut={() => handleHideImage()} 
        className='relative mb-6'
        initial='hidden'
        whileInView="visible"
        viewport={{ amount: 0.2 }}
    >
        <motion.div 
            custom={1} 
            variants={textAnimation}
            whileHover={{ x: 10 , duration: 0.6}}
            className='hover:text-neutral-500 flex justify-between items-center'
        >
            <p>{project.title}</p>
            <a className='block xl:hidden' href={project.link} target='_blank'>
                <BsArrowRight className='w-6 h-6' />
            </a>
        </motion.div>
        <motion.hr 
            custom={3}
            variants={lineAnim}
            className='bg-neutral-900 h-0.5'/>
        {showImage ? 
        <>
            <a href={project.link} target='_blank' className='hidden xl:block'>
                <motion.img 
                    animate={{ x: 100, opacity: [0, 1] }}
                    transition={{ ease: "easeOut", duration: 0.6 }} 
                    className='absolute right-40 -bottom-40 w-1/3 z-10' src={project.image} alt="" 
                /> 
            </a>
        </>
        
            : null
        }
    </motion.div>
  )
}

export default Project