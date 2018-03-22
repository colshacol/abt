#!/usr/bin/env node

import regeneratorRuntime from 'regenerator-runtime'
import * as jq from 'node-jq'
import Ink, { h } from 'ink'
import fs from 'fs'

import { Provider } from './components/Provider'
import { App } from './components/App'
import { handleArgs } from './utilities/handleArgs'

const args = require('yargs').argv
handleArgs(args)

Ink.render(
	<Provider args={args}>
		<App />
	</Provider>
)