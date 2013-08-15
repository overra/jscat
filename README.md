jscat
=====

concatenate or print out colored JSON files

Install
-------

Install with npm

```
[sudo] npm install -g git://github.com/overra/jscat.git
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

    $ echo '{"foo": true, "bar": {"baz": false}}' | jscat

  will output a colored representation of the JSON input

```

Example
-------

```
$ jscat example.json
```

```json
{
  "glossary": {
    "title": "example glossary",
    "GlossDiv": {
      "title": "S",
      "GlossList": {
        "GlossEntry": {
          "ID": "SGML",
          "SortAs": "SGML",
          "GlossTerm": "Standard Generalized Markup Language",
          "Acronym": "SGML",
          "Abbrev": "ISO 8879:1986",
          "GlossDef": {
            "para": "A meta-markup language, used to create markup languages such as DocBook.",
            "GlossSeeAlso": [
              "GML",
              "XML"
            ]
          },
          "GlossSee": "markup"
        }
      }
    }
  }
}
```
