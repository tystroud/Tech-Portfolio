import React from 'react'
import '../styles/NavBar.scss'
import {NavLink, Link} from "react-router-dom"
import DownloadResume from './DownloadResume'


const NavBar = () => {
  return (
    <>
      <div className='nav-container'>
        <h2 className='name'>Tyeisha Stroud</h2>
        <Link to='/' className='home-link'>
          <div className='home-icon'>
            <span class="material-symbols-outlined" style={{ fontSize: '50px'}}>memory</span>
          </div>
        </Link>
      <div className='nav-links'>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <DownloadResume className='download-resume'/>
        <span class="material-symbols-outlined neon icon">download</span>
      </div>  
      </div>
    </>
  )
}

export default NavBar