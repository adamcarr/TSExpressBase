module.exports = function (grunt) {
  // load tasks
  require('load-grunt-tasks')(grunt);

  // Configure grunt here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    BASE_PATH: './',
    DIST_PATH: './dist/',

    bower: {
      install: {
        options: {
          targetDir: './dist/client',
          layout: 'byType',
          install: true,
          verbose: false,
          cleanTargetDir: true,
          cleanBowerDir: false,
          bowerOptions: {}
        }
      }
    },
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
      },
      client: {
        src: ['client/scripts/**/*.ts'],
        reference: 'client/scripts/reference.ts',
        out: 'dist/client/js/app.js',
        html: ['client/scripts/**/*.html'],
        options: {
          target: 'es3',
          module: 'commonjs',
          sourceMap: true,
          declaration: false,
          removeComments: true
        }
      }
    },
    clean: ['dist'],
    copy: {
      main: {
        src: 'server/views/*',
        dest: 'dist/'
      }
    }
  });

  grunt.registerTask('default', ['bower', 'ts', 'copy']);
}