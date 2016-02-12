module.exports = function(grunt){
	grunt.initConfig({
		concat:{
			js:{
				src: ['ui/controllers/*.js'],
				dest: 'ui/application.js'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', ['concat:js']);
};