module.exports = function(grunt) {

    grunt.initConfig({
        // SASS
        sass: {
            options: {
                sourceMap: false,
                includePaths: [
                    'bower_components/bootstrap-sass/assets/stylesheets'
                ]
            },
            dev: {
                files: {
                    'src/css/app.css' : 'src/sass/app.scss',
                    'src/css/print-styles.css' : 'src/sass/print.scss'
                } 
            }
        }

    });

    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', [
        'sass'
    ]);

};