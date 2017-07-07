module.exports = {
  build: {
    options: {
      includesDir: 'partials/'
    },
    files: [
      {
        src: '*.html',
        dest: '<%= app %>'
      }
    ]
  }
};
