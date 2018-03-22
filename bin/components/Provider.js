'use strict'

exports.__esModule = true
exports.Provider = void 0

var _ink = require('ink')

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

function _objectWithoutProperties(source, excluded) {
	if (source == null) return {}
	var target = {}
	var sourceKeys = Object.keys(source)
	var key, i
	for (i = 0; i < sourceKeys.length; i++) {
		key = sourceKeys[i]
		if (excluded.indexOf(key) >= 0) continue
		target[key] = source[key]
	}
	if (Object.getOwnPropertySymbols) {
		var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
		for (i = 0; i < sourceSymbolKeys.length; i++) {
			key = sourceSymbolKeys[i]
			if (excluded.indexOf(key) >= 0) continue
			if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue
			target[key] = source[key]
		}
	}
	return target
}

class Provider extends _ink.Component {
	render(props, state, context) {
		return props.children
	}

	getChildContext() {
		const _props = this.props,
			{ children } = _props,
			props = _objectWithoutProperties(_props, ['children'])

		return _objectSpread({}, props)
	}
}

exports.Provider = Provider
