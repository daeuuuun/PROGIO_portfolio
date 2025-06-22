import React, { useEffect, useState } from 'react';
import styles from './LogoAnimation.module.css';

import P from './img/Prugio_P_Whitever.png';
import R from './img/Prugio_R_Whitever.png';
import U from './img/Prugio_U_Whitever.png';
import G from './img/Prugio_G_Whitever.png';
import I from './img/Prugio_I_Whitever.png';
import O from './img/Prugio_O_Whitever.png';

const logo_Images = [P, R, U, G, I, O];
const appearOrder = [0, 3, 2, 4, 1, 5];

function LogoAnimation() {
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    appearOrder.forEach((realIndex, i) => {
      setTimeout(() => {
        setVisibleIndexes((prev) => [...prev, realIndex]);
      }, i * 300);
    });
  }, []);

  return (
    <div className={styles.logoContainer}>
      {logo_Images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Letter-${i}`}
          className={`${styles.logoImage} ${visibleIndexes.includes(i) ? styles.visible : ''}`}
        />
      ))}
    </div>
  );
}

export default LogoAnimation;
