module.exports = {

	async exportPathMap() {
		return {
			"/": {page: "/"},
			"/contact": {page: "/contact", query: {title: "hello-nextjs"}},
			"/resume": {page: "/resume", query: {title: "learn-nextjs"}},
			"/work": {page: "/work", query: {title: "deploy-nextjs"}}
		}
	},

	webpack: (config, {dev}) => {
		config.module.rules.push(
				{
					test: /\.css$/,
					loader: 'emit-file-loader',
					options: {
						name: 'dist/[path][name].[ext]'
					}
				}
				,
				{
					test: /\.css$/,
					use: ['babel-loader', 'raw-loader', 'postcss-loader']
				}
		);

		return config;
	}
};