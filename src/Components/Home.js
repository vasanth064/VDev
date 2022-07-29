import React from 'react';
import '../dist/css/style.css';
import Man from '../dist/images/homeMan.svg';
import Plant from '../dist/images/homePlant.svg';
import Arrow from '../dist/images/homeArrow.svg';
import heroImg from '../dist/images/homeIllustration.svg';

function Home() {
  return (
    <>
      <div className='home' id='home'>
        <img src={Man} alt='Man Standing' className='home__man' />
        <img src={Plant} alt='Plant With Vase' className='home__plant' />

        <img src={heroImg} alt='heroImg' className='home__heroImg' />

        <a href='#portfolio'>
          <img src={Arrow} alt='Arrow Pointing Down' className='home__arrow' />
        </a>
        <div className='home__text'>
          <h3 className='home__text__h3'>Hello, Myself</h3>
          <h2 className='home__text__h2'>VASANTH</h2>
          <h3 className='home__text__h3 home__text__h3--restext'>
            Full Stack Web Developer
          </h3>
        </div>

        <a
          className='home__contactbtn'
          href='mailto:vasanthnaveen2011@gmail.com'>
          CONTACT ME
        </a>
      </div>
    </>
  );
}

export default Home;
