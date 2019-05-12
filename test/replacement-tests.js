const ASCIIFolder = require("./../lib/ascii-folder.js");

QUnit.test("nullTest", function () {
    equal(foldStrict(null), "", "Returns the empty string.");
});

QUnit.test("numberTest", function () {
    equal(foldStrict(123456789), "123456789", "Returns a numeric sequence.");
});

QUnit.test("emptyTest", function () {
    equal(foldStrict(""), "", "Returns the empty string.");
});

QUnit.test("spaceTabTest", function () {
    equal(foldStrict(" 	 "), " 	 ", "Returns a space-tab-space sequence.");
});

QUnit.test("escapeSequenceTest", function () {
    equal(foldStrict(" \b \t \n \v \f \r "), " \b \t \n \v \f \r ", "Returns the escape sequences \\b \\t \\n \\v \\f \\r.");
});

QUnit.test("controlCharacterTest", function () {
    var controlCharacters = (String.fromCharCode(0x8) + String.fromCharCode(0x9) + String.fromCharCode(0xA) + String.fromCharCode(0xC) + String.fromCharCode(0xD));
    equal(foldStrict(controlCharacters), controlCharacters, "Returns control chracters.");
});

QUnit.test("asciiPrintableTest", function () {
    equal(foldStrict("0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ !\"#$%&'()*+,-./"), "0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ !\"#$%&'()*+,-./", "Returns the ASCII printable characters.");
});

QUnit.test("ATest", () => {
    equal(foldStrict(String.fromCharCode(0xc0)), "A", " \"\\u00C0\": \"A\"");
    equal(foldStrict(String.fromCharCode(0xc1)), "A", " \"\\u00C1\": \"A\"");
    equal(foldStrict(String.fromCharCode(0xc2)), "A", " \"\\u00C2\": \"A\"");
    equal(foldStrict(String.fromCharCode(0xc3)), "A", " \"\\u00C3\": \"A\"");
    equal(foldStrict(String.fromCharCode(0xc4)), "A", " \"\\u00C4\": \"A\"");
    equal(foldStrict(String.fromCharCode(0xc5)), "A", " \"\\u00C5\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x100)), "A", " \"\\u0100\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x102)), "A", " \"\\u0102\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x104)), "A", " \"\\u0104\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x18f)), "A", " \"\\u018F\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x1cd)), "A", " \"\\u01CD\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x1de)), "A", " \"\\u01DE\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x1e0)), "A", " \"\\u01E0\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x1fa)), "A", " \"\\u01FA\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x200)), "A", " \"\\u0200\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x202)), "A", " \"\\u0202\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x226)), "A", " \"\\u0226\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x23a)), "A", " \"\\u023A\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x1d00)), "A", " \"\\u1D00\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x1e00)), "A", " \"\\u1E00\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x1ea0)), "A", " \"\\u1EA0\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x1ea2)), "A", " \"\\u1EA2\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x1ea4)), "A", " \"\\u1EA4\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x1ea6)), "A", " \"\\u1EA6\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x1ea8)), "A", " \"\\u1EA8\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x1eaa)), "A", " \"\\u1EAA\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x1eac)), "A", " \"\\u1EAC\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x1eae)), "A", " \"\\u1EAE\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x1eb0)), "A", " \"\\u1EB0\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x1eb2)), "A", " \"\\u1EB2\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x1eb4)), "A", " \"\\u1EB4\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x1eb6)), "A", " \"\\u1EB6\": \"A\"");
    equal(foldStrict(String.fromCharCode(0x24b6)), "A", " \"\\u24B6\": \"A\"");
    equal(foldStrict(String.fromCharCode(0xff21)), "A", " \"\\uFF21\": \"A\"");
});

QUnit.test("aTest", () => {
    equal(foldStrict(String.fromCharCode(0xe0)), "a", " \"\\u00E0\": \"a\"");
    equal(foldStrict(String.fromCharCode(0xe1)), "a", " \"\\u00E1\": \"a\"");
    equal(foldStrict(String.fromCharCode(0xe2)), "a", " \"\\u00E2\": \"a\"");
    equal(foldStrict(String.fromCharCode(0xe3)), "a", " \"\\u00E3\": \"a\"");
    equal(foldStrict(String.fromCharCode(0xe4)), "a", " \"\\u00E4\": \"a\"");
    equal(foldStrict(String.fromCharCode(0xe5)), "a", " \"\\u00E5\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x101)), "a", " \"\\u0101\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x103)), "a", " \"\\u0103\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x105)), "a", " \"\\u0105\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1ce)), "a", " \"\\u01CE\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1df)), "a", " \"\\u01DF\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1e1)), "a", " \"\\u01E1\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1fb)), "a", " \"\\u01FB\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x201)), "a", " \"\\u0201\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x203)), "a", " \"\\u0203\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x227)), "a", " \"\\u0227\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x250)), "a", " \"\\u0250\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x259)), "a", " \"\\u0259\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x25a)), "a", " \"\\u025A\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1d8f)), "a", " \"\\u1D8F\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1d95)), "a", " \"\\u1D95\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1e01)), "a", " \"\\u1E01\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1e9a)), "a", " \"\\u1E9A\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1ea1)), "a", " \"\\u1EA1\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1ea3)), "a", " \"\\u1EA3\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1ea5)), "a", " \"\\u1EA5\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1ea7)), "a", " \"\\u1EA7\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1ea9)), "a", " \"\\u1EA9\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1eab)), "a", " \"\\u1EAB\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1ead)), "a", " \"\\u1EAD\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1eaf)), "a", " \"\\u1EAF\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1eb1)), "a", " \"\\u1EB1\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1eb3)), "a", " \"\\u1EB3\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1eb5)), "a", " \"\\u1EB5\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x1eb7)), "a", " \"\\u1EB7\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x2090)), "a", " \"\\u2090\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x2094)), "a", " \"\\u2094\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x24d0)), "a", " \"\\u24D0\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x2c65)), "a", " \"\\u2C65\": \"a\"");
    equal(foldStrict(String.fromCharCode(0x2c6f)), "a", " \"\\u2C6F\": \"a\"");
    equal(foldStrict(String.fromCharCode(0xff41)), "a", " \"\\uFF41\": \"a\"");
});

QUnit.test("AATest", () => {
    equal(foldStrict(String.fromCharCode(0xa732)), "AA", " \"\\uA732\": \"AA\"");
});

QUnit.test("AETest", () => {
    equal(foldStrict(String.fromCharCode(0xc6)), "AE", " \"\\u00C6\": \"AE\"");
    equal(foldStrict(String.fromCharCode(0x1e2)), "AE", " \"\\u01E2\": \"AE\"");
    equal(foldStrict(String.fromCharCode(0x1fc)), "AE", " \"\\u01FC\": \"AE\"");
    equal(foldStrict(String.fromCharCode(0x1d01)), "AE", " \"\\u1D01\": \"AE\"");
});

QUnit.test("AOTest", () => {
    equal(foldStrict(String.fromCharCode(0xa734)), "AO", " \"\\uA734\": \"AO\"");
});

QUnit.test("AUTest", () => {
    equal(foldStrict(String.fromCharCode(0xa736)), "AU", " \"\\uA736\": \"AU\"");
});

QUnit.test("AVTest", () => {
    equal(foldStrict(String.fromCharCode(0xa738)), "AV", " \"\\uA738\": \"AV\"");
    equal(foldStrict(String.fromCharCode(0xa73a)), "AV", " \"\\uA73A\": \"AV\"");
});

QUnit.test("AYTest", () => {
    equal(foldStrict(String.fromCharCode(0xa73c)), "AY", " \"\\uA73C\": \"AY\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterARightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x249c)), "(a)", " \"\\u249C\": \"(a)\"");
});

QUnit.test("aaTest", () => {
    equal(foldStrict(String.fromCharCode(0xa733)), "aa", " \"\\uA733\": \"aa\"");
});

QUnit.test("aeTest", () => {
    equal(foldStrict(String.fromCharCode(0xe6)), "ae", " \"\\u00E6\": \"ae\"");
    equal(foldStrict(String.fromCharCode(0x1e3)), "ae", " \"\\u01E3\": \"ae\"");
    equal(foldStrict(String.fromCharCode(0x1fd)), "ae", " \"\\u01FD\": \"ae\"");
    equal(foldStrict(String.fromCharCode(0x1d02)), "ae", " \"\\u1D02\": \"ae\"");
});

QUnit.test("aoTest", () => {
    equal(foldStrict(String.fromCharCode(0xa735)), "ao", " \"\\uA735\": \"ao\"");
});

QUnit.test("auTest", () => {
    equal(foldStrict(String.fromCharCode(0xa737)), "au", " \"\\uA737\": \"au\"");
});

QUnit.test("avTest", () => {
    equal(foldStrict(String.fromCharCode(0xa739)), "av", " \"\\uA739\": \"av\"");
    equal(foldStrict(String.fromCharCode(0xa73b)), "av", " \"\\uA73B\": \"av\"");
});

QUnit.test("ayTest", () => {
    equal(foldStrict(String.fromCharCode(0xa73d)), "ay", " \"\\uA73D\": \"ay\"");
});

QUnit.test("BTest", () => {
    equal(foldStrict(String.fromCharCode(0x181)), "B", " \"\\u0181\": \"B\"");
    equal(foldStrict(String.fromCharCode(0x182)), "B", " \"\\u0182\": \"B\"");
    equal(foldStrict(String.fromCharCode(0x243)), "B", " \"\\u0243\": \"B\"");
    equal(foldStrict(String.fromCharCode(0x299)), "B", " \"\\u0299\": \"B\"");
    equal(foldStrict(String.fromCharCode(0x1d03)), "B", " \"\\u1D03\": \"B\"");
    equal(foldStrict(String.fromCharCode(0x1e02)), "B", " \"\\u1E02\": \"B\"");
    equal(foldStrict(String.fromCharCode(0x1e04)), "B", " \"\\u1E04\": \"B\"");
    equal(foldStrict(String.fromCharCode(0x1e06)), "B", " \"\\u1E06\": \"B\"");
    equal(foldStrict(String.fromCharCode(0x24b7)), "B", " \"\\u24B7\": \"B\"");
    equal(foldStrict(String.fromCharCode(0xff22)), "B", " \"\\uFF22\": \"B\"");
});

QUnit.test("bTest", () => {
    equal(foldStrict(String.fromCharCode(0x180)), "b", " \"\\u0180\": \"b\"");
    equal(foldStrict(String.fromCharCode(0x183)), "b", " \"\\u0183\": \"b\"");
    equal(foldStrict(String.fromCharCode(0x253)), "b", " \"\\u0253\": \"b\"");
    equal(foldStrict(String.fromCharCode(0x1d6c)), "b", " \"\\u1D6C\": \"b\"");
    equal(foldStrict(String.fromCharCode(0x1d80)), "b", " \"\\u1D80\": \"b\"");
    equal(foldStrict(String.fromCharCode(0x1e03)), "b", " \"\\u1E03\": \"b\"");
    equal(foldStrict(String.fromCharCode(0x1e05)), "b", " \"\\u1E05\": \"b\"");
    equal(foldStrict(String.fromCharCode(0x1e07)), "b", " \"\\u1E07\": \"b\"");
    equal(foldStrict(String.fromCharCode(0x24d1)), "b", " \"\\u24D1\": \"b\"");
    equal(foldStrict(String.fromCharCode(0xff42)), "b", " \"\\uFF42\": \"b\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterBRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x249d)), "(b)", " \"\\u249D\": \"(b)\"");
});

QUnit.test("CTest", () => {
    equal(foldStrict(String.fromCharCode(0xc7)), "C", " \"\\u00C7\": \"C\"");
    equal(foldStrict(String.fromCharCode(0x106)), "C", " \"\\u0106\": \"C\"");
    equal(foldStrict(String.fromCharCode(0x108)), "C", " \"\\u0108\": \"C\"");
    equal(foldStrict(String.fromCharCode(0x10a)), "C", " \"\\u010A\": \"C\"");
    equal(foldStrict(String.fromCharCode(0x10c)), "C", " \"\\u010C\": \"C\"");
    equal(foldStrict(String.fromCharCode(0x187)), "C", " \"\\u0187\": \"C\"");
    equal(foldStrict(String.fromCharCode(0x23b)), "C", " \"\\u023B\": \"C\"");
    equal(foldStrict(String.fromCharCode(0x297)), "C", " \"\\u0297\": \"C\"");
    equal(foldStrict(String.fromCharCode(0x1d04)), "C", " \"\\u1D04\": \"C\"");
    equal(foldStrict(String.fromCharCode(0x1e08)), "C", " \"\\u1E08\": \"C\"");
    equal(foldStrict(String.fromCharCode(0x24b8)), "C", " \"\\u24B8\": \"C\"");
    equal(foldStrict(String.fromCharCode(0xff23)), "C", " \"\\uFF23\": \"C\"");
});

QUnit.test("cTest", () => {
    equal(foldStrict(String.fromCharCode(0xe7)), "c", " \"\\u00E7\": \"c\"");
    equal(foldStrict(String.fromCharCode(0x107)), "c", " \"\\u0107\": \"c\"");
    equal(foldStrict(String.fromCharCode(0x109)), "c", " \"\\u0109\": \"c\"");
    equal(foldStrict(String.fromCharCode(0x10b)), "c", " \"\\u010B\": \"c\"");
    equal(foldStrict(String.fromCharCode(0x10d)), "c", " \"\\u010D\": \"c\"");
    equal(foldStrict(String.fromCharCode(0x188)), "c", " \"\\u0188\": \"c\"");
    equal(foldStrict(String.fromCharCode(0x23c)), "c", " \"\\u023C\": \"c\"");
    equal(foldStrict(String.fromCharCode(0x255)), "c", " \"\\u0255\": \"c\"");
    equal(foldStrict(String.fromCharCode(0x1e09)), "c", " \"\\u1E09\": \"c\"");
    equal(foldStrict(String.fromCharCode(0x2184)), "c", " \"\\u2184\": \"c\"");
    equal(foldStrict(String.fromCharCode(0x24d2)), "c", " \"\\u24D2\": \"c\"");
    equal(foldStrict(String.fromCharCode(0xa73e)), "c", " \"\\uA73E\": \"c\"");
    equal(foldStrict(String.fromCharCode(0xa73f)), "c", " \"\\uA73F\": \"c\"");
    equal(foldStrict(String.fromCharCode(0xff43)), "c", " \"\\uFF43\": \"c\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterCRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x249e)), "(c)", " \"\\u249E\": \"(c)\"");
});

QUnit.test("DTest", () => {
    equal(foldStrict(String.fromCharCode(0xd0)), "D", " \"\\u00D0\": \"D\"");
    equal(foldStrict(String.fromCharCode(0x10e)), "D", " \"\\u010E\": \"D\"");
    equal(foldStrict(String.fromCharCode(0x110)), "D", " \"\\u0110\": \"D\"");
    equal(foldStrict(String.fromCharCode(0x189)), "D", " \"\\u0189\": \"D\"");
    equal(foldStrict(String.fromCharCode(0x18a)), "D", " \"\\u018A\": \"D\"");
    equal(foldStrict(String.fromCharCode(0x18b)), "D", " \"\\u018B\": \"D\"");
    equal(foldStrict(String.fromCharCode(0x1d05)), "D", " \"\\u1D05\": \"D\"");
    equal(foldStrict(String.fromCharCode(0x1d06)), "D", " \"\\u1D06\": \"D\"");
    equal(foldStrict(String.fromCharCode(0x1e0a)), "D", " \"\\u1E0A\": \"D\"");
    equal(foldStrict(String.fromCharCode(0x1e0c)), "D", " \"\\u1E0C\": \"D\"");
    equal(foldStrict(String.fromCharCode(0x1e0e)), "D", " \"\\u1E0E\": \"D\"");
    equal(foldStrict(String.fromCharCode(0x1e10)), "D", " \"\\u1E10\": \"D\"");
    equal(foldStrict(String.fromCharCode(0x1e12)), "D", " \"\\u1E12\": \"D\"");
    equal(foldStrict(String.fromCharCode(0x24b9)), "D", " \"\\u24B9\": \"D\"");
    equal(foldStrict(String.fromCharCode(0xa779)), "D", " \"\\uA779\": \"D\"");
    equal(foldStrict(String.fromCharCode(0xff24)), "D", " \"\\uFF24\": \"D\"");
});

