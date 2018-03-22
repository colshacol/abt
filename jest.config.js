module.exports = {
	automock: false,
	verbose: true,
	silent: false,
	testMatch: ['**/_tests/*.t.js'],
	transform: {
		'^.+\\.js$': 'babel-jest'
	},
	testEnvironment: 'jsdom'
}
