import kind from '@enact/core/kind';
import styles from './InfomationContainer.module.css';
import MainBannerSlider from './MainBannerSlider';
import EventContainer from './EventContainer';

const InfomationContainer = kind({
    name: 'InfomationContainer',

    render: ()=>(
        <div className={styles.mainContainer}>
             <div className={styles.leftContainer}>
                <MainBannerSlider/>
                <EventContainer/>
            </div>
            <div className={styles.rightContainer}>
                {/* 오른쪽 컨테이너에 들어갈 내용을 여기에 적어주세요 */}
            </div>
        </div>
    )
});

export default InfomationContainer;