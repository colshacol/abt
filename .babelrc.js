module.exports = api => {
	api.cache(true)

	return {
		presets: [
			[
				'@babel/preset-env',
				{
					targets: {
						node: '8.1'
					},
					loose: true
				}
			],
			'@babel/preset-flow'
		],
		plugins: [
			'@babel/plugin-proposal-class-properties',
			'@babel/plugin-proposal-optional-chaining',
			[
				'@babel/plugin-proposal-pipeline-operator',
				{
					proposal: 'minimal'
				}
			],
			'@babel/plugin-proposal-numeric-separator',
			'@babel/plugin-proposal-do-expressions',
			'@babel/plugin-proposal-export-namespace-from',
			'@babel/plugin-proposal-throw-expressions',
			'@babel/plugin-proposal-object-rest-spread',
			'@babel/plugin-proposal-async-generator-functions',
			'@babel/plugin-proposal-optional-catch-binding',
			'@babel/plugin-proposal-unicode-property-regex',
			'@babel/plugin-syntax-dynamic-import',
			'@babel/plugin-syntax-import-meta',
			'@babel/plugin-proposal-nullish-coalescing-operator',
			'@babel/plugin-proposal-logical-assignment-operators',
			'babel-plugin-jsx-control-statements',
			[
				'@babel/plugin-transform-react-jsx',
				{
					pragma: 'h'
				}
			]
		]
	}
}
