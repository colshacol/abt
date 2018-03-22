'use strict'

exports.__esModule = true
exports.find = void 0

var _regeneratorRuntime = _interopRequireDefault(require('regenerator-runtime'))

var jq = _interopRequireWildcard(require('node-jq'))

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

const find = async (
	filePath,
	jsonPath,
	settings = {
		sort: true
	}
) => {
	const json = await jq.run(jsonPath, filePath, settings)
	return json
}

exports.find = find
