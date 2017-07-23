module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

	var options = {
        config: {
            src: "grunt/**/*"
        },
        app: 'public',
        resources: 'resources',
        browserSyncHtmlSrc: 'public/**/*.html',
        headPartial: 'partials/head.html',
        footPartial: 'partials/foot.html'
    };

    var configs = require('load-grunt-configs')(grunt, options);

	grunt.initConfig(configs);

    grunt.registerTask('build', ['browserify:dist', 'imagemin', 'sass', 'includereplace', 'cache-busting:js', 'cache-busting:css']);
    grunt.registerTask('default', ['build', 'browserSync' , 'watch']);
};
