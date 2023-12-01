import styles from './MainBannerSlider.module.css';
import React, { useState, useEffect } from 'react';
import data from '../../data/crawled_data1.json'

const MainBannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const imageUrl = data[currentIndex % data.length].imageUrl;

  return (
    <div className={styles.banner}>
      <img src={imageUrl} sizing="fill" alt="Banner" className={styles.bannerImage} />
    </div>
  ); 
}

export default MainBannerSlider;