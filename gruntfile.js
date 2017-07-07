module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

	var options = {
        config: {
            src: "grunt/**/*"
        },
        app: 'public',
        resources: 'resources',
        browserSyncHtmlSrc: 'public/**/*.html'
    };

    var configs = require('load-grunt-configs')(grunt, options);

	grunt.initConfig(configs);

    grunt.registerTask('build', ['browserify:dist', 'imagemin', 'sass', 'includereplace']);
    grunt.registerTask('default', ['build', 'browserSync' , 'watch']);
};
