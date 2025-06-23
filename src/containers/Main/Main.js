import React, { useEffect, useState } from 'react';
import IntroPanel from './IntroPanel';
import styles from './Main.module.css';
import prugio_apt from './Prugio_apt.jpg';
import prugio_apt2 from './Prugio_apt2.jpg';
import prugio_apt3 from './Prugio_apt3.jpg';
import buildingImg from './building_1920.jpg';

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
        { <video
            className={styles.backgroundVideo}
            src="/video/PRUGIO_for_Women.mp4"
            autoPlay
            muted
            loop
            playsInline
        />
        // <img className={styles.backgroundImage} src={prugio_apt3}></img>
        }
      </div>
    </div>
  );
};

export default Main;
