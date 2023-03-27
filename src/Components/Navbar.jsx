import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { HiOutlineSun } from 'react-icons/hi';
import { BsMoonStarsFill } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
`;
const MenuIcon = styled.span`
  font-size: 28px;
  line-height: 0;
  padding: 15px;
  margin-left: 15px;
  color: ${(props) => props.theme.color};
  @media screen and (min-width: 760px) {
    display: none;
  }
  z-index: 2;
`;
const ThemeIcon = styled.button`
  margin-left: auto;
  font-size: 24px;
  line-height: 0;
  background: transparent;
  border: none;
  padding: 15px;
  & > svg > path:nth-child(2) {
    color: #f9a825;
  }
  z-index: 2;
  &:hover {
    background: ${(props) => props.theme.hover};
  }
  &:focus {
    background: ${(props) => props.theme.hover};
  }
  border-radius: 50px;
`;
const NavTitle = styled.p`
  font-family: 'Pacifico';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 64px;
  color: ${(props) => props.theme.color};

  @media screen and (min-width: 760px) {
    font-size: 36px;
  }
`;
const NavItems = styled.ul`
  background: ${(props) => props.theme.backgroundColor};
  @media screen and (min-width: 760px) {
    margin-left: 30px;
    display: flex;
  }
`;
const NavItem = styled.li`
  display: block;
  color: ${(props) => props.theme.color};
  font-weight: 400;
  font-size: 22px;
  line-height: 24px;
  padding: 15px 10px;
  margin: 0 10px;
  border-radius: 50px;
`;

const Navbar = ({ hideOther, data, themeToggle, theme }) => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);
  const hideNav = () => setNav(false);
  const nData = data.navigation;

  return (
    <Nav>
      <NavTitle>V Dev</NavTitle>
      <ThemeIcon onClick={themeToggle}>
        {theme === 'dark' ? (
          <HiOutlineSun style={{ color: ' #f9a825', strokeWidth: 2.5 }} />
        ) : (
          <BsMoonStarsFill style={{ color: '#3C4258' }} />
        )}
      </ThemeIcon>
      <MenuIcon onClick={toggleNav}>{nav ? <CgClose /> : <FiMenu />}</MenuIcon>
      <NavItems className={nav ? 'active' : 'notActive'}>
        <a href='#home' onClick={hideNav}>
          <NavItem>Home</NavItem>
        </a>
        <a href='#projects' onClick={hideNav}>
          <NavItem>Projects</NavItem>
        </a>
        <a href='#contact' onClick={hideNav}>
          <NavItem>Contact</NavItem>
        </a>
      </NavItems>
    </Nav>
  );
};

export default Navbar;
