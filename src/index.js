#!/usr/bin/env node

import regeneratorRuntime from 'regenerator-runtime'
import * as jq from 'node-jq'
import Ink, { h } from 'ink'
import fs from 'fs'

import { Provider } from './components/Provider'
import { App } from './components/App'

const args = require('yargs').argv

args._[0] ||= '.scripts'

Ink.render(
	<Provider args={args}>
		<App />
	</Provider>
)