import React from 'react';
import vadivelu from '../dist/images/vadivelu.jpg';
import '../dist/css/style.css';
import Nav from './Nav';
const Blog = () => {
  return (
    <>
      {/* Remove the Global Style in style.scss */}
      <Nav hideOther />
      <div className='blogPage'>
        <img src={vadivelu} alt='vadivelu' className='blogPageImage' />
        <h1 className='blogPageText'>Comming Soon 😌🙂</h1>
      </div>
    </>
  );
};
export default Blog;
