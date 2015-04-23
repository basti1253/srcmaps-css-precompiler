module.exports = {
	less: {
		options: {
			livereload: true
		},
		files: '<%= srcDir %>/less/**/*.less',
		tasks: [ 'css:less' ]
	},
	sass: {
		options: {
			livereload: true
		},
		files: '<%= srcDir %>/scss/**/*.scss',
		tasks: [ 'css:sass' ]
	}
};

