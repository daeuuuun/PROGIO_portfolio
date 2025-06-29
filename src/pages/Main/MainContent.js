import React, { useEffect, useState } from 'react';
import styles from '../style/MainContent.module.css';

const MainContent = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        setCurrentStep((prev) => Math.min(prev + 1, 2));
      } else if (e.deltaY < 0) {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div
      className={`${styles.mainContainer} ${
        currentStep === 1 ? styles.scrolled1 : ''
      } ${currentStep === 2 ? styles.scrolled2 : ''}`}
    >
      <div className={styles.leftSection}>
        <img className={styles.pillowsImg} src='img/pillows_1920.jpg' alt='첫 이미지' />
        {currentStep >= 1 && (
          <div className={styles.overlayText}>
            <h1>푸르지오가 끊임없이 사람들의 삶의 질을 고민하고 있습니다.</h1>
          </div>
        )}
      </div>

      <div className={styles.secondSection}>
        <img className={styles.pillowsImg} src='img/pillows_1920.jpg' alt='두 번째 이미지' />
        {currentStep === 2 && (
          <div className={styles.secondOverlayText}>
            <h1>푸르지오가 끊임없이 사람들의 삶의 질을 고민하고 있습니다. 222</h1>
          </div>
        )}
      </div>

      {currentStep === 0 && (
        <div className={styles.secondTextSection}>
          <div className={styles.textBox}>
            <h1>푸르지오가 끊임없이 사람들의 삶의 질을 고민하고 있습니다.</h1>
            <span>
              푸르지오가 끊임없이 사람들의 삶의 질을 고민하고 아파트 단지의 시설과 조경을 아름답게 꾸미며
              누구보다 먼저 최첨단 시스템을 활용하는 이유는 사람들이 이곳에서 누리는 일상의 모든 부분에서
              어떠한 불편함이나 수고스러움 없이 가장 편안하게 살길 바라기 때문입니다.
            </span>
          </div>
        </div>
      )}

      {currentStep === 1 && (
        <div className={styles.secondTextSection}>
          <div className={styles.textBox}>
            <h1>푸르지오가 끊임없이 사람들의 삶의 질을 고민하고 있습니다. 222</h1>
            <span>
              푸르지오는 디자인과 기술의 혁신을 통해 더 나은 주거 환경을 제공하며,
              사람들의 삶 속에서 새로운 가치를 창조해 나가고 있습니다.
            </span>
          </div>
        </div>
      )}

      <div className={styles.thirdWrapperSection}>
        <div className={styles.thirdImageSection}>
          <img className={styles.pillowsImg} src='img/pillows_1920.jpg' alt='세 번째 이미지' />
        </div>
        <div className={styles.thirdTextSection}>
          <div className={styles.textBox}>
            <h1>푸르지오가 끊임없이 사람들의 삶의 질을 고민하고 있습니다.</h1>
            <span>
              사람들의 일상 속 작은 부분까지 혁신하며 더 나은 미래를 만들어가는 푸르지오의 비전을 소개합니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
