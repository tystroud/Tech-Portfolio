import React from 'react'
import '../styles/NavBar.scss'
import { Link } from "react-router-dom"
import DownloadResume from './DownloadResume'
import { motion } from 'framer-motion'
import { fadeIn } from './motion';


const NavBar = () => {
  return (
    <>
      <motion.div className='nav-container'
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.5}}>
        <h2 className='name'>Tyeisha Stroud</h2>
        <Link to='/' className='home-link'>
          <div className='home-icon'>
            <span class="material-symbols-outlined" style={{ fontSize: '50px'}}>memory</span>
          </div>
        </Link>
      <div className='nav-links'>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
        <DownloadResume className='download-resume'/>
        <span class="material-symbols-outlined neon icon">download</span>
      </div>  
      </motion.div>
    </>
  )
}

export default NavBar