import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ hideOther, data }) => {
  const [nav, setNav] = useState(false);
  const showNav = () => setNav(!nav);
  const hideNav = () => setNav(false);
  const nData = data.navigation;
  return (
    <>
      <div className='header'>
        <div className='nav'>
          <ul className={nav ? 'nav__links active' : 'nav__links'}>
            <div className='navListContainer'>
              {nData.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.navLink}
                    className='nav__links--item'
                    onClick={hideNav}>
                    {item.navTitle}
                  </a>
                </li>
              ))}
            </div>
          </ul>

          <Link to='/blog' className={hideOther ? 'hide' : ''}>
            <button
              className={nav ? 'nav__btn activeBtn' : 'nav__btn'}
              onClick={hideNav}>
              VISIT BLOG
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
