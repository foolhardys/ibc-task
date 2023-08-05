import React from 'react'

const DocumentCard = ({link , title , image}) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      className='document'>
      <img
        src={image}
        alt={title}
        className='img document-img' />
      <h5>{title}</h5>
    </a>
  )
}

export default DocumentCard