QUnit.test("dTest", () => {
    equal(foldStrict(String.fromCharCode(0xf0)), "d", " \"\\u00F0\": \"d\"");
    equal(foldStrict(String.fromCharCode(0x10f)), "d", " \"\\u010F\": \"d\"");
    equal(foldStrict(String.fromCharCode(0x111)), "d", " \"\\u0111\": \"d\"");
    equal(foldStrict(String.fromCharCode(0x18c)), "d", " \"\\u018C\": \"d\"");
    equal(foldStrict(String.fromCharCode(0x221)), "d", " \"\\u0221\": \"d\"");
    equal(foldStrict(String.fromCharCode(0x256)), "d", " \"\\u0256\": \"d\"");
    equal(foldStrict(String.fromCharCode(0x257)), "d", " \"\\u0257\": \"d\"");
    equal(foldStrict(String.fromCharCode(0x1d6d)), "d", " \"\\u1D6D\": \"d\"");
    equal(foldStrict(String.fromCharCode(0x1d81)), "d", " \"\\u1D81\": \"d\"");
    equal(foldStrict(String.fromCharCode(0x1d91)), "d", " \"\\u1D91\": \"d\"");
    equal(foldStrict(String.fromCharCode(0x1e0b)), "d", " \"\\u1E0B\": \"d\"");
    equal(foldStrict(String.fromCharCode(0x1e0d)), "d", " \"\\u1E0D\": \"d\"");
    equal(foldStrict(String.fromCharCode(0x1e0f)), "d", " \"\\u1E0F\": \"d\"");
    equal(foldStrict(String.fromCharCode(0x1e11)), "d", " \"\\u1E11\": \"d\"");
    equal(foldStrict(String.fromCharCode(0x1e13)), "d", " \"\\u1E13\": \"d\"");
    equal(foldStrict(String.fromCharCode(0x24d3)), "d", " \"\\u24D3\": \"d\"");
    equal(foldStrict(String.fromCharCode(0xa77a)), "d", " \"\\uA77A\": \"d\"");
    equal(foldStrict(String.fromCharCode(0xff44)), "d", " \"\\uFF44\": \"d\"");
});

QUnit.test("DZTest", () => {
    equal(foldStrict(String.fromCharCode(0x1c4)), "DZ", " \"\\u01C4\": \"DZ\"");
    equal(foldStrict(String.fromCharCode(0x1f1)), "DZ", " \"\\u01F1\": \"DZ\"");
});

QUnit.test("DzTest", () => {
    equal(foldStrict(String.fromCharCode(0x1c5)), "Dz", " \"\\u01C5\": \"Dz\"");
    equal(foldStrict(String.fromCharCode(0x1f2)), "Dz", " \"\\u01F2\": \"Dz\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterDRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x249f)), "(d)", " \"\\u249F\": \"(d)\"");
});

QUnit.test("dbTest", () => {
    equal(foldStrict(String.fromCharCode(0x238)), "db", " \"\\u0238\": \"db\"");
});

QUnit.test("dzTest", () => {
    equal(foldStrict(String.fromCharCode(0x1c6)), "dz", " \"\\u01C6\": \"dz\"");
    equal(foldStrict(String.fromCharCode(0x1f3)), "dz", " \"\\u01F3\": \"dz\"");
    equal(foldStrict(String.fromCharCode(0x2a3)), "dz", " \"\\u02A3\": \"dz\"");
    equal(foldStrict(String.fromCharCode(0x2a5)), "dz", " \"\\u02A5\": \"dz\"");
});

QUnit.test("ETest", () => {
    equal(foldStrict(String.fromCharCode(0xc8)), "E", " \"\\u00C8\": \"E\"");
    equal(foldStrict(String.fromCharCode(0xc9)), "E", " \"\\u00C9\": \"E\"");
    equal(foldStrict(String.fromCharCode(0xca)), "E", " \"\\u00CA\": \"E\"");
    equal(foldStrict(String.fromCharCode(0xcb)), "E", " \"\\u00CB\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x112)), "E", " \"\\u0112\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x114)), "E", " \"\\u0114\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x116)), "E", " \"\\u0116\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x118)), "E", " \"\\u0118\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x11a)), "E", " \"\\u011A\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x18e)), "E", " \"\\u018E\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x190)), "E", " \"\\u0190\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x204)), "E", " \"\\u0204\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x206)), "E", " \"\\u0206\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x228)), "E", " \"\\u0228\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x246)), "E", " \"\\u0246\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x1d07)), "E", " \"\\u1D07\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x1e14)), "E", " \"\\u1E14\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x1e16)), "E", " \"\\u1E16\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x1e18)), "E", " \"\\u1E18\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x1e1a)), "E", " \"\\u1E1A\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x1e1c)), "E", " \"\\u1E1C\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x1eb8)), "E", " \"\\u1EB8\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x1eba)), "E", " \"\\u1EBA\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x1ebc)), "E", " \"\\u1EBC\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x1ebe)), "E", " \"\\u1EBE\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x1ec0)), "E", " \"\\u1EC0\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x1ec2)), "E", " \"\\u1EC2\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x1ec4)), "E", " \"\\u1EC4\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x1ec6)), "E", " \"\\u1EC6\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x24ba)), "E", " \"\\u24BA\": \"E\"");
    equal(foldStrict(String.fromCharCode(0x2c7b)), "E", " \"\\u2C7B\": \"E\"");
    equal(foldStrict(String.fromCharCode(0xff25)), "E", " \"\\uFF25\": \"E\"");
});

QUnit.test("eTest", () => {
    equal(foldStrict(String.fromCharCode(0xe8)), "e", " \"\\u00E8\": \"e\"");
    equal(foldStrict(String.fromCharCode(0xe9)), "e", " \"\\u00E9\": \"e\"");
    equal(foldStrict(String.fromCharCode(0xea)), "e", " \"\\u00EA\": \"e\"");
    equal(foldStrict(String.fromCharCode(0xeb)), "e", " \"\\u00EB\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x113)), "e", " \"\\u0113\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x115)), "e", " \"\\u0115\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x117)), "e", " \"\\u0117\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x119)), "e", " \"\\u0119\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x11b)), "e", " \"\\u011B\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x1dd)), "e", " \"\\u01DD\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x205)), "e", " \"\\u0205\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x207)), "e", " \"\\u0207\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x229)), "e", " \"\\u0229\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x247)), "e", " \"\\u0247\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x258)), "e", " \"\\u0258\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x25b)), "e", " \"\\u025B\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x25c)), "e", " \"\\u025C\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x25d)), "e", " \"\\u025D\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x25e)), "e", " \"\\u025E\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x29a)), "e", " \"\\u029A\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x1d08)), "e", " \"\\u1D08\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x1d92)), "e", " \"\\u1D92\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x1d93)), "e", " \"\\u1D93\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x1d94)), "e", " \"\\u1D94\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x1e15)), "e", " \"\\u1E15\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x1e17)), "e", " \"\\u1E17\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x1e19)), "e", " \"\\u1E19\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x1e1b)), "e", " \"\\u1E1B\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x1e1d)), "e", " \"\\u1E1D\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x1eb9)), "e", " \"\\u1EB9\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x1ebb)), "e", " \"\\u1EBB\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x1ebd)), "e", " \"\\u1EBD\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x1ebf)), "e", " \"\\u1EBF\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x1ec1)), "e", " \"\\u1EC1\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x1ec3)), "e", " \"\\u1EC3\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x1ec5)), "e", " \"\\u1EC5\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x1ec7)), "e", " \"\\u1EC7\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x2091)), "e", " \"\\u2091\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x24d4)), "e", " \"\\u24D4\": \"e\"");
    equal(foldStrict(String.fromCharCode(0x2c78)), "e", " \"\\u2C78\": \"e\"");
    equal(foldStrict(String.fromCharCode(0xff45)), "e", " \"\\uFF45\": \"e\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterERightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24a0)), "(e)", " \"\\u24A0\": \"(e)\"");
});

QUnit.test("FTest", () => {
    equal(foldStrict(String.fromCharCode(0x191)), "F", " \"\\u0191\": \"F\"");
    equal(foldStrict(String.fromCharCode(0x1e1e)), "F", " \"\\u1E1E\": \"F\"");
    equal(foldStrict(String.fromCharCode(0x24bb)), "F", " \"\\u24BB\": \"F\"");
    equal(foldStrict(String.fromCharCode(0xa730)), "F", " \"\\uA730\": \"F\"");
    equal(foldStrict(String.fromCharCode(0xa77b)), "F", " \"\\uA77B\": \"F\"");
    equal(foldStrict(String.fromCharCode(0xa7fb)), "F", " \"\\uA7FB\": \"F\"");
    equal(foldStrict(String.fromCharCode(0xff26)), "F", " \"\\uFF26\": \"F\"");
});

QUnit.test("fTest", () => {
    equal(foldStrict(String.fromCharCode(0x192)), "f", " \"\\u0192\": \"f\"");
    equal(foldStrict(String.fromCharCode(0x1d6e)), "f", " \"\\u1D6E\": \"f\"");
    equal(foldStrict(String.fromCharCode(0x1d82)), "f", " \"\\u1D82\": \"f\"");
    equal(foldStrict(String.fromCharCode(0x1e1f)), "f", " \"\\u1E1F\": \"f\"");
    equal(foldStrict(String.fromCharCode(0x1e9b)), "f", " \"\\u1E9B\": \"f\"");
    equal(foldStrict(String.fromCharCode(0x24d5)), "f", " \"\\u24D5\": \"f\"");
    equal(foldStrict(String.fromCharCode(0xa77c)), "f", " \"\\uA77C\": \"f\"");
    equal(foldStrict(String.fromCharCode(0xff46)), "f", " \"\\uFF46\": \"f\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterFRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24a1)), "(f)", " \"\\u24A1\": \"(f)\"");
});

QUnit.test("ffTest", () => {
    equal(foldStrict(String.fromCharCode(0xfb00)), "ff", " \"\\uFB00\": \"ff\"");
});

QUnit.test("ffiTest", () => {
    equal(foldStrict(String.fromCharCode(0xfb03)), "ffi", " \"\\uFB03\": \"ffi\"");
});

QUnit.test("fflTest", () => {
    equal(foldStrict(String.fromCharCode(0xfb04)), "ffl", " \"\\uFB04\": \"ffl\"");
});

QUnit.test("fiTest", () => {
    equal(foldStrict(String.fromCharCode(0xfb01)), "fi", " \"\\uFB01\": \"fi\"");
});

QUnit.test("flTest", () => {
    equal(foldStrict(String.fromCharCode(0xfb02)), "fl", " \"\\uFB02\": \"fl\"");
});

QUnit.test("GTest", () => {
    equal(foldStrict(String.fromCharCode(0x11c)), "G", " \"\\u011C\": \"G\"");
    equal(foldStrict(String.fromCharCode(0x11e)), "G", " \"\\u011E\": \"G\"");
    equal(foldStrict(String.fromCharCode(0x120)), "G", " \"\\u0120\": \"G\"");
    equal(foldStrict(String.fromCharCode(0x122)), "G", " \"\\u0122\": \"G\"");
    equal(foldStrict(String.fromCharCode(0x193)), "G", " \"\\u0193\": \"G\"");
    equal(foldStrict(String.fromCharCode(0x1e4)), "G", " \"\\u01E4\": \"G\"");
    equal(foldStrict(String.fromCharCode(0x1e5)), "G", " \"\\u01E5\": \"G\"");
    equal(foldStrict(String.fromCharCode(0x1e6)), "G", " \"\\u01E6\": \"G\"");
    equal(foldStrict(String.fromCharCode(0x1e7)), "G", " \"\\u01E7\": \"G\"");
    equal(foldStrict(String.fromCharCode(0x1f4)), "G", " \"\\u01F4\": \"G\"");
    equal(foldStrict(String.fromCharCode(0x262)), "G", " \"\\u0262\": \"G\"");
    equal(foldStrict(String.fromCharCode(0x29b)), "G", " \"\\u029B\": \"G\"");
    equal(foldStrict(String.fromCharCode(0x1e20)), "G", " \"\\u1E20\": \"G\"");
    equal(foldStrict(String.fromCharCode(0x24bc)), "G", " \"\\u24BC\": \"G\"");
    equal(foldStrict(String.fromCharCode(0xa77d)), "G", " \"\\uA77D\": \"G\"");
    equal(foldStrict(String.fromCharCode(0xa77e)), "G", " \"\\uA77E\": \"G\"");
    equal(foldStrict(String.fromCharCode(0xff27)), "G", " \"\\uFF27\": \"G\"");
});

QUnit.test("gTest", () => {
    equal(foldStrict(String.fromCharCode(0x11d)), "g", " \"\\u011D\": \"g\"");
    equal(foldStrict(String.fromCharCode(0x11f)), "g", " \"\\u011F\": \"g\"");
    equal(foldStrict(String.fromCharCode(0x121)), "g", " \"\\u0121\": \"g\"");
    equal(foldStrict(String.fromCharCode(0x123)), "g", " \"\\u0123\": \"g\"");
    equal(foldStrict(String.fromCharCode(0x1f5)), "g", " \"\\u01F5\": \"g\"");
    equal(foldStrict(String.fromCharCode(0x260)), "g", " \"\\u0260\": \"g\"");
    equal(foldStrict(String.fromCharCode(0x261)), "g", " \"\\u0261\": \"g\"");
    equal(foldStrict(String.fromCharCode(0x1d77)), "g", " \"\\u1D77\": \"g\"");
    equal(foldStrict(String.fromCharCode(0x1d79)), "g", " \"\\u1D79\": \"g\"");
    equal(foldStrict(String.fromCharCode(0x1d83)), "g", " \"\\u1D83\": \"g\"");
    equal(foldStrict(String.fromCharCode(0x1e21)), "g", " \"\\u1E21\": \"g\"");
    equal(foldStrict(String.fromCharCode(0x24d6)), "g", " \"\\u24D6\": \"g\"");
    equal(foldStrict(String.fromCharCode(0xa77f)), "g", " \"\\uA77F\": \"g\"");
    equal(foldStrict(String.fromCharCode(0xff47)), "g", " \"\\uFF47\": \"g\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterGRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24a2)), "(g)", " \"\\u24A2\": \"(g)\"");
});

QUnit.test("HTest", () => {
    equal(foldStrict(String.fromCharCode(0x124)), "H", " \"\\u0124\": \"H\"");
    equal(foldStrict(String.fromCharCode(0x126)), "H", " \"\\u0126\": \"H\"");
    equal(foldStrict(String.fromCharCode(0x21e)), "H", " \"\\u021E\": \"H\"");
    equal(foldStrict(String.fromCharCode(0x29c)), "H", " \"\\u029C\": \"H\"");
    equal(foldStrict(String.fromCharCode(0x1e22)), "H", " \"\\u1E22\": \"H\"");
    equal(foldStrict(String.fromCharCode(0x1e24)), "H", " \"\\u1E24\": \"H\"");
    equal(foldStrict(String.fromCharCode(0x1e26)), "H", " \"\\u1E26\": \"H\"");
    equal(foldStrict(String.fromCharCode(0x1e28)), "H", " \"\\u1E28\": \"H\"");
    equal(foldStrict(String.fromCharCode(0x1e2a)), "H", " \"\\u1E2A\": \"H\"");
    equal(foldStrict(String.fromCharCode(0x24bd)), "H", " \"\\u24BD\": \"H\"");
    equal(foldStrict(String.fromCharCode(0x2c67)), "H", " \"\\u2C67\": \"H\"");
    equal(foldStrict(String.fromCharCode(0x2c75)), "H", " \"\\u2C75\": \"H\"");
    equal(foldStrict(String.fromCharCode(0xff28)), "H", " \"\\uFF28\": \"H\"");
});

