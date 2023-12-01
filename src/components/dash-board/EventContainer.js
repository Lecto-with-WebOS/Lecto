import kind from '@enact/core/kind';
import styles from './EventContainer.module.css';
import map_logo from '../../asset/map_logo.png';

const EventContainer = () => {
    return (
        <div className={styles.eventContainer}>
        <div className={styles.lectureData}>
            <img src={map_logo} alt="Logo"/>
            숭덕경상관 02112 <br/>
            <br/>(PC실습실)
        </div>
        <div className={styles.time}>
            {/* 시간 정보를 여기에 적어주세요 */}
        </div>
        <div className={styles.map}>
            {/* 지도 정보를 여기에 적어주세요 */}
        </div>
    </div>
    );
};

export default EventContainer;