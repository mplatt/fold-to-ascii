var ASCIIFolder = require("./../lib/ascii-folder.js");

QUnit.test("nullTest", function () {
    equal(ASCIIFolder.fold(null), "", "This is expected to return the empty string.");
});

QUnit.test("numberTest", function () {
    equal(ASCIIFolder.fold(123456789), "123456789", "This is expected to return a numeric sequence.");
});

QUnit.test("emptyTest", function () {
    equal(ASCIIFolder.fold(""), "", "This is expected to return the empty string.");
});

QUnit.test("nullTest", function () {
    equal(ASCIIFolder.fold(null), "", "This is expected to return the empty string.");
});

QUnit.test("spaceTabTest", function () {
    equal(ASCIIFolder.fold(" 	 "), " 	 ", "This is expected to return a space-tab-space sequence.");
});

QUnit.test("escapeSequenceTest", function () {
    equal(ASCIIFolder.fold(" \b \t \n \v \f \r "), " \b \t \n \v \f \r ", "This is expected to return the escape sequences \\b \\t \\n \\v \\f \\r.");
});

QUnit.test("controlCharacterTest", function () {
    var controlCharacters = (String.fromCharCode(0x8) + String.fromCharCode(0x9) + String.fromCharCode(0xA) + String.fromCharCode(0xC) + String.fromCharCode(0xD));
    equal(ASCIIFolder.fold(controlCharacters), controlCharacters, "This is expected to return control chracters.");
});

QUnit.test("asciiPrintableTest", function () {
    equal(ASCIIFolder.fold("0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ !\"#$%&'()*+,-./"), "0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ !\"#$%&'()*+,-./", "This is expected to return the ASCII printable characters.");
});

QUnit.test("ATest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xc0)), "A", "This is function is expected to escape the unicode sequence \"\\u00C0\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xc1)), "A", "This is function is expected to escape the unicode sequence \"\\u00C1\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xc2)), "A", "This is function is expected to escape the unicode sequence \"\\u00C2\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xc3)), "A", "This is function is expected to escape the unicode sequence \"\\u00C3\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xc4)), "A", "This is function is expected to escape the unicode sequence \"\\u00C4\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xc5)), "A", "This is function is expected to escape the unicode sequence \"\\u00C5\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x100)), "A", "This is function is expected to escape the unicode sequence \"\\u0100\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x102)), "A", "This is function is expected to escape the unicode sequence \"\\u0102\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x104)), "A", "This is function is expected to escape the unicode sequence \"\\u0104\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x18f)), "A", "This is function is expected to escape the unicode sequence \"\\u018F\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1cd)), "A", "This is function is expected to escape the unicode sequence \"\\u01CD\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1de)), "A", "This is function is expected to escape the unicode sequence \"\\u01DE\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e0)), "A", "This is function is expected to escape the unicode sequence \"\\u01E0\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1fa)), "A", "This is function is expected to escape the unicode sequence \"\\u01FA\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x200)), "A", "This is function is expected to escape the unicode sequence \"\\u0200\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x202)), "A", "This is function is expected to escape the unicode sequence \"\\u0202\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x226)), "A", "This is function is expected to escape the unicode sequence \"\\u0226\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x23a)), "A", "This is function is expected to escape the unicode sequence \"\\u023A\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d00)), "A", "This is function is expected to escape the unicode sequence \"\\u1D00\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e00)), "A", "This is function is expected to escape the unicode sequence \"\\u1E00\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ea0)), "A", "This is function is expected to escape the unicode sequence \"\\u1EA0\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ea2)), "A", "This is function is expected to escape the unicode sequence \"\\u1EA2\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ea4)), "A", "This is function is expected to escape the unicode sequence \"\\u1EA4\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ea6)), "A", "This is function is expected to escape the unicode sequence \"\\u1EA6\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ea8)), "A", "This is function is expected to escape the unicode sequence \"\\u1EA8\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eaa)), "A", "This is function is expected to escape the unicode sequence \"\\u1EAA\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eac)), "A", "This is function is expected to escape the unicode sequence \"\\u1EAC\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eae)), "A", "This is function is expected to escape the unicode sequence \"\\u1EAE\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eb0)), "A", "This is function is expected to escape the unicode sequence \"\\u1EB0\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eb2)), "A", "This is function is expected to escape the unicode sequence \"\\u1EB2\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eb4)), "A", "This is function is expected to escape the unicode sequence \"\\u1EB4\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eb6)), "A", "This is function is expected to escape the unicode sequence \"\\u1EB6\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24b6)), "A", "This is function is expected to escape the unicode sequence \"\\u24B6\" to \"A\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff21)), "A", "This is function is expected to escape the unicode sequence \"\\uFF21\" to \"A\"");
});

QUnit.test("aTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xe0)), "a", "This is function is expected to escape the unicode sequence \"\\u00E0\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xe1)), "a", "This is function is expected to escape the unicode sequence \"\\u00E1\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xe2)), "a", "This is function is expected to escape the unicode sequence \"\\u00E2\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xe3)), "a", "This is function is expected to escape the unicode sequence \"\\u00E3\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xe4)), "a", "This is function is expected to escape the unicode sequence \"\\u00E4\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xe5)), "a", "This is function is expected to escape the unicode sequence \"\\u00E5\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x101)), "a", "This is function is expected to escape the unicode sequence \"\\u0101\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x103)), "a", "This is function is expected to escape the unicode sequence \"\\u0103\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x105)), "a", "This is function is expected to escape the unicode sequence \"\\u0105\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ce)), "a", "This is function is expected to escape the unicode sequence \"\\u01CE\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1df)), "a", "This is function is expected to escape the unicode sequence \"\\u01DF\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e1)), "a", "This is function is expected to escape the unicode sequence \"\\u01E1\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1fb)), "a", "This is function is expected to escape the unicode sequence \"\\u01FB\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x201)), "a", "This is function is expected to escape the unicode sequence \"\\u0201\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x203)), "a", "This is function is expected to escape the unicode sequence \"\\u0203\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x227)), "a", "This is function is expected to escape the unicode sequence \"\\u0227\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x250)), "a", "This is function is expected to escape the unicode sequence \"\\u0250\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x259)), "a", "This is function is expected to escape the unicode sequence \"\\u0259\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x25a)), "a", "This is function is expected to escape the unicode sequence \"\\u025A\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d8f)), "a", "This is function is expected to escape the unicode sequence \"\\u1D8F\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d95)), "a", "This is function is expected to escape the unicode sequence \"\\u1D95\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e01)), "a", "This is function is expected to escape the unicode sequence \"\\u1E01\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e9a)), "a", "This is function is expected to escape the unicode sequence \"\\u1E9A\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ea1)), "a", "This is function is expected to escape the unicode sequence \"\\u1EA1\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ea3)), "a", "This is function is expected to escape the unicode sequence \"\\u1EA3\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ea5)), "a", "This is function is expected to escape the unicode sequence \"\\u1EA5\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ea7)), "a", "This is function is expected to escape the unicode sequence \"\\u1EA7\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ea9)), "a", "This is function is expected to escape the unicode sequence \"\\u1EA9\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eab)), "a", "This is function is expected to escape the unicode sequence \"\\u1EAB\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ead)), "a", "This is function is expected to escape the unicode sequence \"\\u1EAD\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eaf)), "a", "This is function is expected to escape the unicode sequence \"\\u1EAF\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eb1)), "a", "This is function is expected to escape the unicode sequence \"\\u1EB1\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eb3)), "a", "This is function is expected to escape the unicode sequence \"\\u1EB3\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eb5)), "a", "This is function is expected to escape the unicode sequence \"\\u1EB5\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eb7)), "a", "This is function is expected to escape the unicode sequence \"\\u1EB7\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2090)), "a", "This is function is expected to escape the unicode sequence \"\\u2090\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2094)), "a", "This is function is expected to escape the unicode sequence \"\\u2094\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24d0)), "a", "This is function is expected to escape the unicode sequence \"\\u24D0\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c65)), "a", "This is function is expected to escape the unicode sequence \"\\u2C65\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c6f)), "a", "This is function is expected to escape the unicode sequence \"\\u2C6F\" to \"a\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff41)), "a", "This is function is expected to escape the unicode sequence \"\\uFF41\" to \"a\"");
});

QUnit.test("AATest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xa732)), "AA", "This is function is expected to escape the unicode sequence \"\\uA732\" to \"AA\"");
});

QUnit.test("AETest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xc6)), "AE", "This is function is expected to escape the unicode sequence \"\\u00C6\" to \"AE\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e2)), "AE", "This is function is expected to escape the unicode sequence \"\\u01E2\" to \"AE\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1fc)), "AE", "This is function is expected to escape the unicode sequence \"\\u01FC\" to \"AE\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d01)), "AE", "This is function is expected to escape the unicode sequence \"\\u1D01\" to \"AE\"");
});

QUnit.test("AOTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xa734)), "AO", "This is function is expected to escape the unicode sequence \"\\uA734\" to \"AO\"");
});

QUnit.test("AUTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xa736)), "AU", "This is function is expected to escape the unicode sequence \"\\uA736\" to \"AU\"");
});

QUnit.test("AVTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xa738)), "AV", "This is function is expected to escape the unicode sequence \"\\uA738\" to \"AV\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa73a)), "AV", "This is function is expected to escape the unicode sequence \"\\uA73A\" to \"AV\"");
});

QUnit.test("AYTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xa73c)), "AY", "This is function is expected to escape the unicode sequence \"\\uA73C\" to \"AY\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterARightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x249c)), "(a)", "This is function is expected to escape the unicode sequence \"\\u249C\" to \"(a)\"");
});

QUnit.test("aaTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xa733)), "aa", "This is function is expected to escape the unicode sequence \"\\uA733\" to \"aa\"");
});

QUnit.test("aeTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xe6)), "ae", "This is function is expected to escape the unicode sequence \"\\u00E6\" to \"ae\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e3)), "ae", "This is function is expected to escape the unicode sequence \"\\u01E3\" to \"ae\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1fd)), "ae", "This is function is expected to escape the unicode sequence \"\\u01FD\" to \"ae\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d02)), "ae", "This is function is expected to escape the unicode sequence \"\\u1D02\" to \"ae\"");
});

QUnit.test("aoTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xa735)), "ao", "This is function is expected to escape the unicode sequence \"\\uA735\" to \"ao\"");
});

QUnit.test("auTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xa737)), "au", "This is function is expected to escape the unicode sequence \"\\uA737\" to \"au\"");
});

QUnit.test("avTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xa739)), "av", "This is function is expected to escape the unicode sequence \"\\uA739\" to \"av\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa73b)), "av", "This is function is expected to escape the unicode sequence \"\\uA73B\" to \"av\"");
});

QUnit.test("ayTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xa73d)), "ay", "This is function is expected to escape the unicode sequence \"\\uA73D\" to \"ay\"");
});

QUnit.test("BTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x181)), "B", "This is function is expected to escape the unicode sequence \"\\u0181\" to \"B\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x182)), "B", "This is function is expected to escape the unicode sequence \"\\u0182\" to \"B\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x243)), "B", "This is function is expected to escape the unicode sequence \"\\u0243\" to \"B\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x299)), "B", "This is function is expected to escape the unicode sequence \"\\u0299\" to \"B\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d03)), "B", "This is function is expected to escape the unicode sequence \"\\u1D03\" to \"B\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e02)), "B", "This is function is expected to escape the unicode sequence \"\\u1E02\" to \"B\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e04)), "B", "This is function is expected to escape the unicode sequence \"\\u1E04\" to \"B\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e06)), "B", "This is function is expected to escape the unicode sequence \"\\u1E06\" to \"B\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24b7)), "B", "This is function is expected to escape the unicode sequence \"\\u24B7\" to \"B\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff22)), "B", "This is function is expected to escape the unicode sequence \"\\uFF22\" to \"B\"");
});

QUnit.test("bTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x180)), "b", "This is function is expected to escape the unicode sequence \"\\u0180\" to \"b\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x183)), "b", "This is function is expected to escape the unicode sequence \"\\u0183\" to \"b\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x253)), "b", "This is function is expected to escape the unicode sequence \"\\u0253\" to \"b\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d6c)), "b", "This is function is expected to escape the unicode sequence \"\\u1D6C\" to \"b\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d80)), "b", "This is function is expected to escape the unicode sequence \"\\u1D80\" to \"b\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e03)), "b", "This is function is expected to escape the unicode sequence \"\\u1E03\" to \"b\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e05)), "b", "This is function is expected to escape the unicode sequence \"\\u1E05\" to \"b\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e07)), "b", "This is function is expected to escape the unicode sequence \"\\u1E07\" to \"b\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24d1)), "b", "This is function is expected to escape the unicode sequence \"\\u24D1\" to \"b\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff42)), "b", "This is function is expected to escape the unicode sequence \"\\uFF42\" to \"b\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterBRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x249d)), "(b)", "This is function is expected to escape the unicode sequence \"\\u249D\" to \"(b)\"");
});

QUnit.test("CTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xc7)), "C", "This is function is expected to escape the unicode sequence \"\\u00C7\" to \"C\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x106)), "C", "This is function is expected to escape the unicode sequence \"\\u0106\" to \"C\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x108)), "C", "This is function is expected to escape the unicode sequence \"\\u0108\" to \"C\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x10a)), "C", "This is function is expected to escape the unicode sequence \"\\u010A\" to \"C\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x10c)), "C", "This is function is expected to escape the unicode sequence \"\\u010C\" to \"C\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x187)), "C", "This is function is expected to escape the unicode sequence \"\\u0187\" to \"C\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x23b)), "C", "This is function is expected to escape the unicode sequence \"\\u023B\" to \"C\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x297)), "C", "This is function is expected to escape the unicode sequence \"\\u0297\" to \"C\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d04)), "C", "This is function is expected to escape the unicode sequence \"\\u1D04\" to \"C\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e08)), "C", "This is function is expected to escape the unicode sequence \"\\u1E08\" to \"C\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24b8)), "C", "This is function is expected to escape the unicode sequence \"\\u24B8\" to \"C\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff23)), "C", "This is function is expected to escape the unicode sequence \"\\uFF23\" to \"C\"");
});

QUnit.test("cTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xe7)), "c", "This is function is expected to escape the unicode sequence \"\\u00E7\" to \"c\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x107)), "c", "This is function is expected to escape the unicode sequence \"\\u0107\" to \"c\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x109)), "c", "This is function is expected to escape the unicode sequence \"\\u0109\" to \"c\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x10b)), "c", "This is function is expected to escape the unicode sequence \"\\u010B\" to \"c\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x10d)), "c", "This is function is expected to escape the unicode sequence \"\\u010D\" to \"c\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x188)), "c", "This is function is expected to escape the unicode sequence \"\\u0188\" to \"c\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x23c)), "c", "This is function is expected to escape the unicode sequence \"\\u023C\" to \"c\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x255)), "c", "This is function is expected to escape the unicode sequence \"\\u0255\" to \"c\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e09)), "c", "This is function is expected to escape the unicode sequence \"\\u1E09\" to \"c\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2184)), "c", "This is function is expected to escape the unicode sequence \"\\u2184\" to \"c\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24d2)), "c", "This is function is expected to escape the unicode sequence \"\\u24D2\" to \"c\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa73e)), "c", "This is function is expected to escape the unicode sequence \"\\uA73E\" to \"c\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa73f)), "c", "This is function is expected to escape the unicode sequence \"\\uA73F\" to \"c\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff43)), "c", "This is function is expected to escape the unicode sequence \"\\uFF43\" to \"c\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterCRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x249e)), "(c)", "This is function is expected to escape the unicode sequence \"\\u249E\" to \"(c)\"");
});

