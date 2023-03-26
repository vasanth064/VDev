import React from 'react';
import styled from 'styled-components';
import {
  ContentHeader,
  ContentSection,
  PrimaryButton,
} from '../Helpers/GlobalStyles';
import SocialButtons from './SocialButtons';
import { AiOutlineDownload } from 'react-icons/ai';
const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 15px;
`;
const ContentBody = styled.p`
  text-align: justify;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.01em;
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
`;
const ButtonGroup = styled.div`
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

function Home({ data }) {
  let hData = data.home;
  let sData = data.socialLinks;
  console.log(hData);
  console.log(sData);
  return (
    <Container id='home'>
      <ImageSection
        src='https://firebasestorage.googleapis.com/v0/b/vdev-ed27e.appspot.com/o/vdev%2FIMG_20230112_141522_296.jpg?alt=media&token=5a28f01e-46fa-4933-9e87-c4b861024047'
        alt='Vasanth '
      />
      <ContentSection>
        <ContentContainer>
          <ContentHeader>
            Hey, I'm Vasanth, a <b>Full Stack Developer</b> with lots of hands
            on Experience
          </ContentHeader>
          <ContentBody>
            I am a web developer specializing in building dynamic and responsive
            web applications. My problem-solving skills , combined with my
            passion for creating user-friendly and visually appealing
            interfaces, make me a valuable asset.
          </ContentBody>
        </ContentContainer>
        <ButtonGroup>
          <PrimaryButton>
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
