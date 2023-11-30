import kind from '@enact/core/kind';
import BodyText from '@enact/sandstone/BodyText';

import LocationMark from '../asset/images/lecture_location_mark.svg';
import HomeButton from '../asset/images/lecture_home_button.svg';

import Weather from '../asset/images/lecture_weather.svg';


const LectureFooter = kind({
	name: 'LectureFooter',

	render: ({ classroom_name, temperature, current_time, yyyy_mm_dd }) => (
		<div style={{ width: '100%', display: 'flex', flexDirection: 'row', height: '220px', backgroundColor: '#2B6590', border: '2px solid', borderColor: 'purple' }}>
			<div>
				<div style={{ display: 'flex', width: '800px', border: '2px solid', borderColor: 'yellow' }}>
					<img src={LocationMark} alt="" style={{ width: '50px', height: '50px', border: '2px solid', borderColor: 'red' }} />
					<BodyText style={{ width: '700px', fontSize: '40px', textAlign: 'center', border: '2px solid', borderColor: 'green' }}>{classroom_name}</BodyText>
				</div>
			</div>
			<div>
				<div style={{ display: 'flex', width: '800px', border: '2px solid', borderColor: 'yellow' }}>
					<img src={HomeButton} alt="" style={{ width: '180px', height: '180px', border: '2px solid', borderColor: 'red' }} />
				</div>
			</div>
			<div style={{ display: 'flex', width: '800px', border: '2px solid', borderColor: 'yellow' }}>
				<BodyText style={{ width: '60px', fontSize: '40px', textAlign: 'center', border: '2px solid', borderColor: 'green' }}>{temperature}</BodyText>
				<img src={Weather} alt="" style={{ width: '120px', height: '120px', border: '2px solid', borderColor: 'red' }} />
				<div style={{ width: '1px', htight: '20px', backgroundColor: 'white', marginLeft: '30px' }} />
				<div>
					<BodyText style={{ width: '60px', fontSize: '40px', textAlign: 'center', border: '2px solid', borderColor: 'green' }}>{current_time}</BodyText>
					<BodyText style={{ width: '60px', fontSize: '40px', textAlign: 'center', border: '2px solid', borderColor: 'green' }}>{yyyy_mm_dd}</BodyText>
				</div>
			</div>
		</div>
	)
});

export default LectureFooter;