QUnit.test("DTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xd0)), "D", "This is function is expected to escape the unicode sequence \"\\u00D0\" to \"D\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x10e)), "D", "This is function is expected to escape the unicode sequence \"\\u010E\" to \"D\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x110)), "D", "This is function is expected to escape the unicode sequence \"\\u0110\" to \"D\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x189)), "D", "This is function is expected to escape the unicode sequence \"\\u0189\" to \"D\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x18a)), "D", "This is function is expected to escape the unicode sequence \"\\u018A\" to \"D\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x18b)), "D", "This is function is expected to escape the unicode sequence \"\\u018B\" to \"D\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d05)), "D", "This is function is expected to escape the unicode sequence \"\\u1D05\" to \"D\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d06)), "D", "This is function is expected to escape the unicode sequence \"\\u1D06\" to \"D\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e0a)), "D", "This is function is expected to escape the unicode sequence \"\\u1E0A\" to \"D\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e0c)), "D", "This is function is expected to escape the unicode sequence \"\\u1E0C\" to \"D\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e0e)), "D", "This is function is expected to escape the unicode sequence \"\\u1E0E\" to \"D\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e10)), "D", "This is function is expected to escape the unicode sequence \"\\u1E10\" to \"D\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e12)), "D", "This is function is expected to escape the unicode sequence \"\\u1E12\" to \"D\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24b9)), "D", "This is function is expected to escape the unicode sequence \"\\u24B9\" to \"D\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa779)), "D", "This is function is expected to escape the unicode sequence \"\\uA779\" to \"D\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff24)), "D", "This is function is expected to escape the unicode sequence \"\\uFF24\" to \"D\"");
});

QUnit.test("dTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xf0)), "d", "This is function is expected to escape the unicode sequence \"\\u00F0\" to \"d\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x10f)), "d", "This is function is expected to escape the unicode sequence \"\\u010F\" to \"d\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x111)), "d", "This is function is expected to escape the unicode sequence \"\\u0111\" to \"d\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x18c)), "d", "This is function is expected to escape the unicode sequence \"\\u018C\" to \"d\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x221)), "d", "This is function is expected to escape the unicode sequence \"\\u0221\" to \"d\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x256)), "d", "This is function is expected to escape the unicode sequence \"\\u0256\" to \"d\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x257)), "d", "This is function is expected to escape the unicode sequence \"\\u0257\" to \"d\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d6d)), "d", "This is function is expected to escape the unicode sequence \"\\u1D6D\" to \"d\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d81)), "d", "This is function is expected to escape the unicode sequence \"\\u1D81\" to \"d\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d91)), "d", "This is function is expected to escape the unicode sequence \"\\u1D91\" to \"d\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e0b)), "d", "This is function is expected to escape the unicode sequence \"\\u1E0B\" to \"d\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e0d)), "d", "This is function is expected to escape the unicode sequence \"\\u1E0D\" to \"d\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e0f)), "d", "This is function is expected to escape the unicode sequence \"\\u1E0F\" to \"d\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e11)), "d", "This is function is expected to escape the unicode sequence \"\\u1E11\" to \"d\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e13)), "d", "This is function is expected to escape the unicode sequence \"\\u1E13\" to \"d\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24d3)), "d", "This is function is expected to escape the unicode sequence \"\\u24D3\" to \"d\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa77a)), "d", "This is function is expected to escape the unicode sequence \"\\uA77A\" to \"d\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff44)), "d", "This is function is expected to escape the unicode sequence \"\\uFF44\" to \"d\"");
});

QUnit.test("DZTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1c4)), "DZ", "This is function is expected to escape the unicode sequence \"\\u01C4\" to \"DZ\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1f1)), "DZ", "This is function is expected to escape the unicode sequence \"\\u01F1\" to \"DZ\"");
});

QUnit.test("DzTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1c5)), "Dz", "This is function is expected to escape the unicode sequence \"\\u01C5\" to \"Dz\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1f2)), "Dz", "This is function is expected to escape the unicode sequence \"\\u01F2\" to \"Dz\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterDRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x249f)), "(d)", "This is function is expected to escape the unicode sequence \"\\u249F\" to \"(d)\"");
});

QUnit.test("dbTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x238)), "db", "This is function is expected to escape the unicode sequence \"\\u0238\" to \"db\"");
});

QUnit.test("dzTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1c6)), "dz", "This is function is expected to escape the unicode sequence \"\\u01C6\" to \"dz\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1f3)), "dz", "This is function is expected to escape the unicode sequence \"\\u01F3\" to \"dz\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2a3)), "dz", "This is function is expected to escape the unicode sequence \"\\u02A3\" to \"dz\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2a5)), "dz", "This is function is expected to escape the unicode sequence \"\\u02A5\" to \"dz\"");
});

QUnit.test("ETest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xc8)), "E", "This is function is expected to escape the unicode sequence \"\\u00C8\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xc9)), "E", "This is function is expected to escape the unicode sequence \"\\u00C9\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xca)), "E", "This is function is expected to escape the unicode sequence \"\\u00CA\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xcb)), "E", "This is function is expected to escape the unicode sequence \"\\u00CB\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x112)), "E", "This is function is expected to escape the unicode sequence \"\\u0112\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x114)), "E", "This is function is expected to escape the unicode sequence \"\\u0114\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x116)), "E", "This is function is expected to escape the unicode sequence \"\\u0116\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x118)), "E", "This is function is expected to escape the unicode sequence \"\\u0118\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x11a)), "E", "This is function is expected to escape the unicode sequence \"\\u011A\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x18e)), "E", "This is function is expected to escape the unicode sequence \"\\u018E\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x190)), "E", "This is function is expected to escape the unicode sequence \"\\u0190\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x204)), "E", "This is function is expected to escape the unicode sequence \"\\u0204\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x206)), "E", "This is function is expected to escape the unicode sequence \"\\u0206\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x228)), "E", "This is function is expected to escape the unicode sequence \"\\u0228\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x246)), "E", "This is function is expected to escape the unicode sequence \"\\u0246\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d07)), "E", "This is function is expected to escape the unicode sequence \"\\u1D07\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e14)), "E", "This is function is expected to escape the unicode sequence \"\\u1E14\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e16)), "E", "This is function is expected to escape the unicode sequence \"\\u1E16\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e18)), "E", "This is function is expected to escape the unicode sequence \"\\u1E18\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e1a)), "E", "This is function is expected to escape the unicode sequence \"\\u1E1A\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e1c)), "E", "This is function is expected to escape the unicode sequence \"\\u1E1C\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eb8)), "E", "This is function is expected to escape the unicode sequence \"\\u1EB8\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eba)), "E", "This is function is expected to escape the unicode sequence \"\\u1EBA\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ebc)), "E", "This is function is expected to escape the unicode sequence \"\\u1EBC\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ebe)), "E", "This is function is expected to escape the unicode sequence \"\\u1EBE\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ec0)), "E", "This is function is expected to escape the unicode sequence \"\\u1EC0\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ec2)), "E", "This is function is expected to escape the unicode sequence \"\\u1EC2\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ec4)), "E", "This is function is expected to escape the unicode sequence \"\\u1EC4\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ec6)), "E", "This is function is expected to escape the unicode sequence \"\\u1EC6\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24ba)), "E", "This is function is expected to escape the unicode sequence \"\\u24BA\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c7b)), "E", "This is function is expected to escape the unicode sequence \"\\u2C7B\" to \"E\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff25)), "E", "This is function is expected to escape the unicode sequence \"\\uFF25\" to \"E\"");
});

QUnit.test("eTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xe8)), "e", "This is function is expected to escape the unicode sequence \"\\u00E8\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xe9)), "e", "This is function is expected to escape the unicode sequence \"\\u00E9\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xea)), "e", "This is function is expected to escape the unicode sequence \"\\u00EA\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xeb)), "e", "This is function is expected to escape the unicode sequence \"\\u00EB\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x113)), "e", "This is function is expected to escape the unicode sequence \"\\u0113\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x115)), "e", "This is function is expected to escape the unicode sequence \"\\u0115\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x117)), "e", "This is function is expected to escape the unicode sequence \"\\u0117\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x119)), "e", "This is function is expected to escape the unicode sequence \"\\u0119\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x11b)), "e", "This is function is expected to escape the unicode sequence \"\\u011B\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1dd)), "e", "This is function is expected to escape the unicode sequence \"\\u01DD\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x205)), "e", "This is function is expected to escape the unicode sequence \"\\u0205\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x207)), "e", "This is function is expected to escape the unicode sequence \"\\u0207\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x229)), "e", "This is function is expected to escape the unicode sequence \"\\u0229\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x247)), "e", "This is function is expected to escape the unicode sequence \"\\u0247\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x258)), "e", "This is function is expected to escape the unicode sequence \"\\u0258\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x25b)), "e", "This is function is expected to escape the unicode sequence \"\\u025B\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x25c)), "e", "This is function is expected to escape the unicode sequence \"\\u025C\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x25d)), "e", "This is function is expected to escape the unicode sequence \"\\u025D\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x25e)), "e", "This is function is expected to escape the unicode sequence \"\\u025E\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x29a)), "e", "This is function is expected to escape the unicode sequence \"\\u029A\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d08)), "e", "This is function is expected to escape the unicode sequence \"\\u1D08\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d92)), "e", "This is function is expected to escape the unicode sequence \"\\u1D92\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d93)), "e", "This is function is expected to escape the unicode sequence \"\\u1D93\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d94)), "e", "This is function is expected to escape the unicode sequence \"\\u1D94\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e15)), "e", "This is function is expected to escape the unicode sequence \"\\u1E15\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e17)), "e", "This is function is expected to escape the unicode sequence \"\\u1E17\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e19)), "e", "This is function is expected to escape the unicode sequence \"\\u1E19\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e1b)), "e", "This is function is expected to escape the unicode sequence \"\\u1E1B\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e1d)), "e", "This is function is expected to escape the unicode sequence \"\\u1E1D\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eb9)), "e", "This is function is expected to escape the unicode sequence \"\\u1EB9\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ebb)), "e", "This is function is expected to escape the unicode sequence \"\\u1EBB\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ebd)), "e", "This is function is expected to escape the unicode sequence \"\\u1EBD\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ebf)), "e", "This is function is expected to escape the unicode sequence \"\\u1EBF\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ec1)), "e", "This is function is expected to escape the unicode sequence \"\\u1EC1\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ec3)), "e", "This is function is expected to escape the unicode sequence \"\\u1EC3\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ec5)), "e", "This is function is expected to escape the unicode sequence \"\\u1EC5\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ec7)), "e", "This is function is expected to escape the unicode sequence \"\\u1EC7\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2091)), "e", "This is function is expected to escape the unicode sequence \"\\u2091\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24d4)), "e", "This is function is expected to escape the unicode sequence \"\\u24D4\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c78)), "e", "This is function is expected to escape the unicode sequence \"\\u2C78\" to \"e\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff45)), "e", "This is function is expected to escape the unicode sequence \"\\uFF45\" to \"e\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterERightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24a0)), "(e)", "This is function is expected to escape the unicode sequence \"\\u24A0\" to \"(e)\"");
});

QUnit.test("FTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x191)), "F", "This is function is expected to escape the unicode sequence \"\\u0191\" to \"F\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e1e)), "F", "This is function is expected to escape the unicode sequence \"\\u1E1E\" to \"F\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24bb)), "F", "This is function is expected to escape the unicode sequence \"\\u24BB\" to \"F\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa730)), "F", "This is function is expected to escape the unicode sequence \"\\uA730\" to \"F\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa77b)), "F", "This is function is expected to escape the unicode sequence \"\\uA77B\" to \"F\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa7fb)), "F", "This is function is expected to escape the unicode sequence \"\\uA7FB\" to \"F\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff26)), "F", "This is function is expected to escape the unicode sequence \"\\uFF26\" to \"F\"");
});

QUnit.test("fTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x192)), "f", "This is function is expected to escape the unicode sequence \"\\u0192\" to \"f\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d6e)), "f", "This is function is expected to escape the unicode sequence \"\\u1D6E\" to \"f\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d82)), "f", "This is function is expected to escape the unicode sequence \"\\u1D82\" to \"f\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e1f)), "f", "This is function is expected to escape the unicode sequence \"\\u1E1F\" to \"f\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e9b)), "f", "This is function is expected to escape the unicode sequence \"\\u1E9B\" to \"f\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24d5)), "f", "This is function is expected to escape the unicode sequence \"\\u24D5\" to \"f\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa77c)), "f", "This is function is expected to escape the unicode sequence \"\\uA77C\" to \"f\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff46)), "f", "This is function is expected to escape the unicode sequence \"\\uFF46\" to \"f\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterFRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24a1)), "(f)", "This is function is expected to escape the unicode sequence \"\\u24A1\" to \"(f)\"");
});

QUnit.test("ffTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xfb00)), "ff", "This is function is expected to escape the unicode sequence \"\\uFB00\" to \"ff\"");
});

QUnit.test("ffiTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xfb03)), "ffi", "This is function is expected to escape the unicode sequence \"\\uFB03\" to \"ffi\"");
});

QUnit.test("fflTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xfb04)), "ffl", "This is function is expected to escape the unicode sequence \"\\uFB04\" to \"ffl\"");
});

QUnit.test("fiTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xfb01)), "fi", "This is function is expected to escape the unicode sequence \"\\uFB01\" to \"fi\"");
});

QUnit.test("flTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xfb02)), "fl", "This is function is expected to escape the unicode sequence \"\\uFB02\" to \"fl\"");
});

QUnit.test("GTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x11c)), "G", "This is function is expected to escape the unicode sequence \"\\u011C\" to \"G\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x11e)), "G", "This is function is expected to escape the unicode sequence \"\\u011E\" to \"G\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x120)), "G", "This is function is expected to escape the unicode sequence \"\\u0120\" to \"G\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x122)), "G", "This is function is expected to escape the unicode sequence \"\\u0122\" to \"G\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x193)), "G", "This is function is expected to escape the unicode sequence \"\\u0193\" to \"G\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e4)), "G", "This is function is expected to escape the unicode sequence \"\\u01E4\" to \"G\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e5)), "G", "This is function is expected to escape the unicode sequence \"\\u01E5\" to \"G\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e6)), "G", "This is function is expected to escape the unicode sequence \"\\u01E6\" to \"G\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e7)), "G", "This is function is expected to escape the unicode sequence \"\\u01E7\" to \"G\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1f4)), "G", "This is function is expected to escape the unicode sequence \"\\u01F4\" to \"G\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x262)), "G", "This is function is expected to escape the unicode sequence \"\\u0262\" to \"G\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x29b)), "G", "This is function is expected to escape the unicode sequence \"\\u029B\" to \"G\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e20)), "G", "This is function is expected to escape the unicode sequence \"\\u1E20\" to \"G\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24bc)), "G", "This is function is expected to escape the unicode sequence \"\\u24BC\" to \"G\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa77d)), "G", "This is function is expected to escape the unicode sequence \"\\uA77D\" to \"G\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa77e)), "G", "This is function is expected to escape the unicode sequence \"\\uA77E\" to \"G\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff27)), "G", "This is function is expected to escape the unicode sequence \"\\uFF27\" to \"G\"");
});

QUnit.test("gTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x11d)), "g", "This is function is expected to escape the unicode sequence \"\\u011D\" to \"g\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x11f)), "g", "This is function is expected to escape the unicode sequence \"\\u011F\" to \"g\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x121)), "g", "This is function is expected to escape the unicode sequence \"\\u0121\" to \"g\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x123)), "g", "This is function is expected to escape the unicode sequence \"\\u0123\" to \"g\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1f5)), "g", "This is function is expected to escape the unicode sequence \"\\u01F5\" to \"g\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x260)), "g", "This is function is expected to escape the unicode sequence \"\\u0260\" to \"g\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x261)), "g", "This is function is expected to escape the unicode sequence \"\\u0261\" to \"g\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d77)), "g", "This is function is expected to escape the unicode sequence \"\\u1D77\" to \"g\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d79)), "g", "This is function is expected to escape the unicode sequence \"\\u1D79\" to \"g\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d83)), "g", "This is function is expected to escape the unicode sequence \"\\u1D83\" to \"g\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e21)), "g", "This is function is expected to escape the unicode sequence \"\\u1E21\" to \"g\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24d6)), "g", "This is function is expected to escape the unicode sequence \"\\u24D6\" to \"g\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa77f)), "g", "This is function is expected to escape the unicode sequence \"\\uA77F\" to \"g\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff47)), "g", "This is function is expected to escape the unicode sequence \"\\uFF47\" to \"g\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterGRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24a2)), "(g)", "This is function is expected to escape the unicode sequence \"\\u24A2\" to \"(g)\"");
});

