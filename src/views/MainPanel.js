import kind from '@enact/core/kind';


import IconTextPanel from '../components/IconText';
import LectureTitle from '../components/LectureTitle';
import LectureProgressBar from '../components/LectureProgressBar';
import LectureLeftSide from '../components/LectureLeftSide';
import LectureStudyingHorse from '../components/LectureStudyingHorse';
import LectureSSULOGO from '../components/LectureSSULOGO';

const MainPanel = kind({
	name: 'MainPanel',

	render: () => (
		<div style={{ border: '2px solid', borderColor: 'blue', display: 'flex', flexDirection: 'column'}}>
			<LectureSSULOGO style={{ width: '150px', height: '150px', border: '2px solid', borderColor: 'purple' }} />
			<div style={{ width: '100%', border: '2px solid', borderColor: 'purple', display: 'flex', justifyContent: 'space-between' }}>
				<LectureLeftSide />
				<div style={{ display: 'flex', justifyContent: 'center', width: '980px', height: '750px', marginLeft: '250px', border: '2px solid', borderColor: 'green' }}>
					<div style={{ width: '900px', border: '2px solid', borderColor: 'yellow' }}>
						<LectureTitle text='webOS 오픈소스 실전 프로젝트' />
						<IconTextPanel src='https://dummyimage.com/256/e048e0/0011ff' text='오재덕 교수님' />
						<IconTextPanel src='https://dummyimage.com/256/e048e0/0011ff' text='학생 수 : (23/25)' />
						<IconTextPanel src='https://dummyimage.com/256/e048e0/0011ff' text='수업 시간 : 15:00 ~ 17:45' />
						<LectureProgressBar amount={0.65} start='15:00' end='17:45' />
					</div>
				</div>
				<LectureStudyingHorse />
			</div>
		</div>
	)
});

export default MainPanel;
