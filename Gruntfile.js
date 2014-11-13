module.exports = function(grunt) {

	// 1. All configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// 2. All functions go here.
		concat: {
			scripts: {
				src: ['js-dev/*.js'],
				dest: 'js/script.js'
			}
		},
		/*
		uglify: {
 			scripts: {
				src: ['js/script.js'],
 				dest: 'js/script.min.js'
 			}
 		},
		watch: {
			scripts: {
				files: [
				'js-dev/*.js',
				],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				},
			},
			styles: {
				files: [
				'css-dev/*.scss'
				],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			}
		},
		sass: {
			devl: {
				options: {
					style: 'expanded',
					sourcemap: 'auto'
				},
				files: {
					'style.css': 'css-dev/base.scss',
				}
			},
			prod: {
				options: {
					style: 'compressed',
					sourcemap: 'auto'
				},
				files: {
					'style.min.css': 'css-dev/base.scss',
				}
			}
		}
	*/
	});
	

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-contrib-sass');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('build', ['concat']);
	//grunt.registerTask('default', ['concat']);
	//grunt.registerTask('default', ['watch']);
};