import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import styles from './MainBannerSlider.module.css';
import React, { useState, useEffect } from 'react';
import data from '../../data/crawled_data1.json'

const MainBannerSliderBase = kind({
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

const MainBannerSlider = MoonstoneDecorator(MainBannerSliderBase);

const MainBannerSliderWrapper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return <MainBannerSlider index={currentIndex} />;
};

export default MainBannerSliderWrapper;