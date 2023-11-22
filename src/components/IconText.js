import kind from '@enact/core/kind';
import BodyText from '@enact/sandstone/BodyText';
import Image from '@enact/sandstone/Image';

const IconText = kind({
	name: 'IconText',

	render: ({ src, text }) => (
		<div style={{ display: 'flex', margin: '25px', alignItems: 'center', border: '2px solid', borderColor: 'red' }}>
			<Image src={src} style={{width: '48px', height: '48px', border: '2px solid', borderColor: 'green'}}/>
			<BodyText style={{fontSize: '40px', textAlign: 'center', marginTop: '25px', border: '2px solid', borderColor: 'green' }}>{text}</BodyText>
		</div>
	)
});

export default IconText;
