'use strict'

exports.__esModule = true
exports.handleArgs = void 0

const handleArgs = args => {
	var _args$_

	args._[0] === '.DD' && (args._[0] = '.devDependencies')
	args._[0] === '.PD' && (args._[0] = '.peerDependencies')
	args._[0] === '.D' && (args._[0] = '.dependencies')
	args._[0] === '.V' && (args._[0] = '.version')
	;(_args$_ = args._)[0] || (_args$_[0] = '.scripts')
}

exports.handleArgs = handleArgs
