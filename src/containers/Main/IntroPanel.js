import React from 'react';
import styles from './IntroPanel.module.css';
import LogoAnimation from '../FirstAnimationPage/LogoAnimation';

const IntroPanel = () => {
  return (
    <div className={styles.panel}>
      <video
        className={styles.video}
        src="/video/FirstBackground.mp4"
        autoPlay
        muted
        playsInline
      />
      <div className={styles.content}>
        <LogoAnimation/>
        <p className={styles.subText}>
          견고한 기본에 더해진 세련된 편안함, 내 삶의 본연을 집에서 찾다
        </p>
      </div>
    </div>
  );
};

export default IntroPanel;
