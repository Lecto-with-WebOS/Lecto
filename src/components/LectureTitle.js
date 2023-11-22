import kind from '@enact/core/kind';
import Heading from '@enact/sandstone/Heading';

const LectureTitle = kind({
	name: 'LectureTitle',

	render: ({ text }) => (
		<Heading size='large' spacing='small' alignment='center' style={{border: '2px solid', borderColor: 'red'}}>{text}</Heading>
	)
});

export default LectureTitle;
