import React, { useState } from 'react';
import './dist/scss/globals.scss';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import themeSwicth from './dist/images/themeSwicth.svg';
import Styled, { ThemeProvider } from 'styled-components';
import { light, dark, GlobalStyles } from '../src/themes';

const StyledApp = Styled.div``;

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyles />
      <StyledApp>
        <img
          src={themeSwicth}
          alt='sun'
          className={
            theme === 'dark' ? 'themeActive home__theme' : 'home__theme'
          }
          onClick={() => themeToggle()}
        />

        <div>
          <Router>
            <Route path='/blog' exact component={Blog} />
            <Route path='/' exact component={Nav} />
            <Route path='/' exact component={Home} />
            <Route path='/' exact component={Portfolio} />
            <Route path='/' exact component={About} />
            <Route path='/' exact component={Contact} />
          </Router>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
