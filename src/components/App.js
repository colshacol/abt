import Ink, { h, Text } from 'ink'
import { Tabs, Spaces, BlankLines } from 'ink-spaces'
import Spinner from 'ink-spinner'

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
						<Spinner green />
						<Text>Getting the JSON.</Text>
					</When>
					<When condition={state.gotJSON}>
						<BlankLines count={2} />
						<Text>abt: {this.pathText}</Text>
						<BlankLines count={2} />
						<div>
							<Text>{this.json}</Text>
						</div>
					</When>
				</Choose>
			</div>
		)
	}

	get pathText() {
		const { appVars } = this.context
		return `["${appVars.packageJsonPath}"].${appVars.propertyPath}`
	}

	getJSON = async () => {
		const { packageJsonPath, propertyPath } = this.context.appVars
		const json = await find(packageJsonPath, propertyPath)
		this.setJSON(json === 'null' ? '{}' : json)
	}

	setJSON = (json: any) => {
		this.json = json

		this.setState(
			state => ({
				gotJSON: true
			}),
			() => setTimeout(() => process.exit(0), 250)
		)
	}
}
