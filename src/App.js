import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Header from './containers/Header/Header';
import MainContent from './pages/Main/MainContent';
import Premium from './pages/Premium/Premium';

function App() {
  const [introEnd, setIntroEnd] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroEnd(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {introEnd ? <Header /> : <Main />}
      <Routes>
        {introEnd && <Route path="/" element={<MainContent />} />}
        <Route path="/premium" element={<Premium />} />
      </Routes>
    </Router>
  );
}

export default App;
