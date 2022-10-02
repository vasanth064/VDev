import '../dist/scss/_variables.scss';
import '../dist/scss/_about.scss';
import vasanth from '../dist/images/webp_vasanth.webp';
import { useState } from 'react';

const About = ({ data }) => {
  const [aData, setAData] = useState(data.about);
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
          <img
            src={aData.photo}
            alt={aData.photoAlt}
            className='about__image'
          />
        </div>
      </>
    );
  };

  return (
    <>
      <div className='about about--dark' id='about'>
        <h2 className='about__title about__title--dark'>{aData.title}</h2>
        <div className='about__mob'>
          <Textcircle
            Text='Vasanth, A Full-stack developer from India. I started learning frontend development from my secondary education.'
            Size='25rem'
            Color='#ffffff'
            Border='3px dashed #8c1864'
          />
          <Imgcircle />
          <Textcircle
            Text='I developed applications by turning my ideas into visions into websites.'
            Size='25rem'
            Color='#ffffff'
            Border='3px dashed #8c1864'
          />
        </div>

        <div className='about__lap'>
          <img
            src={aData.photo}
            alt={aData.photo}
            className='about__lapimage'
          />
          <div className='about__data'>
            <p className='para0'>{aData.heading}</p>
            <br></br>
            <p className='para1'>{aData.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
