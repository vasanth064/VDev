import React, { useState, useEffect } from 'react';
import { pros } from '../Data/projects';

const Portfolio = () => {
  const [tag, setTag] = useState('ALL');

  const [filteredData, setFilteredData] = useState([]);

  const tags = ['ALL', ...new Set(pros.map((i) => i.tag))];

  useEffect(() => {
    tag === 'ALL'
      ? setFilteredData(pros)
      : setFilteredData(pros.filter((data) => data.tag === tag));
  }, [tag]);

  const TagTitle = ({ name }) => {
    return (
      <>
        <h3
          className={name === tag ? 'catg__title active' : 'catg__title '}
          onClick={() => setTag(name)}>
          {name}
        </h3>
      </>
    );
  };

  return (
    <>
      <div className='portfolio portfolio--dark' id='portfolio'>
        <h2 className='portfolio__title portfolio__title--dark'>PORTFOLIO</h2>
        <div className='catg'>
          {tags.map((data) => (
            <TagTitle key={tags.indexOf(data)} name={data} />
          ))}
        </div>
        <div className='projects'>
          {filteredData.map((data) => (
            <Project key={data.id} {...data} />
          ))}
        </div>
      </div>
    </>
  );
};

const Project = ({ link, image, code, name }) => {
  let i = 1;
  return (
    <>
      <div className='project'>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='project__link'>
          <img
            src={image}
            alt={name}
            width='100%'
            height='100%'
            className='project__image'
          />
        </a>
        <div className='attr'>
          {code.map((codeName) => {
            return (
              <div className='attr__code' key={i++}>
                <h4>{codeName}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
