import styles from './EventContainer.module.css';
import map_logo from '../../asset/map_logo.png';
import snowy_icon from '../../asset/snowy_icon.png'
import clock from '../../asset/clock.png';

const EventContainer = () => {
    return (
        <div className={styles.eventContainer}>
        <div className={styles.lectureData}>
            <img src={map_logo} alt="Logo"/>
            <h3 className={styles.paragraph}>숭덕경상관 02112</h3>
            <h4>(PC실습실)</h4>
        </div>
        <div className={styles.weatherContainer}>
            <div className={styles.weather}>
                <img src={snowy_icon} alt="weather-icon" />        
                <h2>24˚</h2>
            </div>
            <div className={styles.temperatures}>
                <span>최고 : </span>
                <span>8˚</span>
                <span>최저 : </span>
                <span>8˚</span>
            </div>
        </div>
        <div className={styles.timeContainer}>
            <img src={clock} alt="Logo"/>
            <h1 className={styles.nowTime}>15:09</h1>
            <p>2023/12/03</p>
        </div>
    </div>
    );
};

export default EventContainer;