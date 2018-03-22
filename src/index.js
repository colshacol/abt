#!/usr/bin/env node

import Ink, { h } from 'ink'
import yargs from 'yargs'

import { Provider } from './components/Provider'
import { App } from './components/App'
import { handleArgs } from './utilities/handleArgs'

Ink.render(
	<Provider appVars={yargs.argv |> handleArgs}>
		<App />
	</Provider>
)
