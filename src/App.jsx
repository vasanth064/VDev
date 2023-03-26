import React, { useEffect, useState } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Styled, { ThemeProvider } from 'styled-components';
import { light, dark, GlobalStyles } from './themes';
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
          <div className='themeContainer'></div>
          <div>
            <Router>
              <Route path='/' exact>
                <Nav data={data[0]} />
                <Home data={data[0]} />
                <Portfolio data={data[0]} />
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
