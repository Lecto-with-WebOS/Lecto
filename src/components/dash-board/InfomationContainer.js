import kind from '@enact/core/kind';
import styles from './InfomationContainer.module.css';
import MainBannerSlider from './MainBannerSlider';

const InfomationContainer = kind({
    name: 'InfomationContainer',

    render: ()=>(
        <div className={styles.mainContainer}>
            <MainBannerSlider/>
        </div>
    )
});

export default InfomationContainer;