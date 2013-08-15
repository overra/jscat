/*jslint indent: 2 */
'use strict';
var program = require('commander'),
  path      = require('path'),
  util      = require('util'),
  output;

program
  .usage('[options] <file> [file ...]')
  .on('--help', function () {
    console.log('  Examples:');
    console.log('');
    console.log('    $ jscat foo.json');
    console.log('');
    console.log('  will output color coded JSON object');
    console.log('');
    console.log('    $ jscat foo.json bar.json > baz.json');
    console.log('');
    console.log('  will write an uncolored concatenated array of JSON objects to baz.json');
    console.log('');
    console.log('    $ echo \'{"foo": true, "bar": {"baz": false}}\' | jscat');
    console.log('');
    console.log('  will output a colored representation of the JSON input');
    console.log('');
  })
  .parse(process.argv);

if (process.stdin.isTTY && program.args.length === 0) {
  program.help();
}

output = function () {
  var outIsTTY  = process.stdout.isTTY,
    inIsTTY     = process.stdin.isTTY,
    index, file, data = [];

  if (inIsTTY) {
    for (index = 0; index < program.args.length; index += 1) {
      file = require(path.resolve(process.cwd(), program.args[index]));
      if (outIsTTY) {
        data = util.inspect(file, false, null, true);
        console.log(data);
      } else {
        data.push(file);
      }
    }
    if (!outIsTTY) {
      console.log(JSON.stringify(data));
    }
  } else {
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function (chunk) {
      data += chunk;
    });
    process.stdin.on('end', function() {
      console.log(util.inspect(JSON.parse(data), false, null, true));
    });
  }
};


output();