QUnit.test("HTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x124)), "H", "This is function is expected to escape the unicode sequence \"\\u0124\" to \"H\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x126)), "H", "This is function is expected to escape the unicode sequence \"\\u0126\" to \"H\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x21e)), "H", "This is function is expected to escape the unicode sequence \"\\u021E\" to \"H\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x29c)), "H", "This is function is expected to escape the unicode sequence \"\\u029C\" to \"H\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e22)), "H", "This is function is expected to escape the unicode sequence \"\\u1E22\" to \"H\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e24)), "H", "This is function is expected to escape the unicode sequence \"\\u1E24\" to \"H\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e26)), "H", "This is function is expected to escape the unicode sequence \"\\u1E26\" to \"H\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e28)), "H", "This is function is expected to escape the unicode sequence \"\\u1E28\" to \"H\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e2a)), "H", "This is function is expected to escape the unicode sequence \"\\u1E2A\" to \"H\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24bd)), "H", "This is function is expected to escape the unicode sequence \"\\u24BD\" to \"H\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c67)), "H", "This is function is expected to escape the unicode sequence \"\\u2C67\" to \"H\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c75)), "H", "This is function is expected to escape the unicode sequence \"\\u2C75\" to \"H\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff28)), "H", "This is function is expected to escape the unicode sequence \"\\uFF28\" to \"H\"");
});

QUnit.test("hTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x125)), "h", "This is function is expected to escape the unicode sequence \"\\u0125\" to \"h\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x127)), "h", "This is function is expected to escape the unicode sequence \"\\u0127\" to \"h\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x21f)), "h", "This is function is expected to escape the unicode sequence \"\\u021F\" to \"h\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x265)), "h", "This is function is expected to escape the unicode sequence \"\\u0265\" to \"h\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x266)), "h", "This is function is expected to escape the unicode sequence \"\\u0266\" to \"h\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2ae)), "h", "This is function is expected to escape the unicode sequence \"\\u02AE\" to \"h\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2af)), "h", "This is function is expected to escape the unicode sequence \"\\u02AF\" to \"h\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e23)), "h", "This is function is expected to escape the unicode sequence \"\\u1E23\" to \"h\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e25)), "h", "This is function is expected to escape the unicode sequence \"\\u1E25\" to \"h\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e27)), "h", "This is function is expected to escape the unicode sequence \"\\u1E27\" to \"h\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e29)), "h", "This is function is expected to escape the unicode sequence \"\\u1E29\" to \"h\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e2b)), "h", "This is function is expected to escape the unicode sequence \"\\u1E2B\" to \"h\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e96)), "h", "This is function is expected to escape the unicode sequence \"\\u1E96\" to \"h\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24d7)), "h", "This is function is expected to escape the unicode sequence \"\\u24D7\" to \"h\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c68)), "h", "This is function is expected to escape the unicode sequence \"\\u2C68\" to \"h\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c76)), "h", "This is function is expected to escape the unicode sequence \"\\u2C76\" to \"h\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff48)), "h", "This is function is expected to escape the unicode sequence \"\\uFF48\" to \"h\"");
});

QUnit.test("HVTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1f6)), "HV", "This is function is expected to escape the unicode sequence \"\\u01F6\" to \"HV\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterHRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24a3)), "(h)", "This is function is expected to escape the unicode sequence \"\\u24A3\" to \"(h)\"");
});

QUnit.test("hvTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x195)), "hv", "This is function is expected to escape the unicode sequence \"\\u0195\" to \"hv\"");
});

QUnit.test("ITest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xcc)), "I", "This is function is expected to escape the unicode sequence \"\\u00CC\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xcd)), "I", "This is function is expected to escape the unicode sequence \"\\u00CD\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xce)), "I", "This is function is expected to escape the unicode sequence \"\\u00CE\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xcf)), "I", "This is function is expected to escape the unicode sequence \"\\u00CF\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x128)), "I", "This is function is expected to escape the unicode sequence \"\\u0128\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x12a)), "I", "This is function is expected to escape the unicode sequence \"\\u012A\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x12c)), "I", "This is function is expected to escape the unicode sequence \"\\u012C\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x12e)), "I", "This is function is expected to escape the unicode sequence \"\\u012E\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x130)), "I", "This is function is expected to escape the unicode sequence \"\\u0130\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x196)), "I", "This is function is expected to escape the unicode sequence \"\\u0196\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x197)), "I", "This is function is expected to escape the unicode sequence \"\\u0197\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1cf)), "I", "This is function is expected to escape the unicode sequence \"\\u01CF\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x208)), "I", "This is function is expected to escape the unicode sequence \"\\u0208\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x20a)), "I", "This is function is expected to escape the unicode sequence \"\\u020A\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x26a)), "I", "This is function is expected to escape the unicode sequence \"\\u026A\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d7b)), "I", "This is function is expected to escape the unicode sequence \"\\u1D7B\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e2c)), "I", "This is function is expected to escape the unicode sequence \"\\u1E2C\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e2e)), "I", "This is function is expected to escape the unicode sequence \"\\u1E2E\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ec8)), "I", "This is function is expected to escape the unicode sequence \"\\u1EC8\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eca)), "I", "This is function is expected to escape the unicode sequence \"\\u1ECA\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24be)), "I", "This is function is expected to escape the unicode sequence \"\\u24BE\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa7fe)), "I", "This is function is expected to escape the unicode sequence \"\\uA7FE\" to \"I\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff29)), "I", "This is function is expected to escape the unicode sequence \"\\uFF29\" to \"I\"");
});

QUnit.test("iTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xec)), "i", "This is function is expected to escape the unicode sequence \"\\u00EC\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xed)), "i", "This is function is expected to escape the unicode sequence \"\\u00ED\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xee)), "i", "This is function is expected to escape the unicode sequence \"\\u00EE\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xef)), "i", "This is function is expected to escape the unicode sequence \"\\u00EF\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x129)), "i", "This is function is expected to escape the unicode sequence \"\\u0129\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x12b)), "i", "This is function is expected to escape the unicode sequence \"\\u012B\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x12d)), "i", "This is function is expected to escape the unicode sequence \"\\u012D\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x12f)), "i", "This is function is expected to escape the unicode sequence \"\\u012F\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x131)), "i", "This is function is expected to escape the unicode sequence \"\\u0131\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d0)), "i", "This is function is expected to escape the unicode sequence \"\\u01D0\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x209)), "i", "This is function is expected to escape the unicode sequence \"\\u0209\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x20b)), "i", "This is function is expected to escape the unicode sequence \"\\u020B\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x268)), "i", "This is function is expected to escape the unicode sequence \"\\u0268\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d09)), "i", "This is function is expected to escape the unicode sequence \"\\u1D09\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d62)), "i", "This is function is expected to escape the unicode sequence \"\\u1D62\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d7c)), "i", "This is function is expected to escape the unicode sequence \"\\u1D7C\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d96)), "i", "This is function is expected to escape the unicode sequence \"\\u1D96\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e2d)), "i", "This is function is expected to escape the unicode sequence \"\\u1E2D\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e2f)), "i", "This is function is expected to escape the unicode sequence \"\\u1E2F\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ec9)), "i", "This is function is expected to escape the unicode sequence \"\\u1EC9\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ecb)), "i", "This is function is expected to escape the unicode sequence \"\\u1ECB\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2071)), "i", "This is function is expected to escape the unicode sequence \"\\u2071\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24d8)), "i", "This is function is expected to escape the unicode sequence \"\\u24D8\" to \"i\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff49)), "i", "This is function is expected to escape the unicode sequence \"\\uFF49\" to \"i\"");
});

QUnit.test("IJTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x132)), "IJ", "This is function is expected to escape the unicode sequence \"\\u0132\" to \"IJ\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterIRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24a4)), "(i)", "This is function is expected to escape the unicode sequence \"\\u24A4\" to \"(i)\"");
});

QUnit.test("ijTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x133)), "ij", "This is function is expected to escape the unicode sequence \"\\u0133\" to \"ij\"");
});

QUnit.test("JTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x134)), "J", "This is function is expected to escape the unicode sequence \"\\u0134\" to \"J\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x248)), "J", "This is function is expected to escape the unicode sequence \"\\u0248\" to \"J\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d0a)), "J", "This is function is expected to escape the unicode sequence \"\\u1D0A\" to \"J\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24bf)), "J", "This is function is expected to escape the unicode sequence \"\\u24BF\" to \"J\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff2a)), "J", "This is function is expected to escape the unicode sequence \"\\uFF2A\" to \"J\"");
});

QUnit.test("jTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x135)), "j", "This is function is expected to escape the unicode sequence \"\\u0135\" to \"j\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1f0)), "j", "This is function is expected to escape the unicode sequence \"\\u01F0\" to \"j\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x237)), "j", "This is function is expected to escape the unicode sequence \"\\u0237\" to \"j\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x249)), "j", "This is function is expected to escape the unicode sequence \"\\u0249\" to \"j\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x25f)), "j", "This is function is expected to escape the unicode sequence \"\\u025F\" to \"j\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x284)), "j", "This is function is expected to escape the unicode sequence \"\\u0284\" to \"j\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x29d)), "j", "This is function is expected to escape the unicode sequence \"\\u029D\" to \"j\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24d9)), "j", "This is function is expected to escape the unicode sequence \"\\u24D9\" to \"j\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c7c)), "j", "This is function is expected to escape the unicode sequence \"\\u2C7C\" to \"j\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff4a)), "j", "This is function is expected to escape the unicode sequence \"\\uFF4A\" to \"j\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterJRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24a5)), "(j)", "This is function is expected to escape the unicode sequence \"\\u24A5\" to \"(j)\"");
});

QUnit.test("KTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x136)), "K", "This is function is expected to escape the unicode sequence \"\\u0136\" to \"K\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x198)), "K", "This is function is expected to escape the unicode sequence \"\\u0198\" to \"K\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e8)), "K", "This is function is expected to escape the unicode sequence \"\\u01E8\" to \"K\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d0b)), "K", "This is function is expected to escape the unicode sequence \"\\u1D0B\" to \"K\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e30)), "K", "This is function is expected to escape the unicode sequence \"\\u1E30\" to \"K\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e32)), "K", "This is function is expected to escape the unicode sequence \"\\u1E32\" to \"K\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e34)), "K", "This is function is expected to escape the unicode sequence \"\\u1E34\" to \"K\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24c0)), "K", "This is function is expected to escape the unicode sequence \"\\u24C0\" to \"K\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c69)), "K", "This is function is expected to escape the unicode sequence \"\\u2C69\" to \"K\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa740)), "K", "This is function is expected to escape the unicode sequence \"\\uA740\" to \"K\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa742)), "K", "This is function is expected to escape the unicode sequence \"\\uA742\" to \"K\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa744)), "K", "This is function is expected to escape the unicode sequence \"\\uA744\" to \"K\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff2b)), "K", "This is function is expected to escape the unicode sequence \"\\uFF2B\" to \"K\"");
});

QUnit.test("kTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x137)), "k", "This is function is expected to escape the unicode sequence \"\\u0137\" to \"k\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x199)), "k", "This is function is expected to escape the unicode sequence \"\\u0199\" to \"k\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e9)), "k", "This is function is expected to escape the unicode sequence \"\\u01E9\" to \"k\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x29e)), "k", "This is function is expected to escape the unicode sequence \"\\u029E\" to \"k\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d84)), "k", "This is function is expected to escape the unicode sequence \"\\u1D84\" to \"k\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e31)), "k", "This is function is expected to escape the unicode sequence \"\\u1E31\" to \"k\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e33)), "k", "This is function is expected to escape the unicode sequence \"\\u1E33\" to \"k\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e35)), "k", "This is function is expected to escape the unicode sequence \"\\u1E35\" to \"k\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24da)), "k", "This is function is expected to escape the unicode sequence \"\\u24DA\" to \"k\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c6a)), "k", "This is function is expected to escape the unicode sequence \"\\u2C6A\" to \"k\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa741)), "k", "This is function is expected to escape the unicode sequence \"\\uA741\" to \"k\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa743)), "k", "This is function is expected to escape the unicode sequence \"\\uA743\" to \"k\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa745)), "k", "This is function is expected to escape the unicode sequence \"\\uA745\" to \"k\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff4b)), "k", "This is function is expected to escape the unicode sequence \"\\uFF4B\" to \"k\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterKRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24a6)), "(k)", "This is function is expected to escape the unicode sequence \"\\u24A6\" to \"(k)\"");
});

QUnit.test("LTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x139)), "L", "This is function is expected to escape the unicode sequence \"\\u0139\" to \"L\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x13b)), "L", "This is function is expected to escape the unicode sequence \"\\u013B\" to \"L\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x13d)), "L", "This is function is expected to escape the unicode sequence \"\\u013D\" to \"L\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x13f)), "L", "This is function is expected to escape the unicode sequence \"\\u013F\" to \"L\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x141)), "L", "This is function is expected to escape the unicode sequence \"\\u0141\" to \"L\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x23d)), "L", "This is function is expected to escape the unicode sequence \"\\u023D\" to \"L\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x29f)), "L", "This is function is expected to escape the unicode sequence \"\\u029F\" to \"L\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d0c)), "L", "This is function is expected to escape the unicode sequence \"\\u1D0C\" to \"L\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e36)), "L", "This is function is expected to escape the unicode sequence \"\\u1E36\" to \"L\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e38)), "L", "This is function is expected to escape the unicode sequence \"\\u1E38\" to \"L\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e3a)), "L", "This is function is expected to escape the unicode sequence \"\\u1E3A\" to \"L\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e3c)), "L", "This is function is expected to escape the unicode sequence \"\\u1E3C\" to \"L\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24c1)), "L", "This is function is expected to escape the unicode sequence \"\\u24C1\" to \"L\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c60)), "L", "This is function is expected to escape the unicode sequence \"\\u2C60\" to \"L\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c62)), "L", "This is function is expected to escape the unicode sequence \"\\u2C62\" to \"L\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa746)), "L", "This is function is expected to escape the unicode sequence \"\\uA746\" to \"L\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa748)), "L", "This is function is expected to escape the unicode sequence \"\\uA748\" to \"L\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa780)), "L", "This is function is expected to escape the unicode sequence \"\\uA780\" to \"L\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff2c)), "L", "This is function is expected to escape the unicode sequence \"\\uFF2C\" to \"L\"");
});

QUnit.test("lTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x13a)), "l", "This is function is expected to escape the unicode sequence \"\\u013A\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x13c)), "l", "This is function is expected to escape the unicode sequence \"\\u013C\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x13e)), "l", "This is function is expected to escape the unicode sequence \"\\u013E\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x140)), "l", "This is function is expected to escape the unicode sequence \"\\u0140\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x142)), "l", "This is function is expected to escape the unicode sequence \"\\u0142\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x19a)), "l", "This is function is expected to escape the unicode sequence \"\\u019A\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x234)), "l", "This is function is expected to escape the unicode sequence \"\\u0234\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x26b)), "l", "This is function is expected to escape the unicode sequence \"\\u026B\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x26c)), "l", "This is function is expected to escape the unicode sequence \"\\u026C\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x26d)), "l", "This is function is expected to escape the unicode sequence \"\\u026D\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d85)), "l", "This is function is expected to escape the unicode sequence \"\\u1D85\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e37)), "l", "This is function is expected to escape the unicode sequence \"\\u1E37\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e39)), "l", "This is function is expected to escape the unicode sequence \"\\u1E39\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e3b)), "l", "This is function is expected to escape the unicode sequence \"\\u1E3B\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e3d)), "l", "This is function is expected to escape the unicode sequence \"\\u1E3D\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24db)), "l", "This is function is expected to escape the unicode sequence \"\\u24DB\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c61)), "l", "This is function is expected to escape the unicode sequence \"\\u2C61\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa747)), "l", "This is function is expected to escape the unicode sequence \"\\uA747\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa749)), "l", "This is function is expected to escape the unicode sequence \"\\uA749\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa781)), "l", "This is function is expected to escape the unicode sequence \"\\uA781\" to \"l\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff4c)), "l", "This is function is expected to escape the unicode sequence \"\\uFF4C\" to \"l\"");
});

