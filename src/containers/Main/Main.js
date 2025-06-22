import React, { useEffect, useState } from 'react';
import IntroPanel from './IntroPanel';
import styles from './Main.module.css';

const Main = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    console.log('변경 시도');
    const timer = setTimeout(() => {
        console.log('shrink 되고 있음')
        setShrink(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.container} ${shrink ? styles.shrink : ''}`}
    data-debug-shrink={shrink}
    >
      <div className={styles.left}>
        <IntroPanel />
      </div>

      <div className={styles.right}>
        <video
            className={styles.backgroundVideo}
            src="/video/PRUGIO_for_Women.mp4"
            autoPlay
            muted
            loop
            playsInline
        />
      </div>
    </div>
  );
};

export default Main;
