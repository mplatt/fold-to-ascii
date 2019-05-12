fold-to-ascii-js
================

A JavaScript port of the Apache Lucene ASCII Folding Filter that converts alphabetic, numeric, and symbolic Unicode characters which are not in the first 127 ASCII characters (the "Basic Latin" Unicode block) into their ASCII equivalents.

# Documentation

## Installation

```npm install fold-to-ascii```

## Usage

There are two different modes of operation:

 1. Replace all known non-ASCII characters with appropriate replacements, replace the unknown ones with a fallback (`foldReplacing`).
 2. Replace all known non-ASCII characters with appropriate replacements, maintain the unknown ones (`foldMaintaining`).

The difference in output only manifests if the inputs contain characters without known replacements:

```JavaScript
var ASCIIFolder = require("./lib/ascii-folder");

// Some Characters have no defined replacement.
// Specify a fixed replacement character (defaults to the empty string).
ASCIIFolder.foldReplacing("Lörem 🤧 ëripuît") === "Lorem  eripuit";
ASCIIFolder.foldReplacing("Lörem 🤧 ëripuît", "X") === "Lorem 🤧 eripuit";

ASCIIFolder.foldMaintaining("Lörem 🤧 ëripuît", "X") === "Lorem XX eripuit";
```

## Tests

`npm test`

# Sources

This is a straightforward port of the extensive switch/case statement found in
http://svn.apache.org/repos/asf/lucene/java/tags/lucene_solr_4_5_1/lucene/analysis/common/src/java/org/apache/lucene/analysis/miscellaneous/ASCIIFoldingFilter.java
