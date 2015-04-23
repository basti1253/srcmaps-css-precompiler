var combiner = require('stream-combiner2'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps' ),
    livereload = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css');

module.exports = function() {
    var stream = combiner.obj([
        gulp.src('scss/style.scss'),
        sourcemaps.init(),
        sass(),
        minifyCSS(),
        autoprefixer(),
        sourcemaps.write('.', {
            includeContent: false,
            sourceRoot : '../scss/'
        }),
        gulp.dest('css/'),
        livereload()
    ]);

    stream.on('error', console.error.bind(console));

    return stream;
};
