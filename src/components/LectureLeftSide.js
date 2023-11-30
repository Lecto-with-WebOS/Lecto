import kind from '@enact/core/kind';
import LeftSide from '../asset/images/lecture_leftside.svg';

const LectureLeftSide = kind({
	name: 'LectureLeftSide',

	render: () => (
		<div style={{ width: '100px', height: '100px', display: 'flex', marginTop: '350px', alignItems: 'center', border: '2px solid', borderColor: 'red' }}>
			<img src={LeftSide} alt="" />
		</div>
	)
});

export default LectureLeftSide;
