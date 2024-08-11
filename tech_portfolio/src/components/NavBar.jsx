import React from 'react'
import '../styles/NavBar.scss'
import {NavLink, Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMicrochip, faDownload } from '@fortawesome/free-solid-svg-icons'
import DownloadResume from './DownloadResume'


const NavBar = () => {
  return (
    <>
      <div className='nav-container'>
        <h2 className='name'>Tyeisha Stroud</h2>
        <Link to='/' className='home-icon'>
          <FontAwesomeIcon icon={faMicrochip} className='home-icon'/>
        </Link>
      <div className='nav-links'>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <DownloadResume className='download-resume'/>
        <FontAwesomeIcon icon={faDownload} className='download-icon'/>
      </div>  
      </div>
    </>
  )
}

export default NavBar