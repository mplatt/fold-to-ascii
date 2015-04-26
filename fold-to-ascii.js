/**
 * fold-to-ascii.js
 * https://github.com/mplatt/fold-to-ascii-js
 *
 * This is a JavaScript port of the Apache Lucene ASCII Folding Filter.
 *
 * The Apache Lucene ASCII Folding Filter is licensed to the Apache Software
 * Foundation (ASF) under one or more contributor license agreements. See the
 * NOTICE file distributed with this work for additional information regarding
 * copyright ownership. The ASF licenses this file to You under the Apache
 * License, Version 2.0 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 *
 * This port uses an example from the Mozilla Developer Network published prior
 * to August 20, 2010
 *
 * fixedCharCodeAt is licencesed under the MIT License (MIT)
 *
 * Copyright (c) 2013 Mozilla Developer Network and individual contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * The module that exposes the fixed char code method
 * @type {module.exports}
 */
var fixedCharCodeAt = require('./app/fixed-char-code-at.js');

/**
 * The character mapping object
 * @type {module.exports}
 */
var mapping = require('./app/ascii-mapping.js');


/**
 *
 * @param charCode {number} The code of the character to replace
 * @param replace {boolean} Whether unmapped characters should be replaced
 * @param replacement {string} What string unmapped characters should be replaced with
 * @returns {string} A string representing the replacement of the character
 */
var replaceChar = function(charCode, replace, replacement) {
    var ascii = mapping[charCode];
    return ascii ? ascii : (replace ? replacement : '');
};

module.exports = {
    /**
     * Sanitize strings by converting alphabetic, numeric, and symbolic Unicode characters which are not contained in the first 127 ASCII characters (the "Basic Latin" Unicode block) into a ASCII equivalents.
     *
     * @param {string} str The string to be sanitized
     * @param {string} replacement The character an unmapped character should be replaced with or null should the original character be retained
     * @returns {string} The sanitized string
     */
    fold: function (str, replacement) {
        "use strict";

        if (str === null) {
            return "";
        }

        if (typeof str === "number") {
            return "" + str;
        }

        if (typeof str !== "string") {
            throw 'Only objects of the types string, number and null can be folded';
        }

        /**
         * Whether a replacement should take place
         * @type {boolean}
         */
        var replace = (typeof replacement != "undefined" && replacement !== null);

        /**
         * The String to return after replacement took place
         * @type {string}
         */
        var outStr = "";

        for (var i = 0; i < str.length; i++) {
            /**
             * The character code at the position or false if a low surrogate is specified
             * @type {number|boolean}
             */
            var charCode = fixedCharCodeAt(str, i);

            /*
             * Skip low surrogates
             */
            if (charCode) {
                if (charCode < 128) {
                    /*
                     * Character within the ASCII range.
                     * Copy it to the output string.
                     */
                    outStr += String.fromCharCode(charCode);
                } else {
                    /*
                     * Character outside of the ASCII range.
                     * Look for a replacement
                     */
                    outStr += replaceChar(charCode, replace, replacement);
                }
            }
        }

        return outStr;
    }
};
