import React, { useState } from 'react';
import '../dist/scss/_variables.scss';
import '../dist/scss/_contact.scss';
import { addData } from '../Helpers/FirestoreHelper';

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
      <div className='contact' id='contact'>
        <h2 className='contact__title'>CONTACT</h2>

        <div className='contact__container'>
          <form
            name='contact'
            className='form form--dark'
            onSubmit={async (e) => {
              e.preventDefault();
              await addData('contactMessages', formData);
              setFormData({
                email: '',
                message: '',
              });
              e.currentTarget.reset();
            }}>
            <div className='formContainer'>
              <input type='hidden' name='form-name' value='contact' />
              <div className='form__group'>
                <label
                  htmlFor='email'
                  className='form__label form__label--dark'>
                  E MAIL
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  placeholder='E MAIL'
                  onChange={handleInputChange}
                  className='form__input'
                  required
                />
              </div>
              <div className='form__group'>
                <label
                  htmlFor='message'
                  className='form__label form__label--dark'>
                  MESSAGE
                </label>
                <textarea
                  required
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder='MESSAGE'
                  className='form__txtarea'></textarea>
              </div>
              <div className='form__group'>
                <button type='submit' value='SUBMIT' className='form__btn'>
                  SUBMIT
                </button>
              </div>
            </div>

            <div className='banner'>
              <img
                src={cData.bannerImg}
                alt={cData.bannerImgAlt}
                className='banner__img'
              />
              <div className='banner__social'>
                {sData.map((item, index) => (
                  <a href={item.link} key={index}>
                    <div className='banner__social__container'>
                      <div className='banner__social__container__link'>
                        <img
                          className='banner__social_container__img'
                          alt={item.platformName}
                          src={item.platformIcon}
                        />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </form>
        </div>
        <div className='footer'>
          <h3>Made with ❤️ and React 💙</h3>
        </div>
      </div>
    </>
  );
};

export default Contact;
