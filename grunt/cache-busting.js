module.exports = {
	js: {
		replace: ['<%= footPartial %>'],
		replacement: 'app.min.js',
		file: '<%= app %>/scripts/app.min.js',
		get_param: true
	},
	css: {
		replace: ['<%= headPartial %>'],
		replacement: 'global.min.css',
		file: '<%= app %>/styles/global.min.css',
		get_param: true
	}
};
