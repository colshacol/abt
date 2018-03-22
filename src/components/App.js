import Ink, { h, Text } from 'ink'
import { Tabs, Spaces, BlankLines } from 'ink-spaces'
import Spinner from 'ink-spinner'

import { PACKAGE_JSON_SCRIPTS, PACKAGE_JSON } from '../consts'
import { find } from '../utilities/find'

export class App extends Ink.Component {
	json = ''

	state = {
		gotJSON: false
	}

	componentDidMount() {
		this.getJSON()
	}

	render(props, state, context) {
		return (
			<div>
				<Choose>
					<When condition={!state.gotJSON}>
						<BlankLines count={2} />
						<Spinner green/>
						<Text>Getting the JSON.</Text>
					</When>
					<When condition={state.gotJSON}>
						<BlankLines count={2} />
						<Text>["{PACKAGE_JSON}"]{this.context.args._[0]} == </Text>
						<Text>{this.json}</Text>
					</When>
				</Choose>
			</div>
		)
	}

	getJSON = async () => {
		const json = await find(PACKAGE_JSON, this.context.args._[0])
		this.setJSON(json)
	}

	setJSON = (json: any) => {
		this.json = json

		this.setState(state => ({
			gotJSON: true
		}))

		setTimeout(() => process.exit(0), 100)
	}
}
