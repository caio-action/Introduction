import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/caio-cavalcante-455b9596/' target='blank'><BsLinkedin/></a>
      <a href='https://github.com/caio-action' target='blank'><FaGithub/></a>

    </div>
  )
}

export default HeaderSocials