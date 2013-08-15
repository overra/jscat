jscat
=====

concatenate or print out colored JSON files

Install
-------

Install with npm

```
[sudo] npm install -g https://github.com/overra/jscat.git
```

Usage
-----

```
$ jscat

  Usage: jscat [options] <file> [file ...]

  Options:

    -h, --help  output usage information

  Examples:

    $ jscat foo.json

  will output color coded JSON object

    $ jscat foo.json bar.json > baz.json

  will write an uncolored concatenated array of JSON objects to baz.json

    $ echo '{"foo": true, "bar": {"baz": false}}' | ./bin/jscat

  will output a colored representation of the JSON input

```
