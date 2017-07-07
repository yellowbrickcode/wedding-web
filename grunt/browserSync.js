module.exports = {
    bsFiles: {
        src: [
            "<%= browserSyncHtmlSrc %>",
            "<%= app %>/scripts/**/*.{js,json}",
            "<%= app %>/styles/*.css",
            "<%= app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}"
        ]
    },
    options: {
        watchTask: true,
        server: {
            baseDir: "./public/"
        }
    }
};