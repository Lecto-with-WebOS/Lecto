import kind from '@enact/core/kind';
import { Panel } from '@enact/sandstone/Panels';


import IconTextPanel from '../components/IconText';
import LectureTitle from '../components/LectureTitle';
import LectureProgressBar from '../components/LectureProgressBar';

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props} style={{ border: '2px solid', borderColor: 'blue' }}>
			<div style={{ border: '2px solid', borderColor: 'yellow' }}>
				<LectureTitle text='webOS 오픈소스 실전 프로젝트' />
				<IconTextPanel src='https://dummyimage.com/256/e048e0/0011ff' text='오재덕 교수님' />
				<IconTextPanel src='https://dummyimage.com/256/e048e0/0011ff' text='학생 수 : (23/25)' />
				<IconTextPanel src='https://dummyimage.com/256/e048e0/0011ff' text='수업 시간 : 15:00 ~ 17:45' />
				<LectureProgressBar amount={0.65} start='15:00' end='17:45'/>
			</div>
		</Panel>
	)
});

export default MainPanel;
