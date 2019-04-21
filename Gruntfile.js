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
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Register tasks
    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css', ['concat:css']);

}