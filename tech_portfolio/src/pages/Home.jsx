import React from 'react'
import Banner from '../components/Banner'
import Skills from '../components/Skills'
import Projects from './Project'
import Contact from './Contact'


const Home = () => {
  return (
    <div>
        <Banner/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Home
