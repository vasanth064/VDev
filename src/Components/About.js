import React from 'react';
import vasanth from '../dist/images/vasanth.jpeg';

const About = () => {
  const Textcircle = (props) => {
    const { Text, Size, Color, Border } = props;

    const circle = {
      height: Size,
      width: Size,
      backgroundColor: Color,
      border: Border,
    };
    return (
      <>
        <div className='about__circle' style={circle}>
          <p className='about__text'>{Text}</p>
        </div>
      </>
    );
  };

  const Imgcircle = () => {
    return (
      <>
        <div className='about__circle'>
          <img src={vasanth} alt='myself' className='about__image' />
        </div>
      </>
    );
  };

  return (
    <>
      <div className='about about--dark' id='about'>
        <h2 className='about__title about__title--dark'>ABOUT ME</h2>
        <div className='about__mob'>
          <Textcircle
            Text='Vasanth, A 18 year old, Full-stack developer from India. I started learning frontend development from my secondary education.'
            Size='25rem'
            Color='#ffffff'
            Border='3px dashed #8c1864'
          />
          <Imgcircle />
          <Textcircle
            Text='I developed applications by turning my ideas and visions into websites. As of now I am continueing my learning process. '
            Size='25rem'
            Color='#ffffff'
            Border='3px dashed #8c1864'
          />
        </div>

        <div className='about__lap'>
          <img src={vasanth} alt='vasanth' className='about__lapimage' />
          <div className='about__data'>
            <p className='para0'>Myself..,</p>
            <br></br>
            <p className='para1'>
              Vasanth, A 18 year old, Full-stack developer from India. I started
              learning frontend development from my secondary education where I
              got more intrest in full-stack development and made it a hobby to
              learn other web development programming languages both front-end
              and back-end. I developed applications by turning my ideas and
              visions into websites. As of now I am continueing my learning
              process as pursing a diploma in Computer Engineering.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
