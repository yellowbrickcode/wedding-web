module.exports = {
	dist: {
		files: {
			"<%= app %>/styles/global.min.css": "<%= resources %>/styles/scss/global.scss"
		},
		options: {
			sourceMap: true,
			quiet: true
		}
	}
};