import React, { useEffect, useState } from 'react';
import styles from './LogoAnimation.module.css';

const logoImages = [
  '/img/Prugio_P_Whitever.png',
  '/img/Prugio_R_Whitever.png',
  '/img/Prugio_U_Whitever.png',
  '/img/Prugio_G_Whitever.png',
  '/img/Prugio_I_Whitever.png',
  '/img/Prugio_O_Whitever.png'
];

const appearOrder = [0, 3, 2, 4, 1, 5];

function LogoAnimation({ shrink }) {
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    appearOrder.forEach((realIndex, i) => {
      setTimeout(() => {
        setVisibleIndexes((prev) => [...prev, realIndex]);
      }, i * 300);
    });
  }, []);

  return (
    <div className={`${styles.logoContainer} ${shrink ? styles.shrinkLogoContainer : ''}`}>
      {logoImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Letter-${i}`}
          className={`${styles.logoImage} ${visibleIndexes.includes(i) ? styles.visible : ''} ${shrink ? styles.shrinkLogo : ''}`}
        />
      ))}
    </div>
  );
}

export default LogoAnimation;
