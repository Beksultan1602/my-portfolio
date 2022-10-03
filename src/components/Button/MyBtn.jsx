import React, { useState } from 'react'
import './MyBtn.css'
const MyBtn = ({ children, textEnter, textLeave }) => {

  return (
    <button onMouseEnter={textEnter} onMouseLeave={textLeave} className='my-btn bg-neutral-900 hover:text-neutral-900 transition border-2 py-2 px-8 rounded-full outline-0 cursor-pointer'> { children } </button>
  )
}

export default MyBtn