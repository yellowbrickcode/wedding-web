module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

	var options = {
        config: {
            src: "grunt/**/*"
        },
        app: 'public',
        resources: 'resources'
    };

    var configs = require('load-grunt-configs')(grunt, options);

	grunt.initConfig(configs);

    grunt.registerTask('build', ['browserify:dist', 'sass', 'includereplace']);
    grunt.registerTask('default', ['build', 'watch']);
};
