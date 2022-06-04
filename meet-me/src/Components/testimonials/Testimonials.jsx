import React from 'react'
import './testimonials.css'

import avatar1 from '../../Assets/trial.png'
import { Pagination,Navigation } from "swiper";
// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";




const data = [
  {
    avatar: avatar1,
    name: 'Someone someone`s name',
    feedback: '" Lorem ipsum dolor" ',
  },
  {
    avatar: avatar1,
    name: 'Someone someone`s name',
    feedback: '" Lorem ipsum dolor" ',
  },
  {
    avatar: avatar1,
    name: 'Someone someone`s name',
    feedback: '" Lorem ipsum dolor" ',
  },
  {
    avatar: avatar1,
    name: 'Someone someone`s name',
    feedback: '" Lorem ipsum dolor" ',
  },
  {
    avatar: avatar1,
    name: 'Someone someone`s name',
    feedback: '" Lorem ipsum dolor" ',
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews</h5>
      <h2>Positive Feedbacks</h2>
      <Swiper className="container testimonials__container" pagination={{ clickable:true }} 
      modules={[Pagination]} 
      spaceBetween={40}
      slidesPerView={1}  >
        {
          data.map(({ avatar, name, feedback }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="owner__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='owner'>{name}</h5>
                <small className='feedback'>
                  {feedback}
                </small>
              </SwiperSlide>
            )
          })
        }

        {/* <article className='testimonial'>
          <div className="owner__avatar">
            <img src={avatar1} alt="Avatar one" />
          </div>
            <h5 className='owner'>Someone someone's name</h5>
            <small className='feedback'>
              " Lorem ipsum dolor "
            </small>
        </article>
        */}
      </Swiper>
    </section>
  )
}

export default Testimonials