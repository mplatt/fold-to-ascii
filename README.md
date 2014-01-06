fold-to-ascii-js
================

A JavaScript port of the Apache Lucene ASCII Folding Filter that converts alphabetic, numeric, and symbolic Unicode characters which are not in the first 127 ASCII characters (the "Basic Latin" Unicode block) into their ASCII equivalents, if one exists.

# Sources

This is a straightforward port of the switch/case statement found in http://svn.apache.org/repos/asf/lucene/java/tags/lucene_solr_4_5_1/lucene/analysis/common/src/java/org/apache/lucene/analysis/miscellaneous/ASCIIFoldingFilter.java

The function to determine character codes is taken from a code example in the MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt#Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown).

## Non-Basic-Multilingual-Plane characters

The function is ready to handle *non-Basic-Multilingual-Plane characters*. This is meant to support future extensions of the replacement table with characters from the *high surrogate range*. Still at the moment none of these characters have replacements.

# Usage

## Configuration

The function can be configured to either replace unmapped non-ASCII characters or to leave them untouched through the `replaceUnmapped` variable.

Should this be `true`, a universal replacement string for these characters can be defined through changing `defaultString`. 

