import React, { useState } from 'react';
import '../dist/scss/_variables.scss';
import '../dist/scss/_nav.scss';

import logo from '../dist/images/homeLogoMobile.svg';
import menu from '../dist/images/homeHamburger.svg';
import close from '../dist/images/close.svg';
import { Link } from 'react-router-dom';

const Nav = ({ hideOther, data }) => {
  const [nav, setNav] = useState(false);
  const showNav = () => setNav(!nav);
  const hideNav = () => setNav(false);
  const nData = data.navigation;
  return (
    <>
      <div className='header'>
        <img src={logo} alt='V Dev' className='header__title' />

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
          <img
            src={nav ? close : menu}
            alt='menu'
            className='nav__menu'
            onClick={showNav}
          />
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
