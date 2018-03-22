import regeneratorRuntime from 'regenerator-runtime'
import prettyjson from 'prettyjson'
import fs from 'fs'

const readJsonFile = (filePath: string) => {
	return fs.readFileSync(filePath, 'utf8') |> JSON.parse
}

export const find = (filePath: string, jsonPath: string) => {
	try {
		const json = filePath |> readJsonFile
		return json[jsonPath] |> prettyjson.render
	} catch (error) {
		if (String(error).includes('Cannot convert undefined or null to object')) {
			return "abt: jsonPath doesn't exist in package.json"
		} else {
			console.log(`\nabt -> ERROR:\n\n`, { error }, '\n\n\nabt -> END_ERROR')
			setTimeout(() => process.exit(0), 250)
		}
	}
}
