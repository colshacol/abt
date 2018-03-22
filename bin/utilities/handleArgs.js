'use strict'

exports.__esModule = true
exports.handleArgs = void 0

const handleArgs = args => {
	const _propertyPath = args._[0] || '.scripts'

	const propertyPath =
		_propertyPath === '.DD'
			? 'devDependencies'
			: _propertyPath === '.PD'
				? 'peerDependencies'
				: _propertyPath === '.D'
					? 'dependencies'
					: _propertyPath === '.V' ? 'version' : _propertyPath.slice(1)
	return {
		packageJsonPath: `${process.env.PWD}/package.json`,
		pwd: process.env.PWD,
		propertyPath
	}
}

exports.handleArgs = handleArgs
