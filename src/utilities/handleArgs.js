export const handleArgs = args => {
	const _propertyPath = args._[0] || '.scripts'

	const propertyPath = do {
		if (_propertyPath === '.DD') {
			;('devDependencies')
		} else if (_propertyPath === '.PD') {
			;('peerDependencies')
		} else if (_propertyPath === '.D') {
			;('dependencies')
		} else if (_propertyPath === '.V') {
			;('version')
		} else {
			_propertyPath.slice(1)
		}
	}

	return {
		packageJsonPath: `${process.env.PWD}/package.json`,
		pwd: process.env.PWD,
		propertyPath
	}
}
