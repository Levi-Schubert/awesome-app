module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            scripts: {
                files: [
                    "./scripts/**/*.js",
                    "!node_modules/**/*.js"
                ],
                tasks: ["eslint"],
                options: {
                    spawn: false,
                },
            }
        },
        eslint: {
            src: [
                "./scripts/**/*.js",
                "!node_modules/**/*.js"
            ]
		},
		browserify: {
			dist: {
				files: {
					"../dist/scripts/bundle.js": ["scripts/**/*.js"]
				}
			}
		}
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-eslint");
	grunt.loadNpmTasks("grunt-browserify");
    // Default task(s).
    grunt.registerTask("default", ["eslint", "watch"]);
};
