
const srcDir = 'app/';
const distDir = 'app/'
module.exports = {
    srcDir : srcDir,
    distDir : distDir,

    fonts: {
      dest: srcDir + 'fonts'
    },
    scss: {
      src: srcDir + 'style/*.scss',
      dest: distDir + 'style/'
    },

    js: {
      entry: './' + srcDir + 'js/main.js',
      src:  [srcDir + 'js/**/*.js', '!' + srcDir + 'js/bundle.js'],
      dest: distDir + 'js',
      bundle : 'bundle.js'
    },

    html: {
      src: distDir + '*.html'
    }
};
