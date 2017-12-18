var gulp = require('gulp'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream');

gulp.task("default", ["transpile"]);

gulp.task("build", ["transpile", "copy"]);

gulp.task("copy", function() {
    return gulp.src(["src/*.html"])
		.pipe(gulp.dest("dist"))
});

gulp.task("transpile", function(){
	return browserify("src/app.js")
	//.transform("babelify")
	.bundle()
	.on("error", function(error){
		console.err("\nError: ", error.message, "\n");
		this.emit("end");
	})
	.pipe(source("bundle.js"))
	.pipe(gulp.dest("dist"));
});

gulp.task("watch", ["transpile"], function(){
	gulp.watch("src/**/*", ["transpile"]);
});
