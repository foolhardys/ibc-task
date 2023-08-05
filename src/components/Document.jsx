import React from 'react'
import DocumentCard from './DocumentCard'
import certificate from '../pics/certificate.png'
import resume from '../pics/resume.png'

const Document = () => {
  return (
    <section id='resume' >
      <h1 className='heading'>Resume</h1>
      <div className='document-section'>
        <DocumentCard link='https://drive.google.com/file/d/1x51gNeX9Oa6Pqli6W-SBWYpEhctJ9NvY/view?usp=drive_link' image={resume} title='Resume' />
        <DocumentCard link='https://coursera.org/share/ebdc72a80ef24afd326cdcf7cb37624c' image={certificate} title='Certificates' />
      </div>
    </section>
  )
}

export default Document