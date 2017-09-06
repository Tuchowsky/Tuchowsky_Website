'use strict';
module.exports = function(grunt){
    grunt.initConfig({
        watch: {
			options: {
				livereload: true,
			},
            all: {
                files: ['src/{,**/}*.*', 'styles/{,**/}*.*', 'scripts/{,**/}*.*'],
                tasks: ['build']
            },
	  		sass: {
				files: ['./styles/main.sass'],
				tasks: ['sass', 'build'],
            }
        },
        sass: {
			dist: {
				files: {
				'styles/main.css': 'styles/main.sass', 
				}
			}
		},    
        mustache_render: {
            options: {},
            dist: {
                options: {
                    data: '',
                    directory: 'src/templates',
                    escape: false
                },
                files: [
                    {'build/index.html': 'src/templates/index.mustache'}
                ]
            }
        },
        copy: {
            css: {
                files: [
                    {
                        expand: true,
                        cwd: 'styles',
                        src: '**',
                        dest: 'build/styles/'
                    }
                ]
            },
            scripts: {
                files: [
                    {
                        expand: true,
                        cwd: 'scripts',
                        src: '**',
                        dest: 'build/scripts/'  
                    }
                ]
            },
            images: {
                files: [
                    {
                        expand: true,
                        cwd: 'gfx',
                        src: '**',
                        dest: 'build/gfx/'
                    }
                ]
            },
            svg: {
                files: [
                    {
                        expand: true,
                        cwd: 'svg',
                        src: '**',
                        dest: 'build/svg/' 
                    }
                ]
            }
        }
    });
    grunt.registerTask('build', [
        'mustache_render',
        'copy'
    ]);
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mustache-render');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', []);
};