QUnit.test("LJTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1c7)), "LJ", "This is function is expected to escape the unicode sequence \"\\u01C7\" to \"LJ\"");
});

QUnit.test("LLTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1efa)), "LL", "This is function is expected to escape the unicode sequence \"\\u1EFA\" to \"LL\"");
});

QUnit.test("LjTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1c8)), "Lj", "This is function is expected to escape the unicode sequence \"\\u01C8\" to \"Lj\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterLRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24a7)), "(l)", "This is function is expected to escape the unicode sequence \"\\u24A7\" to \"(l)\"");
});

QUnit.test("ljTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1c9)), "lj", "This is function is expected to escape the unicode sequence \"\\u01C9\" to \"lj\"");
});

QUnit.test("llTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1efb)), "ll", "This is function is expected to escape the unicode sequence \"\\u1EFB\" to \"ll\"");
});

QUnit.test("lsTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2aa)), "ls", "This is function is expected to escape the unicode sequence \"\\u02AA\" to \"ls\"");
});

QUnit.test("lzTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2ab)), "lz", "This is function is expected to escape the unicode sequence \"\\u02AB\" to \"lz\"");
});

QUnit.test("MTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x19c)), "M", "This is function is expected to escape the unicode sequence \"\\u019C\" to \"M\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d0d)), "M", "This is function is expected to escape the unicode sequence \"\\u1D0D\" to \"M\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e3e)), "M", "This is function is expected to escape the unicode sequence \"\\u1E3E\" to \"M\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e40)), "M", "This is function is expected to escape the unicode sequence \"\\u1E40\" to \"M\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e42)), "M", "This is function is expected to escape the unicode sequence \"\\u1E42\" to \"M\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24c2)), "M", "This is function is expected to escape the unicode sequence \"\\u24C2\" to \"M\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c6e)), "M", "This is function is expected to escape the unicode sequence \"\\u2C6E\" to \"M\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa7fd)), "M", "This is function is expected to escape the unicode sequence \"\\uA7FD\" to \"M\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa7ff)), "M", "This is function is expected to escape the unicode sequence \"\\uA7FF\" to \"M\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff2d)), "M", "This is function is expected to escape the unicode sequence \"\\uFF2D\" to \"M\"");
});

QUnit.test("mTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x26f)), "m", "This is function is expected to escape the unicode sequence \"\\u026F\" to \"m\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x270)), "m", "This is function is expected to escape the unicode sequence \"\\u0270\" to \"m\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x271)), "m", "This is function is expected to escape the unicode sequence \"\\u0271\" to \"m\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d6f)), "m", "This is function is expected to escape the unicode sequence \"\\u1D6F\" to \"m\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d86)), "m", "This is function is expected to escape the unicode sequence \"\\u1D86\" to \"m\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e3f)), "m", "This is function is expected to escape the unicode sequence \"\\u1E3F\" to \"m\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e41)), "m", "This is function is expected to escape the unicode sequence \"\\u1E41\" to \"m\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e43)), "m", "This is function is expected to escape the unicode sequence \"\\u1E43\" to \"m\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24dc)), "m", "This is function is expected to escape the unicode sequence \"\\u24DC\" to \"m\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff4d)), "m", "This is function is expected to escape the unicode sequence \"\\uFF4D\" to \"m\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterMRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24a8)), "(m)", "This is function is expected to escape the unicode sequence \"\\u24A8\" to \"(m)\"");
});

QUnit.test("NTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xd1)), "N", "This is function is expected to escape the unicode sequence \"\\u00D1\" to \"N\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x143)), "N", "This is function is expected to escape the unicode sequence \"\\u0143\" to \"N\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x145)), "N", "This is function is expected to escape the unicode sequence \"\\u0145\" to \"N\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x147)), "N", "This is function is expected to escape the unicode sequence \"\\u0147\" to \"N\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x14a)), "N", "This is function is expected to escape the unicode sequence \"\\u014A\" to \"N\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x19d)), "N", "This is function is expected to escape the unicode sequence \"\\u019D\" to \"N\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1f8)), "N", "This is function is expected to escape the unicode sequence \"\\u01F8\" to \"N\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x220)), "N", "This is function is expected to escape the unicode sequence \"\\u0220\" to \"N\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x274)), "N", "This is function is expected to escape the unicode sequence \"\\u0274\" to \"N\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d0e)), "N", "This is function is expected to escape the unicode sequence \"\\u1D0E\" to \"N\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e44)), "N", "This is function is expected to escape the unicode sequence \"\\u1E44\" to \"N\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e46)), "N", "This is function is expected to escape the unicode sequence \"\\u1E46\" to \"N\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e48)), "N", "This is function is expected to escape the unicode sequence \"\\u1E48\" to \"N\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e4a)), "N", "This is function is expected to escape the unicode sequence \"\\u1E4A\" to \"N\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24c3)), "N", "This is function is expected to escape the unicode sequence \"\\u24C3\" to \"N\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff2e)), "N", "This is function is expected to escape the unicode sequence \"\\uFF2E\" to \"N\"");
});

QUnit.test("nTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xf1)), "n", "This is function is expected to escape the unicode sequence \"\\u00F1\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x144)), "n", "This is function is expected to escape the unicode sequence \"\\u0144\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x146)), "n", "This is function is expected to escape the unicode sequence \"\\u0146\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x148)), "n", "This is function is expected to escape the unicode sequence \"\\u0148\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x149)), "n", "This is function is expected to escape the unicode sequence \"\\u0149\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x14b)), "n", "This is function is expected to escape the unicode sequence \"\\u014B\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x19e)), "n", "This is function is expected to escape the unicode sequence \"\\u019E\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1f9)), "n", "This is function is expected to escape the unicode sequence \"\\u01F9\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x235)), "n", "This is function is expected to escape the unicode sequence \"\\u0235\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x272)), "n", "This is function is expected to escape the unicode sequence \"\\u0272\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x273)), "n", "This is function is expected to escape the unicode sequence \"\\u0273\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d70)), "n", "This is function is expected to escape the unicode sequence \"\\u1D70\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d87)), "n", "This is function is expected to escape the unicode sequence \"\\u1D87\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e45)), "n", "This is function is expected to escape the unicode sequence \"\\u1E45\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e47)), "n", "This is function is expected to escape the unicode sequence \"\\u1E47\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e49)), "n", "This is function is expected to escape the unicode sequence \"\\u1E49\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e4b)), "n", "This is function is expected to escape the unicode sequence \"\\u1E4B\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x207f)), "n", "This is function is expected to escape the unicode sequence \"\\u207F\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24dd)), "n", "This is function is expected to escape the unicode sequence \"\\u24DD\" to \"n\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff4e)), "n", "This is function is expected to escape the unicode sequence \"\\uFF4E\" to \"n\"");
});

QUnit.test("NJTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ca)), "NJ", "This is function is expected to escape the unicode sequence \"\\u01CA\" to \"NJ\"");
});

QUnit.test("NjTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1cb)), "Nj", "This is function is expected to escape the unicode sequence \"\\u01CB\" to \"Nj\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterNRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24a9)), "(n)", "This is function is expected to escape the unicode sequence \"\\u24A9\" to \"(n)\"");
});

QUnit.test("njTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1cc)), "nj", "This is function is expected to escape the unicode sequence \"\\u01CC\" to \"nj\"");
});

QUnit.test("OTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xd2)), "O", "This is function is expected to escape the unicode sequence \"\\u00D2\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xd3)), "O", "This is function is expected to escape the unicode sequence \"\\u00D3\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xd4)), "O", "This is function is expected to escape the unicode sequence \"\\u00D4\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xd5)), "O", "This is function is expected to escape the unicode sequence \"\\u00D5\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xd6)), "O", "This is function is expected to escape the unicode sequence \"\\u00D6\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xd8)), "O", "This is function is expected to escape the unicode sequence \"\\u00D8\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x14c)), "O", "This is function is expected to escape the unicode sequence \"\\u014C\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x14e)), "O", "This is function is expected to escape the unicode sequence \"\\u014E\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x150)), "O", "This is function is expected to escape the unicode sequence \"\\u0150\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x186)), "O", "This is function is expected to escape the unicode sequence \"\\u0186\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x19f)), "O", "This is function is expected to escape the unicode sequence \"\\u019F\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1a0)), "O", "This is function is expected to escape the unicode sequence \"\\u01A0\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d1)), "O", "This is function is expected to escape the unicode sequence \"\\u01D1\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ea)), "O", "This is function is expected to escape the unicode sequence \"\\u01EA\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ec)), "O", "This is function is expected to escape the unicode sequence \"\\u01EC\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1fe)), "O", "This is function is expected to escape the unicode sequence \"\\u01FE\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x20c)), "O", "This is function is expected to escape the unicode sequence \"\\u020C\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x20e)), "O", "This is function is expected to escape the unicode sequence \"\\u020E\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x22a)), "O", "This is function is expected to escape the unicode sequence \"\\u022A\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x22c)), "O", "This is function is expected to escape the unicode sequence \"\\u022C\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x22e)), "O", "This is function is expected to escape the unicode sequence \"\\u022E\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x230)), "O", "This is function is expected to escape the unicode sequence \"\\u0230\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d0f)), "O", "This is function is expected to escape the unicode sequence \"\\u1D0F\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d10)), "O", "This is function is expected to escape the unicode sequence \"\\u1D10\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e4c)), "O", "This is function is expected to escape the unicode sequence \"\\u1E4C\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e4e)), "O", "This is function is expected to escape the unicode sequence \"\\u1E4E\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e50)), "O", "This is function is expected to escape the unicode sequence \"\\u1E50\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e52)), "O", "This is function is expected to escape the unicode sequence \"\\u1E52\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ecc)), "O", "This is function is expected to escape the unicode sequence \"\\u1ECC\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ece)), "O", "This is function is expected to escape the unicode sequence \"\\u1ECE\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ed0)), "O", "This is function is expected to escape the unicode sequence \"\\u1ED0\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ed2)), "O", "This is function is expected to escape the unicode sequence \"\\u1ED2\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ed4)), "O", "This is function is expected to escape the unicode sequence \"\\u1ED4\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ed6)), "O", "This is function is expected to escape the unicode sequence \"\\u1ED6\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ed8)), "O", "This is function is expected to escape the unicode sequence \"\\u1ED8\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eda)), "O", "This is function is expected to escape the unicode sequence \"\\u1EDA\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1edc)), "O", "This is function is expected to escape the unicode sequence \"\\u1EDC\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ede)), "O", "This is function is expected to escape the unicode sequence \"\\u1EDE\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ee0)), "O", "This is function is expected to escape the unicode sequence \"\\u1EE0\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ee2)), "O", "This is function is expected to escape the unicode sequence \"\\u1EE2\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24c4)), "O", "This is function is expected to escape the unicode sequence \"\\u24C4\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa74a)), "O", "This is function is expected to escape the unicode sequence \"\\uA74A\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa74c)), "O", "This is function is expected to escape the unicode sequence \"\\uA74C\" to \"O\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff2f)), "O", "This is function is expected to escape the unicode sequence \"\\uFF2F\" to \"O\"");
});

QUnit.test("oTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xf2)), "o", "This is function is expected to escape the unicode sequence \"\\u00F2\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xf3)), "o", "This is function is expected to escape the unicode sequence \"\\u00F3\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xf4)), "o", "This is function is expected to escape the unicode sequence \"\\u00F4\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xf5)), "o", "This is function is expected to escape the unicode sequence \"\\u00F5\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xf6)), "o", "This is function is expected to escape the unicode sequence \"\\u00F6\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xf8)), "o", "This is function is expected to escape the unicode sequence \"\\u00F8\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x14d)), "o", "This is function is expected to escape the unicode sequence \"\\u014D\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x14f)), "o", "This is function is expected to escape the unicode sequence \"\\u014F\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x151)), "o", "This is function is expected to escape the unicode sequence \"\\u0151\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1a1)), "o", "This is function is expected to escape the unicode sequence \"\\u01A1\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d2)), "o", "This is function is expected to escape the unicode sequence \"\\u01D2\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eb)), "o", "This is function is expected to escape the unicode sequence \"\\u01EB\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ed)), "o", "This is function is expected to escape the unicode sequence \"\\u01ED\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ff)), "o", "This is function is expected to escape the unicode sequence \"\\u01FF\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x20d)), "o", "This is function is expected to escape the unicode sequence \"\\u020D\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x20f)), "o", "This is function is expected to escape the unicode sequence \"\\u020F\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x22b)), "o", "This is function is expected to escape the unicode sequence \"\\u022B\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x22d)), "o", "This is function is expected to escape the unicode sequence \"\\u022D\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x22f)), "o", "This is function is expected to escape the unicode sequence \"\\u022F\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x231)), "o", "This is function is expected to escape the unicode sequence \"\\u0231\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x254)), "o", "This is function is expected to escape the unicode sequence \"\\u0254\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x275)), "o", "This is function is expected to escape the unicode sequence \"\\u0275\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d16)), "o", "This is function is expected to escape the unicode sequence \"\\u1D16\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d17)), "o", "This is function is expected to escape the unicode sequence \"\\u1D17\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d97)), "o", "This is function is expected to escape the unicode sequence \"\\u1D97\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e4d)), "o", "This is function is expected to escape the unicode sequence \"\\u1E4D\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e4f)), "o", "This is function is expected to escape the unicode sequence \"\\u1E4F\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e51)), "o", "This is function is expected to escape the unicode sequence \"\\u1E51\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e53)), "o", "This is function is expected to escape the unicode sequence \"\\u1E53\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ecd)), "o", "This is function is expected to escape the unicode sequence \"\\u1ECD\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ecf)), "o", "This is function is expected to escape the unicode sequence \"\\u1ECF\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ed1)), "o", "This is function is expected to escape the unicode sequence \"\\u1ED1\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ed3)), "o", "This is function is expected to escape the unicode sequence \"\\u1ED3\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ed5)), "o", "This is function is expected to escape the unicode sequence \"\\u1ED5\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ed7)), "o", "This is function is expected to escape the unicode sequence \"\\u1ED7\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ed9)), "o", "This is function is expected to escape the unicode sequence \"\\u1ED9\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1edb)), "o", "This is function is expected to escape the unicode sequence \"\\u1EDB\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1edd)), "o", "This is function is expected to escape the unicode sequence \"\\u1EDD\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1edf)), "o", "This is function is expected to escape the unicode sequence \"\\u1EDF\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ee1)), "o", "This is function is expected to escape the unicode sequence \"\\u1EE1\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ee3)), "o", "This is function is expected to escape the unicode sequence \"\\u1EE3\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2092)), "o", "This is function is expected to escape the unicode sequence \"\\u2092\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24de)), "o", "This is function is expected to escape the unicode sequence \"\\u24DE\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c7a)), "o", "This is function is expected to escape the unicode sequence \"\\u2C7A\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa74b)), "o", "This is function is expected to escape the unicode sequence \"\\uA74B\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa74d)), "o", "This is function is expected to escape the unicode sequence \"\\uA74D\" to \"o\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff4f)), "o", "This is function is expected to escape the unicode sequence \"\\uFF4F\" to \"o\"");
});

QUnit.test("OETest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x152)), "OE", "This is function is expected to escape the unicode sequence \"\\u0152\" to \"OE\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x276)), "OE", "This is function is expected to escape the unicode sequence \"\\u0276\" to \"OE\"");
});

QUnit.test("OOTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xa74e)), "OO", "This is function is expected to escape the unicode sequence \"\\uA74E\" to \"OO\"");
});