QUnit.test("hTest", () => {
    equal(foldStrict(String.fromCharCode(0x125)), "h", " \"\\u0125\": \"h\"");
    equal(foldStrict(String.fromCharCode(0x127)), "h", " \"\\u0127\": \"h\"");
    equal(foldStrict(String.fromCharCode(0x21f)), "h", " \"\\u021F\": \"h\"");
    equal(foldStrict(String.fromCharCode(0x265)), "h", " \"\\u0265\": \"h\"");
    equal(foldStrict(String.fromCharCode(0x266)), "h", " \"\\u0266\": \"h\"");
    equal(foldStrict(String.fromCharCode(0x2ae)), "h", " \"\\u02AE\": \"h\"");
    equal(foldStrict(String.fromCharCode(0x2af)), "h", " \"\\u02AF\": \"h\"");
    equal(foldStrict(String.fromCharCode(0x1e23)), "h", " \"\\u1E23\": \"h\"");
    equal(foldStrict(String.fromCharCode(0x1e25)), "h", " \"\\u1E25\": \"h\"");
    equal(foldStrict(String.fromCharCode(0x1e27)), "h", " \"\\u1E27\": \"h\"");
    equal(foldStrict(String.fromCharCode(0x1e29)), "h", " \"\\u1E29\": \"h\"");
    equal(foldStrict(String.fromCharCode(0x1e2b)), "h", " \"\\u1E2B\": \"h\"");
    equal(foldStrict(String.fromCharCode(0x1e96)), "h", " \"\\u1E96\": \"h\"");
    equal(foldStrict(String.fromCharCode(0x24d7)), "h", " \"\\u24D7\": \"h\"");
    equal(foldStrict(String.fromCharCode(0x2c68)), "h", " \"\\u2C68\": \"h\"");
    equal(foldStrict(String.fromCharCode(0x2c76)), "h", " \"\\u2C76\": \"h\"");
    equal(foldStrict(String.fromCharCode(0xff48)), "h", " \"\\uFF48\": \"h\"");
});

QUnit.test("HVTest", () => {
    equal(foldStrict(String.fromCharCode(0x1f6)), "HV", " \"\\u01F6\": \"HV\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterHRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24a3)), "(h)", " \"\\u24A3\": \"(h)\"");
});

QUnit.test("hvTest", () => {
    equal(foldStrict(String.fromCharCode(0x195)), "hv", " \"\\u0195\": \"hv\"");
});

QUnit.test("ITest", () => {
    equal(foldStrict(String.fromCharCode(0xcc)), "I", " \"\\u00CC\": \"I\"");
    equal(foldStrict(String.fromCharCode(0xcd)), "I", " \"\\u00CD\": \"I\"");
    equal(foldStrict(String.fromCharCode(0xce)), "I", " \"\\u00CE\": \"I\"");
    equal(foldStrict(String.fromCharCode(0xcf)), "I", " \"\\u00CF\": \"I\"");
    equal(foldStrict(String.fromCharCode(0x128)), "I", " \"\\u0128\": \"I\"");
    equal(foldStrict(String.fromCharCode(0x12a)), "I", " \"\\u012A\": \"I\"");
    equal(foldStrict(String.fromCharCode(0x12c)), "I", " \"\\u012C\": \"I\"");
    equal(foldStrict(String.fromCharCode(0x12e)), "I", " \"\\u012E\": \"I\"");
    equal(foldStrict(String.fromCharCode(0x130)), "I", " \"\\u0130\": \"I\"");
    equal(foldStrict(String.fromCharCode(0x196)), "I", " \"\\u0196\": \"I\"");
    equal(foldStrict(String.fromCharCode(0x197)), "I", " \"\\u0197\": \"I\"");
    equal(foldStrict(String.fromCharCode(0x1cf)), "I", " \"\\u01CF\": \"I\"");
    equal(foldStrict(String.fromCharCode(0x208)), "I", " \"\\u0208\": \"I\"");
    equal(foldStrict(String.fromCharCode(0x20a)), "I", " \"\\u020A\": \"I\"");
    equal(foldStrict(String.fromCharCode(0x26a)), "I", " \"\\u026A\": \"I\"");
    equal(foldStrict(String.fromCharCode(0x1d7b)), "I", " \"\\u1D7B\": \"I\"");
    equal(foldStrict(String.fromCharCode(0x1e2c)), "I", " \"\\u1E2C\": \"I\"");
    equal(foldStrict(String.fromCharCode(0x1e2e)), "I", " \"\\u1E2E\": \"I\"");
    equal(foldStrict(String.fromCharCode(0x1ec8)), "I", " \"\\u1EC8\": \"I\"");
    equal(foldStrict(String.fromCharCode(0x1eca)), "I", " \"\\u1ECA\": \"I\"");
    equal(foldStrict(String.fromCharCode(0x24be)), "I", " \"\\u24BE\": \"I\"");
    equal(foldStrict(String.fromCharCode(0xa7fe)), "I", " \"\\uA7FE\": \"I\"");
    equal(foldStrict(String.fromCharCode(0xff29)), "I", " \"\\uFF29\": \"I\"");
});

QUnit.test("iTest", () => {
    equal(foldStrict(String.fromCharCode(0xec)), "i", " \"\\u00EC\": \"i\"");
    equal(foldStrict(String.fromCharCode(0xed)), "i", " \"\\u00ED\": \"i\"");
    equal(foldStrict(String.fromCharCode(0xee)), "i", " \"\\u00EE\": \"i\"");
    equal(foldStrict(String.fromCharCode(0xef)), "i", " \"\\u00EF\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x129)), "i", " \"\\u0129\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x12b)), "i", " \"\\u012B\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x12d)), "i", " \"\\u012D\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x12f)), "i", " \"\\u012F\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x131)), "i", " \"\\u0131\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x1d0)), "i", " \"\\u01D0\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x209)), "i", " \"\\u0209\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x20b)), "i", " \"\\u020B\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x268)), "i", " \"\\u0268\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x1d09)), "i", " \"\\u1D09\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x1d62)), "i", " \"\\u1D62\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x1d7c)), "i", " \"\\u1D7C\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x1d96)), "i", " \"\\u1D96\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x1e2d)), "i", " \"\\u1E2D\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x1e2f)), "i", " \"\\u1E2F\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x1ec9)), "i", " \"\\u1EC9\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x1ecb)), "i", " \"\\u1ECB\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x2071)), "i", " \"\\u2071\": \"i\"");
    equal(foldStrict(String.fromCharCode(0x24d8)), "i", " \"\\u24D8\": \"i\"");
    equal(foldStrict(String.fromCharCode(0xff49)), "i", " \"\\uFF49\": \"i\"");
});

QUnit.test("IJTest", () => {
    equal(foldStrict(String.fromCharCode(0x132)), "IJ", " \"\\u0132\": \"IJ\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterIRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24a4)), "(i)", " \"\\u24A4\": \"(i)\"");
});

QUnit.test("ijTest", () => {
    equal(foldStrict(String.fromCharCode(0x133)), "ij", " \"\\u0133\": \"ij\"");
});

QUnit.test("JTest", () => {
    equal(foldStrict(String.fromCharCode(0x134)), "J", " \"\\u0134\": \"J\"");
    equal(foldStrict(String.fromCharCode(0x248)), "J", " \"\\u0248\": \"J\"");
    equal(foldStrict(String.fromCharCode(0x1d0a)), "J", " \"\\u1D0A\": \"J\"");
    equal(foldStrict(String.fromCharCode(0x24bf)), "J", " \"\\u24BF\": \"J\"");
    equal(foldStrict(String.fromCharCode(0xff2a)), "J", " \"\\uFF2A\": \"J\"");
});

QUnit.test("jTest", () => {
    equal(foldStrict(String.fromCharCode(0x135)), "j", " \"\\u0135\": \"j\"");
    equal(foldStrict(String.fromCharCode(0x1f0)), "j", " \"\\u01F0\": \"j\"");
    equal(foldStrict(String.fromCharCode(0x237)), "j", " \"\\u0237\": \"j\"");
    equal(foldStrict(String.fromCharCode(0x249)), "j", " \"\\u0249\": \"j\"");
    equal(foldStrict(String.fromCharCode(0x25f)), "j", " \"\\u025F\": \"j\"");
    equal(foldStrict(String.fromCharCode(0x284)), "j", " \"\\u0284\": \"j\"");
    equal(foldStrict(String.fromCharCode(0x29d)), "j", " \"\\u029D\": \"j\"");
    equal(foldStrict(String.fromCharCode(0x24d9)), "j", " \"\\u24D9\": \"j\"");
    equal(foldStrict(String.fromCharCode(0x2c7c)), "j", " \"\\u2C7C\": \"j\"");
    equal(foldStrict(String.fromCharCode(0xff4a)), "j", " \"\\uFF4A\": \"j\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterJRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24a5)), "(j)", " \"\\u24A5\": \"(j)\"");
});

QUnit.test("KTest", () => {
    equal(foldStrict(String.fromCharCode(0x136)), "K", " \"\\u0136\": \"K\"");
    equal(foldStrict(String.fromCharCode(0x198)), "K", " \"\\u0198\": \"K\"");
    equal(foldStrict(String.fromCharCode(0x1e8)), "K", " \"\\u01E8\": \"K\"");
    equal(foldStrict(String.fromCharCode(0x1d0b)), "K", " \"\\u1D0B\": \"K\"");
    equal(foldStrict(String.fromCharCode(0x1e30)), "K", " \"\\u1E30\": \"K\"");
    equal(foldStrict(String.fromCharCode(0x1e32)), "K", " \"\\u1E32\": \"K\"");
    equal(foldStrict(String.fromCharCode(0x1e34)), "K", " \"\\u1E34\": \"K\"");
    equal(foldStrict(String.fromCharCode(0x24c0)), "K", " \"\\u24C0\": \"K\"");
    equal(foldStrict(String.fromCharCode(0x2c69)), "K", " \"\\u2C69\": \"K\"");
    equal(foldStrict(String.fromCharCode(0xa740)), "K", " \"\\uA740\": \"K\"");
    equal(foldStrict(String.fromCharCode(0xa742)), "K", " \"\\uA742\": \"K\"");
    equal(foldStrict(String.fromCharCode(0xa744)), "K", " \"\\uA744\": \"K\"");
    equal(foldStrict(String.fromCharCode(0xff2b)), "K", " \"\\uFF2B\": \"K\"");
});

QUnit.test("kTest", () => {
    equal(foldStrict(String.fromCharCode(0x137)), "k", " \"\\u0137\": \"k\"");
    equal(foldStrict(String.fromCharCode(0x199)), "k", " \"\\u0199\": \"k\"");
    equal(foldStrict(String.fromCharCode(0x1e9)), "k", " \"\\u01E9\": \"k\"");
    equal(foldStrict(String.fromCharCode(0x29e)), "k", " \"\\u029E\": \"k\"");
    equal(foldStrict(String.fromCharCode(0x1d84)), "k", " \"\\u1D84\": \"k\"");
    equal(foldStrict(String.fromCharCode(0x1e31)), "k", " \"\\u1E31\": \"k\"");
    equal(foldStrict(String.fromCharCode(0x1e33)), "k", " \"\\u1E33\": \"k\"");
    equal(foldStrict(String.fromCharCode(0x1e35)), "k", " \"\\u1E35\": \"k\"");
    equal(foldStrict(String.fromCharCode(0x24da)), "k", " \"\\u24DA\": \"k\"");
    equal(foldStrict(String.fromCharCode(0x2c6a)), "k", " \"\\u2C6A\": \"k\"");
    equal(foldStrict(String.fromCharCode(0xa741)), "k", " \"\\uA741\": \"k\"");
    equal(foldStrict(String.fromCharCode(0xa743)), "k", " \"\\uA743\": \"k\"");
    equal(foldStrict(String.fromCharCode(0xa745)), "k", " \"\\uA745\": \"k\"");
    equal(foldStrict(String.fromCharCode(0xff4b)), "k", " \"\\uFF4B\": \"k\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterKRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24a6)), "(k)", " \"\\u24A6\": \"(k)\"");
});

QUnit.test("LTest", () => {
    equal(foldStrict(String.fromCharCode(0x139)), "L", " \"\\u0139\": \"L\"");
    equal(foldStrict(String.fromCharCode(0x13b)), "L", " \"\\u013B\": \"L\"");
    equal(foldStrict(String.fromCharCode(0x13d)), "L", " \"\\u013D\": \"L\"");
    equal(foldStrict(String.fromCharCode(0x13f)), "L", " \"\\u013F\": \"L\"");
    equal(foldStrict(String.fromCharCode(0x141)), "L", " \"\\u0141\": \"L\"");
    equal(foldStrict(String.fromCharCode(0x23d)), "L", " \"\\u023D\": \"L\"");
    equal(foldStrict(String.fromCharCode(0x29f)), "L", " \"\\u029F\": \"L\"");
    equal(foldStrict(String.fromCharCode(0x1d0c)), "L", " \"\\u1D0C\": \"L\"");
    equal(foldStrict(String.fromCharCode(0x1e36)), "L", " \"\\u1E36\": \"L\"");
    equal(foldStrict(String.fromCharCode(0x1e38)), "L", " \"\\u1E38\": \"L\"");
    equal(foldStrict(String.fromCharCode(0x1e3a)), "L", " \"\\u1E3A\": \"L\"");
    equal(foldStrict(String.fromCharCode(0x1e3c)), "L", " \"\\u1E3C\": \"L\"");
    equal(foldStrict(String.fromCharCode(0x24c1)), "L", " \"\\u24C1\": \"L\"");
    equal(foldStrict(String.fromCharCode(0x2c60)), "L", " \"\\u2C60\": \"L\"");
    equal(foldStrict(String.fromCharCode(0x2c62)), "L", " \"\\u2C62\": \"L\"");
    equal(foldStrict(String.fromCharCode(0xa746)), "L", " \"\\uA746\": \"L\"");
    equal(foldStrict(String.fromCharCode(0xa748)), "L", " \"\\uA748\": \"L\"");
    equal(foldStrict(String.fromCharCode(0xa780)), "L", " \"\\uA780\": \"L\"");
    equal(foldStrict(String.fromCharCode(0xff2c)), "L", " \"\\uFF2C\": \"L\"");
});

QUnit.test("lTest", () => {
    equal(foldStrict(String.fromCharCode(0x13a)), "l", " \"\\u013A\": \"l\"");
    equal(foldStrict(String.fromCharCode(0x13c)), "l", " \"\\u013C\": \"l\"");
    equal(foldStrict(String.fromCharCode(0x13e)), "l", " \"\\u013E\": \"l\"");
    equal(foldStrict(String.fromCharCode(0x140)), "l", " \"\\u0140\": \"l\"");
    equal(foldStrict(String.fromCharCode(0x142)), "l", " \"\\u0142\": \"l\"");
    equal(foldStrict(String.fromCharCode(0x19a)), "l", " \"\\u019A\": \"l\"");
    equal(foldStrict(String.fromCharCode(0x234)), "l", " \"\\u0234\": \"l\"");
    equal(foldStrict(String.fromCharCode(0x26b)), "l", " \"\\u026B\": \"l\"");
    equal(foldStrict(String.fromCharCode(0x26c)), "l", " \"\\u026C\": \"l\"");
    equal(foldStrict(String.fromCharCode(0x26d)), "l", " \"\\u026D\": \"l\"");
    equal(foldStrict(String.fromCharCode(0x1d85)), "l", " \"\\u1D85\": \"l\"");
    equal(foldStrict(String.fromCharCode(0x1e37)), "l", " \"\\u1E37\": \"l\"");
    equal(foldStrict(String.fromCharCode(0x1e39)), "l", " \"\\u1E39\": \"l\"");
    equal(foldStrict(String.fromCharCode(0x1e3b)), "l", " \"\\u1E3B\": \"l\"");
    equal(foldStrict(String.fromCharCode(0x1e3d)), "l", " \"\\u1E3D\": \"l\"");
    equal(foldStrict(String.fromCharCode(0x24db)), "l", " \"\\u24DB\": \"l\"");
    equal(foldStrict(String.fromCharCode(0x2c61)), "l", " \"\\u2C61\": \"l\"");
    equal(foldStrict(String.fromCharCode(0xa747)), "l", " \"\\uA747\": \"l\"");
    equal(foldStrict(String.fromCharCode(0xa749)), "l", " \"\\uA749\": \"l\"");
    equal(foldStrict(String.fromCharCode(0xa781)), "l", " \"\\uA781\": \"l\"");
    equal(foldStrict(String.fromCharCode(0xff4c)), "l", " \"\\uFF4C\": \"l\"");
});

QUnit.test("LJTest", () => {
    equal(foldStrict(String.fromCharCode(0x1c7)), "LJ", " \"\\u01C7\": \"LJ\"");
});

QUnit.test("LLTest", () => {
    equal(foldStrict(String.fromCharCode(0x1efa)), "LL", " \"\\u1EFA\": \"LL\"");
});

