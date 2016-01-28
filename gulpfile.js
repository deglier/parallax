var gulp            =   require('gulp');
var browserSync     =   require('browser-sync');
var prefix          =   require('gulp-autoprefixer');
var concat          =   require('gulp-concat');
var jade            =   require('gulp-jade');
var plumber         =   require('gulp-plumber');
var uglify          =   require('gulp-uglify');
var imagemin        =   require('gulp-imagemin');
var sass            =   require('gulp-sass');
var cssmin          =   require('gulp-cssmin');
var reload          =   browserSync.reload;

/**
 * Compila os arquivos jade em html
 */
gulp.task('templates', function() {

    var YOUR_LOCALS = {};

    return gulp.src('src/jadeFiles/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest('demo/'))
});

gulp.task('sass', function() {
    return gulp.src('src/sass/app.scss')
        .pipe(sass({ style: 'compressed',
            includePaths: ['sass'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(cssmin())
        .pipe(gulp.dest('demo/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('demo/assets/css'));
});

gulp.task('js', function(){
  return gulp.src('src/js/**/*.js')
  .pipe(plumber())
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest('demo/assets/js'))
});

gulp.task('imagemin', function() {
  return gulp.src('src/img/**/*.{jpg,png,gif}')
  .pipe(plumber())
  .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
  .pipe(gulp.dest('demo/assets/img'))
});



gulp.task('sass-watch', ['sass']);
gulp.task('js-watch', ['js'], reload);
gulp.task('imagemin-watch', ['imagemin'], reload);
gulp.task('jade-watch', ['templates'], reload);




gulp.task('default', ['sass', 'js', 'imagemin', 'templates'], function () {

    browserSync({server: 'demo/'});

    gulp.watch('src/sass/*.scss',             ['sass-watch']);
    gulp.watch('src/js/*.js',                 ['js-watch']);
    gulp.watch('src/img/**/*.{jpg,png,gif}',  ['imagemin-watch']);
    gulp.watch('src/jadeFiles/*.jade',        ['jade-watch']);
});
