module.exports = {
	options: {
		optimizationLevel: 7,
		cache: false
	},
	files: {
		expand: true,
		cwd: "<%= resources %>",
		src: [
			"**/*.{png,jpg,gif}"
		],
		dest: "<%= app %>/"
	}
};