QUnit.test("LjTest", () => {
    equal(foldStrict(String.fromCharCode(0x1c8)), "Lj", " \"\\u01C8\": \"Lj\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterLRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24a7)), "(l)", " \"\\u24A7\": \"(l)\"");
});

QUnit.test("ljTest", () => {
    equal(foldStrict(String.fromCharCode(0x1c9)), "lj", " \"\\u01C9\": \"lj\"");
});

QUnit.test("llTest", () => {
    equal(foldStrict(String.fromCharCode(0x1efb)), "ll", " \"\\u1EFB\": \"ll\"");
});

QUnit.test("lsTest", () => {
    equal(foldStrict(String.fromCharCode(0x2aa)), "ls", " \"\\u02AA\": \"ls\"");
});

QUnit.test("lzTest", () => {
    equal(foldStrict(String.fromCharCode(0x2ab)), "lz", " \"\\u02AB\": \"lz\"");
});

QUnit.test("MTest", () => {
    equal(foldStrict(String.fromCharCode(0x19c)), "M", " \"\\u019C\": \"M\"");
    equal(foldStrict(String.fromCharCode(0x1d0d)), "M", " \"\\u1D0D\": \"M\"");
    equal(foldStrict(String.fromCharCode(0x1e3e)), "M", " \"\\u1E3E\": \"M\"");
    equal(foldStrict(String.fromCharCode(0x1e40)), "M", " \"\\u1E40\": \"M\"");
    equal(foldStrict(String.fromCharCode(0x1e42)), "M", " \"\\u1E42\": \"M\"");
    equal(foldStrict(String.fromCharCode(0x24c2)), "M", " \"\\u24C2\": \"M\"");
    equal(foldStrict(String.fromCharCode(0x2c6e)), "M", " \"\\u2C6E\": \"M\"");
    equal(foldStrict(String.fromCharCode(0xa7fd)), "M", " \"\\uA7FD\": \"M\"");
    equal(foldStrict(String.fromCharCode(0xa7ff)), "M", " \"\\uA7FF\": \"M\"");
    equal(foldStrict(String.fromCharCode(0xff2d)), "M", " \"\\uFF2D\": \"M\"");
});

QUnit.test("mTest", () => {
    equal(foldStrict(String.fromCharCode(0x26f)), "m", " \"\\u026F\": \"m\"");
    equal(foldStrict(String.fromCharCode(0x270)), "m", " \"\\u0270\": \"m\"");
    equal(foldStrict(String.fromCharCode(0x271)), "m", " \"\\u0271\": \"m\"");
    equal(foldStrict(String.fromCharCode(0x1d6f)), "m", " \"\\u1D6F\": \"m\"");
    equal(foldStrict(String.fromCharCode(0x1d86)), "m", " \"\\u1D86\": \"m\"");
    equal(foldStrict(String.fromCharCode(0x1e3f)), "m", " \"\\u1E3F\": \"m\"");
    equal(foldStrict(String.fromCharCode(0x1e41)), "m", " \"\\u1E41\": \"m\"");
    equal(foldStrict(String.fromCharCode(0x1e43)), "m", " \"\\u1E43\": \"m\"");
    equal(foldStrict(String.fromCharCode(0x24dc)), "m", " \"\\u24DC\": \"m\"");
    equal(foldStrict(String.fromCharCode(0xff4d)), "m", " \"\\uFF4D\": \"m\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterMRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24a8)), "(m)", " \"\\u24A8\": \"(m)\"");
});

QUnit.test("NTest", () => {
    equal(foldStrict(String.fromCharCode(0xd1)), "N", " \"\\u00D1\": \"N\"");
    equal(foldStrict(String.fromCharCode(0x143)), "N", " \"\\u0143\": \"N\"");
    equal(foldStrict(String.fromCharCode(0x145)), "N", " \"\\u0145\": \"N\"");
    equal(foldStrict(String.fromCharCode(0x147)), "N", " \"\\u0147\": \"N\"");
    equal(foldStrict(String.fromCharCode(0x14a)), "N", " \"\\u014A\": \"N\"");
    equal(foldStrict(String.fromCharCode(0x19d)), "N", " \"\\u019D\": \"N\"");
    equal(foldStrict(String.fromCharCode(0x1f8)), "N", " \"\\u01F8\": \"N\"");
    equal(foldStrict(String.fromCharCode(0x220)), "N", " \"\\u0220\": \"N\"");
    equal(foldStrict(String.fromCharCode(0x274)), "N", " \"\\u0274\": \"N\"");
    equal(foldStrict(String.fromCharCode(0x1d0e)), "N", " \"\\u1D0E\": \"N\"");
    equal(foldStrict(String.fromCharCode(0x1e44)), "N", " \"\\u1E44\": \"N\"");
    equal(foldStrict(String.fromCharCode(0x1e46)), "N", " \"\\u1E46\": \"N\"");
    equal(foldStrict(String.fromCharCode(0x1e48)), "N", " \"\\u1E48\": \"N\"");
    equal(foldStrict(String.fromCharCode(0x1e4a)), "N", " \"\\u1E4A\": \"N\"");
    equal(foldStrict(String.fromCharCode(0x24c3)), "N", " \"\\u24C3\": \"N\"");
    equal(foldStrict(String.fromCharCode(0xff2e)), "N", " \"\\uFF2E\": \"N\"");
});

QUnit.test("nTest", () => {
    equal(foldStrict(String.fromCharCode(0xf1)), "n", " \"\\u00F1\": \"n\"");
    equal(foldStrict(String.fromCharCode(0x144)), "n", " \"\\u0144\": \"n\"");
    equal(foldStrict(String.fromCharCode(0x146)), "n", " \"\\u0146\": \"n\"");
    equal(foldStrict(String.fromCharCode(0x148)), "n", " \"\\u0148\": \"n\"");
    equal(foldStrict(String.fromCharCode(0x149)), "n", " \"\\u0149\": \"n\"");
    equal(foldStrict(String.fromCharCode(0x14b)), "n", " \"\\u014B\": \"n\"");
    equal(foldStrict(String.fromCharCode(0x19e)), "n", " \"\\u019E\": \"n\"");
    equal(foldStrict(String.fromCharCode(0x1f9)), "n", " \"\\u01F9\": \"n\"");
    equal(foldStrict(String.fromCharCode(0x235)), "n", " \"\\u0235\": \"n\"");
    equal(foldStrict(String.fromCharCode(0x272)), "n", " \"\\u0272\": \"n\"");
    equal(foldStrict(String.fromCharCode(0x273)), "n", " \"\\u0273\": \"n\"");
    equal(foldStrict(String.fromCharCode(0x1d70)), "n", " \"\\u1D70\": \"n\"");
    equal(foldStrict(String.fromCharCode(0x1d87)), "n", " \"\\u1D87\": \"n\"");
    equal(foldStrict(String.fromCharCode(0x1e45)), "n", " \"\\u1E45\": \"n\"");
    equal(foldStrict(String.fromCharCode(0x1e47)), "n", " \"\\u1E47\": \"n\"");
    equal(foldStrict(String.fromCharCode(0x1e49)), "n", " \"\\u1E49\": \"n\"");
    equal(foldStrict(String.fromCharCode(0x1e4b)), "n", " \"\\u1E4B\": \"n\"");
    equal(foldStrict(String.fromCharCode(0x207f)), "n", " \"\\u207F\": \"n\"");
    equal(foldStrict(String.fromCharCode(0x24dd)), "n", " \"\\u24DD\": \"n\"");
    equal(foldStrict(String.fromCharCode(0xff4e)), "n", " \"\\uFF4E\": \"n\"");
});

QUnit.test("NJTest", () => {
    equal(foldStrict(String.fromCharCode(0x1ca)), "NJ", " \"\\u01CA\": \"NJ\"");
});

QUnit.test("NjTest", () => {
    equal(foldStrict(String.fromCharCode(0x1cb)), "Nj", " \"\\u01CB\": \"Nj\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterNRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24a9)), "(n)", " \"\\u24A9\": \"(n)\"");
});

QUnit.test("njTest", () => {
    equal(foldStrict(String.fromCharCode(0x1cc)), "nj", " \"\\u01CC\": \"nj\"");
});

QUnit.test("OTest", () => {
    equal(foldStrict(String.fromCharCode(0xd2)), "O", " \"\\u00D2\": \"O\"");
    equal(foldStrict(String.fromCharCode(0xd3)), "O", " \"\\u00D3\": \"O\"");
    equal(foldStrict(String.fromCharCode(0xd4)), "O", " \"\\u00D4\": \"O\"");
    equal(foldStrict(String.fromCharCode(0xd5)), "O", " \"\\u00D5\": \"O\"");
    equal(foldStrict(String.fromCharCode(0xd6)), "O", " \"\\u00D6\": \"O\"");
    equal(foldStrict(String.fromCharCode(0xd8)), "O", " \"\\u00D8\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x14c)), "O", " \"\\u014C\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x14e)), "O", " \"\\u014E\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x150)), "O", " \"\\u0150\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x186)), "O", " \"\\u0186\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x19f)), "O", " \"\\u019F\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1a0)), "O", " \"\\u01A0\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1d1)), "O", " \"\\u01D1\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1ea)), "O", " \"\\u01EA\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1ec)), "O", " \"\\u01EC\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1fe)), "O", " \"\\u01FE\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x20c)), "O", " \"\\u020C\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x20e)), "O", " \"\\u020E\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x22a)), "O", " \"\\u022A\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x22c)), "O", " \"\\u022C\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x22e)), "O", " \"\\u022E\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x230)), "O", " \"\\u0230\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1d0f)), "O", " \"\\u1D0F\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1d10)), "O", " \"\\u1D10\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1e4c)), "O", " \"\\u1E4C\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1e4e)), "O", " \"\\u1E4E\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1e50)), "O", " \"\\u1E50\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1e52)), "O", " \"\\u1E52\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1ecc)), "O", " \"\\u1ECC\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1ece)), "O", " \"\\u1ECE\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1ed0)), "O", " \"\\u1ED0\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1ed2)), "O", " \"\\u1ED2\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1ed4)), "O", " \"\\u1ED4\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1ed6)), "O", " \"\\u1ED6\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1ed8)), "O", " \"\\u1ED8\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1eda)), "O", " \"\\u1EDA\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1edc)), "O", " \"\\u1EDC\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1ede)), "O", " \"\\u1EDE\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1ee0)), "O", " \"\\u1EE0\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x1ee2)), "O", " \"\\u1EE2\": \"O\"");
    equal(foldStrict(String.fromCharCode(0x24c4)), "O", " \"\\u24C4\": \"O\"");
    equal(foldStrict(String.fromCharCode(0xa74a)), "O", " \"\\uA74A\": \"O\"");
    equal(foldStrict(String.fromCharCode(0xa74c)), "O", " \"\\uA74C\": \"O\"");
    equal(foldStrict(String.fromCharCode(0xff2f)), "O", " \"\\uFF2F\": \"O\"");
});

QUnit.test("oTest", () => {
    equal(foldStrict(String.fromCharCode(0xf2)), "o", " \"\\u00F2\": \"o\"");
    equal(foldStrict(String.fromCharCode(0xf3)), "o", " \"\\u00F3\": \"o\"");
    equal(foldStrict(String.fromCharCode(0xf4)), "o", " \"\\u00F4\": \"o\"");
    equal(foldStrict(String.fromCharCode(0xf5)), "o", " \"\\u00F5\": \"o\"");
    equal(foldStrict(String.fromCharCode(0xf6)), "o", " \"\\u00F6\": \"o\"");
    equal(foldStrict(String.fromCharCode(0xf8)), "o", " \"\\u00F8\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x14d)), "o", " \"\\u014D\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x14f)), "o", " \"\\u014F\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x151)), "o", " \"\\u0151\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1a1)), "o", " \"\\u01A1\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1d2)), "o", " \"\\u01D2\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1eb)), "o", " \"\\u01EB\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1ed)), "o", " \"\\u01ED\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1ff)), "o", " \"\\u01FF\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x20d)), "o", " \"\\u020D\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x20f)), "o", " \"\\u020F\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x22b)), "o", " \"\\u022B\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x22d)), "o", " \"\\u022D\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x22f)), "o", " \"\\u022F\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x231)), "o", " \"\\u0231\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x254)), "o", " \"\\u0254\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x275)), "o", " \"\\u0275\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1d16)), "o", " \"\\u1D16\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1d17)), "o", " \"\\u1D17\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1d97)), "o", " \"\\u1D97\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1e4d)), "o", " \"\\u1E4D\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1e4f)), "o", " \"\\u1E4F\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1e51)), "o", " \"\\u1E51\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1e53)), "o", " \"\\u1E53\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1ecd)), "o", " \"\\u1ECD\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1ecf)), "o", " \"\\u1ECF\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1ed1)), "o", " \"\\u1ED1\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1ed3)), "o", " \"\\u1ED3\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1ed5)), "o", " \"\\u1ED5\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1ed7)), "o", " \"\\u1ED7\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1ed9)), "o", " \"\\u1ED9\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1edb)), "o", " \"\\u1EDB\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1edd)), "o", " \"\\u1EDD\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1edf)), "o", " \"\\u1EDF\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1ee1)), "o", " \"\\u1EE1\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x1ee3)), "o", " \"\\u1EE3\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x2092)), "o", " \"\\u2092\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x24de)), "o", " \"\\u24DE\": \"o\"");
    equal(foldStrict(String.fromCharCode(0x2c7a)), "o", " \"\\u2C7A\": \"o\"");
    equal(foldStrict(String.fromCharCode(0xa74b)), "o", " \"\\uA74B\": \"o\"");
    equal(foldStrict(String.fromCharCode(0xa74d)), "o", " \"\\uA74D\": \"o\"");
    equal(foldStrict(String.fromCharCode(0xff4f)), "o", " \"\\uFF4F\": \"o\"");
});

QUnit.test("OETest", () => {
    equal(foldStrict(String.fromCharCode(0x152)), "OE", " \"\\u0152\": \"OE\"");
    equal(foldStrict(String.fromCharCode(0x276)), "OE", " \"\\u0276\": \"OE\"");
});

QUnit.test("OOTest", () => {
    equal(foldStrict(String.fromCharCode(0xa74e)), "OO", " \"\\uA74E\": \"OO\"");
});

QUnit.test("OUTest", () => {
    equal(foldStrict(String.fromCharCode(0x222)), "OU", " \"\\u0222\": \"OU\"");
    equal(foldStrict(String.fromCharCode(0x1d15)), "OU", " \"\\u1D15\": \"OU\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterORightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24aa)), "(o)", " \"\\u24AA\": \"(o)\"");
});

QUnit.test("oeTest", () => {
    equal(foldStrict(String.fromCharCode(0x153)), "oe", " \"\\u0153\": \"oe\"");
    equal(foldStrict(String.fromCharCode(0x1d14)), "oe", " \"\\u1D14\": \"oe\"");
});

QUnit.test("ooTest", () => {
    equal(foldStrict(String.fromCharCode(0xa74f)), "oo", " \"\\uA74F\": \"oo\"");
});

QUnit.test("ouTest", () => {
    equal(foldStrict(String.fromCharCode(0x223)), "ou", " \"\\u0223\": \"ou\"");
});

QUnit.test("PTest", () => {
    equal(foldStrict(String.fromCharCode(0x1a4)), "P", " \"\\u01A4\": \"P\"");
    equal(foldStrict(String.fromCharCode(0x1d18)), "P", " \"\\u1D18\": \"P\"");
    equal(foldStrict(String.fromCharCode(0x1e54)), "P", " \"\\u1E54\": \"P\"");
    equal(foldStrict(String.fromCharCode(0x1e56)), "P", " \"\\u1E56\": \"P\"");
    equal(foldStrict(String.fromCharCode(0x24c5)), "P", " \"\\u24C5\": \"P\"");
    equal(foldStrict(String.fromCharCode(0x2c63)), "P", " \"\\u2C63\": \"P\"");
    equal(foldStrict(String.fromCharCode(0xa750)), "P", " \"\\uA750\": \"P\"");
    equal(foldStrict(String.fromCharCode(0xa752)), "P", " \"\\uA752\": \"P\"");
    equal(foldStrict(String.fromCharCode(0xa754)), "P", " \"\\uA754\": \"P\"");
    equal(foldStrict(String.fromCharCode(0xff30)), "P", " \"\\uFF30\": \"P\"");
});