QUnit.test("OUTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x222)), "OU", "This is function is expected to escape the unicode sequence \"\\u0222\" to \"OU\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d15)), "OU", "This is function is expected to escape the unicode sequence \"\\u1D15\" to \"OU\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterORightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24aa)), "(o)", "This is function is expected to escape the unicode sequence \"\\u24AA\" to \"(o)\"");
});

QUnit.test("oeTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x153)), "oe", "This is function is expected to escape the unicode sequence \"\\u0153\" to \"oe\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d14)), "oe", "This is function is expected to escape the unicode sequence \"\\u1D14\" to \"oe\"");
});

QUnit.test("ooTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xa74f)), "oo", "This is function is expected to escape the unicode sequence \"\\uA74F\" to \"oo\"");
});

QUnit.test("ouTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x223)), "ou", "This is function is expected to escape the unicode sequence \"\\u0223\" to \"ou\"");
});

QUnit.test("PTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1a4)), "P", "This is function is expected to escape the unicode sequence \"\\u01A4\" to \"P\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d18)), "P", "This is function is expected to escape the unicode sequence \"\\u1D18\" to \"P\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e54)), "P", "This is function is expected to escape the unicode sequence \"\\u1E54\" to \"P\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e56)), "P", "This is function is expected to escape the unicode sequence \"\\u1E56\" to \"P\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24c5)), "P", "This is function is expected to escape the unicode sequence \"\\u24C5\" to \"P\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c63)), "P", "This is function is expected to escape the unicode sequence \"\\u2C63\" to \"P\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa750)), "P", "This is function is expected to escape the unicode sequence \"\\uA750\" to \"P\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa752)), "P", "This is function is expected to escape the unicode sequence \"\\uA752\" to \"P\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa754)), "P", "This is function is expected to escape the unicode sequence \"\\uA754\" to \"P\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff30)), "P", "This is function is expected to escape the unicode sequence \"\\uFF30\" to \"P\"");
});

QUnit.test("pTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1a5)), "p", "This is function is expected to escape the unicode sequence \"\\u01A5\" to \"p\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d71)), "p", "This is function is expected to escape the unicode sequence \"\\u1D71\" to \"p\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d7d)), "p", "This is function is expected to escape the unicode sequence \"\\u1D7D\" to \"p\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d88)), "p", "This is function is expected to escape the unicode sequence \"\\u1D88\" to \"p\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e55)), "p", "This is function is expected to escape the unicode sequence \"\\u1E55\" to \"p\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e57)), "p", "This is function is expected to escape the unicode sequence \"\\u1E57\" to \"p\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24df)), "p", "This is function is expected to escape the unicode sequence \"\\u24DF\" to \"p\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa751)), "p", "This is function is expected to escape the unicode sequence \"\\uA751\" to \"p\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa753)), "p", "This is function is expected to escape the unicode sequence \"\\uA753\" to \"p\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa755)), "p", "This is function is expected to escape the unicode sequence \"\\uA755\" to \"p\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa7fc)), "p", "This is function is expected to escape the unicode sequence \"\\uA7FC\" to \"p\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff50)), "p", "This is function is expected to escape the unicode sequence \"\\uFF50\" to \"p\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterPRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24ab)), "(p)", "This is function is expected to escape the unicode sequence \"\\u24AB\" to \"(p)\"");
});

QUnit.test("QTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24a)), "Q", "This is function is expected to escape the unicode sequence \"\\u024A\" to \"Q\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24c6)), "Q", "This is function is expected to escape the unicode sequence \"\\u24C6\" to \"Q\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa756)), "Q", "This is function is expected to escape the unicode sequence \"\\uA756\" to \"Q\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa758)), "Q", "This is function is expected to escape the unicode sequence \"\\uA758\" to \"Q\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff31)), "Q", "This is function is expected to escape the unicode sequence \"\\uFF31\" to \"Q\"");
});

QUnit.test("qTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x138)), "q", "This is function is expected to escape the unicode sequence \"\\u0138\" to \"q\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24b)), "q", "This is function is expected to escape the unicode sequence \"\\u024B\" to \"q\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2a0)), "q", "This is function is expected to escape the unicode sequence \"\\u02A0\" to \"q\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24e0)), "q", "This is function is expected to escape the unicode sequence \"\\u24E0\" to \"q\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa757)), "q", "This is function is expected to escape the unicode sequence \"\\uA757\" to \"q\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa759)), "q", "This is function is expected to escape the unicode sequence \"\\uA759\" to \"q\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff51)), "q", "This is function is expected to escape the unicode sequence \"\\uFF51\" to \"q\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterQRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24ac)), "(q)", "This is function is expected to escape the unicode sequence \"\\u24AC\" to \"(q)\"");
});

QUnit.test("qpTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x239)), "qp", "This is function is expected to escape the unicode sequence \"\\u0239\" to \"qp\"");
});

QUnit.test("RTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x154)), "R", "This is function is expected to escape the unicode sequence \"\\u0154\" to \"R\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x156)), "R", "This is function is expected to escape the unicode sequence \"\\u0156\" to \"R\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x158)), "R", "This is function is expected to escape the unicode sequence \"\\u0158\" to \"R\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x210)), "R", "This is function is expected to escape the unicode sequence \"\\u0210\" to \"R\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x212)), "R", "This is function is expected to escape the unicode sequence \"\\u0212\" to \"R\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24c)), "R", "This is function is expected to escape the unicode sequence \"\\u024C\" to \"R\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x280)), "R", "This is function is expected to escape the unicode sequence \"\\u0280\" to \"R\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x281)), "R", "This is function is expected to escape the unicode sequence \"\\u0281\" to \"R\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d19)), "R", "This is function is expected to escape the unicode sequence \"\\u1D19\" to \"R\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d1a)), "R", "This is function is expected to escape the unicode sequence \"\\u1D1A\" to \"R\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e58)), "R", "This is function is expected to escape the unicode sequence \"\\u1E58\" to \"R\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e5a)), "R", "This is function is expected to escape the unicode sequence \"\\u1E5A\" to \"R\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e5c)), "R", "This is function is expected to escape the unicode sequence \"\\u1E5C\" to \"R\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e5e)), "R", "This is function is expected to escape the unicode sequence \"\\u1E5E\" to \"R\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24c7)), "R", "This is function is expected to escape the unicode sequence \"\\u24C7\" to \"R\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c64)), "R", "This is function is expected to escape the unicode sequence \"\\u2C64\" to \"R\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa75a)), "R", "This is function is expected to escape the unicode sequence \"\\uA75A\" to \"R\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa782)), "R", "This is function is expected to escape the unicode sequence \"\\uA782\" to \"R\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff32)), "R", "This is function is expected to escape the unicode sequence \"\\uFF32\" to \"R\"");
});

QUnit.test("rTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x155)), "r", "This is function is expected to escape the unicode sequence \"\\u0155\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x157)), "r", "This is function is expected to escape the unicode sequence \"\\u0157\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x159)), "r", "This is function is expected to escape the unicode sequence \"\\u0159\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x211)), "r", "This is function is expected to escape the unicode sequence \"\\u0211\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x213)), "r", "This is function is expected to escape the unicode sequence \"\\u0213\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24d)), "r", "This is function is expected to escape the unicode sequence \"\\u024D\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x27c)), "r", "This is function is expected to escape the unicode sequence \"\\u027C\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x27d)), "r", "This is function is expected to escape the unicode sequence \"\\u027D\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x27e)), "r", "This is function is expected to escape the unicode sequence \"\\u027E\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x27f)), "r", "This is function is expected to escape the unicode sequence \"\\u027F\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d63)), "r", "This is function is expected to escape the unicode sequence \"\\u1D63\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d72)), "r", "This is function is expected to escape the unicode sequence \"\\u1D72\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d73)), "r", "This is function is expected to escape the unicode sequence \"\\u1D73\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d89)), "r", "This is function is expected to escape the unicode sequence \"\\u1D89\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e59)), "r", "This is function is expected to escape the unicode sequence \"\\u1E59\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e5b)), "r", "This is function is expected to escape the unicode sequence \"\\u1E5B\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e5d)), "r", "This is function is expected to escape the unicode sequence \"\\u1E5D\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e5f)), "r", "This is function is expected to escape the unicode sequence \"\\u1E5F\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24e1)), "r", "This is function is expected to escape the unicode sequence \"\\u24E1\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa75b)), "r", "This is function is expected to escape the unicode sequence \"\\uA75B\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa783)), "r", "This is function is expected to escape the unicode sequence \"\\uA783\" to \"r\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff52)), "r", "This is function is expected to escape the unicode sequence \"\\uFF52\" to \"r\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterRRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24ad)), "(r)", "This is function is expected to escape the unicode sequence \"\\u24AD\" to \"(r)\"");
});

QUnit.test("STest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x15a)), "S", "This is function is expected to escape the unicode sequence \"\\u015A\" to \"S\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x15c)), "S", "This is function is expected to escape the unicode sequence \"\\u015C\" to \"S\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x15e)), "S", "This is function is expected to escape the unicode sequence \"\\u015E\" to \"S\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x160)), "S", "This is function is expected to escape the unicode sequence \"\\u0160\" to \"S\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x218)), "S", "This is function is expected to escape the unicode sequence \"\\u0218\" to \"S\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e60)), "S", "This is function is expected to escape the unicode sequence \"\\u1E60\" to \"S\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e62)), "S", "This is function is expected to escape the unicode sequence \"\\u1E62\" to \"S\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e64)), "S", "This is function is expected to escape the unicode sequence \"\\u1E64\" to \"S\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e66)), "S", "This is function is expected to escape the unicode sequence \"\\u1E66\" to \"S\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e68)), "S", "This is function is expected to escape the unicode sequence \"\\u1E68\" to \"S\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24c8)), "S", "This is function is expected to escape the unicode sequence \"\\u24C8\" to \"S\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa731)), "S", "This is function is expected to escape the unicode sequence \"\\uA731\" to \"S\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa785)), "S", "This is function is expected to escape the unicode sequence \"\\uA785\" to \"S\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff33)), "S", "This is function is expected to escape the unicode sequence \"\\uFF33\" to \"S\"");
});

QUnit.test("sTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x15b)), "s", "This is function is expected to escape the unicode sequence \"\\u015B\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x15d)), "s", "This is function is expected to escape the unicode sequence \"\\u015D\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x15f)), "s", "This is function is expected to escape the unicode sequence \"\\u015F\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x161)), "s", "This is function is expected to escape the unicode sequence \"\\u0161\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x17f)), "s", "This is function is expected to escape the unicode sequence \"\\u017F\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x219)), "s", "This is function is expected to escape the unicode sequence \"\\u0219\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x23f)), "s", "This is function is expected to escape the unicode sequence \"\\u023F\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x282)), "s", "This is function is expected to escape the unicode sequence \"\\u0282\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d74)), "s", "This is function is expected to escape the unicode sequence \"\\u1D74\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d8a)), "s", "This is function is expected to escape the unicode sequence \"\\u1D8A\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e61)), "s", "This is function is expected to escape the unicode sequence \"\\u1E61\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e63)), "s", "This is function is expected to escape the unicode sequence \"\\u1E63\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e65)), "s", "This is function is expected to escape the unicode sequence \"\\u1E65\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e67)), "s", "This is function is expected to escape the unicode sequence \"\\u1E67\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e69)), "s", "This is function is expected to escape the unicode sequence \"\\u1E69\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e9c)), "s", "This is function is expected to escape the unicode sequence \"\\u1E9C\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e9d)), "s", "This is function is expected to escape the unicode sequence \"\\u1E9D\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24e2)), "s", "This is function is expected to escape the unicode sequence \"\\u24E2\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa784)), "s", "This is function is expected to escape the unicode sequence \"\\uA784\" to \"s\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff53)), "s", "This is function is expected to escape the unicode sequence \"\\uFF53\" to \"s\"");
});

QUnit.test("SSTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e9e)), "SS", "This is function is expected to escape the unicode sequence \"\\u1E9E\" to \"SS\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterSRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24ae)), "(s)", "This is function is expected to escape the unicode sequence \"\\u24AE\" to \"(s)\"");
});

QUnit.test("ssTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xdf)), "ss", "This is function is expected to escape the unicode sequence \"\\u00DF\" to \"ss\"");
});

QUnit.test("stTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xfb06)), "st", "This is function is expected to escape the unicode sequence \"\\uFB06\" to \"st\"");
});

QUnit.test("TTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x162)), "T", "This is function is expected to escape the unicode sequence \"\\u0162\" to \"T\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x164)), "T", "This is function is expected to escape the unicode sequence \"\\u0164\" to \"T\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x166)), "T", "This is function is expected to escape the unicode sequence \"\\u0166\" to \"T\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ac)), "T", "This is function is expected to escape the unicode sequence \"\\u01AC\" to \"T\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ae)), "T", "This is function is expected to escape the unicode sequence \"\\u01AE\" to \"T\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x21a)), "T", "This is function is expected to escape the unicode sequence \"\\u021A\" to \"T\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x23e)), "T", "This is function is expected to escape the unicode sequence \"\\u023E\" to \"T\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d1b)), "T", "This is function is expected to escape the unicode sequence \"\\u1D1B\" to \"T\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e6a)), "T", "This is function is expected to escape the unicode sequence \"\\u1E6A\" to \"T\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e6c)), "T", "This is function is expected to escape the unicode sequence \"\\u1E6C\" to \"T\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e6e)), "T", "This is function is expected to escape the unicode sequence \"\\u1E6E\" to \"T\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e70)), "T", "This is function is expected to escape the unicode sequence \"\\u1E70\" to \"T\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24c9)), "T", "This is function is expected to escape the unicode sequence \"\\u24C9\" to \"T\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa786)), "T", "This is function is expected to escape the unicode sequence \"\\uA786\" to \"T\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff34)), "T", "This is function is expected to escape the unicode sequence \"\\uFF34\" to \"T\"");
});

QUnit.test("tTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x163)), "t", "This is function is expected to escape the unicode sequence \"\\u0163\" to \"t\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x165)), "t", "This is function is expected to escape the unicode sequence \"\\u0165\" to \"t\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x167)), "t", "This is function is expected to escape the unicode sequence \"\\u0167\" to \"t\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ab)), "t", "This is function is expected to escape the unicode sequence \"\\u01AB\" to \"t\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ad)), "t", "This is function is expected to escape the unicode sequence \"\\u01AD\" to \"t\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x21b)), "t", "This is function is expected to escape the unicode sequence \"\\u021B\" to \"t\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x236)), "t", "This is function is expected to escape the unicode sequence \"\\u0236\" to \"t\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x287)), "t", "This is function is expected to escape the unicode sequence \"\\u0287\" to \"t\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x288)), "t", "This is function is expected to escape the unicode sequence \"\\u0288\" to \"t\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d75)), "t", "This is function is expected to escape the unicode sequence \"\\u1D75\" to \"t\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e6b)), "t", "This is function is expected to escape the unicode sequence \"\\u1E6B\" to \"t\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e6d)), "t", "This is function is expected to escape the unicode sequence \"\\u1E6D\" to \"t\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e6f)), "t", "This is function is expected to escape the unicode sequence \"\\u1E6F\" to \"t\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e71)), "t", "This is function is expected to escape the unicode sequence \"\\u1E71\" to \"t\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e97)), "t", "This is function is expected to escape the unicode sequence \"\\u1E97\" to \"t\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24e3)), "t", "This is function is expected to escape the unicode sequence \"\\u24E3\" to \"t\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c66)), "t", "This is function is expected to escape the unicode sequence \"\\u2C66\" to \"t\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff54)), "t", "This is function is expected to escape the unicode sequence \"\\uFF54\" to \"t\"");
});

QUnit.test("THTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xde)), "TH", "This is function is expected to escape the unicode sequence \"\\u00DE\" to \"TH\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa766)), "TH", "This is function is expected to escape the unicode sequence \"\\uA766\" to \"TH\"");
});

