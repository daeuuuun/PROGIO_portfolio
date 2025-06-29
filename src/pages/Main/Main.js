import React, { useEffect, useState } from 'react';
import IntroPanel from '../../containers/Main/IntroPanel';
import styles from '../style/Main.module.css';

const Main = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShrink(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.container} ${shrink ? styles.shrink : ''}`}>
      <IntroPanel shrink={shrink} />
    </div>
  );
};

export default Main;