QUnit.test("pTest", () => {
    equal(foldStrict(String.fromCharCode(0x1a5)), "p", " \"\\u01A5\": \"p\"");
    equal(foldStrict(String.fromCharCode(0x1d71)), "p", " \"\\u1D71\": \"p\"");
    equal(foldStrict(String.fromCharCode(0x1d7d)), "p", " \"\\u1D7D\": \"p\"");
    equal(foldStrict(String.fromCharCode(0x1d88)), "p", " \"\\u1D88\": \"p\"");
    equal(foldStrict(String.fromCharCode(0x1e55)), "p", " \"\\u1E55\": \"p\"");
    equal(foldStrict(String.fromCharCode(0x1e57)), "p", " \"\\u1E57\": \"p\"");
    equal(foldStrict(String.fromCharCode(0x24df)), "p", " \"\\u24DF\": \"p\"");
    equal(foldStrict(String.fromCharCode(0xa751)), "p", " \"\\uA751\": \"p\"");
    equal(foldStrict(String.fromCharCode(0xa753)), "p", " \"\\uA753\": \"p\"");
    equal(foldStrict(String.fromCharCode(0xa755)), "p", " \"\\uA755\": \"p\"");
    equal(foldStrict(String.fromCharCode(0xa7fc)), "p", " \"\\uA7FC\": \"p\"");
    equal(foldStrict(String.fromCharCode(0xff50)), "p", " \"\\uFF50\": \"p\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterPRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24ab)), "(p)", " \"\\u24AB\": \"(p)\"");
});

QUnit.test("QTest", () => {
    equal(foldStrict(String.fromCharCode(0x24a)), "Q", " \"\\u024A\": \"Q\"");
    equal(foldStrict(String.fromCharCode(0x24c6)), "Q", " \"\\u24C6\": \"Q\"");
    equal(foldStrict(String.fromCharCode(0xa756)), "Q", " \"\\uA756\": \"Q\"");
    equal(foldStrict(String.fromCharCode(0xa758)), "Q", " \"\\uA758\": \"Q\"");
    equal(foldStrict(String.fromCharCode(0xff31)), "Q", " \"\\uFF31\": \"Q\"");
});

QUnit.test("qTest", () => {
    equal(foldStrict(String.fromCharCode(0x138)), "q", " \"\\u0138\": \"q\"");
    equal(foldStrict(String.fromCharCode(0x24b)), "q", " \"\\u024B\": \"q\"");
    equal(foldStrict(String.fromCharCode(0x2a0)), "q", " \"\\u02A0\": \"q\"");
    equal(foldStrict(String.fromCharCode(0x24e0)), "q", " \"\\u24E0\": \"q\"");
    equal(foldStrict(String.fromCharCode(0xa757)), "q", " \"\\uA757\": \"q\"");
    equal(foldStrict(String.fromCharCode(0xa759)), "q", " \"\\uA759\": \"q\"");
    equal(foldStrict(String.fromCharCode(0xff51)), "q", " \"\\uFF51\": \"q\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterQRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24ac)), "(q)", " \"\\u24AC\": \"(q)\"");
});

QUnit.test("qpTest", () => {
    equal(foldStrict(String.fromCharCode(0x239)), "qp", " \"\\u0239\": \"qp\"");
});

QUnit.test("RTest", () => {
    equal(foldStrict(String.fromCharCode(0x154)), "R", " \"\\u0154\": \"R\"");
    equal(foldStrict(String.fromCharCode(0x156)), "R", " \"\\u0156\": \"R\"");
    equal(foldStrict(String.fromCharCode(0x158)), "R", " \"\\u0158\": \"R\"");
    equal(foldStrict(String.fromCharCode(0x210)), "R", " \"\\u0210\": \"R\"");
    equal(foldStrict(String.fromCharCode(0x212)), "R", " \"\\u0212\": \"R\"");
    equal(foldStrict(String.fromCharCode(0x24c)), "R", " \"\\u024C\": \"R\"");
    equal(foldStrict(String.fromCharCode(0x280)), "R", " \"\\u0280\": \"R\"");
    equal(foldStrict(String.fromCharCode(0x281)), "R", " \"\\u0281\": \"R\"");
    equal(foldStrict(String.fromCharCode(0x1d19)), "R", " \"\\u1D19\": \"R\"");
    equal(foldStrict(String.fromCharCode(0x1d1a)), "R", " \"\\u1D1A\": \"R\"");
    equal(foldStrict(String.fromCharCode(0x1e58)), "R", " \"\\u1E58\": \"R\"");
    equal(foldStrict(String.fromCharCode(0x1e5a)), "R", " \"\\u1E5A\": \"R\"");
    equal(foldStrict(String.fromCharCode(0x1e5c)), "R", " \"\\u1E5C\": \"R\"");
    equal(foldStrict(String.fromCharCode(0x1e5e)), "R", " \"\\u1E5E\": \"R\"");
    equal(foldStrict(String.fromCharCode(0x24c7)), "R", " \"\\u24C7\": \"R\"");
    equal(foldStrict(String.fromCharCode(0x2c64)), "R", " \"\\u2C64\": \"R\"");
    equal(foldStrict(String.fromCharCode(0xa75a)), "R", " \"\\uA75A\": \"R\"");
    equal(foldStrict(String.fromCharCode(0xa782)), "R", " \"\\uA782\": \"R\"");
    equal(foldStrict(String.fromCharCode(0xff32)), "R", " \"\\uFF32\": \"R\"");
});

QUnit.test("rTest", () => {
    equal(foldStrict(String.fromCharCode(0x155)), "r", " \"\\u0155\": \"r\"");
    equal(foldStrict(String.fromCharCode(0x157)), "r", " \"\\u0157\": \"r\"");
    equal(foldStrict(String.fromCharCode(0x159)), "r", " \"\\u0159\": \"r\"");
    equal(foldStrict(String.fromCharCode(0x211)), "r", " \"\\u0211\": \"r\"");
    equal(foldStrict(String.fromCharCode(0x213)), "r", " \"\\u0213\": \"r\"");
    equal(foldStrict(String.fromCharCode(0x24d)), "r", " \"\\u024D\": \"r\"");
    equal(foldStrict(String.fromCharCode(0x27c)), "r", " \"\\u027C\": \"r\"");
    equal(foldStrict(String.fromCharCode(0x27d)), "r", " \"\\u027D\": \"r\"");
    equal(foldStrict(String.fromCharCode(0x27e)), "r", " \"\\u027E\": \"r\"");
    equal(foldStrict(String.fromCharCode(0x27f)), "r", " \"\\u027F\": \"r\"");
    equal(foldStrict(String.fromCharCode(0x1d63)), "r", " \"\\u1D63\": \"r\"");
    equal(foldStrict(String.fromCharCode(0x1d72)), "r", " \"\\u1D72\": \"r\"");
    equal(foldStrict(String.fromCharCode(0x1d73)), "r", " \"\\u1D73\": \"r\"");
    equal(foldStrict(String.fromCharCode(0x1d89)), "r", " \"\\u1D89\": \"r\"");
    equal(foldStrict(String.fromCharCode(0x1e59)), "r", " \"\\u1E59\": \"r\"");
    equal(foldStrict(String.fromCharCode(0x1e5b)), "r", " \"\\u1E5B\": \"r\"");
    equal(foldStrict(String.fromCharCode(0x1e5d)), "r", " \"\\u1E5D\": \"r\"");
    equal(foldStrict(String.fromCharCode(0x1e5f)), "r", " \"\\u1E5F\": \"r\"");
    equal(foldStrict(String.fromCharCode(0x24e1)), "r", " \"\\u24E1\": \"r\"");
    equal(foldStrict(String.fromCharCode(0xa75b)), "r", " \"\\uA75B\": \"r\"");
    equal(foldStrict(String.fromCharCode(0xa783)), "r", " \"\\uA783\": \"r\"");
    equal(foldStrict(String.fromCharCode(0xff52)), "r", " \"\\uFF52\": \"r\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterRRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24ad)), "(r)", " \"\\u24AD\": \"(r)\"");
});

QUnit.test("STest", () => {
    equal(foldStrict(String.fromCharCode(0x15a)), "S", " \"\\u015A\": \"S\"");
    equal(foldStrict(String.fromCharCode(0x15c)), "S", " \"\\u015C\": \"S\"");
    equal(foldStrict(String.fromCharCode(0x15e)), "S", " \"\\u015E\": \"S\"");
    equal(foldStrict(String.fromCharCode(0x160)), "S", " \"\\u0160\": \"S\"");
    equal(foldStrict(String.fromCharCode(0x218)), "S", " \"\\u0218\": \"S\"");
    equal(foldStrict(String.fromCharCode(0x1e60)), "S", " \"\\u1E60\": \"S\"");
    equal(foldStrict(String.fromCharCode(0x1e62)), "S", " \"\\u1E62\": \"S\"");
    equal(foldStrict(String.fromCharCode(0x1e64)), "S", " \"\\u1E64\": \"S\"");
    equal(foldStrict(String.fromCharCode(0x1e66)), "S", " \"\\u1E66\": \"S\"");
    equal(foldStrict(String.fromCharCode(0x1e68)), "S", " \"\\u1E68\": \"S\"");
    equal(foldStrict(String.fromCharCode(0x24c8)), "S", " \"\\u24C8\": \"S\"");
    equal(foldStrict(String.fromCharCode(0xa731)), "S", " \"\\uA731\": \"S\"");
    equal(foldStrict(String.fromCharCode(0xa785)), "S", " \"\\uA785\": \"S\"");
    equal(foldStrict(String.fromCharCode(0xff33)), "S", " \"\\uFF33\": \"S\"");
});

QUnit.test("sTest", () => {
    equal(foldStrict(String.fromCharCode(0x15b)), "s", " \"\\u015B\": \"s\"");
    equal(foldStrict(String.fromCharCode(0x15d)), "s", " \"\\u015D\": \"s\"");
    equal(foldStrict(String.fromCharCode(0x15f)), "s", " \"\\u015F\": \"s\"");
    equal(foldStrict(String.fromCharCode(0x161)), "s", " \"\\u0161\": \"s\"");
    equal(foldStrict(String.fromCharCode(0x17f)), "s", " \"\\u017F\": \"s\"");
    equal(foldStrict(String.fromCharCode(0x219)), "s", " \"\\u0219\": \"s\"");
    equal(foldStrict(String.fromCharCode(0x23f)), "s", " \"\\u023F\": \"s\"");
    equal(foldStrict(String.fromCharCode(0x282)), "s", " \"\\u0282\": \"s\"");
    equal(foldStrict(String.fromCharCode(0x1d74)), "s", " \"\\u1D74\": \"s\"");
    equal(foldStrict(String.fromCharCode(0x1d8a)), "s", " \"\\u1D8A\": \"s\"");
    equal(foldStrict(String.fromCharCode(0x1e61)), "s", " \"\\u1E61\": \"s\"");
    equal(foldStrict(String.fromCharCode(0x1e63)), "s", " \"\\u1E63\": \"s\"");
    equal(foldStrict(String.fromCharCode(0x1e65)), "s", " \"\\u1E65\": \"s\"");
    equal(foldStrict(String.fromCharCode(0x1e67)), "s", " \"\\u1E67\": \"s\"");
    equal(foldStrict(String.fromCharCode(0x1e69)), "s", " \"\\u1E69\": \"s\"");
    equal(foldStrict(String.fromCharCode(0x1e9c)), "s", " \"\\u1E9C\": \"s\"");
    equal(foldStrict(String.fromCharCode(0x1e9d)), "s", " \"\\u1E9D\": \"s\"");
    equal(foldStrict(String.fromCharCode(0x24e2)), "s", " \"\\u24E2\": \"s\"");
    equal(foldStrict(String.fromCharCode(0xa784)), "s", " \"\\uA784\": \"s\"");
    equal(foldStrict(String.fromCharCode(0xff53)), "s", " \"\\uFF53\": \"s\"");
});

QUnit.test("SSTest", () => {
    equal(foldStrict(String.fromCharCode(0x1e9e)), "SS", " \"\\u1E9E\": \"SS\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterSRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24ae)), "(s)", " \"\\u24AE\": \"(s)\"");
});

QUnit.test("ssTest", () => {
    equal(foldStrict(String.fromCharCode(0xdf)), "ss", " \"\\u00DF\": \"ss\"");
});

QUnit.test("stTest", () => {
    equal(foldStrict(String.fromCharCode(0xfb06)), "st", " \"\\uFB06\": \"st\"");
});

QUnit.test("TTest", () => {
    equal(foldStrict(String.fromCharCode(0x162)), "T", " \"\\u0162\": \"T\"");
    equal(foldStrict(String.fromCharCode(0x164)), "T", " \"\\u0164\": \"T\"");
    equal(foldStrict(String.fromCharCode(0x166)), "T", " \"\\u0166\": \"T\"");
    equal(foldStrict(String.fromCharCode(0x1ac)), "T", " \"\\u01AC\": \"T\"");
    equal(foldStrict(String.fromCharCode(0x1ae)), "T", " \"\\u01AE\": \"T\"");
    equal(foldStrict(String.fromCharCode(0x21a)), "T", " \"\\u021A\": \"T\"");
    equal(foldStrict(String.fromCharCode(0x23e)), "T", " \"\\u023E\": \"T\"");
    equal(foldStrict(String.fromCharCode(0x1d1b)), "T", " \"\\u1D1B\": \"T\"");
    equal(foldStrict(String.fromCharCode(0x1e6a)), "T", " \"\\u1E6A\": \"T\"");
    equal(foldStrict(String.fromCharCode(0x1e6c)), "T", " \"\\u1E6C\": \"T\"");
    equal(foldStrict(String.fromCharCode(0x1e6e)), "T", " \"\\u1E6E\": \"T\"");
    equal(foldStrict(String.fromCharCode(0x1e70)), "T", " \"\\u1E70\": \"T\"");
    equal(foldStrict(String.fromCharCode(0x24c9)), "T", " \"\\u24C9\": \"T\"");
    equal(foldStrict(String.fromCharCode(0xa786)), "T", " \"\\uA786\": \"T\"");
    equal(foldStrict(String.fromCharCode(0xff34)), "T", " \"\\uFF34\": \"T\"");
});

QUnit.test("tTest", () => {
    equal(foldStrict(String.fromCharCode(0x163)), "t", " \"\\u0163\": \"t\"");
    equal(foldStrict(String.fromCharCode(0x165)), "t", " \"\\u0165\": \"t\"");
    equal(foldStrict(String.fromCharCode(0x167)), "t", " \"\\u0167\": \"t\"");
    equal(foldStrict(String.fromCharCode(0x1ab)), "t", " \"\\u01AB\": \"t\"");
    equal(foldStrict(String.fromCharCode(0x1ad)), "t", " \"\\u01AD\": \"t\"");
    equal(foldStrict(String.fromCharCode(0x21b)), "t", " \"\\u021B\": \"t\"");
    equal(foldStrict(String.fromCharCode(0x236)), "t", " \"\\u0236\": \"t\"");
    equal(foldStrict(String.fromCharCode(0x287)), "t", " \"\\u0287\": \"t\"");
    equal(foldStrict(String.fromCharCode(0x288)), "t", " \"\\u0288\": \"t\"");
    equal(foldStrict(String.fromCharCode(0x1d75)), "t", " \"\\u1D75\": \"t\"");
    equal(foldStrict(String.fromCharCode(0x1e6b)), "t", " \"\\u1E6B\": \"t\"");
    equal(foldStrict(String.fromCharCode(0x1e6d)), "t", " \"\\u1E6D\": \"t\"");
    equal(foldStrict(String.fromCharCode(0x1e6f)), "t", " \"\\u1E6F\": \"t\"");
    equal(foldStrict(String.fromCharCode(0x1e71)), "t", " \"\\u1E71\": \"t\"");
    equal(foldStrict(String.fromCharCode(0x1e97)), "t", " \"\\u1E97\": \"t\"");
    equal(foldStrict(String.fromCharCode(0x24e3)), "t", " \"\\u24E3\": \"t\"");
    equal(foldStrict(String.fromCharCode(0x2c66)), "t", " \"\\u2C66\": \"t\"");
    equal(foldStrict(String.fromCharCode(0xff54)), "t", " \"\\uFF54\": \"t\"");
});

QUnit.test("THTest", () => {
    equal(foldStrict(String.fromCharCode(0xde)), "TH", " \"\\u00DE\": \"TH\"");
    equal(foldStrict(String.fromCharCode(0xa766)), "TH", " \"\\uA766\": \"TH\"");
});

