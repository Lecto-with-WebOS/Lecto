import styles from "./DashBoard.module.css";
import Header from '../../components/dash-board/Header';
import InfomationContainer from '../../components/dash-board/InfomationContainer';

const DashBoard = () => {
	return (
		<div className={styles.root}>
			<Header/>
			<InfomationContainer/>
		</div>
	);
};


export default DashBoard;