import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFigma, faReact, faHtml5, faCss3Alt, faJs, faPython, faGithub} from '@fortawesome/free-brands-svg-icons'
import '../styles/Skills.scss'

const Skills = () => {
    return (
      <div className='skills-grid'>
        <FontAwesomeIcon icon={faFigma} className='skill-icon' />
        <FontAwesomeIcon icon={faReact} className='skill-icon' />
        <FontAwesomeIcon icon={faHtml5} className='skill-icon' />
        <FontAwesomeIcon icon={faCss3Alt} className='skill-icon' />
        <FontAwesomeIcon icon={faJs} className='skill-icon' />
        <FontAwesomeIcon icon={faPython} className='skill-icon' />
        <FontAwesomeIcon icon={faGithub} className='skill-icon' />
      </div>
    )
  }

export default Skills