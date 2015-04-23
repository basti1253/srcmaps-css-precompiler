module.exports = function(grunt) {

	'use strict';

	var path = require( 'path' ),
		loadGruntConfig = require('load-grunt-config');

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');

	loadGruntConfig(grunt, {
		init: true,
		data: {
			pkg: grunt.file.readJSON('package.json'),
			// <%= srcDir %>
			srcDir: process.cwd()
		}
	});

};
