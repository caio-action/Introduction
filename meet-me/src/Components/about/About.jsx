import React from 'react'
import './about.css'
import Profile from '../../Assets/eu2.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Profile}></img>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card' >
              <FaAward className='about__cardicon' />
              <h5>Experience</h5>
              <small> 1-2 Years Working</small>
            </article>
            <article className='about__card' >
              <FiUsers className='about__cardicon' />
              <h5>Clients</h5>
              <small> Many in the future </small>
            </article>
            <article className='about__card' >
              <VscFolderLibrary className='about__cardicon' />
              <h5>Projects</h5>
              <small> 10+ complete Projects</small>
            </article>
          </div>

          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore similique labore in odio vel, tenetur non sequi dolor vitae error autem quas quam quis nihil aut repellat, nesciunt doloremque maiores.</p>
        <a href='#contact' className='btn btn-primary'> Let's Chat !</a>
        </div>
      </div>

    </section>
  )
}

export default About