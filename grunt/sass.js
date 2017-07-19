module.exports = {
	dist: {
		options: {
			sourceMap: true,
			quiet: true
		},
		files: {
			"<%= app %>/styles/global.min.css": "<%= resources %>/styles/scss/global.scss"
		}
	}
};