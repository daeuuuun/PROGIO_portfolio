import React, { useState, useEffect } from 'react';
import Main from './pages/Main/Main';
import Header from './containers/Header/Header';
import MainContent from './pages/Main/MainContent';

function App() {
  const [introEnd, setIntroEnd] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroEnd(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {introEnd ? <Header /> : <Main />}
      {introEnd && <MainContent />}
    </>
  );
}

export default App;