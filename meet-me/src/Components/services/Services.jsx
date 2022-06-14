import React from 'react'
import "./services.css"
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
        <div className="service__head">
          <h3>UI/UX Desing</h3>
        </div>
          <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Desing Thinking</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Agile Development</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Figma</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>HTML</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>CSS, SCSS, SASS</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Prototyping</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>User flow</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Mockup</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Wireframe</p>
          </li>
          
       
        </ul>
        </article>

        <article className='service'>
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
          <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Clean Code</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>SPA</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>SEO</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>MVC, CRUD</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>API</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>POO</p>
          </li><li>
            <BiCheck className='service__list-icon' />
            <p>SSR</p>
          </li><li>
            <BiCheck className='service__list-icon' />
            <p>DB & web servers</p>
          </li>
          
          <li>
            <BiCheck className='service__list-icon' />
            <p>Typescript</p>
          </li>
        </ul>
        </article>
     
        

      </div>
    </section>
  )
}

export default Services