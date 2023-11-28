import styled from 'styled-components';
import kind from '@enact/core/kind';

const DashBoard = kind({
	name: 'DashBoard',

	render: (props) => (
		<RootDiv>

		</RootDiv>
	)
});

const RootDiv = styled.div`
	width: 100%;
	background-image: url("src/asset/dash_board_background.svg");
	background-size: cover;
`;



export default DashBoard;