import Ink, { h, Color } from 'ink'
import { Tabs, Spaces, BlankLines } from 'ink-spaces'
import Spinner from 'ink-spinner'
import isEmpty from 'is-empty'
import SelectInput from './SelectInput'
import shell from 'shelljs'

const generateScriptItems = scripts => {
	const scriptPairs = Object.entries(scripts)

	const sortedByNameLength = scriptPairs.sort((a, b) => {
		return a[0].length < b[0].length
	})

	const totalNameLength = sortedByNameLength[0][0].length + 5

	const items = scriptPairs.reduce((final, [name, script]) => {
		const stringLength = totalNameLength - name.length
		const item = {
			name:
				name +
				Array(stringLength < 0 ? 5 : stringLength)
					.fill(' ')
					.join(''),
			script
		}
		final.push(item)
		return final
	}, [])

	return items.sort((a, b) => {
		return a.name[0] > b.name[0]
	})
}

export class App extends Ink.Component {
	state = {}

	componentDidMount() {
		const { packageJsonPath } = this.context.appVars
		const pkg = require(packageJsonPath)
		this.scripts = generateScriptItems(pkg.scripts)
		this.setState({ ...pkg })
	}

	onSelect = item => {
		this.setState({ EXEC: true })
		shell.exec(`npm run ${item.name}`, { cwd: process.cwd() })
		shell.exit()
		process.exit(0)
	}

	render(props, state, context) {
		return (
			<div>
				<Choose>
					<When condition={state.EXEC}>
						<Color />
					</When>
					<When condition={isEmpty(state)}>
						<BlankLines count={1} />
						<Spinner green />
						<Color>Loading scripts.</Color>
					</When>
					<When condition={!isEmpty(state)}>
						<BlankLines count={1} />
						<Color>[ abt ∆ choose a script ]</Color>
						<BlankLines count={1} />
						<BlankLines count={1} />
						<div>
							<SelectInput items={this.scripts} onSelect={this.onSelect} itemComponent={Item} />
						</div>
					</When>
				</Choose>
			</div>
		)
	}
}

const Item = props => {
	return (
		<span>
			<Color green>{props.name}</Color>
			<Color>{props.script}</Color>
		</span>
	)
}
