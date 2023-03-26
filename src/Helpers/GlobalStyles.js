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
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  background: ${(props) =>
    props.contact === 'true'
      ? props.theme.contactBackground
      : 'linear-gradient(231.95deg, #a2b7cf -0.03%, #efcead 100.03%)'};
  border-radius: 15px;
`;
export const ContentHeader = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => (props.size ? props.size : '20px')};
  line-height: 32px;
  letter-spacing: 0.01em;
`;

export const GlobalStyles = createGlobalStyle`
body{
    background: ${(props) => props.theme.backgroundColor};
}
`;
