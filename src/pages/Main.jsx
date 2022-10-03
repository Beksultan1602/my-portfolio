import React from 'react'
import MyBtn from '../components/Button/MyBtn'
import { BsArrowRight } from 'react-icons/bs'
const Main = ({ textEnter, textLeave }) => {
  const styles = {
    background: 'linear-gradient(to left, #171717 50%, #fff 50%) right',
    backgroundSize: '200%',
  }
  return (
    <div className='bg-neutral-900'>
        <div className="container mx-auto px-2">
            <div className='max-w-5xl mx-auto py-28 sm:py-52'>
                <h2 className='text-4xl pb-6 text-neutral-300'>Hello world! I'm Keldibaev Beksultan, a frontend developer. I enjoy creating meaningful narratives through motion graphics and experimenting with new technology to convey stroies</h2>
                <div className='flex items-center gap-4 text-neutral-300 '>
                  <BsArrowRight className='w-12 h-12 fill-neutral-300' />
                  <MyBtn textEnter={textEnter} textLeave={textLeave} hoverText='text-neutral-900' style={styles}>Get in touch</MyBtn>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main