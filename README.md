[![NPM version](https://badge.fury.io/js/grunt-jsfuck.png)](http://badge.fury.io/js/grunt-jsfuck) [![Build Status](https://travis-ci.org/Saunalol/grunt-jsfuck.svg?branch=master)](https://travis-ci.org/Saunalol/grunt-jsfuck) [![Dependency Status](https://gemnasium.com/Saunalol/grunt-jsfuck.png)](https://gemnasium.com/Saunalol/grunt-jsfuck)

# grunt-jsfuck

> The best Grunt plugin ever.
Auto-obfuscate using [jsfuck](https://github.com/aemkei/jsfuck).

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jsfuck --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jsfuck');
```

## The "jsfuck" task

### Overview
In your project's Gruntfile, add a section named `jsfuck` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jsfuck: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.eval
Type: `Boolean`
Default value: `true`

A value that is used to determine whether to return code or string.

#### options.separator
Type: `String`
Default value: `';'`

A string value that is used to join multiple files before obfuscation.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
### 0.1.0
Initial release

## License
Copyright (c) 2013 cyberskunk. Licensed under the MIT license.
