import React from 'react';
import { FaBeer, FaDev, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { Aside, Skill } from './styles';
import img from "../../assets/jsilva.jpg";

export default function SideBar() {
  return (
    <Aside>
      <div className='profile'>
        <img src={img} alt='Foto de José da Silva' />
        <span className='name'>José da Silva</span>
        <span className='title'>Frontend developer</span>
      </div>

      <div className='skills-container'>
        <h2>My skills</h2>

        <Skill percentage='60'>
          <span className='skill-name'>Next.js</span>
          <div className='percentage'>
            <div></div>
          </div>
        </Skill>

        <Skill percentage='65'>
          <span className='skill-name'>TypeScript</span>
          <div className='percentage'>
            <div></div>
          </div>
        </Skill>

        <Skill percentage='85'>
          <span className='skill-name'>ReactJS</span>
          <div className='percentage'>
            <div></div>
          </div>
        </Skill>

        <Skill percentage='80'>
          <span className='skill-name'>JavaScript</span>
          <div className='percentage'>
            <div></div>
          </div>
        </Skill>

        <Skill percentage='95'>
          <span className='skill-name'>HTLM/CSS</span>
          <div className='percentage'>
            <div></div>
          </div>
        </Skill>
      </div>

      <div className='social-media'>
        <a
          className='github'
          href='https://github.com/jsilva23'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub size='40' />
        </a>

        <a
          className='linkedin'
          href='https://www.linkedin.com/in/jsilvap10/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin size='40' />
        </a>

        <a
          className='twitter'
          href='https://twitter.com/jsilva23p/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTwitter size='40' />
        </a>

        <a
          className='dev'
          href='https://dev.to/jsilva23'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaDev size='40' />
        </a>

        <a
          className='facebook'
          href='https://www.facebook.com/jsilvap10/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaFacebook size='40' />
        </a>
      </div>
    </Aside>
  );
}
