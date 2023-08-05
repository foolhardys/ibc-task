import React from 'react'
import heroImg from '../pics/hero-img.svg'

const Home = () => {
  return (
    <section id='home' className='home-section'>
      <div className="home-img">
        <img src={heroImg} alt="" className="img" />
      </div>
      <div className="home-content">
        <h2>🖐️</h2>
        <h1>I'm Siddhant <div className='text-cover'></div></h1>
        <p>Front End Web Developer</p>
        <button className='btn btn-space'><a href="#contact">Contact Me</a></button>
      </div>
    </section>
  )
}

export default Home