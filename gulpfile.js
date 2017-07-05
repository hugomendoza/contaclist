/////////////////////////////////////////////////////////
// required
////////////////////////////////////////////////////////

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

///////////////////////////////////////////////
// Scripts Task
////////////////////////////////////////////////

gulp.task('sass', function() {
    gulp.src('app/scss/main.scss')
        .pipe(sass({
            outputStyle: 'expanded',
            sourceComments: true
        }))
        .pipe(autoprefixer({
            versions: [
                'last 2 browsers'
            ]
        }))
        .pipe(gulp.dest('app/css/'))
});


///////////////////////////////////////////////
// Scripts Watch
////////////////////////////////////////////////

gulp.task('default', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 8080,
        ws: true
    });
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload)
    gulp.watch('app/views/*html').on('change', browserSync.reload)
    gulp.watch('app/css/*.css').on('change', browserSync.reload)
    gulp.watch('app/js/*.js').on('change', browserSync.reload)
});
