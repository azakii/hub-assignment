module.exports = function(grunt) {

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Sass
		 */
		sass: {
		  dev: {
		    options: {
		      style: 'expanded',
		      sourcemap: 'none',
		    },
		    files: {
		      'assets/css/custom.css': 'assets/SCSS/custom.scss',
					'assets/css/responsive.css': 'assets/SCSS/responsive.scss'
		    }
		  },
       /* dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none', 
        },
        files: {
          'assets/css/custom-min.css': 'assets/scss/custom.scss',
          'assets/css/responsive-min.css': 'assets/scss/responsive.scss'
        }
      },*/
		},

        
	  	/**
	  	 * Watch
	  	 */
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}