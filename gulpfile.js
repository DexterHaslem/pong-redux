"use strict";
var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var eslint = require("gulp-eslint");


var srcLocation = "./src/**/*.js";
gulp.task("html", function() {
    gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));

});

gulp.task("lint", function() {
    return gulp.src(srcLocation)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("js", function () {
    return gulp.src(srcLocation)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("bundle.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./dist"));
});

gulp.task("watch", function(){
    gulp.watch(srcLocation, ["lint", "js"]);
});

gulp.task("default", ["html", "lint", "js"]);