QUnit.test("TZTest", () => {
    equal(foldStrict(String.fromCharCode(0xa728)), "TZ", " \"\\uA728\": \"TZ\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterTRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24af)), "(t)", " \"\\u24AF\": \"(t)\"");
});

QUnit.test("tcTest", () => {
    equal(foldStrict(String.fromCharCode(0x2a8)), "tc", " \"\\u02A8\": \"tc\"");
});

QUnit.test("thTest", () => {
    equal(foldStrict(String.fromCharCode(0xfe)), "th", " \"\\u00FE\": \"th\"");
    equal(foldStrict(String.fromCharCode(0x1d7a)), "th", " \"\\u1D7A\": \"th\"");
    equal(foldStrict(String.fromCharCode(0xa767)), "th", " \"\\uA767\": \"th\"");
});

QUnit.test("tsTest", () => {
    equal(foldStrict(String.fromCharCode(0x2a6)), "ts", " \"\\u02A6\": \"ts\"");
});

QUnit.test("tzTest", () => {
    equal(foldStrict(String.fromCharCode(0xa729)), "tz", " \"\\uA729\": \"tz\"");
});

QUnit.test("UTest", () => {
    equal(foldStrict(String.fromCharCode(0xd9)), "U", " \"\\u00D9\": \"U\"");
    equal(foldStrict(String.fromCharCode(0xda)), "U", " \"\\u00DA\": \"U\"");
    equal(foldStrict(String.fromCharCode(0xdb)), "U", " \"\\u00DB\": \"U\"");
    equal(foldStrict(String.fromCharCode(0xdc)), "U", " \"\\u00DC\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x168)), "U", " \"\\u0168\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x16a)), "U", " \"\\u016A\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x16c)), "U", " \"\\u016C\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x16e)), "U", " \"\\u016E\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x170)), "U", " \"\\u0170\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x172)), "U", " \"\\u0172\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1af)), "U", " \"\\u01AF\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1d3)), "U", " \"\\u01D3\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1d5)), "U", " \"\\u01D5\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1d7)), "U", " \"\\u01D7\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1d9)), "U", " \"\\u01D9\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1db)), "U", " \"\\u01DB\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x214)), "U", " \"\\u0214\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x216)), "U", " \"\\u0216\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x244)), "U", " \"\\u0244\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1d1c)), "U", " \"\\u1D1C\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1d7e)), "U", " \"\\u1D7E\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1e72)), "U", " \"\\u1E72\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1e74)), "U", " \"\\u1E74\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1e76)), "U", " \"\\u1E76\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1e78)), "U", " \"\\u1E78\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1e7a)), "U", " \"\\u1E7A\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1ee4)), "U", " \"\\u1EE4\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1ee6)), "U", " \"\\u1EE6\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1ee8)), "U", " \"\\u1EE8\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1eea)), "U", " \"\\u1EEA\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1eec)), "U", " \"\\u1EEC\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1eee)), "U", " \"\\u1EEE\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x1ef0)), "U", " \"\\u1EF0\": \"U\"");
    equal(foldStrict(String.fromCharCode(0x24ca)), "U", " \"\\u24CA\": \"U\"");
    equal(foldStrict(String.fromCharCode(0xff35)), "U", " \"\\uFF35\": \"U\"");
});

QUnit.test("uTest", () => {
    equal(foldStrict(String.fromCharCode(0xf9)), "u", " \"\\u00F9\": \"u\"");
    equal(foldStrict(String.fromCharCode(0xfa)), "u", " \"\\u00FA\": \"u\"");
    equal(foldStrict(String.fromCharCode(0xfb)), "u", " \"\\u00FB\": \"u\"");
    equal(foldStrict(String.fromCharCode(0xfc)), "u", " \"\\u00FC\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x169)), "u", " \"\\u0169\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x16b)), "u", " \"\\u016B\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x16d)), "u", " \"\\u016D\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x16f)), "u", " \"\\u016F\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x171)), "u", " \"\\u0171\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x173)), "u", " \"\\u0173\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1b0)), "u", " \"\\u01B0\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1d4)), "u", " \"\\u01D4\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1d6)), "u", " \"\\u01D6\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1d8)), "u", " \"\\u01D8\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1da)), "u", " \"\\u01DA\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1dc)), "u", " \"\\u01DC\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x215)), "u", " \"\\u0215\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x217)), "u", " \"\\u0217\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x289)), "u", " \"\\u0289\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1d64)), "u", " \"\\u1D64\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1d99)), "u", " \"\\u1D99\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1e73)), "u", " \"\\u1E73\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1e75)), "u", " \"\\u1E75\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1e77)), "u", " \"\\u1E77\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1e79)), "u", " \"\\u1E79\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1e7b)), "u", " \"\\u1E7B\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1ee5)), "u", " \"\\u1EE5\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1ee7)), "u", " \"\\u1EE7\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1ee9)), "u", " \"\\u1EE9\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1eeb)), "u", " \"\\u1EEB\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1eed)), "u", " \"\\u1EED\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1eef)), "u", " \"\\u1EEF\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x1ef1)), "u", " \"\\u1EF1\": \"u\"");
    equal(foldStrict(String.fromCharCode(0x24e4)), "u", " \"\\u24E4\": \"u\"");
    equal(foldStrict(String.fromCharCode(0xff55)), "u", " \"\\uFF55\": \"u\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterURightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24b0)), "(u)", " \"\\u24B0\": \"(u)\"");
});

QUnit.test("ueTest", () => {
    equal(foldStrict(String.fromCharCode(0x1d6b)), "ue", " \"\\u1D6B\": \"ue\"");
});

QUnit.test("VTest", () => {
    equal(foldStrict(String.fromCharCode(0x1b2)), "V", " \"\\u01B2\": \"V\"");
    equal(foldStrict(String.fromCharCode(0x245)), "V", " \"\\u0245\": \"V\"");
    equal(foldStrict(String.fromCharCode(0x1d20)), "V", " \"\\u1D20\": \"V\"");
    equal(foldStrict(String.fromCharCode(0x1e7c)), "V", " \"\\u1E7C\": \"V\"");
    equal(foldStrict(String.fromCharCode(0x1e7e)), "V", " \"\\u1E7E\": \"V\"");
    equal(foldStrict(String.fromCharCode(0x1efc)), "V", " \"\\u1EFC\": \"V\"");
    equal(foldStrict(String.fromCharCode(0x24cb)), "V", " \"\\u24CB\": \"V\"");
    equal(foldStrict(String.fromCharCode(0xa75e)), "V", " \"\\uA75E\": \"V\"");
    equal(foldStrict(String.fromCharCode(0xa768)), "V", " \"\\uA768\": \"V\"");
    equal(foldStrict(String.fromCharCode(0xff36)), "V", " \"\\uFF36\": \"V\"");
});

QUnit.test("vTest", () => {
    equal(foldStrict(String.fromCharCode(0x28b)), "v", " \"\\u028B\": \"v\"");
    equal(foldStrict(String.fromCharCode(0x28c)), "v", " \"\\u028C\": \"v\"");
    equal(foldStrict(String.fromCharCode(0x1d65)), "v", " \"\\u1D65\": \"v\"");
    equal(foldStrict(String.fromCharCode(0x1d8c)), "v", " \"\\u1D8C\": \"v\"");
    equal(foldStrict(String.fromCharCode(0x1e7d)), "v", " \"\\u1E7D\": \"v\"");
    equal(foldStrict(String.fromCharCode(0x1e7f)), "v", " \"\\u1E7F\": \"v\"");
    equal(foldStrict(String.fromCharCode(0x24e5)), "v", " \"\\u24E5\": \"v\"");
    equal(foldStrict(String.fromCharCode(0x2c71)), "v", " \"\\u2C71\": \"v\"");
    equal(foldStrict(String.fromCharCode(0x2c74)), "v", " \"\\u2C74\": \"v\"");
    equal(foldStrict(String.fromCharCode(0xa75f)), "v", " \"\\uA75F\": \"v\"");
    equal(foldStrict(String.fromCharCode(0xff56)), "v", " \"\\uFF56\": \"v\"");
});

QUnit.test("VYTest", () => {
    equal(foldStrict(String.fromCharCode(0xa760)), "VY", " \"\\uA760\": \"VY\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterVRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24b1)), "(v)", " \"\\u24B1\": \"(v)\"");
});

QUnit.test("vyTest", () => {
    equal(foldStrict(String.fromCharCode(0xa761)), "vy", " \"\\uA761\": \"vy\"");
});

QUnit.test("WTest", () => {
    equal(foldStrict(String.fromCharCode(0x174)), "W", " \"\\u0174\": \"W\"");
    equal(foldStrict(String.fromCharCode(0x1f7)), "W", " \"\\u01F7\": \"W\"");
    equal(foldStrict(String.fromCharCode(0x1d21)), "W", " \"\\u1D21\": \"W\"");
    equal(foldStrict(String.fromCharCode(0x1e80)), "W", " \"\\u1E80\": \"W\"");
    equal(foldStrict(String.fromCharCode(0x1e82)), "W", " \"\\u1E82\": \"W\"");
    equal(foldStrict(String.fromCharCode(0x1e84)), "W", " \"\\u1E84\": \"W\"");
    equal(foldStrict(String.fromCharCode(0x1e86)), "W", " \"\\u1E86\": \"W\"");
    equal(foldStrict(String.fromCharCode(0x1e88)), "W", " \"\\u1E88\": \"W\"");
    equal(foldStrict(String.fromCharCode(0x24cc)), "W", " \"\\u24CC\": \"W\"");
    equal(foldStrict(String.fromCharCode(0x2c72)), "W", " \"\\u2C72\": \"W\"");
    equal(foldStrict(String.fromCharCode(0xff37)), "W", " \"\\uFF37\": \"W\"");
});

QUnit.test("wTest", () => {
    equal(foldStrict(String.fromCharCode(0x175)), "w", " \"\\u0175\": \"w\"");
    equal(foldStrict(String.fromCharCode(0x1bf)), "w", " \"\\u01BF\": \"w\"");
    equal(foldStrict(String.fromCharCode(0x28d)), "w", " \"\\u028D\": \"w\"");
    equal(foldStrict(String.fromCharCode(0x1e81)), "w", " \"\\u1E81\": \"w\"");
    equal(foldStrict(String.fromCharCode(0x1e83)), "w", " \"\\u1E83\": \"w\"");
    equal(foldStrict(String.fromCharCode(0x1e85)), "w", " \"\\u1E85\": \"w\"");
    equal(foldStrict(String.fromCharCode(0x1e87)), "w", " \"\\u1E87\": \"w\"");
    equal(foldStrict(String.fromCharCode(0x1e89)), "w", " \"\\u1E89\": \"w\"");
    equal(foldStrict(String.fromCharCode(0x1e98)), "w", " \"\\u1E98\": \"w\"");
    equal(foldStrict(String.fromCharCode(0x24e6)), "w", " \"\\u24E6\": \"w\"");
    equal(foldStrict(String.fromCharCode(0x2c73)), "w", " \"\\u2C73\": \"w\"");
    equal(foldStrict(String.fromCharCode(0xff57)), "w", " \"\\uFF57\": \"w\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterWRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24b2)), "(w)", " \"\\u24B2\": \"(w)\"");
});

QUnit.test("XTest", () => {
    equal(foldStrict(String.fromCharCode(0x1e8a)), "X", " \"\\u1E8A\": \"X\"");
    equal(foldStrict(String.fromCharCode(0x1e8c)), "X", " \"\\u1E8C\": \"X\"");
    equal(foldStrict(String.fromCharCode(0x24cd)), "X", " \"\\u24CD\": \"X\"");
    equal(foldStrict(String.fromCharCode(0xff38)), "X", " \"\\uFF38\": \"X\"");
});

QUnit.test("xTest", () => {
    equal(foldStrict(String.fromCharCode(0x1d8d)), "x", " \"\\u1D8D\": \"x\"");
    equal(foldStrict(String.fromCharCode(0x1e8b)), "x", " \"\\u1E8B\": \"x\"");
    equal(foldStrict(String.fromCharCode(0x1e8d)), "x", " \"\\u1E8D\": \"x\"");
    equal(foldStrict(String.fromCharCode(0x2093)), "x", " \"\\u2093\": \"x\"");
    equal(foldStrict(String.fromCharCode(0x24e7)), "x", " \"\\u24E7\": \"x\"");
    equal(foldStrict(String.fromCharCode(0xff58)), "x", " \"\\uFF58\": \"x\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterXRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24b3)), "(x)", " \"\\u24B3\": \"(x)\"");
});

QUnit.test("YTest", () => {
    equal(foldStrict(String.fromCharCode(0xdd)), "Y", " \"\\u00DD\": \"Y\"");
    equal(foldStrict(String.fromCharCode(0x176)), "Y", " \"\\u0176\": \"Y\"");
    equal(foldStrict(String.fromCharCode(0x178)), "Y", " \"\\u0178\": \"Y\"");
    equal(foldStrict(String.fromCharCode(0x1b3)), "Y", " \"\\u01B3\": \"Y\"");
    equal(foldStrict(String.fromCharCode(0x232)), "Y", " \"\\u0232\": \"Y\"");
    equal(foldStrict(String.fromCharCode(0x24e)), "Y", " \"\\u024E\": \"Y\"");
    equal(foldStrict(String.fromCharCode(0x28f)), "Y", " \"\\u028F\": \"Y\"");
    equal(foldStrict(String.fromCharCode(0x1e8e)), "Y", " \"\\u1E8E\": \"Y\"");
    equal(foldStrict(String.fromCharCode(0x1ef2)), "Y", " \"\\u1EF2\": \"Y\"");
    equal(foldStrict(String.fromCharCode(0x1ef4)), "Y", " \"\\u1EF4\": \"Y\"");
    equal(foldStrict(String.fromCharCode(0x1ef6)), "Y", " \"\\u1EF6\": \"Y\"");
    equal(foldStrict(String.fromCharCode(0x1ef8)), "Y", " \"\\u1EF8\": \"Y\"");
    equal(foldStrict(String.fromCharCode(0x1efe)), "Y", " \"\\u1EFE\": \"Y\"");
    equal(foldStrict(String.fromCharCode(0x24ce)), "Y", " \"\\u24CE\": \"Y\"");
    equal(foldStrict(String.fromCharCode(0xff39)), "Y", " \"\\uFF39\": \"Y\"");
});

QUnit.test("yTest", () => {
    equal(foldStrict(String.fromCharCode(0xfd)), "y", " \"\\u00FD\": \"y\"");
    equal(foldStrict(String.fromCharCode(0xff)), "y", " \"\\u00FF\": \"y\"");
    equal(foldStrict(String.fromCharCode(0x177)), "y", " \"\\u0177\": \"y\"");
    equal(foldStrict(String.fromCharCode(0x1b4)), "y", " \"\\u01B4\": \"y\"");
    equal(foldStrict(String.fromCharCode(0x233)), "y", " \"\\u0233\": \"y\"");
    equal(foldStrict(String.fromCharCode(0x24f)), "y", " \"\\u024F\": \"y\"");
    equal(foldStrict(String.fromCharCode(0x28e)), "y", " \"\\u028E\": \"y\"");
    equal(foldStrict(String.fromCharCode(0x1e8f)), "y", " \"\\u1E8F\": \"y\"");
    equal(foldStrict(String.fromCharCode(0x1e99)), "y", " \"\\u1E99\": \"y\"");
    equal(foldStrict(String.fromCharCode(0x1ef3)), "y", " \"\\u1EF3\": \"y\"");
    equal(foldStrict(String.fromCharCode(0x1ef5)), "y", " \"\\u1EF5\": \"y\"");
    equal(foldStrict(String.fromCharCode(0x1ef7)), "y", " \"\\u1EF7\": \"y\"");
    equal(foldStrict(String.fromCharCode(0x1ef9)), "y", " \"\\u1EF9\": \"y\"");
    equal(foldStrict(String.fromCharCode(0x1eff)), "y", " \"\\u1EFF\": \"y\"");
    equal(foldStrict(String.fromCharCode(0x24e8)), "y", " \"\\u24E8\": \"y\"");
    equal(foldStrict(String.fromCharCode(0xff59)), "y", " \"\\uFF59\": \"y\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterYRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24b4)), "(y)", " \"\\u24B4\": \"(y)\"");
});

