import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../style/MainContent.module.css';

const MainContent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (currentStep === 2 && !isAnimationDone) {
      const timer = setTimeout(() => {
        setIsAnimationDone(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, isAnimationDone]);

  useEffect(() => {
    if (!isAnimationDone) return;

    const handleScrollToPremium = (e) => {
      e.preventDefault();
      navigate('/premium');
    };

    window.addEventListener('wheel', handleScrollToPremium, { once: true });
    window.addEventListener('touchmove', handleScrollToPremium, { once: true });

    return () => {
      window.removeEventListener('wheel', handleScrollToPremium);
      window.removeEventListener('touchmove', handleScrollToPremium);
    };
  }, [isAnimationDone, navigate]);

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
            <h1>편안함만 있길</h1>
          </div>
        )}
      </div>

      <div className={styles.secondSection}>
        <img className={styles.pillowsImg} src='img/camera_1920.jpg' alt='두 번째 이미지' />
        {currentStep === 2 && (
          <div className={styles.secondOverlayText}>
            <h1>나를 닮은 우리집</h1>
          </div>
        )}
      </div>

      {currentStep === 0 && (
        <div className={styles.secondTextSection}>
          <div className={styles.textBox}>
            <h1>가장 편안한 상태로 살아가길</h1>
            <span>
              푸르지오가 끊임없이 사람들의 삶의 질을 고민하고
              아파트 단지의 시설과 조경을 아름답게 꾸미며
              누구보다 먼저 최첨단 시스템을 활용하는 까닭은
              사람들이 이곳에서 누리는 일상의 모든 부분에
              어떠한 불편함이나 수고스러움 없이
              가장 편안한 상태로 살아가길 바라기 때문입니다.
            </span>
          </div>
        </div>
      )}

      {currentStep === 1 && (
        <div className={styles.secondTextSection}>
          <div className={styles.textBox}>
            <h1>나를 닮은 우리집</h1>
            <span>
              나의 가족을 위해 맛있는 요리를 하는 소리
              타닥타닥 타는 향초에서 나는 향긋한 냄새
              따뜻한 커피를 마셨을 때의 온기
              모든 사람, 사물, 공기, 소리, 책, 질감 모두
              가장 자연스러운 상태의 나를 닮은
              우리집이 됩니다.
            </span>
          </div>
        </div>
      )}

      <div className={styles.thirdWrapperSection}>
        <div className={styles.thirdImageSection}>
          <img className={styles.pillowsImg} src='img/coffee_1920.jpg' alt='세 번째 이미지' />
        </div>
        <div className={styles.thirdTextSection}>
          <div className={styles.textBox}>
            <h1>가장 나에 가까운<br/>본연의 모습</h1>
            <span>
              지친 하루를 마치고 가장 나에 가까운 본연의 모습으로
              돌아와 누리는 세련된 편안함.
              푸르지오가 그리는 프리미엄 입니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;