QUnit.test("TZTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xa728)), "TZ", "This is function is expected to escape the unicode sequence \"\\uA728\" to \"TZ\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterTRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24af)), "(t)", "This is function is expected to escape the unicode sequence \"\\u24AF\" to \"(t)\"");
});

QUnit.test("tcTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2a8)), "tc", "This is function is expected to escape the unicode sequence \"\\u02A8\" to \"tc\"");
});

QUnit.test("thTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xfe)), "th", "This is function is expected to escape the unicode sequence \"\\u00FE\" to \"th\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d7a)), "th", "This is function is expected to escape the unicode sequence \"\\u1D7A\" to \"th\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa767)), "th", "This is function is expected to escape the unicode sequence \"\\uA767\" to \"th\"");
});

QUnit.test("tsTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2a6)), "ts", "This is function is expected to escape the unicode sequence \"\\u02A6\" to \"ts\"");
});

QUnit.test("tzTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xa729)), "tz", "This is function is expected to escape the unicode sequence \"\\uA729\" to \"tz\"");
});

QUnit.test("UTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xd9)), "U", "This is function is expected to escape the unicode sequence \"\\u00D9\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xda)), "U", "This is function is expected to escape the unicode sequence \"\\u00DA\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xdb)), "U", "This is function is expected to escape the unicode sequence \"\\u00DB\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xdc)), "U", "This is function is expected to escape the unicode sequence \"\\u00DC\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x168)), "U", "This is function is expected to escape the unicode sequence \"\\u0168\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x16a)), "U", "This is function is expected to escape the unicode sequence \"\\u016A\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x16c)), "U", "This is function is expected to escape the unicode sequence \"\\u016C\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x16e)), "U", "This is function is expected to escape the unicode sequence \"\\u016E\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x170)), "U", "This is function is expected to escape the unicode sequence \"\\u0170\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x172)), "U", "This is function is expected to escape the unicode sequence \"\\u0172\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1af)), "U", "This is function is expected to escape the unicode sequence \"\\u01AF\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d3)), "U", "This is function is expected to escape the unicode sequence \"\\u01D3\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d5)), "U", "This is function is expected to escape the unicode sequence \"\\u01D5\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d7)), "U", "This is function is expected to escape the unicode sequence \"\\u01D7\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d9)), "U", "This is function is expected to escape the unicode sequence \"\\u01D9\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1db)), "U", "This is function is expected to escape the unicode sequence \"\\u01DB\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x214)), "U", "This is function is expected to escape the unicode sequence \"\\u0214\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x216)), "U", "This is function is expected to escape the unicode sequence \"\\u0216\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x244)), "U", "This is function is expected to escape the unicode sequence \"\\u0244\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d1c)), "U", "This is function is expected to escape the unicode sequence \"\\u1D1C\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d7e)), "U", "This is function is expected to escape the unicode sequence \"\\u1D7E\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e72)), "U", "This is function is expected to escape the unicode sequence \"\\u1E72\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e74)), "U", "This is function is expected to escape the unicode sequence \"\\u1E74\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e76)), "U", "This is function is expected to escape the unicode sequence \"\\u1E76\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e78)), "U", "This is function is expected to escape the unicode sequence \"\\u1E78\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e7a)), "U", "This is function is expected to escape the unicode sequence \"\\u1E7A\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ee4)), "U", "This is function is expected to escape the unicode sequence \"\\u1EE4\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ee6)), "U", "This is function is expected to escape the unicode sequence \"\\u1EE6\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ee8)), "U", "This is function is expected to escape the unicode sequence \"\\u1EE8\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eea)), "U", "This is function is expected to escape the unicode sequence \"\\u1EEA\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eec)), "U", "This is function is expected to escape the unicode sequence \"\\u1EEC\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eee)), "U", "This is function is expected to escape the unicode sequence \"\\u1EEE\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ef0)), "U", "This is function is expected to escape the unicode sequence \"\\u1EF0\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24ca)), "U", "This is function is expected to escape the unicode sequence \"\\u24CA\" to \"U\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff35)), "U", "This is function is expected to escape the unicode sequence \"\\uFF35\" to \"U\"");
});

QUnit.test("uTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xf9)), "u", "This is function is expected to escape the unicode sequence \"\\u00F9\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xfa)), "u", "This is function is expected to escape the unicode sequence \"\\u00FA\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xfb)), "u", "This is function is expected to escape the unicode sequence \"\\u00FB\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xfc)), "u", "This is function is expected to escape the unicode sequence \"\\u00FC\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x169)), "u", "This is function is expected to escape the unicode sequence \"\\u0169\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x16b)), "u", "This is function is expected to escape the unicode sequence \"\\u016B\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x16d)), "u", "This is function is expected to escape the unicode sequence \"\\u016D\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x16f)), "u", "This is function is expected to escape the unicode sequence \"\\u016F\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x171)), "u", "This is function is expected to escape the unicode sequence \"\\u0171\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x173)), "u", "This is function is expected to escape the unicode sequence \"\\u0173\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1b0)), "u", "This is function is expected to escape the unicode sequence \"\\u01B0\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d4)), "u", "This is function is expected to escape the unicode sequence \"\\u01D4\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d6)), "u", "This is function is expected to escape the unicode sequence \"\\u01D6\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d8)), "u", "This is function is expected to escape the unicode sequence \"\\u01D8\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1da)), "u", "This is function is expected to escape the unicode sequence \"\\u01DA\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1dc)), "u", "This is function is expected to escape the unicode sequence \"\\u01DC\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x215)), "u", "This is function is expected to escape the unicode sequence \"\\u0215\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x217)), "u", "This is function is expected to escape the unicode sequence \"\\u0217\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x289)), "u", "This is function is expected to escape the unicode sequence \"\\u0289\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d64)), "u", "This is function is expected to escape the unicode sequence \"\\u1D64\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d99)), "u", "This is function is expected to escape the unicode sequence \"\\u1D99\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e73)), "u", "This is function is expected to escape the unicode sequence \"\\u1E73\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e75)), "u", "This is function is expected to escape the unicode sequence \"\\u1E75\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e77)), "u", "This is function is expected to escape the unicode sequence \"\\u1E77\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e79)), "u", "This is function is expected to escape the unicode sequence \"\\u1E79\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e7b)), "u", "This is function is expected to escape the unicode sequence \"\\u1E7B\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ee5)), "u", "This is function is expected to escape the unicode sequence \"\\u1EE5\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ee7)), "u", "This is function is expected to escape the unicode sequence \"\\u1EE7\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ee9)), "u", "This is function is expected to escape the unicode sequence \"\\u1EE9\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eeb)), "u", "This is function is expected to escape the unicode sequence \"\\u1EEB\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eed)), "u", "This is function is expected to escape the unicode sequence \"\\u1EED\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eef)), "u", "This is function is expected to escape the unicode sequence \"\\u1EEF\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ef1)), "u", "This is function is expected to escape the unicode sequence \"\\u1EF1\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24e4)), "u", "This is function is expected to escape the unicode sequence \"\\u24E4\" to \"u\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff55)), "u", "This is function is expected to escape the unicode sequence \"\\uFF55\" to \"u\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterURightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24b0)), "(u)", "This is function is expected to escape the unicode sequence \"\\u24B0\" to \"(u)\"");
});

QUnit.test("ueTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d6b)), "ue", "This is function is expected to escape the unicode sequence \"\\u1D6B\" to \"ue\"");
});

QUnit.test("VTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1b2)), "V", "This is function is expected to escape the unicode sequence \"\\u01B2\" to \"V\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x245)), "V", "This is function is expected to escape the unicode sequence \"\\u0245\" to \"V\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d20)), "V", "This is function is expected to escape the unicode sequence \"\\u1D20\" to \"V\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e7c)), "V", "This is function is expected to escape the unicode sequence \"\\u1E7C\" to \"V\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e7e)), "V", "This is function is expected to escape the unicode sequence \"\\u1E7E\" to \"V\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1efc)), "V", "This is function is expected to escape the unicode sequence \"\\u1EFC\" to \"V\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24cb)), "V", "This is function is expected to escape the unicode sequence \"\\u24CB\" to \"V\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa75e)), "V", "This is function is expected to escape the unicode sequence \"\\uA75E\" to \"V\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa768)), "V", "This is function is expected to escape the unicode sequence \"\\uA768\" to \"V\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff36)), "V", "This is function is expected to escape the unicode sequence \"\\uFF36\" to \"V\"");
});

QUnit.test("vTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x28b)), "v", "This is function is expected to escape the unicode sequence \"\\u028B\" to \"v\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x28c)), "v", "This is function is expected to escape the unicode sequence \"\\u028C\" to \"v\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d65)), "v", "This is function is expected to escape the unicode sequence \"\\u1D65\" to \"v\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d8c)), "v", "This is function is expected to escape the unicode sequence \"\\u1D8C\" to \"v\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e7d)), "v", "This is function is expected to escape the unicode sequence \"\\u1E7D\" to \"v\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e7f)), "v", "This is function is expected to escape the unicode sequence \"\\u1E7F\" to \"v\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24e5)), "v", "This is function is expected to escape the unicode sequence \"\\u24E5\" to \"v\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c71)), "v", "This is function is expected to escape the unicode sequence \"\\u2C71\" to \"v\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c74)), "v", "This is function is expected to escape the unicode sequence \"\\u2C74\" to \"v\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa75f)), "v", "This is function is expected to escape the unicode sequence \"\\uA75F\" to \"v\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff56)), "v", "This is function is expected to escape the unicode sequence \"\\uFF56\" to \"v\"");
});

QUnit.test("VYTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xa760)), "VY", "This is function is expected to escape the unicode sequence \"\\uA760\" to \"VY\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterVRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24b1)), "(v)", "This is function is expected to escape the unicode sequence \"\\u24B1\" to \"(v)\"");
});

QUnit.test("vyTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xa761)), "vy", "This is function is expected to escape the unicode sequence \"\\uA761\" to \"vy\"");
});

QUnit.test("WTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x174)), "W", "This is function is expected to escape the unicode sequence \"\\u0174\" to \"W\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1f7)), "W", "This is function is expected to escape the unicode sequence \"\\u01F7\" to \"W\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d21)), "W", "This is function is expected to escape the unicode sequence \"\\u1D21\" to \"W\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e80)), "W", "This is function is expected to escape the unicode sequence \"\\u1E80\" to \"W\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e82)), "W", "This is function is expected to escape the unicode sequence \"\\u1E82\" to \"W\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e84)), "W", "This is function is expected to escape the unicode sequence \"\\u1E84\" to \"W\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e86)), "W", "This is function is expected to escape the unicode sequence \"\\u1E86\" to \"W\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e88)), "W", "This is function is expected to escape the unicode sequence \"\\u1E88\" to \"W\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24cc)), "W", "This is function is expected to escape the unicode sequence \"\\u24CC\" to \"W\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c72)), "W", "This is function is expected to escape the unicode sequence \"\\u2C72\" to \"W\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff37)), "W", "This is function is expected to escape the unicode sequence \"\\uFF37\" to \"W\"");
});

QUnit.test("wTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x175)), "w", "This is function is expected to escape the unicode sequence \"\\u0175\" to \"w\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1bf)), "w", "This is function is expected to escape the unicode sequence \"\\u01BF\" to \"w\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x28d)), "w", "This is function is expected to escape the unicode sequence \"\\u028D\" to \"w\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e81)), "w", "This is function is expected to escape the unicode sequence \"\\u1E81\" to \"w\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e83)), "w", "This is function is expected to escape the unicode sequence \"\\u1E83\" to \"w\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e85)), "w", "This is function is expected to escape the unicode sequence \"\\u1E85\" to \"w\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e87)), "w", "This is function is expected to escape the unicode sequence \"\\u1E87\" to \"w\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e89)), "w", "This is function is expected to escape the unicode sequence \"\\u1E89\" to \"w\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e98)), "w", "This is function is expected to escape the unicode sequence \"\\u1E98\" to \"w\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24e6)), "w", "This is function is expected to escape the unicode sequence \"\\u24E6\" to \"w\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c73)), "w", "This is function is expected to escape the unicode sequence \"\\u2C73\" to \"w\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff57)), "w", "This is function is expected to escape the unicode sequence \"\\uFF57\" to \"w\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterWRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24b2)), "(w)", "This is function is expected to escape the unicode sequence \"\\u24B2\" to \"(w)\"");
});

QUnit.test("XTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e8a)), "X", "This is function is expected to escape the unicode sequence \"\\u1E8A\" to \"X\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e8c)), "X", "This is function is expected to escape the unicode sequence \"\\u1E8C\" to \"X\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24cd)), "X", "This is function is expected to escape the unicode sequence \"\\u24CD\" to \"X\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff38)), "X", "This is function is expected to escape the unicode sequence \"\\uFF38\" to \"X\"");
});

QUnit.test("xTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d8d)), "x", "This is function is expected to escape the unicode sequence \"\\u1D8D\" to \"x\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e8b)), "x", "This is function is expected to escape the unicode sequence \"\\u1E8B\" to \"x\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e8d)), "x", "This is function is expected to escape the unicode sequence \"\\u1E8D\" to \"x\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2093)), "x", "This is function is expected to escape the unicode sequence \"\\u2093\" to \"x\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24e7)), "x", "This is function is expected to escape the unicode sequence \"\\u24E7\" to \"x\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff58)), "x", "This is function is expected to escape the unicode sequence \"\\uFF58\" to \"x\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterXRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24b3)), "(x)", "This is function is expected to escape the unicode sequence \"\\u24B3\" to \"(x)\"");
});

QUnit.test("YTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xdd)), "Y", "This is function is expected to escape the unicode sequence \"\\u00DD\" to \"Y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x176)), "Y", "This is function is expected to escape the unicode sequence \"\\u0176\" to \"Y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x178)), "Y", "This is function is expected to escape the unicode sequence \"\\u0178\" to \"Y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1b3)), "Y", "This is function is expected to escape the unicode sequence \"\\u01B3\" to \"Y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x232)), "Y", "This is function is expected to escape the unicode sequence \"\\u0232\" to \"Y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24e)), "Y", "This is function is expected to escape the unicode sequence \"\\u024E\" to \"Y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x28f)), "Y", "This is function is expected to escape the unicode sequence \"\\u028F\" to \"Y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e8e)), "Y", "This is function is expected to escape the unicode sequence \"\\u1E8E\" to \"Y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ef2)), "Y", "This is function is expected to escape the unicode sequence \"\\u1EF2\" to \"Y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ef4)), "Y", "This is function is expected to escape the unicode sequence \"\\u1EF4\" to \"Y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ef6)), "Y", "This is function is expected to escape the unicode sequence \"\\u1EF6\" to \"Y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ef8)), "Y", "This is function is expected to escape the unicode sequence \"\\u1EF8\" to \"Y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1efe)), "Y", "This is function is expected to escape the unicode sequence \"\\u1EFE\" to \"Y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24ce)), "Y", "This is function is expected to escape the unicode sequence \"\\u24CE\" to \"Y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff39)), "Y", "This is function is expected to escape the unicode sequence \"\\uFF39\" to \"Y\"");
});

QUnit.test("yTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xfd)), "y", "This is function is expected to escape the unicode sequence \"\\u00FD\" to \"y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff)), "y", "This is function is expected to escape the unicode sequence \"\\u00FF\" to \"y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x177)), "y", "This is function is expected to escape the unicode sequence \"\\u0177\" to \"y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1b4)), "y", "This is function is expected to escape the unicode sequence \"\\u01B4\" to \"y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x233)), "y", "This is function is expected to escape the unicode sequence \"\\u0233\" to \"y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24f)), "y", "This is function is expected to escape the unicode sequence \"\\u024F\" to \"y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x28e)), "y", "This is function is expected to escape the unicode sequence \"\\u028E\" to \"y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e8f)), "y", "This is function is expected to escape the unicode sequence \"\\u1E8F\" to \"y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e99)), "y", "This is function is expected to escape the unicode sequence \"\\u1E99\" to \"y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ef3)), "y", "This is function is expected to escape the unicode sequence \"\\u1EF3\" to \"y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ef5)), "y", "This is function is expected to escape the unicode sequence \"\\u1EF5\" to \"y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ef7)), "y", "This is function is expected to escape the unicode sequence \"\\u1EF7\" to \"y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1ef9)), "y", "This is function is expected to escape the unicode sequence \"\\u1EF9\" to \"y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1eff)), "y", "This is function is expected to escape the unicode sequence \"\\u1EFF\" to \"y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24e8)), "y", "This is function is expected to escape the unicode sequence \"\\u24E8\" to \"y\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff59)), "y", "This is function is expected to escape the unicode sequence \"\\uFF59\" to \"y\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterYRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24b4)), "(y)", "This is function is expected to escape the unicode sequence \"\\u24B4\" to \"(y)\"");
});

