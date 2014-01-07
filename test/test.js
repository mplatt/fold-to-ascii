var repeatChars = function (char, n) {
	return Array(n + 1).join(char);
};

QUnit.test("emptyTest", function() {
	equal(foldToASCII(""), "", "This is expected to return the empty string.");
});

QUnit.test("nullTest", function() {
	equal(foldToASCII(null), "", "This is expected to return the empty string.");
});

QUnit.test("spaceTest", function() {
	var spaces = (String.fromCharCode(0x20) + String.fromCharCode(0xA0) + String.fromCharCode(0x2028) + String.fromCharCode(0x2029));
	equal(foldToASCII(spaces), spaces, "This is expected to return space, non-breaking space, line seperator and paragraph seperator.");
});

QUnit.test("bomTest", function() {
	var bom = (String.fromCharCode(0xFEFF));
	equal(foldToASCII(bom), bom, "This is expected to return the byte-order-mark-character.");
});

QUnit.test("escapeSequenceTest", function() {
	equal(foldToASCII(" \b \t \n \v \f \r "), " \b \t \n \v \f \r ", "This is expected to return the escape sequences \\b \\t \\n \\v \\f \\r.");
});

QUnit.test("controlCharacterTest", function() {
	var controlCharacters = (String.fromCharCode(0x8) + String.fromCharCode(0x9) + String.fromCharCode(0xA) + String.fromCharCode(0xC) + String.fromCharCode(0xD));
	equal(foldToASCII(controlCharacters), controlCharacters, "This is expected to return control chracters.");
});

QUnit.test("asciiPrintableTest", function() {
	equal(foldToASCII("0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ !\"#$%&'()*+,-./"), "0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ !\"#$%&'()*+,-./", "This is expected to return the ASCII printable characters.");
});

