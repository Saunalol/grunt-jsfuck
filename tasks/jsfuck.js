/*
 * grunt-jsfuck
 *
 *
 * Copyright (c) 2013 cyberskunk
 * Licensed under the MIT license.
 */

'use strict';

var jsfuck = require('jsfuck');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('jsfuck', 'The best Grunt plugin ever.', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      eval: true,
      separator: ';'
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Write the destination file.
      /* jshint evil:true */
      grunt.file.write(file.dest, jsfuck.JSFuck.encode(src, options.eval));

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
