import { TfiLinkedin, TfiTwitterAlt } from 'react-icons/tfi';
import { VscGithub } from 'react-icons/vsc';
import { RiInstagramFill } from 'react-icons/ri';
import { BsYoutube } from 'react-icons/bs';
import styled from 'styled-components';

const SocialButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
  @media screen and (min-width: 760px) {
    flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  }
`;

const SocialButton = styled.a`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  padding: 18px;
  width: fit-content;
  & svg {
    width: 1.5em;
    height: auto;
  }
  &:hover {
    background: ${(props) => (props.background ? props.background : 'black')};
    color: white;
  }
  &:focus {
    background: ${(props) => (props.background ? props.background : 'black')};
    color: white;
  }
  @media screen and (max-width: 360px) {
    padding: 14px;
    & svg {
      width: 1.2em;
    }
  }
`;

const backgrounds = {
  linkedIn: '#0a66c2',
  github: '#333333',
  instagram:
    'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)',
  twitter: '#1DA1F2',
  youtube: '#FF0000',
};

const icons = {
  linkedIn: <TfiLinkedin />,
  github: <VscGithub />,
  instagram: <RiInstagramFill />,
  twitter: <TfiTwitterAlt />,
  youtube: <BsYoutube />,
};

const SocialButtons = ({ data, flex }) => {
  return (
    <SocialButtonGroup direction={flex}>
      {data.map((item, index) => (
        <SocialButton
          key={index}
          background={backgrounds[item.platformName]}
          href={item.accountLink}>
          {icons[item.platformName]}
        </SocialButton>
      ))}
    </SocialButtonGroup>
  );
};

export default SocialButtons;