QUnit.test("ZTest", () => {
    equal(foldStrict(String.fromCharCode(0x179)), "Z", " \"\\u0179\": \"Z\"");
    equal(foldStrict(String.fromCharCode(0x17b)), "Z", " \"\\u017B\": \"Z\"");
    equal(foldStrict(String.fromCharCode(0x17d)), "Z", " \"\\u017D\": \"Z\"");
    equal(foldStrict(String.fromCharCode(0x1b5)), "Z", " \"\\u01B5\": \"Z\"");
    equal(foldStrict(String.fromCharCode(0x21c)), "Z", " \"\\u021C\": \"Z\"");
    equal(foldStrict(String.fromCharCode(0x224)), "Z", " \"\\u0224\": \"Z\"");
    equal(foldStrict(String.fromCharCode(0x1d22)), "Z", " \"\\u1D22\": \"Z\"");
    equal(foldStrict(String.fromCharCode(0x1e90)), "Z", " \"\\u1E90\": \"Z\"");
    equal(foldStrict(String.fromCharCode(0x1e92)), "Z", " \"\\u1E92\": \"Z\"");
    equal(foldStrict(String.fromCharCode(0x1e94)), "Z", " \"\\u1E94\": \"Z\"");
    equal(foldStrict(String.fromCharCode(0x24cf)), "Z", " \"\\u24CF\": \"Z\"");
    equal(foldStrict(String.fromCharCode(0x2c6b)), "Z", " \"\\u2C6B\": \"Z\"");
    equal(foldStrict(String.fromCharCode(0xa762)), "Z", " \"\\uA762\": \"Z\"");
    equal(foldStrict(String.fromCharCode(0xff3a)), "Z", " \"\\uFF3A\": \"Z\"");
});

QUnit.test("zTest", () => {
    equal(foldStrict(String.fromCharCode(0x17a)), "z", " \"\\u017A\": \"z\"");
    equal(foldStrict(String.fromCharCode(0x17c)), "z", " \"\\u017C\": \"z\"");
    equal(foldStrict(String.fromCharCode(0x17e)), "z", " \"\\u017E\": \"z\"");
    equal(foldStrict(String.fromCharCode(0x1b6)), "z", " \"\\u01B6\": \"z\"");
    equal(foldStrict(String.fromCharCode(0x21d)), "z", " \"\\u021D\": \"z\"");
    equal(foldStrict(String.fromCharCode(0x225)), "z", " \"\\u0225\": \"z\"");
    equal(foldStrict(String.fromCharCode(0x240)), "z", " \"\\u0240\": \"z\"");
    equal(foldStrict(String.fromCharCode(0x290)), "z", " \"\\u0290\": \"z\"");
    equal(foldStrict(String.fromCharCode(0x291)), "z", " \"\\u0291\": \"z\"");
    equal(foldStrict(String.fromCharCode(0x1d76)), "z", " \"\\u1D76\": \"z\"");
    equal(foldStrict(String.fromCharCode(0x1d8e)), "z", " \"\\u1D8E\": \"z\"");
    equal(foldStrict(String.fromCharCode(0x1e91)), "z", " \"\\u1E91\": \"z\"");
    equal(foldStrict(String.fromCharCode(0x1e93)), "z", " \"\\u1E93\": \"z\"");
    equal(foldStrict(String.fromCharCode(0x1e95)), "z", " \"\\u1E95\": \"z\"");
    equal(foldStrict(String.fromCharCode(0x24e9)), "z", " \"\\u24E9\": \"z\"");
    equal(foldStrict(String.fromCharCode(0x2c6c)), "z", " \"\\u2C6C\": \"z\"");
    equal(foldStrict(String.fromCharCode(0xa763)), "z", " \"\\uA763\": \"z\"");
    equal(foldStrict(String.fromCharCode(0xff5a)), "z", " \"\\uFF5A\": \"z\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterZRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x24b5)), "(z)", " \"\\u24B5\": \"(z)\"");
});

QUnit.test("0Test", () => {
    equal(foldStrict(String.fromCharCode(0x2070)), "0", " \"\\u2070\": \"0\"");
    equal(foldStrict(String.fromCharCode(0x2080)), "0", " \"\\u2080\": \"0\"");
    equal(foldStrict(String.fromCharCode(0x24ea)), "0", " \"\\u24EA\": \"0\"");
    equal(foldStrict(String.fromCharCode(0x24ff)), "0", " \"\\u24FF\": \"0\"");
    equal(foldStrict(String.fromCharCode(0xff10)), "0", " \"\\uFF10\": \"0\"");
});

QUnit.test("1Test", () => {
    equal(foldStrict(String.fromCharCode(0xb9)), "1", " \"\\u00B9\": \"1\"");
    equal(foldStrict(String.fromCharCode(0x2081)), "1", " \"\\u2081\": \"1\"");
    equal(foldStrict(String.fromCharCode(0x2460)), "1", " \"\\u2460\": \"1\"");
    equal(foldStrict(String.fromCharCode(0x24f5)), "1", " \"\\u24F5\": \"1\"");
    equal(foldStrict(String.fromCharCode(0x2776)), "1", " \"\\u2776\": \"1\"");
    equal(foldStrict(String.fromCharCode(0x2780)), "1", " \"\\u2780\": \"1\"");
    equal(foldStrict(String.fromCharCode(0x278a)), "1", " \"\\u278A\": \"1\"");
    equal(foldStrict(String.fromCharCode(0xff11)), "1", " \"\\uFF11\": \"1\"");
});

QUnit.test("DigitOneFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x2488)), "1.", " \"\\u2488\": \"1.\"");
});

QUnit.test("LeftParenthesisDigitOneRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x2474)), "(1)", " \"\\u2474\": \"(1)\"");
});

QUnit.test("2Test", () => {
    equal(foldStrict(String.fromCharCode(0xb2)), "2", " \"\\u00B2\": \"2\"");
    equal(foldStrict(String.fromCharCode(0x2082)), "2", " \"\\u2082\": \"2\"");
    equal(foldStrict(String.fromCharCode(0x2461)), "2", " \"\\u2461\": \"2\"");
    equal(foldStrict(String.fromCharCode(0x24f6)), "2", " \"\\u24F6\": \"2\"");
    equal(foldStrict(String.fromCharCode(0x2777)), "2", " \"\\u2777\": \"2\"");
    equal(foldStrict(String.fromCharCode(0x2781)), "2", " \"\\u2781\": \"2\"");
    equal(foldStrict(String.fromCharCode(0x278b)), "2", " \"\\u278B\": \"2\"");
    equal(foldStrict(String.fromCharCode(0xff12)), "2", " \"\\uFF12\": \"2\"");
});

QUnit.test("DigitTwoFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x2489)), "2.", " \"\\u2489\": \"2.\"");
});

QUnit.test("LeftParenthesisDigitTwoRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x2475)), "(2)", " \"\\u2475\": \"(2)\"");
});

QUnit.test("3Test", () => {
    equal(foldStrict(String.fromCharCode(0xb3)), "3", " \"\\u00B3\": \"3\"");
    equal(foldStrict(String.fromCharCode(0x2083)), "3", " \"\\u2083\": \"3\"");
    equal(foldStrict(String.fromCharCode(0x2462)), "3", " \"\\u2462\": \"3\"");
    equal(foldStrict(String.fromCharCode(0x24f7)), "3", " \"\\u24F7\": \"3\"");
    equal(foldStrict(String.fromCharCode(0x2778)), "3", " \"\\u2778\": \"3\"");
    equal(foldStrict(String.fromCharCode(0x2782)), "3", " \"\\u2782\": \"3\"");
    equal(foldStrict(String.fromCharCode(0x278c)), "3", " \"\\u278C\": \"3\"");
    equal(foldStrict(String.fromCharCode(0xff13)), "3", " \"\\uFF13\": \"3\"");
});

QUnit.test("DigitThreeFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x248a)), "3.", " \"\\u248A\": \"3.\"");
});

QUnit.test("LeftParenthesisDigitThreeRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x2476)), "(3)", " \"\\u2476\": \"(3)\"");
});

QUnit.test("4Test", () => {
    equal(foldStrict(String.fromCharCode(0x2074)), "4", " \"\\u2074\": \"4\"");
    equal(foldStrict(String.fromCharCode(0x2084)), "4", " \"\\u2084\": \"4\"");
    equal(foldStrict(String.fromCharCode(0x2463)), "4", " \"\\u2463\": \"4\"");
    equal(foldStrict(String.fromCharCode(0x24f8)), "4", " \"\\u24F8\": \"4\"");
    equal(foldStrict(String.fromCharCode(0x2779)), "4", " \"\\u2779\": \"4\"");
    equal(foldStrict(String.fromCharCode(0x2783)), "4", " \"\\u2783\": \"4\"");
    equal(foldStrict(String.fromCharCode(0x278d)), "4", " \"\\u278D\": \"4\"");
    equal(foldStrict(String.fromCharCode(0xff14)), "4", " \"\\uFF14\": \"4\"");
});

QUnit.test("DigitFourFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x248b)), "4.", " \"\\u248B\": \"4.\"");
});

QUnit.test("LeftParenthesisDigitFourRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x2477)), "(4)", " \"\\u2477\": \"(4)\"");
});

QUnit.test("5Test", () => {
    equal(foldStrict(String.fromCharCode(0x2075)), "5", " \"\\u2075\": \"5\"");
    equal(foldStrict(String.fromCharCode(0x2085)), "5", " \"\\u2085\": \"5\"");
    equal(foldStrict(String.fromCharCode(0x2464)), "5", " \"\\u2464\": \"5\"");
    equal(foldStrict(String.fromCharCode(0x24f9)), "5", " \"\\u24F9\": \"5\"");
    equal(foldStrict(String.fromCharCode(0x277a)), "5", " \"\\u277A\": \"5\"");
    equal(foldStrict(String.fromCharCode(0x2784)), "5", " \"\\u2784\": \"5\"");
    equal(foldStrict(String.fromCharCode(0x278e)), "5", " \"\\u278E\": \"5\"");
    equal(foldStrict(String.fromCharCode(0xff15)), "5", " \"\\uFF15\": \"5\"");
});

QUnit.test("DigitFiveFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x248c)), "5.", " \"\\u248C\": \"5.\"");
});

QUnit.test("LeftParenthesisDigitFiveRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x2478)), "(5)", " \"\\u2478\": \"(5)\"");
});

QUnit.test("6Test", () => {
    equal(foldStrict(String.fromCharCode(0x2076)), "6", " \"\\u2076\": \"6\"");
    equal(foldStrict(String.fromCharCode(0x2086)), "6", " \"\\u2086\": \"6\"");
    equal(foldStrict(String.fromCharCode(0x2465)), "6", " \"\\u2465\": \"6\"");
    equal(foldStrict(String.fromCharCode(0x24fa)), "6", " \"\\u24FA\": \"6\"");
    equal(foldStrict(String.fromCharCode(0x277b)), "6", " \"\\u277B\": \"6\"");
    equal(foldStrict(String.fromCharCode(0x2785)), "6", " \"\\u2785\": \"6\"");
    equal(foldStrict(String.fromCharCode(0x278f)), "6", " \"\\u278F\": \"6\"");
    equal(foldStrict(String.fromCharCode(0xff16)), "6", " \"\\uFF16\": \"6\"");
});

QUnit.test("DigitSixFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x248d)), "6.", " \"\\u248D\": \"6.\"");
});

QUnit.test("LeftParenthesisDigitSixRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x2479)), "(6)", " \"\\u2479\": \"(6)\"");
});

QUnit.test("7Test", () => {
    equal(foldStrict(String.fromCharCode(0x2077)), "7", " \"\\u2077\": \"7\"");
    equal(foldStrict(String.fromCharCode(0x2087)), "7", " \"\\u2087\": \"7\"");
    equal(foldStrict(String.fromCharCode(0x2466)), "7", " \"\\u2466\": \"7\"");
    equal(foldStrict(String.fromCharCode(0x24fb)), "7", " \"\\u24FB\": \"7\"");
    equal(foldStrict(String.fromCharCode(0x277c)), "7", " \"\\u277C\": \"7\"");
    equal(foldStrict(String.fromCharCode(0x2786)), "7", " \"\\u2786\": \"7\"");
    equal(foldStrict(String.fromCharCode(0x2790)), "7", " \"\\u2790\": \"7\"");
    equal(foldStrict(String.fromCharCode(0xff17)), "7", " \"\\uFF17\": \"7\"");
});

QUnit.test("DigitSevenFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x248e)), "7.", " \"\\u248E\": \"7.\"");
});

QUnit.test("LeftParenthesisDigitSevenRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x247a)), "(7)", " \"\\u247A\": \"(7)\"");
});

QUnit.test("8Test", () => {
    equal(foldStrict(String.fromCharCode(0x2078)), "8", " \"\\u2078\": \"8\"");
    equal(foldStrict(String.fromCharCode(0x2088)), "8", " \"\\u2088\": \"8\"");
    equal(foldStrict(String.fromCharCode(0x2467)), "8", " \"\\u2467\": \"8\"");
    equal(foldStrict(String.fromCharCode(0x24fc)), "8", " \"\\u24FC\": \"8\"");
    equal(foldStrict(String.fromCharCode(0x277d)), "8", " \"\\u277D\": \"8\"");
    equal(foldStrict(String.fromCharCode(0x2787)), "8", " \"\\u2787\": \"8\"");
    equal(foldStrict(String.fromCharCode(0x2791)), "8", " \"\\u2791\": \"8\"");
    equal(foldStrict(String.fromCharCode(0xff18)), "8", " \"\\uFF18\": \"8\"");
});

QUnit.test("DigitEightFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x248f)), "8.", " \"\\u248F\": \"8.\"");
});

QUnit.test("LeftParenthesisDigitEightRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x247b)), "(8)", " \"\\u247B\": \"(8)\"");
});

QUnit.test("9Test", () => {
    equal(foldStrict(String.fromCharCode(0x2079)), "9", " \"\\u2079\": \"9\"");
    equal(foldStrict(String.fromCharCode(0x2089)), "9", " \"\\u2089\": \"9\"");
    equal(foldStrict(String.fromCharCode(0x2468)), "9", " \"\\u2468\": \"9\"");
    equal(foldStrict(String.fromCharCode(0x24fd)), "9", " \"\\u24FD\": \"9\"");
    equal(foldStrict(String.fromCharCode(0x277e)), "9", " \"\\u277E\": \"9\"");
    equal(foldStrict(String.fromCharCode(0x2788)), "9", " \"\\u2788\": \"9\"");
    equal(foldStrict(String.fromCharCode(0x2792)), "9", " \"\\u2792\": \"9\"");
    equal(foldStrict(String.fromCharCode(0xff19)), "9", " \"\\uFF19\": \"9\"");
});

QUnit.test("DigitNineFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x2490)), "9.", " \"\\u2490\": \"9.\"");
});

QUnit.test("LeftParenthesisDigitNineRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x247c)), "(9)", " \"\\u247C\": \"(9)\"");
});

QUnit.test("10Test", () => {
    equal(foldStrict(String.fromCharCode(0x2469)), "10", " \"\\u2469\": \"10\"");
    equal(foldStrict(String.fromCharCode(0x24fe)), "10", " \"\\u24FE\": \"10\"");
    equal(foldStrict(String.fromCharCode(0x277f)), "10", " \"\\u277F\": \"10\"");
    equal(foldStrict(String.fromCharCode(0x2789)), "10", " \"\\u2789\": \"10\"");
    equal(foldStrict(String.fromCharCode(0x2793)), "10", " \"\\u2793\": \"10\"");
});

QUnit.test("DigitOneDigitZeroFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x2491)), "10.", " \"\\u2491\": \"10.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitZeroRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x247d)), "(10)", " \"\\u247D\": \"(10)\"");
});

QUnit.test("11Test", () => {
    equal(foldStrict(String.fromCharCode(0x246a)), "11", " \"\\u246A\": \"11\"");
    equal(foldStrict(String.fromCharCode(0x24eb)), "11", " \"\\u24EB\": \"11\"");
});

QUnit.test("DigitOneDigitOneFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x2492)), "11.", " \"\\u2492\": \"11.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitOneRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x247e)), "(11)", " \"\\u247E\": \"(11)\"");
});

QUnit.test("12Test", () => {
    equal(foldStrict(String.fromCharCode(0x246b)), "12", " \"\\u246B\": \"12\"");
    equal(foldStrict(String.fromCharCode(0x24ec)), "12", " \"\\u24EC\": \"12\"");
});