QUnit.test("ZTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x179)), "Z", "This is function is expected to escape the unicode sequence \"\\u0179\" to \"Z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x17b)), "Z", "This is function is expected to escape the unicode sequence \"\\u017B\" to \"Z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x17d)), "Z", "This is function is expected to escape the unicode sequence \"\\u017D\" to \"Z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1b5)), "Z", "This is function is expected to escape the unicode sequence \"\\u01B5\" to \"Z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x21c)), "Z", "This is function is expected to escape the unicode sequence \"\\u021C\" to \"Z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x224)), "Z", "This is function is expected to escape the unicode sequence \"\\u0224\" to \"Z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d22)), "Z", "This is function is expected to escape the unicode sequence \"\\u1D22\" to \"Z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e90)), "Z", "This is function is expected to escape the unicode sequence \"\\u1E90\" to \"Z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e92)), "Z", "This is function is expected to escape the unicode sequence \"\\u1E92\" to \"Z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e94)), "Z", "This is function is expected to escape the unicode sequence \"\\u1E94\" to \"Z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24cf)), "Z", "This is function is expected to escape the unicode sequence \"\\u24CF\" to \"Z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c6b)), "Z", "This is function is expected to escape the unicode sequence \"\\u2C6B\" to \"Z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa762)), "Z", "This is function is expected to escape the unicode sequence \"\\uA762\" to \"Z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff3a)), "Z", "This is function is expected to escape the unicode sequence \"\\uFF3A\" to \"Z\"");
});

QUnit.test("zTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x17a)), "z", "This is function is expected to escape the unicode sequence \"\\u017A\" to \"z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x17c)), "z", "This is function is expected to escape the unicode sequence \"\\u017C\" to \"z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x17e)), "z", "This is function is expected to escape the unicode sequence \"\\u017E\" to \"z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1b6)), "z", "This is function is expected to escape the unicode sequence \"\\u01B6\" to \"z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x21d)), "z", "This is function is expected to escape the unicode sequence \"\\u021D\" to \"z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x225)), "z", "This is function is expected to escape the unicode sequence \"\\u0225\" to \"z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x240)), "z", "This is function is expected to escape the unicode sequence \"\\u0240\" to \"z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x290)), "z", "This is function is expected to escape the unicode sequence \"\\u0290\" to \"z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x291)), "z", "This is function is expected to escape the unicode sequence \"\\u0291\" to \"z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d76)), "z", "This is function is expected to escape the unicode sequence \"\\u1D76\" to \"z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1d8e)), "z", "This is function is expected to escape the unicode sequence \"\\u1D8E\" to \"z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e91)), "z", "This is function is expected to escape the unicode sequence \"\\u1E91\" to \"z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e93)), "z", "This is function is expected to escape the unicode sequence \"\\u1E93\" to \"z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x1e95)), "z", "This is function is expected to escape the unicode sequence \"\\u1E95\" to \"z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24e9)), "z", "This is function is expected to escape the unicode sequence \"\\u24E9\" to \"z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2c6c)), "z", "This is function is expected to escape the unicode sequence \"\\u2C6C\" to \"z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xa763)), "z", "This is function is expected to escape the unicode sequence \"\\uA763\" to \"z\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff5a)), "z", "This is function is expected to escape the unicode sequence \"\\uFF5A\" to \"z\"");
});

QUnit.test("LeftParenthesisLatinSmallLetterZRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x24b5)), "(z)", "This is function is expected to escape the unicode sequence \"\\u24B5\" to \"(z)\"");
});

QUnit.test("0Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2070)), "0", "This is function is expected to escape the unicode sequence \"\\u2070\" to \"0\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2080)), "0", "This is function is expected to escape the unicode sequence \"\\u2080\" to \"0\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24ea)), "0", "This is function is expected to escape the unicode sequence \"\\u24EA\" to \"0\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24ff)), "0", "This is function is expected to escape the unicode sequence \"\\u24FF\" to \"0\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff10)), "0", "This is function is expected to escape the unicode sequence \"\\uFF10\" to \"0\"");
});

QUnit.test("1Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xb9)), "1", "This is function is expected to escape the unicode sequence \"\\u00B9\" to \"1\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2081)), "1", "This is function is expected to escape the unicode sequence \"\\u2081\" to \"1\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2460)), "1", "This is function is expected to escape the unicode sequence \"\\u2460\" to \"1\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24f5)), "1", "This is function is expected to escape the unicode sequence \"\\u24F5\" to \"1\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2776)), "1", "This is function is expected to escape the unicode sequence \"\\u2776\" to \"1\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2780)), "1", "This is function is expected to escape the unicode sequence \"\\u2780\" to \"1\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x278a)), "1", "This is function is expected to escape the unicode sequence \"\\u278A\" to \"1\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff11)), "1", "This is function is expected to escape the unicode sequence \"\\uFF11\" to \"1\"");
});

QUnit.test("DigitOneFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2488)), "1.", "This is function is expected to escape the unicode sequence \"\\u2488\" to \"1.\"");
});

QUnit.test("LeftParenthesisDigitOneRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2474)), "(1)", "This is function is expected to escape the unicode sequence \"\\u2474\" to \"(1)\"");
});

QUnit.test("2Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xb2)), "2", "This is function is expected to escape the unicode sequence \"\\u00B2\" to \"2\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2082)), "2", "This is function is expected to escape the unicode sequence \"\\u2082\" to \"2\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2461)), "2", "This is function is expected to escape the unicode sequence \"\\u2461\" to \"2\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24f6)), "2", "This is function is expected to escape the unicode sequence \"\\u24F6\" to \"2\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2777)), "2", "This is function is expected to escape the unicode sequence \"\\u2777\" to \"2\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2781)), "2", "This is function is expected to escape the unicode sequence \"\\u2781\" to \"2\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x278b)), "2", "This is function is expected to escape the unicode sequence \"\\u278B\" to \"2\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff12)), "2", "This is function is expected to escape the unicode sequence \"\\uFF12\" to \"2\"");
});

QUnit.test("DigitTwoFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2489)), "2.", "This is function is expected to escape the unicode sequence \"\\u2489\" to \"2.\"");
});

QUnit.test("LeftParenthesisDigitTwoRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2475)), "(2)", "This is function is expected to escape the unicode sequence \"\\u2475\" to \"(2)\"");
});

QUnit.test("3Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xb3)), "3", "This is function is expected to escape the unicode sequence \"\\u00B3\" to \"3\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2083)), "3", "This is function is expected to escape the unicode sequence \"\\u2083\" to \"3\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2462)), "3", "This is function is expected to escape the unicode sequence \"\\u2462\" to \"3\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24f7)), "3", "This is function is expected to escape the unicode sequence \"\\u24F7\" to \"3\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2778)), "3", "This is function is expected to escape the unicode sequence \"\\u2778\" to \"3\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2782)), "3", "This is function is expected to escape the unicode sequence \"\\u2782\" to \"3\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x278c)), "3", "This is function is expected to escape the unicode sequence \"\\u278C\" to \"3\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff13)), "3", "This is function is expected to escape the unicode sequence \"\\uFF13\" to \"3\"");
});

QUnit.test("DigitThreeFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x248a)), "3.", "This is function is expected to escape the unicode sequence \"\\u248A\" to \"3.\"");
});

QUnit.test("LeftParenthesisDigitThreeRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2476)), "(3)", "This is function is expected to escape the unicode sequence \"\\u2476\" to \"(3)\"");
});

QUnit.test("4Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2074)), "4", "This is function is expected to escape the unicode sequence \"\\u2074\" to \"4\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2084)), "4", "This is function is expected to escape the unicode sequence \"\\u2084\" to \"4\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2463)), "4", "This is function is expected to escape the unicode sequence \"\\u2463\" to \"4\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24f8)), "4", "This is function is expected to escape the unicode sequence \"\\u24F8\" to \"4\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2779)), "4", "This is function is expected to escape the unicode sequence \"\\u2779\" to \"4\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2783)), "4", "This is function is expected to escape the unicode sequence \"\\u2783\" to \"4\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x278d)), "4", "This is function is expected to escape the unicode sequence \"\\u278D\" to \"4\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff14)), "4", "This is function is expected to escape the unicode sequence \"\\uFF14\" to \"4\"");
});

QUnit.test("DigitFourFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x248b)), "4.", "This is function is expected to escape the unicode sequence \"\\u248B\" to \"4.\"");
});

QUnit.test("LeftParenthesisDigitFourRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2477)), "(4)", "This is function is expected to escape the unicode sequence \"\\u2477\" to \"(4)\"");
});

QUnit.test("5Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2075)), "5", "This is function is expected to escape the unicode sequence \"\\u2075\" to \"5\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2085)), "5", "This is function is expected to escape the unicode sequence \"\\u2085\" to \"5\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2464)), "5", "This is function is expected to escape the unicode sequence \"\\u2464\" to \"5\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24f9)), "5", "This is function is expected to escape the unicode sequence \"\\u24F9\" to \"5\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x277a)), "5", "This is function is expected to escape the unicode sequence \"\\u277A\" to \"5\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2784)), "5", "This is function is expected to escape the unicode sequence \"\\u2784\" to \"5\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x278e)), "5", "This is function is expected to escape the unicode sequence \"\\u278E\" to \"5\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff15)), "5", "This is function is expected to escape the unicode sequence \"\\uFF15\" to \"5\"");
});

QUnit.test("DigitFiveFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x248c)), "5.", "This is function is expected to escape the unicode sequence \"\\u248C\" to \"5.\"");
});

QUnit.test("LeftParenthesisDigitFiveRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2478)), "(5)", "This is function is expected to escape the unicode sequence \"\\u2478\" to \"(5)\"");
});

QUnit.test("6Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2076)), "6", "This is function is expected to escape the unicode sequence \"\\u2076\" to \"6\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2086)), "6", "This is function is expected to escape the unicode sequence \"\\u2086\" to \"6\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2465)), "6", "This is function is expected to escape the unicode sequence \"\\u2465\" to \"6\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24fa)), "6", "This is function is expected to escape the unicode sequence \"\\u24FA\" to \"6\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x277b)), "6", "This is function is expected to escape the unicode sequence \"\\u277B\" to \"6\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2785)), "6", "This is function is expected to escape the unicode sequence \"\\u2785\" to \"6\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x278f)), "6", "This is function is expected to escape the unicode sequence \"\\u278F\" to \"6\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff16)), "6", "This is function is expected to escape the unicode sequence \"\\uFF16\" to \"6\"");
});

QUnit.test("DigitSixFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x248d)), "6.", "This is function is expected to escape the unicode sequence \"\\u248D\" to \"6.\"");
});

QUnit.test("LeftParenthesisDigitSixRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2479)), "(6)", "This is function is expected to escape the unicode sequence \"\\u2479\" to \"(6)\"");
});

QUnit.test("7Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2077)), "7", "This is function is expected to escape the unicode sequence \"\\u2077\" to \"7\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2087)), "7", "This is function is expected to escape the unicode sequence \"\\u2087\" to \"7\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2466)), "7", "This is function is expected to escape the unicode sequence \"\\u2466\" to \"7\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24fb)), "7", "This is function is expected to escape the unicode sequence \"\\u24FB\" to \"7\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x277c)), "7", "This is function is expected to escape the unicode sequence \"\\u277C\" to \"7\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2786)), "7", "This is function is expected to escape the unicode sequence \"\\u2786\" to \"7\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2790)), "7", "This is function is expected to escape the unicode sequence \"\\u2790\" to \"7\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff17)), "7", "This is function is expected to escape the unicode sequence \"\\uFF17\" to \"7\"");
});

QUnit.test("DigitSevenFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x248e)), "7.", "This is function is expected to escape the unicode sequence \"\\u248E\" to \"7.\"");
});

QUnit.test("LeftParenthesisDigitSevenRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x247a)), "(7)", "This is function is expected to escape the unicode sequence \"\\u247A\" to \"(7)\"");
});

QUnit.test("8Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2078)), "8", "This is function is expected to escape the unicode sequence \"\\u2078\" to \"8\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2088)), "8", "This is function is expected to escape the unicode sequence \"\\u2088\" to \"8\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2467)), "8", "This is function is expected to escape the unicode sequence \"\\u2467\" to \"8\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24fc)), "8", "This is function is expected to escape the unicode sequence \"\\u24FC\" to \"8\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x277d)), "8", "This is function is expected to escape the unicode sequence \"\\u277D\" to \"8\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2787)), "8", "This is function is expected to escape the unicode sequence \"\\u2787\" to \"8\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2791)), "8", "This is function is expected to escape the unicode sequence \"\\u2791\" to \"8\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff18)), "8", "This is function is expected to escape the unicode sequence \"\\uFF18\" to \"8\"");
});

QUnit.test("DigitEightFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x248f)), "8.", "This is function is expected to escape the unicode sequence \"\\u248F\" to \"8.\"");
});

QUnit.test("LeftParenthesisDigitEightRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x247b)), "(8)", "This is function is expected to escape the unicode sequence \"\\u247B\" to \"(8)\"");
});

QUnit.test("9Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2079)), "9", "This is function is expected to escape the unicode sequence \"\\u2079\" to \"9\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2089)), "9", "This is function is expected to escape the unicode sequence \"\\u2089\" to \"9\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2468)), "9", "This is function is expected to escape the unicode sequence \"\\u2468\" to \"9\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24fd)), "9", "This is function is expected to escape the unicode sequence \"\\u24FD\" to \"9\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x277e)), "9", "This is function is expected to escape the unicode sequence \"\\u277E\" to \"9\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2788)), "9", "This is function is expected to escape the unicode sequence \"\\u2788\" to \"9\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2792)), "9", "This is function is expected to escape the unicode sequence \"\\u2792\" to \"9\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff19)), "9", "This is function is expected to escape the unicode sequence \"\\uFF19\" to \"9\"");
});

QUnit.test("DigitNineFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2490)), "9.", "This is function is expected to escape the unicode sequence \"\\u2490\" to \"9.\"");
});

QUnit.test("LeftParenthesisDigitNineRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x247c)), "(9)", "This is function is expected to escape the unicode sequence \"\\u247C\" to \"(9)\"");
});

QUnit.test("10Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2469)), "10", "This is function is expected to escape the unicode sequence \"\\u2469\" to \"10\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24fe)), "10", "This is function is expected to escape the unicode sequence \"\\u24FE\" to \"10\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x277f)), "10", "This is function is expected to escape the unicode sequence \"\\u277F\" to \"10\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2789)), "10", "This is function is expected to escape the unicode sequence \"\\u2789\" to \"10\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2793)), "10", "This is function is expected to escape the unicode sequence \"\\u2793\" to \"10\"");
});

QUnit.test("DigitOneDigitZeroFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2491)), "10.", "This is function is expected to escape the unicode sequence \"\\u2491\" to \"10.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitZeroRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x247d)), "(10)", "This is function is expected to escape the unicode sequence \"\\u247D\" to \"(10)\"");
});

QUnit.test("11Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x246a)), "11", "This is function is expected to escape the unicode sequence \"\\u246A\" to \"11\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24eb)), "11", "This is function is expected to escape the unicode sequence \"\\u24EB\" to \"11\"");
});

