import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';

import css from './App.module.less';
import DashBoard from '../views/dash-board/DashBoard';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<div {...props}>
			<DashBoard/>
		</div>
	)
});

export default ThemeDecorator(App);
