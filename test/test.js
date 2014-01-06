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
	equal(foldToASCII("     "), "     ", "This is expected to return spaces.");
});

QUnit.test("asciiPrintableTest", function() {
	equal(foldToASCII("0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ !\"#$%&'()*+,-./"), "0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ !\"#$%&'()*+,-./", "This is expected to return the ASCII printable characters.");
});

