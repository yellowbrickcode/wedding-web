module.exports = function(grunt) {
	var options = {
        config: {
            src: "grunt/**/*"
        },
        app: 'public'
    };

    var configs = require('load-grunt-configs')(grunt, options);

    grunt.initConfig(configs);

    grunt.registerTask('build', []);
    grunt.registerTask('default', ['build']);
};
