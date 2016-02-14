module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat:{
			js:{
				src: ['ui/controllers/*.js'],
				dest: 'ui/application.js'
			}
		},
	    less: {
	      'ui/style.css': ['ui/css/*.less']
	    },
		watch: {
			scripts: {
		        files: 'ui/controllers/*.js',
		        tasks: ['concat:js','less'],
			},
			livereload: {
		        options: {
		          livereload: true,
		        },
		        files: ['ui/controllers/*.js','ui/css/*.less']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	//grunt.registerTask('default', ['concat:js','watch']);
	//grunt.registerTask('default', ['concat:js','watch']);
	grunt.registerTask('default', ['concat','less','watch']);

	//grunt.registerTask('default', ['concat']);
};