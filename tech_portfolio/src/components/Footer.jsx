import React from 'react'
import '../styles/Footer.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer-box'>
        <p className='copy-right'> © {new Date().getFullYear()} Tyeisha Stroud. All Rights Reserved</p>

        <a href='https://www.linkedin.com/in/tyeishastroud/' target='LinkedIn' rel='noreferrer'> 
        <FontAwesomeIcon icon={faLinkedin} className='linkedIn-icon'/>
        </a>

        <a href='https://github.com/tystroud/' target='LinkedIn' rel='noreferrer'> 
        <FontAwesomeIcon icon={faGithub} className='github-icon'/>
        </a>


    </div>
  )
}

export default Footer