import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const PrimaryButton = styled.button`
  padding: 10px;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  border-radius: 50px;
  background: black;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.theme.name === 'light' ? 'white' : props.theme.color};
  background: ${(props) =>
    props.theme.name === 'light' ? 'black' : props.theme.secondaryColor};
  & > span {
    font-size: 24px;
    line-height: 0;
    margin-left: 10px;
  }
  @media screen and (min-width: 760px) {
    width: auto;
    padding: 20px 40px;
    font-size: 26px;

    & > span {
      font-size: 32;
    }
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  color: white;
  background: ${(props) =>
    props.contact === 'true'
      ? props.theme.contactBackground
      : 'linear-gradient(320.54deg, #00069F 0%, #120010 72.37%), linear-gradient(58.72deg, #69D200 0%, #970091 100%), linear-gradient(121.28deg, #8CFF18 0%, #6C0075 100%), linear-gradient(121.28deg, #8000FF 0%, #000000 100%), linear-gradient(180deg, #00FF19 0%, #24FF00 0.01%, #2400FF 100%), linear-gradient(52.23deg, #0500FF 0%, #FF0000 100%), linear-gradient(121.28deg, #32003A 0%, #FF4040 100%), radial-gradient(50% 72.12% at 50% 50%, #EB00FF 0%, #110055 100%)'};
  border-radius: 15px;
  background-blend-mode: screen, color-dodge, color-burn, screen, overlay,
    difference, color-dodge, normal;
  @media screen and (min-width: 760px) {
    gap: 30px;
    padding: 30px;
    width: 100%;
  }
`;
export const ContentHeader = styled.h1`
  font-family: 'Sora', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => (props.size ? props.size : '20px')};
  line-height: 32px;
  letter-spacing: 0em;
  max-width: 31ch;
  @media screen and (min-width: 760px) {
    font-size: 40px;
    line-height: 54px;
    letter-spacing: 0.03em;
  }
`;

export const ContentBody = styled.p`
  text-align: justify;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.01em;
  display: block;
  color: inherit;
  @media screen and (min-width: 760px) {
    max-width: 65ch;
    margin-top: 30px;
    font-size: 20px;
    line-height: 28px;
  }
`;

export const GlobalStyles = createGlobalStyle`
body{
    background: ${(props) => props.theme.backgroundColor};
}

`;
