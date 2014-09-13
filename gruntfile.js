module.exports = function (grunt) {
  // load tasks
  require('load-grunt-tasks')(grunt);

  // Configure grunt here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    BASE_PATH: './',
    DIST_PATH: './dist/',

    ts: {
      // A specific target
      server: {
        // The source TypeScript files, http://gruntjs.com/configuring-tasks#files
        src: ["server/**/*.ts"],
        // The source html files, https://github.com/grunt-ts/grunt-ts#html-2-typescript-support
        // html: ["test/work/**/*.tpl.html"],
        // If specified, generate this file that to can use for reference management
        reference: "server/reference.ts",  
        // If specified, generate an out.js file which is the merged js file
        // out: 'test/out.js',
        // If specified, the generate JavaScript files are placed here. Only works if out is not specified
        outDir: 'dist/server',
        // If specified, watches this directory for changes, and re-runs the current target
//        watch: 'server',
        // Use to override the default options, http://gruntjs.com/configuring-tasks#options
        options: {
          // 'es3' (default) | 'es5'
          target: 'es5',
          // 'amd' (default) | 'commonjs'
          module: 'commonjs',
          // true (default) | false
          sourceMap: false,
          // true | false (default)
          declaration: false,
          // true (default) | false
          removeComments: false
        }
      }
      // Another target
      // dist: {
      //   src: ["test/work/**/*.ts"],
      //   // Override the main options for this target
      //   options: {
      //     sourceMap: false,
      //   }
      // },
    },
    clean: ['dist']
  });

  grunt.registerTask('default', ['clean', 'ts']);
}