import regeneratorRuntime from 'regenerator-runtime'
import prettyjson from 'prettyjson'
import fs from 'fs'

const readJsonFile = (filePath: string) => {
	return fs.readFileSync(filePath, 'utf8') |> JSON.parse
}

export const find = (filePath: string, jsonPath: string) => {
	try {
		const json = readJsonFile(filePath)
		return prettyjson.render(json[jsonPath])
	} catch (error) {
		console.log(`\nabt -> ERROR:\n\n`, { error }, '\n\n\nabt -> END_ERROR')
		setTimeout(() => process.exit(0), 250)
	}
}
