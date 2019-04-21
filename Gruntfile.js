const sass = require('node-sass');

module.exports = (grunt) => {

    // Configuration
    grunt.initConfig({
        // pass in options to plugins, references to files etc..
        concat: {
            js: {
                // src: ['js/*.js']
                src: ['js/jquery-1.12.4.js', 'js/rslides.js', 'js/scripts.js'],
                dest: 'dist/scripts.js'
            },
            css: {
                src: ['css/bootstrap.css', 'css/reset.css'],
                dest: 'dist/styles.css'
            }
        },

        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            build : {
                files: [
                    {
                        src: 'css/sass/styles.scss',
                        dest: 'css/sass/styles.css'
                    }
                ]
            }
        },

        uglify: {
            build: {
                files: [{
                    src: 'js/scripts.js',
                    dest: 'dist/scripts.min.js'
                }]
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-sass');

    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Register tasks
    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css', ['concat:css']);

}