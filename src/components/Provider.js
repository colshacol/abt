import { h, Component } from 'ink';

class Provider extends Component {
	render(props, state, context) {
		return props.children;
	}

	getChildContext() {
		const { children, ...props } = this.props;

		return {
			...props
		}
	}
}

export { Provider }