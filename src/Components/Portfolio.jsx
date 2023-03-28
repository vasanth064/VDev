import React, { useState, useEffect } from 'react';

import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../Configs/firebaseConfig';
import styled from 'styled-components';
import { BsArrowUpRight } from 'react-icons/bs';

const ProjectContainer = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (min-width: 760px) {
    & img {
      height: 100%;
      width: 600px;
    }
  }
`;
const StackContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
`;
const Stack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 10px;
  background: ${(props) => props.theme.secondaryColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  & > p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: ${(props) => props.theme.color};
  }
  @media screen and (min-width: 760px) {
    padding: 10px 20px;
    & > p {
      font-size: 16px;
    }
  }
`;
const AnchorLink = styled.a`
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.secondaryColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  position: absolute;
  top: 10px;
  right: 10px;
  & svg {
    stroke-width: 1;
  }
  @media screen and (min-width: 760px) {
    padding: 20px;
    font-size: 17px;
  }
`;

const Project = ({
  projectBanner,
  projectBannerAlt,
  projectLink,
  projectStack,
}) => {
  let i = 1;
  return (
    <>
      <ProjectContainer>
        <a href={projectLink} target='_blank' rel='noopener noreferrer'>
          <img src={projectBanner} alt={projectBannerAlt} width='100%' />
          <StackContainer>
            {projectStack.map((codeName) => {
              return (
                <Stack key={i++}>
                  <p>{codeName}</p>
                </Stack>
              );
            })}
          </StackContainer>
        </a>
        <AnchorLink
          href={projectLink}
          target='_blank'
          rel='noopener noreferrer'>
          <BsArrowUpRight />
        </AnchorLink>
      </ProjectContainer>
    </>
  );
};

const TagTitle = styled.p`
  color: ${(props) =>
    (props.active && props.theme.name === 'light'
      ? 'white'
      : !props.active && props.theme.name === 'light' && 'black') ||
    (props.active && props.theme.name === 'dark'
      ? 'black'
      : !props.active && props.theme.name === 'dark' && 'white')};

  background: ${(props) =>
    (props.active && props.theme.name === 'light'
      ? 'black'
      : !props.active && props.theme.name === 'light' && 'white') ||
    (props.active && props.theme.name === 'dark'
      ? 'white'
      : !props.active && props.theme.name === 'dark' && '')};
  text-transform: capitalize;
  border-radius: 50px;
  border: 2px solid
    ${(props) =>
      (props.active && props.theme.name === 'light'
        ? 'black'
        : !props.active && props.theme.name === 'light' && 'black') ||
      (props.active && props.theme.name === 'dark'
        ? 'white'
        : !props.active && props.theme.name === 'dark' && '')};
  padding: 10px 15px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.01em;
  line-height: 16px;
`;
const CategoryContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 15px;
`;
const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;

  @media screen and (min-width: 760px) {
    flex-direction: row;
  }
`;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 15px;
`;

const Portfolio = () => {
  const [tag, setTag] = useState('All');
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
    tag === 'All'
      ? setFilteredData(projects)
      : setFilteredData(
          projects.filter((data) => data.projectCategory === tag)
        );
  }, [tag, projects, tags]);

  return (
    projects &&
    tags && (
      <Container id='projects'>
        <CategoryContainer>
          {tags[0].tags.map((data) => (
            <TagTitle
              key={data}
              onClick={() => setTag(data)}
              active={data === tag ? true : false}>
              {data}
            </TagTitle>
          ))}
        </CategoryContainer>
        <ProjectsContainer>
          {filteredData.map((data) => (
            <Project key={data.uid} {...data} />
          ))}
        </ProjectsContainer>
      </Container>
    )
  );
};

export default Portfolio;
