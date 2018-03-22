'use strict'

exports.__esModule = true
exports.App = void 0

var _ink = _interopRequireWildcard(require('ink'))

var _inkSpaces = require('ink-spaces')

var _inkSpinner = _interopRequireDefault(require('ink-spinner'))

var _consts = require('../consts')

var _find = require('../utilities/find')

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj }
}

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

class App extends _ink.default.Component {
	constructor(...args) {
		var _temp

		return (
			(_temp = super(...args)),
			Object.defineProperty(this, 'json', {
				configurable: true,
				enumerable: true,
				writable: true,
				value: ''
			}),
			Object.defineProperty(this, 'state', {
				configurable: true,
				enumerable: true,
				writable: true,
				value: {
					gotJSON: false
				}
			}),
			Object.defineProperty(this, 'getJSON', {
				configurable: true,
				enumerable: true,
				writable: true,
				value: async () => {
					const json = await (0, _find.find)(_consts.PACKAGE_JSON, this.context.args._[0])
					this.setJSON(json === 'null' ? '{}' : json)
				}
			}),
			Object.defineProperty(this, 'setJSON', {
				configurable: true,
				enumerable: true,
				writable: true,
				value: json => {
					this.json = json
					this.setState(state => ({
						gotJSON: true
					}))
					setTimeout(() => process.exit(0), 100)
				}
			}),
			_temp
		)
	}

	componentDidMount() {
		this.getJSON()
	}

	render(props, state, context) {
		return (0, _ink.h)(
			'div',
			null,
			!state.gotJSON
				? [
						(0, _ink.h)(_inkSpaces.BlankLines, {
							count: 2,
							key: '0'
						}),
						(0, _ink.h)(_inkSpinner.default, {
							green: true,
							key: '1'
						}),
						(0, _ink.h)(
							_ink.Text,
							{
								key: '2'
							},
							'Getting the JSON.'
						)
				  ]
				: state.gotJSON
					? [
							(0, _ink.h)(_inkSpaces.BlankLines, {
								count: 2,
								key: '0'
							}),
							(0, _ink.h)(
								_ink.Text,
								{
									key: '1'
								},
								'["',
								_consts.PACKAGE_JSON,
								'"]',
								this.context.args._[0],
								' == '
							),
							(0, _ink.h)(
								_ink.Text,
								{
									key: '2'
								},
								this.json
							)
					  ]
					: null
		)
	}
}

exports.App = App
