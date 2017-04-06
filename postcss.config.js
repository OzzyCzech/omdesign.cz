module.exports = {
	plugins: {
		'postcss-easy-import': {},
		'postcss-nested': {},
		'postcss-cssnext': {
			browsers: ['last 2 versions', '> 5%'],
		},
	},
};