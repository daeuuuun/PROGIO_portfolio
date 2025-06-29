import React from 'react';
import styles from './IntroPanel.module.css';
import LogoAnimation from '../FirstAnimationPage/LogoAnimation';

const IntroPanel = ({ shrink }) => {
  return (
    <div className={`${styles.panel} ${shrink ? styles.shrink : ''}`}>
      <video
        className={`${styles.backgroundVideo} ${shrink ? styles.fadeOut : ''}`}
        src="/video/FirstBackground.mp4"
        autoPlay
        muted
        playsInline
/>

      <div className={`${styles.content} ${shrink ? styles.shrinkContent : ''}`}>
        <LogoAnimation shrink={shrink} />
      </div>
    </div>
  );
};

export default IntroPanel;
