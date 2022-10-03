import { useEffect, useState } from "react";
import Navbar from "./layouts/Navbar";
import Loader from "./components/Loader/Loader";
import Main from "./pages/Main";
import About from "./pages/About";
import Works from "./pages/Works";
import { motion } from 'framer-motion'
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => setIsLoading(true), 3000)
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => {
    setCursorVariant('text')
  }
  const textLeave = () => {
    setCursorVariant('default')
  }

  return (
    <>
      { isLoading ? (
        <div id='top'>
          <Navbar textEnter={textEnter} textLeave={textLeave} />
          <Main textEnter={textEnter} textLeave={textLeave} />
          <About textEnter={textEnter} textLeave={textLeave} />
          {/* <Works /> */}
          <Projects />
          <Experience />
          <Footer textEnter={textEnter} textLeave={textLeave} />
          <motion.div animate={cursorVariant} variants={variants} className="hidden xl:block z-20 mix-blend-difference pointer-events-none rounded-full bg-neutral-300 h-8 w-8 fixed top-0 left-0" />
        </div> 
      ) : 
        <Loader /> 
      }
    </>
  );
}

export default App;
