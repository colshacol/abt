#!/usr/bin/env node

import Ink, { h } from 'ink'
import yargs from 'yargs'

import { Provider } from './components/Provider'
import { App } from './components/App'
import { handleArgs } from './utilities/handleArgs'
import { spawnSync } from 'child_process'

let unmount

const onExit = scriptName => {
	unmount()

	spawnSync(`npm`, ['run', scriptName], {
		cwd: process.cwd(),
		env: process.env,
		stdio: [0, 0, process.stderr]
	})
}

unmount = Ink.render(<App onExit={onExit} appVars={yargs.argv |> handleArgs} />)
