import React from 'react';
import styled from 'styled-components';
import {
  ContentBody,
  ContentHeader,
  ContentSection,
  PrimaryButton,
} from '../Helpers/GlobalStyles';
import SocialButtons from './SocialButtons';
import { AiOutlineDownload } from 'react-icons/ai';
import vasanth from './../Assets/vdev Assets/vasanth.webp';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 15px;
  @media screen and (min-width: 990px) {
    flex-direction: row-reverse;
    height: 90vh;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 15px;
`;
const ImageSection = styled.img`
  border-radius: 15px;
  max-height: 40vh;
  width: auto;
  object-position: 0 30%;
  object-fit: cover;

  @media screen and (min-width: 760px) {
    object-position: 75% 0;
    width: 35vw;
    min-height: 100%;
  }
  @media screen and (max-width: 990px) {
    width: 100%;
    object-position: 100% 25%;
  }
`;
const ButtonGroup = styled.div`
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (min-width: 760px) {
    flex-direction: row;
    margin-top: auto;
  }
`;

function Home({ data }) {
  let hData = data.home;
  let sData = data.socialLinks;
  console.log(hData);
  console.log(sData);
  return (
    <Container id='home'>
      <ImageSection src={vasanth} alt='Vasanth ' />
      <ContentSection>
        <ContentContainer>
          <ContentHeader>
            Hey, I'm Vasanth, a <b>Full Stack Developer</b> with lots of hands
            on
            <p>Experience 👨‍💻</p>
          </ContentHeader>
          <ContentBody>
            I am a web developer specializing in building dynamic and responsive
            web applications. My problem-solving skills , combined with my
            passion for creating user-friendly and visually appealing
            interfaces, make me a valuable asset.
          </ContentBody>
        </ContentContainer>
        <ButtonGroup>
          <PrimaryButton
            onClick={() =>
              (window.location.href =
                'https://drive.google.com/uc?export=download&id=1sj9WJzNAxSf8xcOJ-KaUP3CT8h2UVJdA')
            }>
            Resume
            <span>
              <AiOutlineDownload />
            </span>
          </PrimaryButton>
          <SocialButtons data={sData} />
        </ButtonGroup>
      </ContentSection>
    </Container>
  );
}

export default Home;
