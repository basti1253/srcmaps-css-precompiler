var combiner = require('stream-combiner2'),
    gulp = require('gulp'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps' ),
    livereload = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css');

module.exports = function() {
    var stream = combiner.obj([
        gulp.src('less/style.less'),
        sourcemaps.init(),
        less(),
        minifyCSS(),
        autoprefixer(),
        sourcemaps.write('.', {
            includeContent: false,
            sourceRoot : '../less/'
        }),
        gulp.dest('css/'),
        livereload()
    ]);

    stream.on('error', console.error.bind(console));

    return stream;
};
