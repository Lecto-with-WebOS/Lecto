import kind from '@enact/core/kind';
import styles from "./DashBoard.module.css";
import Header from '../../components/dash-board/Header';

const DashBoard = kind({
	name: 'DashBoard',

	render: (props) => (
		<div className={styles.root}>
			<Header></Header>
		</div>
	)
});




export default DashBoard;