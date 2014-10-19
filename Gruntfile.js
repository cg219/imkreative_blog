var path = require("path");

module.exports = function(grunty){

	var bowerScripts = [];
	var uglifyScripts = ["assets/js/main.js"];

	grunty.initConfig({
		pkg: grunty.file.readJSON("package.json"),
		less: {
			all: {
				options: {
					paths: ["assets/css/"]
				},
				files: {
					"assets/css/styles.css" : "assets/css/less/styles.less"
				}
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			libs: {
				files: {
					"assets/js/min/main.kreate.js" : uglifyScripts
				}
			}
		},
		watch: {
			options: {
				spawn: false
			},
			scripts: {
				files: ["assets/js/*"],
				tasks: ["uglify"]
			},
			css: {
				files: ["assets/css/less/*"],
				tasks: ["less"]
			}
		},
		focus: {
			all: {
				include: ["scripts", "css"]
			}
		}

	})

	grunty.loadNpmTasks("grunt-contrib-uglify");
	grunty.loadNpmTasks("grunt-contrib-watch");
	grunty.loadNpmTasks("grunt-contrib-less");
	grunty.loadNpmTasks("grunt-focus");

	grunty.registerTask("default", ["focus:all"]);
}