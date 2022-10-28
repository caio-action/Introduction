import React from 'react'
import './portfolio.css'
import project1 from '../../Assets/project1-img.png'
import project2 from '../../Assets/project2-img.png'


const data = [
  {
    id: 1,
    image: project1,
    title: 'EngajaBlack',
    github: 'https://github.com/caio-action/Introduction',
    demo: 'https://eblack.netlify.app/'
  },
  {
    id: 2,
    image: project2,
    title: 'Task Stopwatch',
    github: 'https://github.com/caio-action/Alura-studies',
    demo: 'https://cronometro-de-tarefas.netlify.app/'
  },
  {
    id: 3,
    image: project1,
    title: 'EngajaBlack',
    github: 'https://github.com/caio-action/Introduction',
    demo: 'https://eblack.netlify.app/'
  },
  {
    id: 4,
    image: project1,
    title: 'EngajaBlack',
    github: 'https://github.com/caio-action/Introduction',
    demo: 'https://eblack.netlify.app/'
  },
  {
    id: 5,
    image: project1,
    title: 'EngajaBlack',
    github: 'https://github.com/caio-action/Introduction',
    demo: 'https://eblack.netlify.app/'
  }, {
    id: 6,
    image: project1,
    title: 'EngajaBlack',
    github: 'https://github.com/caio-action/Introduction',
    demo: 'https://eblack.netlify.app/'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>
        Portfolio
      </h2>
      <div className="container portfolio__container">
        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={project1} alt='EngajaBlack Project'></img>

            <h3> EngajaBlack</h3>
            <div className="portfolio__item-cta">
            <a href='https://github.com/caio-action/Introduction' className='btn' target={'blank'}>Check on Github</a>
            <a href='https://eblack.netlify.app/' className='btn btn-primary' target={'blank'}>Live Demo</a>
            </div>
          </div>
        </article> */}
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}></img>

                </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target={'blank'}>Check on Github</a>
                    <a href={demo} className='btn btn-primary' target={'blank'}>Live Demo</a>
                  </div>
              </article>
            )

          })
        }
      </div>
    </section>
  )
}

export default Portfolio