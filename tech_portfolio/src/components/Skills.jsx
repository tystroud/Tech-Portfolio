import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFigma, faReact, faHtml5, faCss3Alt, faJs, faPython, faGithub} from '@fortawesome/free-brands-svg-icons'
import '../styles/Skills.scss'
import { motion } from 'framer-motion'
import { fadeIn } from './motion';

const Skills = () => {
    return (
      <div className='skills'>
        <motion.h2 className='skills-title'
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.5}}>Technical Skills</motion.h2>
        <div className='skills-grid'>
          <FontAwesomeIcon icon={faFigma} className='skill-icon' />
          <FontAwesomeIcon icon={faReact} className='skill-icon' />
          <FontAwesomeIcon icon={faHtml5} className='skill-icon' />
          <FontAwesomeIcon icon={faCss3Alt} className='skill-icon' />
          <FontAwesomeIcon icon={faJs} className='skill-icon' />
          <FontAwesomeIcon icon={faPython} className='skill-icon' />
          <FontAwesomeIcon icon={faGithub} className='skill-icon' />
          </div>

          <motion.div className='skills-bar'
          variants={fadeIn('down', 0.10)}
          initial="hidden"
          animate="show"
          viewport={{once: false, amount: 0.10}}>

            <div className='skills-name'>
              <h3>Figma</h3>
            </div>
            <div className='skills-figma-line'>
              <span></span>
            </div>

            <div className='skills-name'>
              <h3>React</h3>
            </div>
            <div className='skills-react-line'>
              <span></span>
            </div>

            <div className='skills-name'>
              <h3>HTML5</h3>
            </div>
            <div className='skills-html-line'>
              <span></span>
            </div>

            <div className='skills-name'>
              <h3>CSS</h3>
            </div>
            <div className='skills-css-line'>
              <span></span>
            </div>

            <div className='skills-name'>
              <h3>JavaScript</h3>
            </div>
            <div className='skills-javascript-line'>
              <span></span>
            </div>

            <div className='skills-name'>
              <h3>Python</h3>
            </div>
            <div className='skills-python-line'>
              <span></span>
            </div>

            <div className='skills-name'>
              <h3>Git/GitHub</h3>
            </div>
            <div className='skills-git-line'>
              <span></span>
            </div>

          </motion.div>
      </div>
    )
  }

export default Skills


