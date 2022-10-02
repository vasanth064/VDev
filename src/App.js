import React, { useEffect, useState } from 'react';
import './dist/scss/_variables.scss';
import './dist/scss/globals.scss';
import './dist/scss/loader.scss';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import themeSwicth from './dist/images/webp_theme.webp';
import Styled, { ThemeProvider } from 'styled-components';
import { light, dark, GlobalStyles } from '../src/themes';
import { getData } from './Helpers/FirestoreHelper';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './Configs/firebaseConfig';

const StyledApp = Styled.div``;

function App() {
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const themeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    const dataRef = collection(db, 'vdev');
    const unsubscribe = onSnapshot(dataRef, (snapshot) => {
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id })));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className='loaderContainer'>
        {data !== null && data.length !== 0 && setLoading(false)}
        <div className='loader'>
          <div className='one'></div>
          <div className='two'></div>
        </div>
      </div>
    );
  }
  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyles />
      <StyledApp>
        <div className='fadeout'>
          <div className='themeContainer'>
            <img
              src={themeSwicth}
              alt='themeSwitch'
              className='theme'
              onClick={() => themeToggle()}
            />
          </div>
          <div>
            <Router>
              <Route path='/blog' exact component={Blog} />
              <Route path='/' exact>
                <Nav data={data[0]} />
                <Home data={data[0]} />
                <Portfolio data={data[0]} />
                <About data={data[0]} />
                <Contact data={data[0]} />
              </Route>
            </Router>
          </div>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
