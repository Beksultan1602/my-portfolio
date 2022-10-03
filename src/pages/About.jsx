import React from 'react'
import MyBtn from '../components/Button/MyBtn'
import { motion } from 'framer-motion'

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

const About = ({ textEnter, textLeave }) => {
  
  const styles = {
    background: 'linear-gradient(to left, #fff 50%, #171717 50%)',
    backgroundSize: '200%',
    color: '#171717'
  }
  const skills = [
    {key: 1, title: 'Mobile and Web Design', body: "I always strive to create memorable experiences that are aesthetically appealing, functional and distinctive. Whether it's inspiring marketing websites, convincing e-commerce sites or apps that are truly beneficial to users."},
    {key: 2, title: 'Art Direction', body: "With my extensive experience in creating everything digital, I'm able to establish a strong foundation in the choice of typography, color and photography to ensure that users perceive the brand and presence in a consistent way."},
    {key: 3, title: 'Visual Design', body: "By using my expertise as a digital designer, I make sure that a visual identity can be used to its full extent throughout all touchpoints in an accessible and user-friendly way. Not just timeless, but usable in todays digital world."},
  ]
  return (
    <motion.div 
      initial='hidden'
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className='px-4 py-28 sm:py-52 bg-neutral-300 text-neutral-900'
      id='about'
    >
        <div className="container mx-auto px-2">
            <div className=''>
                <motion.div custom={1} variants={textAnimation} className='flex flex-col lg:flex-row justify-between items-start pb-36'>
                    <h2 onMouseEnter={textEnter} onMouseLeave={textLeave} className='text-neutral-900'>ABOUT</h2>
                    <h2 className=' text-neutral-900 max-w-2xl text-3xl'>I am passionate about everything that has to do with Digital Design and Art Direction. I enjoy working with agencies and enthusiastic people who want to solve problems through beautiful design and experiences.</h2>
                </motion.div>
                <motion.div 
                  initial='hidden'
                  whileInView="visible"
                  viewport={{ amount: 0.2 }} 
                  
                  className='flex justify-between items-start sm:items-end flex-col lg:flex-row gap-6 lg:gap-0'
                >
                  <div 
                    className='flex gap-14 items-end flex-col sm:flex-row'
                  >
                    {skills.map(skill => (
                      <div className='flex flex-col gap-6 max-w-sm' key={skill.key}>
                        <motion.h2 
                          custom={1} 
                          variants={textAnimation}  
                          className='text-neutral-900 text-xl'>{skill.title}
                        </motion.h2>
                        <motion.p 
                          custom={2} 
                          variants={textAnimation}  
                          className='text-neutral-900 text-sm'>{skill.body}
                        </motion.p>
                      </div>
                    ))}
                  </div>
                  <motion.div 
                    custom={1} 
                    variants={textAnimation}
                    className='ml-0 sm:ml-36 whitespace-nowrap'
                  >
                    <MyBtn textEnter={textEnter} textLeave={textLeave} hoverText='text-neutral-300' style={{styles}}>Explore my work</MyBtn>
                  </motion.div>
                </motion.div>
            </div>
        </div>
    </motion.div>
  )
}

export default About