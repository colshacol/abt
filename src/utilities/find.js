import regeneratorRuntime from 'regenerator-runtime'
import * as jq from 'node-jq'

export const find = async (filePath, jsonPath, settings = { sort: true }) => {
	const json = await jq.run(jsonPath, filePath, settings)
	return json
}