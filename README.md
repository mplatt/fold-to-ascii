fold-to-ascii-js
================

A JavaScript port of the Apache Lucene ASCII Folding Filter that converts alphabetic, numeric, and symbolic Unicode characters which are not in the first 127 ASCII characters (the "Basic Latin" Unicode block) into their ASCII equivalents, if one exists.

# Documentation

## Installation

### Package Manager

Npm: ```npm install fold-to-ascii```

Bower: ```bower install fold-to-ascii```

### Stand-alone

This version no longer exposes the ```window.foldToAscii``` variable in favour of a more modular approach using npm's ```module.exports```.
Should you require a stand-alone version, [Browserify](http://browserify.org/) appears to be the tool of choice (```browserify index.js > bundle.js```).

## Usage

It is simple:

```JavaScript
var foldToAscii = require("fold-to-ascii");

// Folding with replacement of unmapped characters with the "_" character:
console.log(foldToAscii.fold("★Lorém ïpsum dölor.", "_"));
// Results in "_Lorem ipsum dolor."

// Folding without replacement of unmapped characters:
console.log(foldToAscii.fold("★Lorém ïpsum dölor.", null));
console.log(foldToAscii.fold("★Lorém ïpsum dölor."));
// Both calls result in "Lorem ipsum dolor."
```

If no replacement parameter is specified, unmapped characters will be replaced by the empty string.

## Tests

All replacement tasks are covered by QUnit tests. Run ```npm test```.

# Sources

This is a straightforward port of the *very extensive* switch/case statement found in http://svn.apache.org/repos/asf/lucene/java/tags/lucene_solr_4_5_1/lucene/analysis/common/src/java/org/apache/lucene/analysis/miscellaneous/ASCIIFoldingFilter.java

The function to determine character codes is taken from a code example in the MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt#Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown).

# FAQ

## Why is character *x* being replaced with *y* and not with *z*?

The unambiguous allocation of characters to replacements is not possible since it is language-dependent.
For example a user from France might expect *ü* to be replaced with *u* while a user from Germany expects the replacement to be *ue*.

