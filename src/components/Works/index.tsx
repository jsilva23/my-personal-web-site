import React from 'react';
import * as S from './style';
import githubImg from "../../assets/github.png";
import passgereImg from '../../assets/password-generator.png';
import tripsImg from '../../assets/my-trips.png';
import yearImg from '../../assets/new-year.png';

const Works = () => {
  return (
    <S.Works>
      <h1>My Works</h1>

      <section>
        <figure className='snip1527'>
          <div className='image'>
            <img src={yearImg} alt='new year´s eve ' />
          </div>
          <figcaption>
            <h3>New year's eve</h3>
            <p>
              A project built in order to know how much time is left for the new
              year
            </p>
          </figcaption>
          <a href='#'></a>
        </figure>

        <figure className='snip1527'>
          <div className='image'>
            <img src={githubImg} alt='The world on github ' />
          </div>
          <figcaption>
            <h3>The world on github</h3>
            <p>
              A project built in order to know how much time is left for the new
              year
            </p>
          </figcaption>
          <a href='#'></a>
        </figure>

        <figure className='snip1527'>
          <div className='image'>
            <img src={passgereImg} alt='password generator ' />
          </div>
          <figcaption>
            <h3>Password generator</h3>
            <p>
              A project built in order to know how much time is left for the new
              year
            </p>
          </figcaption>
          <a href='#'></a>
        </figure>

        <figure className='snip1527'>
          <div className='image'>
            <img src={tripsImg} alt='my trips' />
          </div>
          <figcaption>
            <h3>My trips</h3>
            <p>
              A project built in order to know how much time is left for the new
              year
            </p>
          </figcaption>
          <a href='#'></a>
        </figure>
      </section>
    </S.Works>
  );
};

export default Works;
