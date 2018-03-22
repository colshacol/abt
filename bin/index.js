#!/usr/bin/env node
'use strict'

var _regeneratorRuntime = _interopRequireDefault(require('regenerator-runtime'))

var jq = _interopRequireWildcard(require('node-jq'))

var _ink = _interopRequireWildcard(require('ink'))

var _fs = _interopRequireDefault(require('fs'))

var _Provider = require('./components/Provider')

var _App = require('./components/App')

var _handleArgs = require('./utilities/handleArgs')

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj
	} else {
		var newObj = {}
		if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) {
					var desc =
						Object.defineProperty && Object.getOwnPropertyDescriptor
							? Object.getOwnPropertyDescriptor(obj, key)
							: {}
					if (desc.get || desc.set) {
						Object.defineProperty(newObj, key, desc)
					} else {
						newObj[key] = obj[key]
					}
				}
			}
		}
		newObj.default = obj
		return newObj
	}
}

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj }
}

const args = require('yargs').argv

;(0, _handleArgs.handleArgs)(args)

_ink.default.render(
	(0, _ink.h)(
		_Provider.Provider,
		{
			args: args
		},
		(0, _ink.h)(_App.App, null)
	)
)