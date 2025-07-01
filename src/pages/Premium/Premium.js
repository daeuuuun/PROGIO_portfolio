import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../style/Premium.module.css";

const data = [
  {
    title: "Be Premium",
    subtitle: "서브 타이틀",
    description: "설명란인데 적기 귀찮아아아아설명란인데 적기 귀찮아아아아설명란인데 적기 귀찮아아아아설명란인데 적기 귀찮아아아아설명란인데 적기 귀찮아아아아설명란인데 적기 귀찮아아아아설명란인데 적기 귀찮아아아아설명란인데 적기 귀찮아아아아설명란인데 적기 귀찮아아아아설명란인데 적기 귀찮아아아아설명란인데 적기 귀찮아아아아설명란인데 적기 귀찮아아아아설명란인데 적기 귀찮아아아아",
    image: "img/Prugio_apt.jpg",
  },
  {
    title: "Be Right",
    subtitle: "서브 타이틀",
    description: "설명란인데 적기 귀찮아아아아 222222",
    image: "img/Prugio_apt2.jpg",
  },
  {
    title: "Be Gentle",
    subtitle: "서브 타이틀",
    description: "설명란인데 적기 귀찮아아아아 333333",
    image: "img/Prugio_apt3.jpg",
  },
  {
    title: "Be Smart",
    subtitle: "서브 타이틀",
    description: "설명란인데 적기 귀찮아아아아 444444",
    image: "img/Prugio_apt2.jpg",
  },
];

export default function Premium() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

    useEffect(() => {
    const handleScrollBack = (e) => {
      if (e.deltaY < 0) {
        e.preventDefault();
        navigate(-1);
      }
    };

    window.addEventListener('wheel', handleScrollBack, { passive: false, once: true });

    return () => {
      window.removeEventListener('wheel', handleScrollBack);
    };
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.mainContentWrapper}>
        <div className={styles.leftSide}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={styles.textBlock}
            >
              <h3 className={styles.mainHeader}>PRUGIO APARTMENT</h3>
              <h1 className={styles.mainTitle}>{data[index].title}</h1>
              <h2 className={styles.mainSubtitle}>{data[index].subtitle}</h2>
              <p className={styles.mainDescription}>{data[index].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.centerImage}>
          <div className={styles.imageWrapper}>
            <AnimatePresence mode="wait">
              <motion.img
                key={data[index].image}
                src={data[index].image}
                alt={data[index].title}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={styles.mainImage}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <button onClick={handlePrev} className={styles.navButton} aria-label="Previous">
          <ChevronLeft />
        </button>
        <button onClick={handleNext} className={styles.navButton} aria-label="Next">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
