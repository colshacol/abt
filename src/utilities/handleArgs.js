export const handleArgs = (args) => {
	args._[0] === '.DD' && (args._[0] = '.devDependencies')
	args._[0] === '.PD' && (args._[0] = '.peerDependencies')
	args._[0] === '.D' && (args._[0] = '.dependencies')
	args._[0] === '.V' && (args._[0] = '.version')
	args._[0] ||= '.scripts'
}