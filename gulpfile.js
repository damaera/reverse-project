var sassInput = ['sass/style.sass'],
    jsInput = [
        'js/*.js'
    ],
    vendorInput = [
        'js/vendor/*.js'
    ],
    sassOutput = 'app/css',
    jsOutput = 'app/scripts';

// Start everything up.
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();


// Watch SASS.
gulp.task('sass', function() {
    return gulp
        .src(sassInput)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(sassOutput))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('domainScripts', function() {
    return gulp.src(jsInput)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsOutput))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify()).on('error', sass.logError)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(jsOutput));
});

gulp.task('vendorScripts', function() {
    return gulp.src(vendorInput)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(jsOutput));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})

gulp.task('watch', ['sass', 'domainScripts', 'vendorScripts', 'browserSync'], function (){
    gulp.watch('sass/**/*.sass', ['sass', browserSync.reload]);
    gulp.watch('js/**/*.js', ['domainScripts', browserSync.reload]);
    gulp.watch('js/**/*.js', ['vendorScripts', browserSync.reload]);
});

gulp.task('build', ['sass', 'domainScripts', 'vendorScripts']);
