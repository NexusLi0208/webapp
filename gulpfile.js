// 引入 gulp
var gulp = require('gulp');
// 引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-minify-css');
var livereload = require('gulp-livereload');
var webserver = require('gulp-webserver');
var autoprefixer = require('gulp-autoprefixer');

// 注册任务
gulp.task('webserver', function () {
    gulp.src('./src') // 服务器目录（./代表根目录）
        .pipe(webserver({ // 运行gulp-webserver
            livereload: true, // 启用LiveReload
            open: true // 服务器启动时自动打开网页
        }));
});
// 检查脚本
gulp.task('lint', function () {
    gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
//压缩css
gulp.task('cssmin', function () {
    gulp.src('src/css/**/*.css')
        .pipe(concat('style.css'))
        .pipe(cssmin({
            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie8',//保留ie8及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(gulp.dest('./dist/css'));
});
// 编译Sass
gulp.task('sass', function () {
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        // .pipe(concat('style.css'))
        .pipe(autoprefixer({
            browsers: [
                'ie >= 8',
                'ie_mob >= 10',
                'ff >= 30',
                'chrome >= 34',
                'safari >= 7',
                'opera >= 23',
                'ios >= 7',
                'android >= 2.3',
                'bb >= 10'
            ],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove: true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(gulp.dest('src/css'));
});

// 合并，压缩文件
gulp.task('scripts', function () {
    gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./dist/js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
     gulp.src('./src/js/lib/*.js')
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(rename('lib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
    gulp.src('./src/js/plug/*.js')
        .pipe(concat('plug.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(rename('plug.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
        
});
gulp.task('html',function(){
    gulp.src('./src/**/*.html')
    .pipe(gulp.dest('dist'))
})


// 默认任务
gulp.task('default', ['webserver', 'sass', 'watch','cssmin'])

// 监听文件变化
gulp.task('watch', function () {
    gulp.watch('./src/scss/*.scss', ['sass','cssmin']);
    gulp.watch('*.html', ['html']);
    // 监听根目录下所有.html文件
})
gulp.task('build',['cssmin','scripts','html'])
