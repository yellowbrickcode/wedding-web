module.exports = {
  html: {
		files: [
			"*.html",
			"partials/**/*.html"
		],
		tasks: [
			"includereplace"
		]
	},
	sass: {
		files: [
			"<%= resources %>/styles/scss/**/*.scss"
		],
		tasks: [
			"sass:dist"
		]
	},
	js: {
		files: [
			"<%= resources %>/scripts/**/*.js"
		],
		tasks: [
			"browserify:dist"
		]
	}
};
