/**
 * Extension of charCodeAt() to handle non-Basic-Multilingual-Plane characters if their presence earlier in the string is unknown
 * Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 *
 * @param {string} str The string to test
 * @param {number} idx The position to test
 * @returns {number|boolean} The character code of the character at the specified position or false if this iteration should be skipped
 */
module.exports = function(str, idx) {
    "use strict";

    /*
     * ex. fixedCharCodeAt ('\uD800\uDC00', 0); // 65536
     * ex. fixedCharCodeAt ('\uD800\uDC00', 1); // 65536
     */
    idx = idx || 0;
    var code = str.charCodeAt(idx);
    var hi, low;

    /*
     * High surrogate (could change last hex to 0xDB7F to treat high
     * private surrogates as single characters)
     */
    if (0xD800 <= code && code <= 0xDBFF) {
        hi = code;
        low = str.charCodeAt(idx + 1);
        if (isNaN(low)) {
            throw 'High surrogate not followed by low surrogate in fixedCharCodeAt()';
        }
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    if (0xDC00 <= code && code <= 0xDFFF) {
        /*
         * Low surrogate: We return false to allow loops to skip this
         * iteration since should have already handled high surrogate above
         * in the previous iteration
         */
        return false;
        /*
         * hi = str.charCodeAt(idx-1); low = code; return ((hi - 0xD800) *
         * 0x400) + (low - 0xDC00) + 0x10000;
         */
    }
    return code;
};