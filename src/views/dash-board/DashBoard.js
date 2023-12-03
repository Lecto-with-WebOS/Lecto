import styles from "./DashBoard.module.css";
import Header from '../../components/dash-board/Header';
import InfomationContainer from '../../components/dash-board/InfomationContainer';
import ssu_charactor from '../../asset/ssu_character.png';

const DashBoard = () => {
	return (
		<div className={styles.root}>
			<Header/>
			<InfomationContainer/>
			<img src={ssu_charactor} alt="Image Description" className={styles.fixedImage} />
		</div>
	);
};


export default DashBoard;