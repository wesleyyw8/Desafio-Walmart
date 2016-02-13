module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat:{
			js:{
				src: ['ui/controllers/*.js'],
				dest: 'ui/application.js'
			}
		},
		watch: {
			scripts: {
		        files: 'ui/controllers/*.js',
		        tasks: ['concat:js'],
			},
			livereload: {
		        options: {
		          livereload: true,
		        },
		        files: ['ui/controllers/*.js']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.registerTask('default', ['concat:js','watch']);
	//grunt.registerTask('default', ['concat:js','watch']);
	grunt.registerTask('default', ['watch']);

	//grunt.registerTask('default', ['concat']);
};