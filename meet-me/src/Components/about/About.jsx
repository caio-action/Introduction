import React from 'react'
import './about.css'
import Profile from '../../Assets/eu2.png'
import { FaAward } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { VscFolderLibrary } from 'react-icons/vsc'
import { FiUsers } from 'react-icons/fi'
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
              <TbCertificate className='about__cardicon' />
              <h5>FullStack Development Degree</h5>
              <small><a href="https://drive.google.com/file/d/1U5jPrPq6PHCK0lHxELywDvdg1RjC_Svf/view" target={'blank'}>Check it out</a> </small>
            </article>
            <article className='about__card' >
              <VscFolderLibrary className='about__cardicon' />
              <h5>Projects</h5>
              <small> 10+ complete Projects</small>
            </article>
            <article className='about__card' >
              <FiUsers className='about__cardicon' />
              <h5>Clients</h5>
              <small> Loading... </small>
            </article>
          </div>

          <p>I am a proactive, curious, super sociable, organized and hyperactive person !
Being a developer showed me how to concentrate my hyper focus more productively, sharpening my self learning. Besides being fluent in English and had amazing experiences working with people of many country, I'm also very communicative and enjoy a lot be part of the teamwork, that drives me to always have a great performance at leadership positions.</p>
        <a href='#contact' className='btn btn-primary'> Let's Chat !</a>
        </div>
      </div>

    </section>
  )
}

export default About