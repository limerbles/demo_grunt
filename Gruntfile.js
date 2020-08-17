var sass = require('node-sass');

module.exports = function(grunt) {
	// Configure our tasks
	grunt.initConfig({
		concat: {
			js: {
				src: [ 'js/*.js' ],
				dest: 'build/scripts.js'
			},
			css: {
				src: [ 'css/*.css' ],
				dest: 'build/styles.css'
			}
		},
		sass: {
			options: {
				implementation: sass,
				sourceMap: true
			},
			build: {
				files: [
					{
						src: 'css/sass/styles.scss',
						dest: 'css/styles.css'
					}
				]
			}
		},
		uglify: {
			build: {
				files: [
					{
						src: 'build/scripts.js',
						dest: 'build/scripts.min.js'
					}
				]
			}
		},
		cssmin: {
			target: {
				files: [
					{
						expand: true,
						cwd: 'build',
						src: [ '*.css', '!*.min.css' ],
						dest: 'build',
						ext: '.min.css'
					}
				]
			}
		},
		jshint: {
			all: [ 'Gruntfile.js', 'js/scripts.js' ],
			options: {
				globals: {
					jQuery: true
				}
			}
		}
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Register the tasks
	grunt.registerTask('concat-js', [ 'concat:js' ]);
	grunt.registerTask('concat-css', [ 'concat:css' ]);

	grunt.registerTask('all', [ 'concat:css', 'concat:css' ]);
};
