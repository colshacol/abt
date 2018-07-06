'use strict'

exports.__esModule = true
exports.App = void 0

var _ink = _interopRequireWildcard(require('ink'))

var _inkSpaces = require('ink-spaces')

var _inkSpinner = _interopRequireDefault(require('ink-spinner'))

var _isEmpty = _interopRequireDefault(require('is-empty'))

var _SelectInput = _interopRequireDefault(require('./SelectInput'))

var _shelljs = _interopRequireDefault(require('shelljs'))

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

function _objectSpread(target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i] != null ? arguments[i] : {}
		var ownKeys = Object.keys(source)
		if (typeof Object.getOwnPropertySymbols === 'function') {
			ownKeys = ownKeys.concat(
				Object.getOwnPropertySymbols(source).filter(function(sym) {
					return Object.getOwnPropertyDescriptor(source, sym).enumerable
				})
			)
		}
		ownKeys.forEach(function(key) {
			_defineProperty(target, key, source[key])
		})
	}
	return target
}

function _defineProperty(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, {
			value: value,
			enumerable: true,
			configurable: true,
			writable: true
		})
	} else {
		obj[key] = value
	}
	return obj
}

const generateScriptItems = scripts => {
	const scriptPairs = Object.entries(scripts)
	const sortedByNameLength = scriptPairs.sort((a, b) => {
		return a[0].length < b[0].length
	})
	const totalNameLength = sortedByNameLength[0][0].length + 5
	const items = scriptPairs.reduce((final, [name, script]) => {
		const item = {
			name:
				name +
				Array(totalNameLength - name.length)
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

class App extends _ink.default.Component {
	constructor(...args) {
		var _temp

		return (
			(_temp = super(...args)),
			Object.defineProperty(this, 'state', {
				configurable: true,
				enumerable: true,
				writable: true,
				value: {}
			}),
			Object.defineProperty(this, 'onSelect', {
				configurable: true,
				enumerable: true,
				writable: true,
				value: item => {
					_shelljs.default.exec(item.script)

					_shelljs.default.exit()
				}
			}),
			_temp
		)
	}

	componentDidMount() {
		const { packageJsonPath } = this.context.appVars

		const pkg = require(packageJsonPath)

		this.scripts = generateScriptItems(pkg.scripts)
		this.setState(_objectSpread({}, pkg))
	}

	render(props, state, context) {
		return (0, _ink.h)(
			'div',
			null,
			(0, _isEmpty.default)(state)
				? [
						(0, _ink.h)(_inkSpaces.BlankLines, {
							count: 1,
							key: '0'
						}),
						(0, _ink.h)(_inkSpinner.default, {
							green: true,
							key: '1'
						}),
						(0, _ink.h)(
							_ink.Color,
							{
								key: '2'
							},
							'Loading scripts.'
						)
				  ]
				: !(0, _isEmpty.default)(state)
					? [
							(0, _ink.h)(_inkSpaces.BlankLines, {
								count: 1,
								key: '0'
							}),
							(0, _ink.h)(
								_ink.Color,
								{
									key: '1'
								},
								'[ abt \u2206 choose a script ]'
							),
							(0, _ink.h)(_inkSpaces.BlankLines, {
								count: 1,
								key: '2'
							}),
							(0, _ink.h)(_inkSpaces.BlankLines, {
								count: 1,
								key: '3'
							}),
							(0, _ink.h)(
								'div',
								{
									key: '4'
								},
								(0, _ink.h)(_SelectInput.default, {
									items: this.scripts,
									onSelect: this.onSelect,
									itemComponent: Item
								})
							)
					  ]
					: null
		)
	}
}

exports.App = App

const Item = props => {
	return (0, _ink.h)(
		'span',
		null,
		(0, _ink.h)(
			_ink.Color,
			{
				green: true
			},
			props.name
		),
		(0, _ink.h)(_ink.Color, null, props.script)
	)
}
