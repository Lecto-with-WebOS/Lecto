import kind from '@enact/core/kind';
import BodyText from '@enact/sandstone/BodyText';

import LectureClock from '../asset/images/lecture_clock.svg';


const IconTextTime = kind({
	name: 'IconTextTime',

	render: ({ text }) => (
		<div style={{ display: 'flex', margin: '25px', alignItems: 'center', border: '2px solid', borderColor: 'red' }}>
			<img src={LectureClock} style={{ width: '50px', height: '50px', border: '2px solid', borderColor: 'green' }} alt="" />
			<BodyText style={{ fontSize: '40px', textAlign: 'center', marginTop: '25px', border: '2px solid', borderColor: 'green' }}>{text}</BodyText>
		</div>
	)
});

export default IconTextTime;
