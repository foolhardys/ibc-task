import React, { useState } from 'react'
import { FaFacebookSquare, FaGithub, FaGoogle, FaInstagramSquare, FaInvision } from "react-icons/fa";

const footerlinks = [
  {
    id: 1,
    footerlink: 'home',
    path: '#home'
  },
  {
    id: 2,
    footerlink: 'resume',
    path: '#resume'
  },
  {
    id: 3,
    footerlink: 'projects',
    path: '#projects'
  },
  {
    id: 4,
    footerlink: 'skills',
    path: '#skills'
  },
]

const socialLinks = [
  {
    id: 1,
    icon: <FaFacebookSquare />,
    link: 'https://www.facebook.com/siddhant.r.sen'
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: 'https://github.com/foolhardys'
  },
  {
    id: 3,
    icon: <FaGoogle />,
    link: '#'
  },
  {
    id: 4,
    icon: <FaInstagramSquare />,
    link: '#'
  },
  {
    id: 5,
    icon: <FaInvision />,
    link: '#'
  },
]

const Footer = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <section className='footer' id='contact'>
      <ul className="footer-links">
        {footerlinks.map((footerLink) => {
          const { id, footerlink, path } = footerLink
          return <li key={id} className='footer-link'>
            <a href={path}> {footerlink} </a>
          </li>
        })}
      </ul>
      <div className="social-links">
        {socialLinks.map((socialLink) => {
          const { id, icon, link } = socialLink
          return <a href={link} className='footer-icon'> {icon} </a>
        })}
      </div>
      <form className="footer-form">
        <h4 className='footer-heading'>Contact Me!!</h4>
        <input
          type="text"
          name="name"
          placeholder='Type your Name...'
          id="name"
          className='form-input footer-input'
          value={name}
          onChange={(e)=> setName(e.target.value)} />
        <input
          type="email"
          name="email"
          placeholder='Type your Email...'
          id="email"
          className='form-input footer-input'
          value={email}
          onChange={(e)=> setEmail(e.target.value)} />
          <button type="submit" className='btn footer-input'>SUBMIT</button>
      </form>
    </section>
  )
}

export default Footer