module.exports = function(grunt) {
	var options = {
        config: {
            src: "grunt/**/*"
        },
        app: 'public'
    };

    var configs = require('load-grunt-configs')(grunt, options);

    grunt.initConfig(configs);

    grunt.loadNpmTasks('grunt-include-replace');

    grunt.registerTask('build', ['includereplace']);
    grunt.registerTask('default', ['build']);
};
