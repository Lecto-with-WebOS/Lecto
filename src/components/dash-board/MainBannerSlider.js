import kind from '@enact/core/kind';
import styles from './MainBannerSlider.module.css';
import React, { useState, useEffect } from 'react';
import data from '../../data/crawled_data1.json'

const MainBannerSlider = kind({
    name: 'MainBanner',

    computed: {
      imageUrl: ({index}) => data[index % data.length].imageUrl
    },
  
    render: ({imageUrl, ...rest}) => (
      <div {...rest} className={styles.banner}>
        <img src={imageUrl} sizing="fill" alt="Banner" className={styles.bannerImage} />
      </div>
    )
});

const MainBannerSliderWrapper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return <MainBannerSlider index={currentIndex} />;
};

export default MainBannerSliderWrapper;