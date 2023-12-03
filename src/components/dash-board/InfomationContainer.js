import styles from './InfomationContainer.module.css';
import MainBannerSlider from './MainBannerSlider';
import EventContainer from './EventContainer';
import Calender from '../Calender';

const InfomationContainer = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <MainBannerSlider/>
                <EventContainer/>
            </div>
            <div className={styles.rightContainer}>
                <Calender/>
            </div>
        </div>
    );
};

export default InfomationContainer;