import vadivelu from '../dist/images/vadivelu.jpg';
import Nav from './Nav';
const Blog = () => {
  return (
    <>
      <Nav hideOther />
      <div className='blogPage'>
        <img src={vadivelu} alt='vadivelu' className='blogPageImage' />
        <h1 className='blogPageText'>Comming Soon 😌🙂</h1>
      </div>
    </>
  );
};
export default Blog;
