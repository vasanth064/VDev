import React from 'react';
import banner from '../dist/images/contactBanner.jpg';
const Contact = () => {
  return (
    <>
      <div className='contact' id='contact'>
        <h2 className='contact__title'>CONTACT</h2>

        <div className='contact__container'>
          <form
            name='contact'
            method='post'
            className='form form--dark'
            action='/contact'>
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
                  placeholder='E MAIL'
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
                  placeholder='MESSAGE'
                  className='form__txtarea'></textarea>
              </div>
              <div className='form__group'>
                <button type='submit' value='SUBMIT' className='form__btn'>
                  SUBMIT
                </button>
              </div>
            </div>
            <img src={banner} alt='banner' className='banner' />
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
