import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Works = () => {
    
  return (
    <div className='bg-neutral-300 text-neutral-900'>
      <Carousel infiniteLoop='true' showThumbs={false} showIndicators={false} showStatus={false}>
        <div className='relative '>
            <img className='h-screen' src="https://images.unsplash.com/photo-1494178270175-e96de2971df9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80" />
            <div className='absolute z-10 bottom-0 left-0 w-full p-6'>
              <h1 className='text-7xl text-left text-neutral-300 pb-6'>Tais Kahatt</h1>
              <div className='flex justify-between items-end'>
                <div className='flex gap-12'>
                  <div className='flex flex-col items-start gap-6'>
                    <h2 className='text-neutral-300'>
                      TYPE
                    </h2>
                    <div className='text-neutral-300'>
                      <p>
                        DEVELOPMENT
                      </p>
                      <p>
                        DEVELOPMENT
                      </p>
                      <p>
                        DEVELOPMENT
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col items-start gap-6'>
                    <h2 className='text-neutral-300'>
                      DESCRIPTION
                    </h2>
                    <p className='text-neutral-300 max-w-sm text-left'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores soluta debitis quisquam! Voluptas, ex natus!
                    </p>
                  </div>
                </div>
                <div className='flex gap-6 items-center'>
                  <div className='py-2 px-4 border-2 rounded-full text-neutral-300'>
                    <p>UX DESIGN</p>
                  </div>
                  <div className='py-2 px-4 border-2 rounded-full text-neutral-300'>
                    <p>UX DESIGN</p>
                  </div>
                  <div className='py-2 px-4 border-2 rounded-full text-neutral-300'>
                    <p>UX DESIGN</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div>
            <img className='h-screen' src="https://images.unsplash.com/photo-1494178270175-e96de2971df9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80" />
        </div>
        <div>
            <img className='h-screen' src="https://images.unsplash.com/photo-1494178270175-e96de2971df9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80" />
        </div>
      </Carousel>
    </div>
  )
}

export default Works