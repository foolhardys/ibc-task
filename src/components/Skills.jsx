import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import react from '../pics/React.jpg'
import htmlcss from '../pics/HTMLCSSJS.jpg'
import git from '../pics/Git.jpg'
import uiux from '../pics/UIUX.jpg'



const itemList = [
  {
    id: 1,
    image: react,
    name: 'React',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In numquam iste quaerat quidem non nobis corporis eius earum inventore cum!'
  },
  {
    id: 2,
    image: htmlcss,
    name: 'HTML5, CSS3, JS',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In numquam iste quaerat quidem non nobis corporis eius earum inventore cum!'
  },
  {
    id: 3,
    image: git,
    name: 'Git and Github',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In numquam iste quaerat quidem non nobis corporis eius earum inventore cum!'
  },
  {
    id: 4,
    image: uiux,
    name: 'UI/UX',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In numquam iste quaerat quidem non nobis corporis eius earum inventore cum!'
  },
]



const Skills = () => {

  const [items, setItems] = useState(itemList)
  const [currentItem, setCurrentItem] = useState(0)

  const prevSlide = () => {
    setCurrentItem((oldItem) => {
      const result = (oldItem - 1 + items.length) % items.length
      return result
    })
  }

  const nextSlide = () => {
    setCurrentItem((oldItem) => {
      const result = (oldItem + 1) % items.length
      return result
    })
  }


  return (
    <div id='skills'>
      <h2 className='heading'>Skills</h2>
      <section className='slider-container'>
        {items.map((item, itemIndex) => {
          const { id, image, name, text } = item;
          return (
            <article className='slide' style={{ transform: `translateX(${100 * (itemIndex - currentItem)}%)` }} key={id}>
              <img src={image} alt={name} className='item-img' />
              <h5 className='name'>{name}</h5>
              <p className="text">{text}</p>
            </article>
          )
        })}
        <button
          type='button '
          className='prev'
          onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button
          type='button '
          className='next'
          onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </section>
    </div>
  )
}


export default Skills