QUnit.test("DigitOneDigitTwoFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x2493)), "12.", " \"\\u2493\": \"12.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitTwoRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x247f)), "(12)", " \"\\u247F\": \"(12)\"");
});

QUnit.test("13Test", () => {
    equal(foldStrict(String.fromCharCode(0x246c)), "13", " \"\\u246C\": \"13\"");
    equal(foldStrict(String.fromCharCode(0x24ed)), "13", " \"\\u24ED\": \"13\"");
});

QUnit.test("DigitOneDigitThreeFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x2494)), "13.", " \"\\u2494\": \"13.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitThreeRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x2480)), "(13)", " \"\\u2480\": \"(13)\"");
});

QUnit.test("14Test", () => {
    equal(foldStrict(String.fromCharCode(0x246d)), "14", " \"\\u246D\": \"14\"");
    equal(foldStrict(String.fromCharCode(0x24ee)), "14", " \"\\u24EE\": \"14\"");
});

QUnit.test("DigitOneDigitFourFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x2495)), "14.", " \"\\u2495\": \"14.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitFourRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x2481)), "(14)", " \"\\u2481\": \"(14)\"");
});

QUnit.test("15Test", () => {
    equal(foldStrict(String.fromCharCode(0x246e)), "15", " \"\\u246E\": \"15\"");
    equal(foldStrict(String.fromCharCode(0x24ef)), "15", " \"\\u24EF\": \"15\"");
});

QUnit.test("DigitOneDigitFiveFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x2496)), "15.", " \"\\u2496\": \"15.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitFiveRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x2482)), "(15)", " \"\\u2482\": \"(15)\"");
});

QUnit.test("16Test", () => {
    equal(foldStrict(String.fromCharCode(0x246f)), "16", " \"\\u246F\": \"16\"");
    equal(foldStrict(String.fromCharCode(0x24f0)), "16", " \"\\u24F0\": \"16\"");
});

QUnit.test("DigitOneDigitSixFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x2497)), "16.", " \"\\u2497\": \"16.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitSixRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x2483)), "(16)", " \"\\u2483\": \"(16)\"");
});

QUnit.test("17Test", () => {
    equal(foldStrict(String.fromCharCode(0x2470)), "17", " \"\\u2470\": \"17\"");
    equal(foldStrict(String.fromCharCode(0x24f1)), "17", " \"\\u24F1\": \"17\"");
});

QUnit.test("DigitOneDigitSevenFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x2498)), "17.", " \"\\u2498\": \"17.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitSevenRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x2484)), "(17)", " \"\\u2484\": \"(17)\"");
});

QUnit.test("18Test", () => {
    equal(foldStrict(String.fromCharCode(0x2471)), "18", " \"\\u2471\": \"18\"");
    equal(foldStrict(String.fromCharCode(0x24f2)), "18", " \"\\u24F2\": \"18\"");
});

QUnit.test("DigitOneDigitEightFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x2499)), "18.", " \"\\u2499\": \"18.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitEightRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x2485)), "(18)", " \"\\u2485\": \"(18)\"");
});

QUnit.test("19Test", () => {
    equal(foldStrict(String.fromCharCode(0x2472)), "19", " \"\\u2472\": \"19\"");
    equal(foldStrict(String.fromCharCode(0x24f3)), "19", " \"\\u24F3\": \"19\"");
});

QUnit.test("DigitOneDigitNineFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x249a)), "19.", " \"\\u249A\": \"19.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitNineRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x2486)), "(19)", " \"\\u2486\": \"(19)\"");
});

QUnit.test("20Test", () => {
    equal(foldStrict(String.fromCharCode(0x2473)), "20", " \"\\u2473\": \"20\"");
    equal(foldStrict(String.fromCharCode(0x24f4)), "20", " \"\\u24F4\": \"20\"");
});

QUnit.test("DigitTwoDigitZeroFullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0x249b)), "20.", " \"\\u249B\": \"20.\"");
});

QUnit.test("LeftParenthesisDigitTwoDigitZeroRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x2487)), "(20)", " \"\\u2487\": \"(20)\"");
});

QUnit.test("QuotationMarkTest", () => {
    equal(foldStrict(String.fromCharCode(0xab)), "\"", " \"\\u00AB\": \"\"\"");
    equal(foldStrict(String.fromCharCode(0xbb)), "\"", " \"\\u00BB\": \"\"\"");
    equal(foldStrict(String.fromCharCode(0x201c)), "\"", " \"\\u201C\": \"\"\"");
    equal(foldStrict(String.fromCharCode(0x201d)), "\"", " \"\\u201D\": \"\"\"");
    equal(foldStrict(String.fromCharCode(0x201e)), "\"", " \"\\u201E\": \"\"\"");
    equal(foldStrict(String.fromCharCode(0x2033)), "\"", " \"\\u2033\": \"\"\"");
    equal(foldStrict(String.fromCharCode(0x2036)), "\"", " \"\\u2036\": \"\"\"");
    equal(foldStrict(String.fromCharCode(0x275d)), "\"", " \"\\u275D\": \"\"\"");
    equal(foldStrict(String.fromCharCode(0x275e)), "\"", " \"\\u275E\": \"\"\"");
    equal(foldStrict(String.fromCharCode(0x276e)), "\"", " \"\\u276E\": \"\"\"");
    equal(foldStrict(String.fromCharCode(0x276f)), "\"", " \"\\u276F\": \"\"\"");
    equal(foldStrict(String.fromCharCode(0xff02)), "\"", " \"\\uFF02\": \"\"\"");
});

QUnit.test("ApostropheTest", () => {
    equal(foldStrict(String.fromCharCode(0x2018)), "'", " \"\\u2018\": \"'\"");
    equal(foldStrict(String.fromCharCode(0x2019)), "'", " \"\\u2019\": \"'\"");
    equal(foldStrict(String.fromCharCode(0x201a)), "'", " \"\\u201A\": \"'\"");
    equal(foldStrict(String.fromCharCode(0x201b)), "'", " \"\\u201B\": \"'\"");
    equal(foldStrict(String.fromCharCode(0x2032)), "'", " \"\\u2032\": \"'\"");
    equal(foldStrict(String.fromCharCode(0x2035)), "'", " \"\\u2035\": \"'\"");
    equal(foldStrict(String.fromCharCode(0x2039)), "'", " \"\\u2039\": \"'\"");
    equal(foldStrict(String.fromCharCode(0x203a)), "'", " \"\\u203A\": \"'\"");
    equal(foldStrict(String.fromCharCode(0x275b)), "'", " \"\\u275B\": \"'\"");
    equal(foldStrict(String.fromCharCode(0x275c)), "'", " \"\\u275C\": \"'\"");
    equal(foldStrict(String.fromCharCode(0xff07)), "'", " \"\\uFF07\": \"'\"");
});

QUnit.test("Hyphen-minusTest", () => {
    equal(foldStrict(String.fromCharCode(0x2010)), "-", " \"\\u2010\": \"-\"");
    equal(foldStrict(String.fromCharCode(0x2011)), "-", " \"\\u2011\": \"-\"");
    equal(foldStrict(String.fromCharCode(0x2012)), "-", " \"\\u2012\": \"-\"");
    equal(foldStrict(String.fromCharCode(0x2013)), "-", " \"\\u2013\": \"-\"");
    equal(foldStrict(String.fromCharCode(0x2014)), "-", " \"\\u2014\": \"-\"");
    equal(foldStrict(String.fromCharCode(0x207b)), "-", " \"\\u207B\": \"-\"");
    equal(foldStrict(String.fromCharCode(0x208b)), "-", " \"\\u208B\": \"-\"");
    equal(foldStrict(String.fromCharCode(0xff0d)), "-", " \"\\uFF0D\": \"-\"");
});

QUnit.test("LeftSquareBracketTest", () => {
    equal(foldStrict(String.fromCharCode(0x2045)), "[", " \"\\u2045\": \"[\"");
    equal(foldStrict(String.fromCharCode(0x2772)), "[", " \"\\u2772\": \"[\"");
    equal(foldStrict(String.fromCharCode(0xff3b)), "[", " \"\\uFF3B\": \"[\"");
});

QUnit.test("RightSquareBracketTest", () => {
    equal(foldStrict(String.fromCharCode(0x2046)), "]", " \"\\u2046\": \"]\"");
    equal(foldStrict(String.fromCharCode(0x2773)), "]", " \"\\u2773\": \"]\"");
    equal(foldStrict(String.fromCharCode(0xff3d)), "]", " \"\\uFF3D\": \"]\"");
});

QUnit.test("LeftParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x207d)), "(", " \"\\u207D\": \"(\"");
    equal(foldStrict(String.fromCharCode(0x208d)), "(", " \"\\u208D\": \"(\"");
    equal(foldStrict(String.fromCharCode(0x2768)), "(", " \"\\u2768\": \"(\"");
    equal(foldStrict(String.fromCharCode(0x276a)), "(", " \"\\u276A\": \"(\"");
    equal(foldStrict(String.fromCharCode(0xff08)), "(", " \"\\uFF08\": \"(\"");
});

QUnit.test("LeftParenthesisLeftParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x2e28)), "((", " \"\\u2E28\": \"((\"");
});

QUnit.test("RightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x207e)), ")", " \"\\u207E\": \")\"");
    equal(foldStrict(String.fromCharCode(0x208e)), ")", " \"\\u208E\": \")\"");
    equal(foldStrict(String.fromCharCode(0x2769)), ")", " \"\\u2769\": \")\"");
    equal(foldStrict(String.fromCharCode(0x276b)), ")", " \"\\u276B\": \")\"");
    equal(foldStrict(String.fromCharCode(0xff09)), ")", " \"\\uFF09\": \")\"");
});

QUnit.test("RightParenthesisRightParenthesisTest", () => {
    equal(foldStrict(String.fromCharCode(0x2e29)), "))", " \"\\u2E29\": \"))\"");
});

QUnit.test("Less-thanSignTest", () => {
    equal(foldStrict(String.fromCharCode(0x276c)), "<", " \"\\u276C\": \"<\"");
    equal(foldStrict(String.fromCharCode(0x2770)), "<", " \"\\u2770\": \"<\"");
    equal(foldStrict(String.fromCharCode(0xff1c)), "<", " \"\\uFF1C\": \"<\"");
});

QUnit.test("Greater-thanSignTest", () => {
    equal(foldStrict(String.fromCharCode(0x276d)), ">", " \"\\u276D\": \">\"");
    equal(foldStrict(String.fromCharCode(0x2771)), ">", " \"\\u2771\": \">\"");
    equal(foldStrict(String.fromCharCode(0xff1e)), ">", " \"\\uFF1E\": \">\"");
});

QUnit.test("LeftCurlyBracketTest", () => {
    equal(foldStrict(String.fromCharCode(0x2774)), "{", " \"\\u2774\": \"{\"");
    equal(foldStrict(String.fromCharCode(0xff5b)), "{", " \"\\uFF5B\": \"{\"");
});

QUnit.test("RightCurlyBracketTest", () => {
    equal(foldStrict(String.fromCharCode(0x2775)), "}", " \"\\u2775\": \"}\"");
    equal(foldStrict(String.fromCharCode(0xff5d)), "}", " \"\\uFF5D\": \"}\"");
});

QUnit.test("PlusSignTest", () => {
    equal(foldStrict(String.fromCharCode(0x207a)), "+", " \"\\u207A\": \"+\"");
    equal(foldStrict(String.fromCharCode(0x208a)), "+", " \"\\u208A\": \"+\"");
    equal(foldStrict(String.fromCharCode(0xff0b)), "+", " \"\\uFF0B\": \"+\"");
});

QUnit.test("EqualsSignTest", () => {
    equal(foldStrict(String.fromCharCode(0x207c)), "=", " \"\\u207C\": \"=\"");
    equal(foldStrict(String.fromCharCode(0x208c)), "=", " \"\\u208C\": \"=\"");
    equal(foldStrict(String.fromCharCode(0xff1d)), "=", " \"\\uFF1D\": \"=\"");
});

QUnit.test("ExclamationMarkTest", () => {
    equal(foldStrict(String.fromCharCode(0xff01)), "!", " \"\\uFF01\": \"!\"");
});

QUnit.test("ExclamationMarkExclamationMarkTest", () => {
    equal(foldStrict(String.fromCharCode(0x203c)), "!!", " \"\\u203C\": \"!!\"");
});

QUnit.test("ExclamationMarkQuestionMarkTest", () => {
    equal(foldStrict(String.fromCharCode(0x2049)), "!?", " \"\\u2049\": \"!?\"");
});

QUnit.test("NumberSignTest", () => {
    equal(foldStrict(String.fromCharCode(0xff03)), "#", " \"\\uFF03\": \"#\"");
});

QUnit.test("DollarSignTest", () => {
    equal(foldStrict(String.fromCharCode(0xff04)), "$", " \"\\uFF04\": \"$\"");
});

QUnit.test("PercentSignTest", () => {
    equal(foldStrict(String.fromCharCode(0x2052)), "%", " \"\\u2052\": \"%\"");
    equal(foldStrict(String.fromCharCode(0xff05)), "%", " \"\\uFF05\": \"%\"");
});

QUnit.test("AmpersandTest", () => {
    equal(foldStrict(String.fromCharCode(0xff06)), "&", " \"\\uFF06\": \"&\"");
});

QUnit.test("AsteriskTest", () => {
    equal(foldStrict(String.fromCharCode(0x204e)), "*", " \"\\u204E\": \"*\"");
    equal(foldStrict(String.fromCharCode(0xff0a)), "*", " \"\\uFF0A\": \"*\"");
});

QUnit.test("CommaTest", () => {
    equal(foldStrict(String.fromCharCode(0xff0c)), ",", " \"\\uFF0C\": \",\"");
});

QUnit.test("FullStopTest", () => {
    equal(foldStrict(String.fromCharCode(0xff0e)), ".", " \"\\uFF0E\": \".\"");
});

QUnit.test("SolidusTest", () => {
    equal(foldStrict(String.fromCharCode(0x2044)), "\/", " \"\\u2044\": \"\/\"");
    equal(foldStrict(String.fromCharCode(0xff0f)), "\/", " \"\\uFF0F\": \"\/\"");
});

QUnit.test("ColonTest", () => {
    equal(foldStrict(String.fromCharCode(0xff1a)), ":", " \"\\uFF1A\": \":\"");
});

QUnit.test("SemicolonTest", () => {
    equal(foldStrict(String.fromCharCode(0x204f)), ";", " \"\\u204F\": \";\"");
    equal(foldStrict(String.fromCharCode(0xff1b)), ";", " \"\\uFF1B\": \";\"");
});

QUnit.test("QuestionMarkTest", () => {
    equal(foldStrict(String.fromCharCode(0xff1f)), "?", " \"\\uFF1F\": \"?\"");
});

QUnit.test("QuestionMarkQuestionMarkTest", () => {
    equal(foldStrict(String.fromCharCode(0x2047)), "??", " \"\\u2047\": \"??\"");
});

QUnit.test("QuestionMarkExclamationMarkTest", () => {
    equal(foldStrict(String.fromCharCode(0x2048)), "?!", " \"\\u2048\": \"?!\"");
});

QUnit.test("CommercialAtTest", () => {
    equal(foldStrict(String.fromCharCode(0xff20)), "@", " \"\\uFF20\": \"@\"");
});

QUnit.test("ReverseSolidusReverseSolidusTest", () => {
    equal(foldStrict(String.fromCharCode(0xff3c)), "\\", " \"\\uFF3C\": \"\\\"");
});

QUnit.test("CircumflexAccentTest", () => {
    equal(foldStrict(String.fromCharCode(0x2038)), "^", " \"\\u2038\": \"^\"");
    equal(foldStrict(String.fromCharCode(0xff3e)), "^", " \"\\uFF3E\": \"^\"");
});

QUnit.test("LowLineTest", () => {
    equal(foldStrict(String.fromCharCode(0xff3f)), "_", " \"\\uFF3F\": \"_\"");
});

QUnit.test("TildeTest", () => {
    equal(foldStrict(String.fromCharCode(0x2053)), "~", " \"\\u2053\": \"~\"");
    equal(foldStrict(String.fromCharCode(0xff5e)), "~", " \"\\uFF5E\": \"~\"");
});

function foldStrict(str) {
    return ASCIIFolder._fold(str, () => {
        throw Error("Fallback function should never be called in this test.");
    });
}
