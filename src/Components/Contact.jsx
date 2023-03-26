import React, { useState } from 'react';
import { addData } from '../Helpers/FirestoreHelper';
import styled from 'styled-components';
import {
  ContentHeader,
  ContentSection,
  PrimaryButton,
} from '../Helpers/GlobalStyles';
import SocialButtons from './SocialButtons';
import { MdEmail } from 'react-icons/md';
import { RiSendPlaneFill } from 'react-icons/ri';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 15px;
`;

const ImageSection = styled.div`
  position: relative;

  & img {
    height: 25vh;
    object-fit: cover;
    width: 100%;
    border-radius: 15px;
  }
`;
const ButtonGroup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 0;
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Label = styled.label`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;
const Input = styled.input`
  border: 1.5px solid black;
  padding: 10px 15px;
  border-radius: 50px;
  outline: none;
  font-size: 18px;
  line-height: 24px;
`;
const TextArea = styled.textarea`
  border: 1.5px solid black;
  border-radius: 15px;
  padding: 10px 15px;
  outline: none;
  font-size: 18px;
  line-height: 24px;
`;

const Footer = styled.footer`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: black;
  color: white;
  font-family: 'Courier New', Courier, monospace;
`;
const Contact = ({ data }) => {
  let cData = data.contact;
  let sData = data.socialLinks;
  console.log(cData);
  console.log(sData);
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <Container id='contact'>
        <ImageSection>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/vdev-ed27e.appspot.com/o/vdev%2F20849707_6364981.jpg?alt=media&token=b36a76e0-5c33-4300-8d62-40c0bb4a64bc'
            alt='Presentation'
          />
          <ButtonGroup>
            <PrimaryButton
              onClick={() =>
                (window.location.href = 'mailto:vasanthvdev@gmail.com')
              }>
              Email me
              <span>
                <MdEmail />
              </span>
            </PrimaryButton>
            <SocialButtons data={sData} />
          </ButtonGroup>
        </ImageSection>
        <ContentSection contact='true'>
          <ContentHeader size='32px' style={{ padding: '15px 0' }}>
            Contact Me
          </ContentHeader>
          <ContactForm>
            <InputGroup>
              <Label>Email</Label>
              <Input type='email' required />
            </InputGroup>
            <InputGroup>
              <Label>Message</Label>
              <TextArea rows={6} />
            </InputGroup>
            <PrimaryButton>
              Send Message
              <span>
                <RiSendPlaneFill />
              </span>
            </PrimaryButton>
          </ContactForm>
        </ContentSection>
      </Container>

      <Footer>
        <p>Made with ❤️ and React 💙</p>
      </Footer>
    </>
  );
};

export default Contact;