QUnit.test("DigitOneDigitOneFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2492)), "11.", "This is function is expected to escape the unicode sequence \"\\u2492\" to \"11.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitOneRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x247e)), "(11)", "This is function is expected to escape the unicode sequence \"\\u247E\" to \"(11)\"");
});

QUnit.test("12Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x246b)), "12", "This is function is expected to escape the unicode sequence \"\\u246B\" to \"12\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24ec)), "12", "This is function is expected to escape the unicode sequence \"\\u24EC\" to \"12\"");
});

QUnit.test("DigitOneDigitTwoFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2493)), "12.", "This is function is expected to escape the unicode sequence \"\\u2493\" to \"12.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitTwoRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x247f)), "(12)", "This is function is expected to escape the unicode sequence \"\\u247F\" to \"(12)\"");
});

QUnit.test("13Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x246c)), "13", "This is function is expected to escape the unicode sequence \"\\u246C\" to \"13\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24ed)), "13", "This is function is expected to escape the unicode sequence \"\\u24ED\" to \"13\"");
});

QUnit.test("DigitOneDigitThreeFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2494)), "13.", "This is function is expected to escape the unicode sequence \"\\u2494\" to \"13.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitThreeRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2480)), "(13)", "This is function is expected to escape the unicode sequence \"\\u2480\" to \"(13)\"");
});

QUnit.test("14Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x246d)), "14", "This is function is expected to escape the unicode sequence \"\\u246D\" to \"14\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24ee)), "14", "This is function is expected to escape the unicode sequence \"\\u24EE\" to \"14\"");
});

QUnit.test("DigitOneDigitFourFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2495)), "14.", "This is function is expected to escape the unicode sequence \"\\u2495\" to \"14.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitFourRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2481)), "(14)", "This is function is expected to escape the unicode sequence \"\\u2481\" to \"(14)\"");
});

QUnit.test("15Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x246e)), "15", "This is function is expected to escape the unicode sequence \"\\u246E\" to \"15\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24ef)), "15", "This is function is expected to escape the unicode sequence \"\\u24EF\" to \"15\"");
});

QUnit.test("DigitOneDigitFiveFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2496)), "15.", "This is function is expected to escape the unicode sequence \"\\u2496\" to \"15.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitFiveRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2482)), "(15)", "This is function is expected to escape the unicode sequence \"\\u2482\" to \"(15)\"");
});

QUnit.test("16Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x246f)), "16", "This is function is expected to escape the unicode sequence \"\\u246F\" to \"16\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24f0)), "16", "This is function is expected to escape the unicode sequence \"\\u24F0\" to \"16\"");
});

QUnit.test("DigitOneDigitSixFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2497)), "16.", "This is function is expected to escape the unicode sequence \"\\u2497\" to \"16.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitSixRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2483)), "(16)", "This is function is expected to escape the unicode sequence \"\\u2483\" to \"(16)\"");
});

QUnit.test("17Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2470)), "17", "This is function is expected to escape the unicode sequence \"\\u2470\" to \"17\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24f1)), "17", "This is function is expected to escape the unicode sequence \"\\u24F1\" to \"17\"");
});

QUnit.test("DigitOneDigitSevenFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2498)), "17.", "This is function is expected to escape the unicode sequence \"\\u2498\" to \"17.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitSevenRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2484)), "(17)", "This is function is expected to escape the unicode sequence \"\\u2484\" to \"(17)\"");
});

QUnit.test("18Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2471)), "18", "This is function is expected to escape the unicode sequence \"\\u2471\" to \"18\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24f2)), "18", "This is function is expected to escape the unicode sequence \"\\u24F2\" to \"18\"");
});

QUnit.test("DigitOneDigitEightFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2499)), "18.", "This is function is expected to escape the unicode sequence \"\\u2499\" to \"18.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitEightRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2485)), "(18)", "This is function is expected to escape the unicode sequence \"\\u2485\" to \"(18)\"");
});

QUnit.test("19Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2472)), "19", "This is function is expected to escape the unicode sequence \"\\u2472\" to \"19\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24f3)), "19", "This is function is expected to escape the unicode sequence \"\\u24F3\" to \"19\"");
});

QUnit.test("DigitOneDigitNineFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x249a)), "19.", "This is function is expected to escape the unicode sequence \"\\u249A\" to \"19.\"");
});

QUnit.test("LeftParenthesisDigitOneDigitNineRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2486)), "(19)", "This is function is expected to escape the unicode sequence \"\\u2486\" to \"(19)\"");
});

QUnit.test("20Test", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2473)), "20", "This is function is expected to escape the unicode sequence \"\\u2473\" to \"20\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x24f4)), "20", "This is function is expected to escape the unicode sequence \"\\u24F4\" to \"20\"");
});

QUnit.test("DigitTwoDigitZeroFullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x249b)), "20.", "This is function is expected to escape the unicode sequence \"\\u249B\" to \"20.\"");
});

QUnit.test("LeftParenthesisDigitTwoDigitZeroRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2487)), "(20)", "This is function is expected to escape the unicode sequence \"\\u2487\" to \"(20)\"");
});

QUnit.test("QuotationMarkTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xab)), "\"", "This is function is expected to escape the unicode sequence \"\\u00AB\" to \"\"\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xbb)), "\"", "This is function is expected to escape the unicode sequence \"\\u00BB\" to \"\"\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x201c)), "\"", "This is function is expected to escape the unicode sequence \"\\u201C\" to \"\"\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x201d)), "\"", "This is function is expected to escape the unicode sequence \"\\u201D\" to \"\"\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x201e)), "\"", "This is function is expected to escape the unicode sequence \"\\u201E\" to \"\"\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2033)), "\"", "This is function is expected to escape the unicode sequence \"\\u2033\" to \"\"\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2036)), "\"", "This is function is expected to escape the unicode sequence \"\\u2036\" to \"\"\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x275d)), "\"", "This is function is expected to escape the unicode sequence \"\\u275D\" to \"\"\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x275e)), "\"", "This is function is expected to escape the unicode sequence \"\\u275E\" to \"\"\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x276e)), "\"", "This is function is expected to escape the unicode sequence \"\\u276E\" to \"\"\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x276f)), "\"", "This is function is expected to escape the unicode sequence \"\\u276F\" to \"\"\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff02)), "\"", "This is function is expected to escape the unicode sequence \"\\uFF02\" to \"\"\"");
});

QUnit.test("ApostropheTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2018)), "'", "This is function is expected to escape the unicode sequence \"\\u2018\" to \"'\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2019)), "'", "This is function is expected to escape the unicode sequence \"\\u2019\" to \"'\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x201a)), "'", "This is function is expected to escape the unicode sequence \"\\u201A\" to \"'\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x201b)), "'", "This is function is expected to escape the unicode sequence \"\\u201B\" to \"'\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2032)), "'", "This is function is expected to escape the unicode sequence \"\\u2032\" to \"'\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2035)), "'", "This is function is expected to escape the unicode sequence \"\\u2035\" to \"'\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2039)), "'", "This is function is expected to escape the unicode sequence \"\\u2039\" to \"'\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x203a)), "'", "This is function is expected to escape the unicode sequence \"\\u203A\" to \"'\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x275b)), "'", "This is function is expected to escape the unicode sequence \"\\u275B\" to \"'\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x275c)), "'", "This is function is expected to escape the unicode sequence \"\\u275C\" to \"'\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff07)), "'", "This is function is expected to escape the unicode sequence \"\\uFF07\" to \"'\"");
});

QUnit.test("Hyphen-minusTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2010)), "-", "This is function is expected to escape the unicode sequence \"\\u2010\" to \"-\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2011)), "-", "This is function is expected to escape the unicode sequence \"\\u2011\" to \"-\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2012)), "-", "This is function is expected to escape the unicode sequence \"\\u2012\" to \"-\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2013)), "-", "This is function is expected to escape the unicode sequence \"\\u2013\" to \"-\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2014)), "-", "This is function is expected to escape the unicode sequence \"\\u2014\" to \"-\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x207b)), "-", "This is function is expected to escape the unicode sequence \"\\u207B\" to \"-\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x208b)), "-", "This is function is expected to escape the unicode sequence \"\\u208B\" to \"-\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff0d)), "-", "This is function is expected to escape the unicode sequence \"\\uFF0D\" to \"-\"");
});

QUnit.test("LeftSquareBracketTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2045)), "[", "This is function is expected to escape the unicode sequence \"\\u2045\" to \"[\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2772)), "[", "This is function is expected to escape the unicode sequence \"\\u2772\" to \"[\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff3b)), "[", "This is function is expected to escape the unicode sequence \"\\uFF3B\" to \"[\"");
});

QUnit.test("RightSquareBracketTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2046)), "]", "This is function is expected to escape the unicode sequence \"\\u2046\" to \"]\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2773)), "]", "This is function is expected to escape the unicode sequence \"\\u2773\" to \"]\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff3d)), "]", "This is function is expected to escape the unicode sequence \"\\uFF3D\" to \"]\"");
});

QUnit.test("LeftParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x207d)), "(", "This is function is expected to escape the unicode sequence \"\\u207D\" to \"(\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x208d)), "(", "This is function is expected to escape the unicode sequence \"\\u208D\" to \"(\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2768)), "(", "This is function is expected to escape the unicode sequence \"\\u2768\" to \"(\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x276a)), "(", "This is function is expected to escape the unicode sequence \"\\u276A\" to \"(\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff08)), "(", "This is function is expected to escape the unicode sequence \"\\uFF08\" to \"(\"");
});

QUnit.test("LeftParenthesisLeftParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2e28)), "((", "This is function is expected to escape the unicode sequence \"\\u2E28\" to \"((\"");
});

QUnit.test("RightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x207e)), ")", "This is function is expected to escape the unicode sequence \"\\u207E\" to \")\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x208e)), ")", "This is function is expected to escape the unicode sequence \"\\u208E\" to \")\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2769)), ")", "This is function is expected to escape the unicode sequence \"\\u2769\" to \")\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x276b)), ")", "This is function is expected to escape the unicode sequence \"\\u276B\" to \")\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff09)), ")", "This is function is expected to escape the unicode sequence \"\\uFF09\" to \")\"");
});

QUnit.test("RightParenthesisRightParenthesisTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2e29)), "))", "This is function is expected to escape the unicode sequence \"\\u2E29\" to \"))\"");
});

QUnit.test("Less-thanSignTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x276c)), "<", "This is function is expected to escape the unicode sequence \"\\u276C\" to \"<\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2770)), "<", "This is function is expected to escape the unicode sequence \"\\u2770\" to \"<\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff1c)), "<", "This is function is expected to escape the unicode sequence \"\\uFF1C\" to \"<\"");
});

QUnit.test("Greater-thanSignTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x276d)), ">", "This is function is expected to escape the unicode sequence \"\\u276D\" to \">\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x2771)), ">", "This is function is expected to escape the unicode sequence \"\\u2771\" to \">\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff1e)), ">", "This is function is expected to escape the unicode sequence \"\\uFF1E\" to \">\"");
});

QUnit.test("LeftCurlyBracketTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2774)), "{", "This is function is expected to escape the unicode sequence \"\\u2774\" to \"{\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff5b)), "{", "This is function is expected to escape the unicode sequence \"\\uFF5B\" to \"{\"");
});

QUnit.test("RightCurlyBracketTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2775)), "}", "This is function is expected to escape the unicode sequence \"\\u2775\" to \"}\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff5d)), "}", "This is function is expected to escape the unicode sequence \"\\uFF5D\" to \"}\"");
});

QUnit.test("PlusSignTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x207a)), "+", "This is function is expected to escape the unicode sequence \"\\u207A\" to \"+\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x208a)), "+", "This is function is expected to escape the unicode sequence \"\\u208A\" to \"+\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff0b)), "+", "This is function is expected to escape the unicode sequence \"\\uFF0B\" to \"+\"");
});

QUnit.test("EqualsSignTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x207c)), "=", "This is function is expected to escape the unicode sequence \"\\u207C\" to \"=\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0x208c)), "=", "This is function is expected to escape the unicode sequence \"\\u208C\" to \"=\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff1d)), "=", "This is function is expected to escape the unicode sequence \"\\uFF1D\" to \"=\"");
});

QUnit.test("ExclamationMarkTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xff01)), "!", "This is function is expected to escape the unicode sequence \"\\uFF01\" to \"!\"");
});

QUnit.test("ExclamationMarkExclamationMarkTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x203c)), "!!", "This is function is expected to escape the unicode sequence \"\\u203C\" to \"!!\"");
});

QUnit.test("ExclamationMarkQuestionMarkTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2049)), "!?", "This is function is expected to escape the unicode sequence \"\\u2049\" to \"!?\"");
});

QUnit.test("NumberSignTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xff03)), "#", "This is function is expected to escape the unicode sequence \"\\uFF03\" to \"#\"");
});

QUnit.test("DollarSignTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xff04)), "$", "This is function is expected to escape the unicode sequence \"\\uFF04\" to \"$\"");
});

QUnit.test("PercentSignTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2052)), "%", "This is function is expected to escape the unicode sequence \"\\u2052\" to \"%\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff05)), "%", "This is function is expected to escape the unicode sequence \"\\uFF05\" to \"%\"");
});

QUnit.test("AmpersandTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xff06)), "&", "This is function is expected to escape the unicode sequence \"\\uFF06\" to \"&\"");
});

QUnit.test("AsteriskTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x204e)), "*", "This is function is expected to escape the unicode sequence \"\\u204E\" to \"*\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff0a)), "*", "This is function is expected to escape the unicode sequence \"\\uFF0A\" to \"*\"");
});

QUnit.test("CommaTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xff0c)), ",", "This is function is expected to escape the unicode sequence \"\\uFF0C\" to \",\"");
});

QUnit.test("FullStopTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xff0e)), ".", "This is function is expected to escape the unicode sequence \"\\uFF0E\" to \".\"");
});

QUnit.test("SolidusTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2044)), "\/", "This is function is expected to escape the unicode sequence \"\\u2044\" to \"\/\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff0f)), "\/", "This is function is expected to escape the unicode sequence \"\\uFF0F\" to \"\/\"");
});

QUnit.test("ColonTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xff1a)), ":", "This is function is expected to escape the unicode sequence \"\\uFF1A\" to \":\"");
});

QUnit.test("SemicolonTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x204f)), ";", "This is function is expected to escape the unicode sequence \"\\u204F\" to \";\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff1b)), ";", "This is function is expected to escape the unicode sequence \"\\uFF1B\" to \";\"");
});

QUnit.test("QuestionMarkTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xff1f)), "?", "This is function is expected to escape the unicode sequence \"\\uFF1F\" to \"?\"");
});

QUnit.test("QuestionMarkQuestionMarkTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2047)), "??", "This is function is expected to escape the unicode sequence \"\\u2047\" to \"??\"");
});

QUnit.test("QuestionMarkExclamationMarkTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2048)), "?!", "This is function is expected to escape the unicode sequence \"\\u2048\" to \"?!\"");
});

QUnit.test("CommercialAtTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xff20)), "@", "This is function is expected to escape the unicode sequence \"\\uFF20\" to \"@\"");
});

QUnit.test("ReverseSolidusReverseSolidusTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xff3c)), "\\", "This is function is expected to escape the unicode sequence \"\\uFF3C\" to \"\\\"");
});

QUnit.test("CircumflexAccentTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2038)), "^", "This is function is expected to escape the unicode sequence \"\\u2038\" to \"^\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff3e)), "^", "This is function is expected to escape the unicode sequence \"\\uFF3E\" to \"^\"");
});

QUnit.test("LowLineTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0xff3f)), "_", "This is function is expected to escape the unicode sequence \"\\uFF3F\" to \"_\"");
});

QUnit.test("TildeTest", function () {
    equal(ASCIIFolder.fold(String.fromCharCode(0x2053)), "~", "This is function is expected to escape the unicode sequence \"\\u2053\" to \"~\"");
    equal(ASCIIFolder.fold(String.fromCharCode(0xff5e)), "~", "This is function is expected to escape the unicode sequence \"\\uFF5E\" to \"~\"");
});
