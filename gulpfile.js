const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));
//const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const sync = require("browser-sync").create();
const htmlmin = require("gulp-htmlmin");
const rename = require("gulp-rename");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const imagemin = require("gulp-imagemin");
const terser = require("gulp-terser");
const del = require("del");
const { src } = require("gulp");

// HTML

const html = () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

exports.html = html;

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
};

exports.styles = styles;

// Images

const optimizeImages = () => {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"))
}

exports.optimizeImages = optimizeImages;

const copyImages = () => {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(gulp.dest("build/img"))
}

exports.copyImages = copyImages;

// WebP

const createWebp = () => {
  return gulp.src("source/img/**/*.{jpg,png}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"))
}

exports.createWebp = createWebp;

// Sprite

const sprite = () => {
  return gulp.src("source/img/icons-sprite/*.svg")
    .pipe(
      svgstore({
        inlineSvg: true,
      })
    )
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
};

exports.sprite = sprite;

// Scripts

const scripts = () => {
  return gulp.src(["source/js/*.js"])
    .pipe(terser())
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream());
}

exports.scripts = scripts;

// Copy

const copy = (done) => {
  gulp.src([
    "source/fonts/*.{wof2,woff}",
    "source/*.ico",
    "source/img/**/*.svg",
    "!source/img/favicons/*.svg",
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"))
  done();
}

exports.copy = copy;

// Clean

const clean = () => {
  return del("build")
}

exports.clean = clean;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "build",
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/*.html").on("change", sync.reload);
};

exports.default = gulp.series(styles, server, watcher);

//Reload

const reload = (done) => {
  sync.reload();
  done();
}

//Build

const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    sprite,
    createWebp
  ),
);

exports.build = build;

// Default

exports.default = gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    sprite,
    createWebp
  ),
  gulp.series(
    server,
    watcher
  ));
