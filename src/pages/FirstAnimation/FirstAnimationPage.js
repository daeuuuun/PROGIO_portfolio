import React from 'react';
import LogoAnimation from '../../containers/FirstAnimationPage/LogoAnimation';
import styles from '../style/FirstAnimation.module.css';

const FirstAnimation = () => {
  return (
    <div className={styles.container}>
      <video
        className={styles.backgroundVideo}
        src="/video/FirstBackground.mp4"
        autoPlay
        muted
        playsInline
      />

      <div className={styles.content}>
        <LogoAnimation />
      </div>
    </div>
  );
};

export default FirstAnimation;
