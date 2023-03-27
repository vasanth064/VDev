import React, { useState } from 'react';
import { addData } from '../Helpers/FirestoreHelper';
import styled from 'styled-components';
import {
  ContentBody,
  ContentHeader,
  ContentSection,
  PrimaryButton,
} from '../Helpers/GlobalStyles';
import SocialButtons from './SocialButtons';
import { MdEmail } from 'react-icons/md';
import { RiSendPlaneFill } from 'react-icons/ri';

const Container = styled.section`
  padding: 15px;
  gap: 15px;
  ${(props) => props.theme.secondaryColor};
  @media screen and (min-width: 760px) {
    flex-direction: row;
    padding: 30px;
    gap: 30px;
  }
`;

const ImageSection = styled.div`
  position: relative;
  background: url('https://firebasestorage.googleapis.com/v0/b/vdev-ed27e.appspot.com/o/vdev%2Fbg.png?alt=media&token=6d4e892c-522b-4532-a980-c834c858e336');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  border-radius: 15px;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  @media screen and (min-width: 760px) {
    flex-direction: column-reverse;
  }
`;
// const FormContainer = styled.div`
//   color: ${(props) => props.theme.contactColor};
//   border-radius: 15px;
//   padding: 30px 15px;
//   @media screen and (min-width: 760px) {
//     padding: 30px;
//   }
// `;
// const ContactForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 30px;
//   padding: 30px 0;
//   align-items: center;
//   @media screen and (min-width: 760px) {
//     width: 60vw;
//   }
// `;
// const InputGroup = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
// `;
// const Label = styled.label`
//   display: block;
//   @media screen and (min-width: 760px) {
//     font-size: 18px;
//   }
// `;
// const Input = styled.input`
//   font-family: inherit;
//   display: block;
//   border-radius: 15px;
//   padding: 15px 20px;
//   border: 2px solid black;
//   outline: none;
//   font-size: 16px;
//   width: 100%;
//   @media screen and (min-width: 760px) {
//     font-size: 18px;
//     padding: 20px 25px;
//   }
// `;
// const TextArea = styled.textarea`
//   display: block;
//   font-family: inherit;
//   font-size: 16px;
//   padding: 15px 20px;
//   border-radius: 15px;
//   padding: 10px 15px;
//   border: 2px solid black;
//   outline: none;
//   width: 100%;
//   @media screen and (min-width: 760px) {
//     font-size: 18px;
//     padding: 20px 25px;
//   }
// `;
const FlexContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */
  justify-content: space-around;
  background: ${(props) => props.theme.contactBackground};
  padding: 30px 15px;
  flex-direction: column;
  gap: 30px;
  border-radius: 15px;
  color: ${(props) => props.theme.color};

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
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
          <FlexContainer>
            <Container>
              <ContentHeader style={{ width: '23ch', paddingBottom: '15px' }}>
                I'd Love to hear from you !
              </ContentHeader>
              <ContentBody>
                Feel free to reach out for collaborations or just a friendly
                hello 👋
              </ContentBody>
            </Container>

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

            {/* <FormContainer>
              <ContactForm autoComplete='off'>
                <InputGroup>
                  <Label for='email'>Email</Label>
                  <Input
                    name='email'
                    type='email'
                    required
                    placeholder='Enter your Email'
                  />
                </InputGroup>
                <InputGroup>
                  <Label for='name'>Message</Label>
                  <TextArea
                    rows='8'
                    placeholder='Enter your Message'
                    required
                  />
                </InputGroup>
                <PrimaryButton>Send Message</PrimaryButton>
              </ContactForm>
            </FormContainer> */}
          </FlexContainer>
        </ImageSection>
      </Container>

      <Footer>
        <p>Made with ❤️ and React 💙</p>
      </Footer>
    </>
  );
};

export default Contact;
