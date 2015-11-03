'use strict'

var defaults = require('defaults')
var Handlebars = require('handlebars')
var walk = require('fs-tools').walk
var fs = require('fs')
var path = require('path')

var onFile = function (file, stats, next) {
  fs.readFile(file, 'utf8', function (err, contents) {
    if (err) {
      return next(err)
    }
    var id = path.basename(file, path.extname(file))
    Handlebars.registerPartial(id, contents)
    next()
  })
}

module.exports = function (options) {
  options = defaults(options, {
    directory: 'partials',
    pattern: /\.hbs$/
  })
  return function (files, metalsmith, done) {
    walk(metalsmith.path(options.directory), options.pattern, onFile, done)
  }
}
