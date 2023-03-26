import React from 'react';

function Home({ data }) {
  let hData = data.home;
  let sData = data.socialLinks;

  return (
    <>
      <div className='home' id='home'>
        <div className='home__mobile'>
          <img
            src={hData.mobileRightImage}
            alt={hData.mobileRightImageAlt}
            className='home__man'
          />
          <img
            src={hData.mobileLeftImage}
            alt={hData.mobileLeftImageAlt}
            className='home__plant'
          />
        </div>
        <img
          src={hData.desktopImage}
          alt={hData.desktopImageAlt}
          className='home__heroImg'
        />
        <div className='home__text'>
          <h3 className='home__text__h3'>Hello, Myself</h3>
          <h2 className='home__text__h2'>VASANTH</h2>
          <h3 className='home__text__h3 home__text__h3--restext'>
            <span className='home__text__jobContainer'>
              <p className='home__text__jobText'>{hData.jobName}</p>
            </span>
            Developer
          </h3>
          <div className='social'>
            {sData.map((item, index) => (
              <a href={item.link} key={index}>
                <div className='social__container'>
                  <div className='social__container__link'>
                    <img
                      className='social_container__img'
                      alt={item.platformName}
                      src={item.platformIcon}
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
