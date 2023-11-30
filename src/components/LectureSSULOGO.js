import kind from '@enact/core/kind';
import Logo from '../asset/images/lecture_ssu_logo.svg';

const LectureSSULOGO = kind({
	name: 'LectureSSULOGO',

	render: () => (
		<div style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', border: '2px solid', borderColor: 'red' }}>
			<img src={Logo} alt="" />
		</div>
	)
});

export default LectureSSULOGO;
