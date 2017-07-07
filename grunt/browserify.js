module.exports = {
	dist: {
		files: {
			'<%= app %>/scripts/app.min.js': '<%= resources %>/scripts/app.js'
		},
		options: {
			browserifyOptions: {
				debug: true
			},
			transform: [['babelify']],
			plugin: ['minifyify']
		}
	}
};