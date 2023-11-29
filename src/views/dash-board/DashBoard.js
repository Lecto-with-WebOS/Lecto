import kind from '@enact/core/kind';
import styles from "./DashBoard.module.css";
import Header from '../../components/dash-board/Header';
import InfomationContainer from '../../components/dash-board/InfomationContainer';

const DashBoard = kind({
	name: 'DashBoard',

	render: (props) => (
		<div className={styles.root}>
			<Header/>
			<InfomationContainer>

			</InfomationContainer>
		</div>
	)
});




export default DashBoard;