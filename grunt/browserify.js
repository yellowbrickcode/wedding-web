module.exports = {
	dist: {
		src: [
			'<%= resources %>/scripts/app.js',
			'node_modules/bootstrap-sass/assets/javascripts/bootstrap/transitions.js',
            'node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js'
		],
		dest: '<%= app %>/scripts/app.min.js',
		options: {
			browserifyOptions: {
				debug: true
			},
			transform: [['babelify']],
			plugin: ['minifyify']
		}
	}
};