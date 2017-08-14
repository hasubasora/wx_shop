var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create(),
    del = require('del'),
    compass = require('gulp-compass'),
    ngAnnotate = require('gulp-ng-annotate'),
    ngmin = require('gulp-ngmin'),
    stripDebug = require('gulp-strip-debug'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'), //压缩css
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    pug = require('gulp-pug'),
    fileinclude = require('gulp-file-include'); //分离html


gulp.task('default', ['jshint'], function() {
    // gulp.start('minifyjs');
    return runSequence(['clean'], ['build'], ['serve', 'watch'], ['fileinclude']);
});

gulp.task('clean', function(callback) {
    return del('./dist/', callback);
});

gulp.task('build', function(callback) {
    return runSequence(['compass', 'minifyjs', 'views', 'staticFiles'], callback);
});

gulp.task('views', function buildHTML() {
    var YOUR_LOCALS = {};
    return gulp.src('./src/pug/*.pug')
        .pipe(pug({
            // client: true,//编译成js
            locals: YOUR_LOCALS, //编译html
            pretty: true //不压缩代码
        }))
        .pipe(gulp.dest('./dist/pug/'))
});

gulp.task('compass', function() {
    return gulp.src('./src/**/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: 'src/stylesheets',
            sass: 'src/sass'
        }))
        .on('error', function(err) {
            console.log(err);
            this.emit('end');
        })
        .pipe(gulp.dest('./dist/stylesheets/'))
        .pipe(autoprefixer({
            browsers: [
                'last 22 versions',
                'Android >= 4.0',
                'last 5 Chrome versions',
                'last 5 Explorer versions',
                'last 3 Safari versions',
                'Firefox >= 20',
                'iOS 7',
                'Firefox ESR',
                'Explorer >= 8',
                'Opera >= 42',
                'Safari >= 8',
                'last 5 FirefoxAndroid versions',
                'last 5 ChromeAndroid versions',
                'last 5 ExplorerMobile versions'
            ],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/stylesheets/'))
        .pipe(rename({
            suffix: '.min'
        }))
        //压缩样式文件
        .pipe(minifyCss({
            outSourceMap: false
        }))
        //输出压缩文件到指定目录
        .pipe(gulp.dest('./dist/stylesheets/'));
});



//合并压缩js
gulp.task('minifyjs', function() {
    return gulp.src('./src/javascripts*/**/*.js') //js代码校验
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('main.js')) //js代码合并 main.js
        .pipe(gulp.dest('./dist/javascripts/')) //整合后的输出路径
        .pipe(rename({
            suffix: '.min'
        })) ////给文件添加.min后缀
        .pipe(ngAnnotate())
        .pipe(ngmin({
            dynamic: false
        })) //Pre-minify AngularJS apps with ngmin
        .pipe(stripDebug()) //除去js代码中的console和debugger输出
        .pipe(uglify({
            outSourceMap: false
        })) //压缩脚本文件
        .pipe(gulp.dest('./dist/javascripts/')); //输出压缩文件到指定目录
});

gulp.task('fileinclude', function() {
    // 适配page中所有文件夹下的所有html，排除page下的include文件夹中html
    return gulp.src(['src/**/*.html', '!src/include/**.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dist/'));
});


gulp.task('jshint', function() {
    return gulp.src('./src/javascripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('staticFiles', function() {
    return gulp.src([
            './src/**/*.html',
            './src/images*/**/*.*',
            './src/javascripts*/**/*.js',
            // './src/stylesheets*/**/*.css',
            './src/framework*/**/*.*'
        ])
        .pipe(gulp.dest('./dist/'));
})

gulp.task('serve', function() {
    browserSync.init({
        server: './dist',
        port: 8888
    });
});

gulp.task('reload', function() {
    return browserSync.reload();
});

gulp.task('watch', function() {
    return gulp.watch([
        './src/**/*.html',
        './src/**/*.pug',
        './src/**/*.scss',
        './src/**/*.js'
    ], function() {
        return runSequence(['build'], ['minifyjs'], ['fileinclude'], ['reload']);
    })
});


/**
 * task这个API用来创建任务，在命令行下可以输入 gulp test 来执行test的任务。
 * watch这个API用来监听任务。
 * src这个API设置需要处理的文件的路径，可以是多个文件以数组的形式[main.scss, vender.scss]，也可以是正则表达式/** /*.scss。
 * dest这个API设置生成文件的路径，一个任务可以有多个生成路径，一个可以输出未压缩的版本，另一个可以输出压缩后的版本。
 */