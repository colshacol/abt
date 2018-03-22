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
		const json = readJsonFile(filePath)
		return _prettyjson.default.render(json[jsonPath])
	} catch (error) {
		console.log(`\nabt -> ERROR:\n\n`, {
			error
		})
		setTimeout(() => process.exit(0), 100)
	}
} // export const find = async (filePath, jsonPath, settings = { sort: true }) => {
// 	try {
// 		const json = await jq.run(jsonPath, filePath, settings)
// 		return json
// 	} catch(error) {
// 		console.log(`abt -> ERROR:`, { error })
// 		setTimeout(() => process.exit(0), 100)
// 	}
// }

exports.find = find
