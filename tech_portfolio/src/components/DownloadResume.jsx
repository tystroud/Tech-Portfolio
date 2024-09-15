import React from 'react'
import Resume from '../resumefile/Tyeisha T. Stroud Resume.docx.pdf'

const DownloadResume = () => {
  return (
    <a href= {Resume} download="Tyeisha Stroud Resume">
      <p className="resume">Download Resume</p>
    </a>
  )
}

export default DownloadResume