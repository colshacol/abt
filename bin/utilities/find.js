'use strict'

exports.__esModule = true
exports.find = void 0

var _regeneratorRuntime = _interopRequireDefault(require('regenerator-runtime'))

var _prettyjson = _interopRequireDefault(require('prettyjson'))

var _fs = _interopRequireDefault(require('fs'))

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj }
}

const readJsonFile = filePath => {
	var _fs$readFileSync

	return (
		(_fs$readFileSync = _fs.default.readFileSync(filePath, 'utf8')), JSON.parse(_fs$readFileSync)
	)
}

const find = (filePath, jsonPath) => {
	try {
		var _filePath, _json$jsonPath

		const json = ((_filePath = filePath), readJsonFile(_filePath))
		return (_json$jsonPath = json[jsonPath]), _prettyjson.default.render(_json$jsonPath)
	} catch (error) {
		if (String(error).includes('Cannot convert undefined or null to object')) {
			return "abt: jsonPath doesn't exist in package.json"
		} else {
			console.log(
				`\nabt -> ERROR:\n\n`,
				{
					error
				},
				'\n\n\nabt -> END_ERROR'
			)
			setTimeout(() => process.exit(0), 250)
		}
	}
}

exports.find = find
