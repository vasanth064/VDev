import React, { useState, useEffect } from 'react';
import '../dist/scss/_variables.scss';
import '../dist/scss/_portfolio.scss';

import { pros } from '../Data/projects';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../Configs/firebaseConfig';

const Portfolio = () => {
  const [tag, setTag] = useState('ALL');
  const [filteredData, setFilteredData] = useState([]);
  const [projects, setProjects] = useState(null);
  const [tags, setTags] = useState(null);

  useEffect(() => {
    const dataRef = collection(db, 'projects');
    const unsubscribe = onSnapshot(dataRef, (snapshot) => {
      setProjects(snapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id })));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const dataRef = collection(db, 'projectTags');
    const unsubscribe = onSnapshot(dataRef, (snapshot) => {
      setTags(snapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id })));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    tag === 'ALL'
      ? setFilteredData(projects)
      : setFilteredData(
          projects.filter((data) => data.projectCategory === tag)
        );
  }, [tag, projects, tags]);

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
    projects &&
    tags && (
      <>
        <div className='portfolio portfolio--dark' id='portfolio'>
          <h2 className='portfolio__title portfolio__title--dark'>PORTFOLIO</h2>
          <div className='catg'>
            {tags[0].tags.map((data) => (
              <TagTitle key={data} name={data} />
            ))}
          </div>
          <div className='projects'>
            {filteredData.map((data) => (
              <Project key={data.uid} {...data} />
            ))}
          </div>
        </div>
      </>
    )
  );
};

const Project = ({
  projectBanner,
  projectBannerAlt,
  projectLink,
  projectStack,
}) => {
  let i = 1;
  return (
    <>
      <div className='project'>
        <a
          href={projectLink}
          target='_blank'
          rel='noopener noreferrer'
          className='project__link'>
          <img
            src={projectBanner}
            alt={projectBannerAlt}
            width='100%'
            height='100%'
            className='project__image'
          />
        </a>
        <div className='attr'>
          {projectStack.map((codeName) => {
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
