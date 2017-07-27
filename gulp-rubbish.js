// Dependencies
var through = require('through2');
var gutil = require('gulp-util');
var glob = require("glob");
var path = require("path");
var fs = require('fs');

var PLUGIN_NAME = 'gulp-rubbish';

var getPaths = function (src, extension) {
  return glob.sync(src + '/**/*.' + extension);
};

function gulpRubbish(directory, extension) {

    return through.obj(function(file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
        }

        if (file.isStream()) {
            return this.emit('error', new gutil.PluginError(PLUGIN_NAME,  'Streaming not supported'));
        }

        if (file.isBuffer()) {
            var content = file.contents.toString();
            var assets = getPaths(directory, extension);
 
            for (var i = assets.length - 1; i >= 0; i--) {
                if(content.indexOf(path.basename(assets[i])) === -1) {
                    fs.unlinkSync(assets[i]);
                    gutil.log(gutil.colors.magenta(assets[i]), gutil.colors.blue(' removed from file system'));
                }
            }
        }

        cb(null, file);
    });
}

module.exports = gulpRubbish;
