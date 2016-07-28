fold-to-ascii-js
================

A JavaScript port of the Apache Lucene ASCII Folding Filter that converts alphabetic, numeric, and symbolic Unicode
characters which are not in the first 127 ASCII characters (the "Basic Latin" Unicode block) into their ASCII
equivalents, if one exists.

# Documentation

## Installation

### Package Manager

Npm: ```npm install fold-to-ascii```

Recent versions require ES2015 support (i.e. node 6+). An ES5 version can be obtained by installing 2.0.2 (```npm install fold-to-ascii@2.0.2```).

Bower: ```bower install fold-to-ascii```

## Usage

```JavaScript
var ASCIIFolder = require("./lib/ascii-folder");

// Folding with replacement of unmapped characters with the "_" character:
console.log(ASCIIFolder.fold("★Lorém ïpsum dölor.", "_"));
// Results in "_Lorem ipsum dolor."

// Folding without replacement of unmapped characters:
console.log(ASCIIFolder.fold("★Lorém ïpsum dölor.", null));
console.log(ASCIIFolder.fold("★Lorém ïpsum dölor."));
// Both calls result in "Lorem ipsum dolor."
```

If no replacement parameter is specified, unmapped characters will be replaced by the empty string.

## Tests

All replacement tasks are covered by QUnit tests. Run ```npm test```.

# Sources

This is a straightforward port of the *very extensive* switch/case statement found in
http://svn.apache.org/repos/asf/lucene/java/tags/lucene_solr_4_5_1/lucene/analysis/common/src/java/org/apache/lucene/analysis/miscellaneous/ASCIIFoldingFilter.java
