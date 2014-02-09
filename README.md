fold-to-ascii-js
================

A JavaScript port of the Apache Lucene ASCII Folding Filter that converts alphabetic, numeric, and symbolic Unicode characters which are not in the first 127 ASCII characters (the "Basic Latin" Unicode block) into their ASCII equivalents, if one exists.

# Sources

This is a straightforward port of the *very extensive* switch/case statement found in http://svn.apache.org/repos/asf/lucene/java/tags/lucene_solr_4_5_1/lucene/analysis/common/src/java/org/apache/lucene/analysis/miscellaneous/ASCIIFoldingFilter.java

The function to determine character codes is taken from a code example in the MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt#Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown).

## Non-Basic-Multilingual-Plane characters

The function is ready to handle *non-Basic-Multilingual-Plane characters*. This is meant to support future extensions of the replacement table with characters from the *high surrogate range*. Still at the moment none of these characters have replacements.

# Documentation

## Configuration

The function can be configured to either replace unmapped non-ASCII characters or to leave them untouched through the `replaceUnmapped` variable.

Should this be `true`, a universal replacement string for these characters can be defined through changing `defaultString`. 

## Usage

`foldToASCII("Północ")` will return `Polnoc`

## Tests

All replacement tasks are covered by QUnit tests. See https://github.com/mplatt/fold-to-ascii-js/blob/master/test/test.html

## FAQ

### Why is character *x* being replaced with *y* and not with *z*?

The unambiguous allocation of characters to replacements is not possible since it is language-dependent.
For example a user from France might expect *ü* to be replaced with *u* while a user from Germany expects the replacement to be *ue*.
The replacements featured here are kept as general as possible.

# Replacement Patterns

 Character(s) | Replacement 
 --- | --- 
 À Á Â Ã Ä Å Ā Ă Ą Ə Ǎ Ǟ Ǡ Ǻ Ȁ Ȃ Ȧ Ⱥ ᴀ Ḁ Ạ Ả Ấ Ầ Ẩ Ẫ Ậ Ắ Ằ Ẳ Ẵ Ặ Ⓐ Ａ | A 
 à á â ã ä å ā ă ą ǎ ǟ ǡ ǻ ȁ ȃ ȧ ɐ ə ɚ ᶏ ᶕ ḁ ẚ ạ ả ấ ầ ẩ ẫ ậ ắ ằ ẳ ẵ ặ ₐ ₔ ⓐ ⱥ Ɐ ａ | a 
 Ꜳ | AA 
 Æ Ǣ Ǽ ᴁ | AE 
 Ꜵ | AO 
 Ꜷ | AU 
 Ꜹ Ꜻ | AV 
 Ꜽ | AY 
 ⒜ | (a) 
 ꜳ | aa 
 æ ǣ ǽ ᴂ | ae 
 ꜵ | ao 
 ꜷ | au 
 ꜹ ꜻ | av 
 ꜽ | ay 
 Ɓ Ƃ Ƀ ʙ ᴃ Ḃ Ḅ Ḇ Ⓑ Ｂ | B 
 ƀ ƃ ɓ ᵬ ᶀ ḃ ḅ ḇ ⓑ ｂ | b 
 ⒝ | (b) 
 Ç Ć Ĉ Ċ Č Ƈ Ȼ ʗ ᴄ Ḉ Ⓒ Ｃ | C 
 ç ć ĉ ċ č ƈ ȼ ɕ ḉ ↄ ⓒ Ꜿ ꜿ ｃ | c 
 ⒞ | (c) 
 Ð Ď Đ Ɖ Ɗ Ƌ ᴅ ᴆ Ḋ Ḍ Ḏ Ḑ Ḓ Ⓓ Ꝺ Ｄ | D 
 ð ď đ ƌ ȡ ɖ ɗ ᵭ ᶁ ᶑ ḋ ḍ ḏ ḑ ḓ ⓓ ꝺ ｄ | d 
 Ǆ Ǳ | DZ 
 ǅ ǲ | Dz 
 ⒟ | (d) 
 ȸ | db 
 ǆ ǳ ʣ ʥ | dz 
 È É Ê Ë Ē Ĕ Ė Ę Ě Ǝ Ɛ Ȅ Ȇ Ȩ Ɇ ᴇ Ḕ Ḗ Ḙ Ḛ Ḝ Ẹ Ẻ Ẽ Ế Ề Ể Ễ Ệ Ⓔ ⱻ Ｅ | E 
 è é ê ë ē ĕ ė ę ě ǝ ȅ ȇ ȩ ɇ ɘ ɛ ɜ ɝ ɞ ʚ ᴈ ᶒ ᶓ ᶔ ḕ ḗ ḙ ḛ ḝ ẹ ẻ ẽ ế ề ể ễ ệ ₑ ⓔ ⱸ ｅ | e 
 ⒠ | (e) 
 Ƒ Ḟ Ⓕ ꜰ Ꝼ ꟻ Ｆ | F 
 ƒ ᵮ ᶂ ḟ ẛ ⓕ ꝼ ｆ | f 
 ⒡ | (f) 
 ﬀ | ff 
 ﬃ | ffi 
 ﬄ | ffl 
 ﬁ | fi 
 ﬂ | fl 
 Ĝ Ğ Ġ Ģ Ɠ Ǥ ǥ Ǧ ǧ Ǵ ɢ ʛ Ḡ Ⓖ Ᵹ Ꝿ Ｇ | G 
 ĝ ğ ġ ģ ǵ ɠ ɡ ᵷ ᵹ ᶃ ḡ ⓖ ꝿ ｇ | g 
 ⒢ | (g) 
 Ĥ Ħ Ȟ ʜ Ḣ Ḥ Ḧ Ḩ Ḫ Ⓗ Ⱨ Ⱶ Ｈ | H 
 ĥ ħ ȟ ɥ ɦ ʮ ʯ ḣ ḥ ḧ ḩ ḫ ẖ ⓗ ⱨ ⱶ ｈ | h 
 Ƕ | HV 
 ⒣ | (h) 
 ƕ | hv 
 Ì Í Î Ï Ĩ Ī Ĭ Į İ Ɩ Ɨ Ǐ Ȉ Ȋ ɪ ᵻ Ḭ Ḯ Ỉ Ị Ⓘ ꟾ Ｉ | I 
 ì í î ï ĩ ī ĭ į ı ǐ ȉ ȋ ɨ ᴉ ᵢ ᵼ ᶖ ḭ ḯ ỉ ị ⁱ ⓘ ｉ | i 
 Ĳ | IJ 
 ⒤ | (i) 
 ĳ | ij 
 Ĵ Ɉ ᴊ Ⓙ Ｊ | J 
 ĵ ǰ ȷ ɉ ɟ ʄ ʝ ⓙ ⱼ ｊ | j 
 ⒥ | (j) 
 Ķ Ƙ Ǩ ᴋ Ḱ Ḳ Ḵ Ⓚ Ⱪ Ꝁ Ꝃ Ꝅ Ｋ | K 
 ķ ƙ ǩ ʞ ᶄ ḱ ḳ ḵ ⓚ ⱪ ꝁ ꝃ ꝅ ｋ | k 
 ⒦ | (k) 
 Ĺ Ļ Ľ Ŀ Ł Ƚ ʟ ᴌ Ḷ Ḹ Ḻ Ḽ Ⓛ Ⱡ Ɫ Ꝇ Ꝉ Ꞁ Ｌ | L 
 ĺ ļ ľ ŀ ł ƚ ȴ ɫ ɬ ɭ ᶅ ḷ ḹ ḻ ḽ ⓛ ⱡ ꝇ ꝉ ꞁ ｌ | l 
 Ǉ | LJ 
 Ỻ | LL 
 ǈ | Lj 
 ⒧ | (l) 
 ǉ | lj 
 ỻ | ll 
 ʪ | ls 
 ʫ | lz 
 Ɯ ᴍ Ḿ Ṁ Ṃ Ⓜ Ɱ ꟽ ꟿ Ｍ | M 
 ɯ ɰ ɱ ᵯ ᶆ ḿ ṁ ṃ ⓜ ｍ | m 
 ⒨ | (m) 
 Ñ Ń Ņ Ň Ŋ Ɲ Ǹ Ƞ ɴ ᴎ Ṅ Ṇ Ṉ Ṋ Ⓝ Ｎ | N 
 ñ ń ņ ň ŉ ŋ ƞ ǹ ȵ ɲ ɳ ᵰ ᶇ ṅ ṇ ṉ ṋ ⁿ ⓝ ｎ | n 
 Ǌ | NJ 
 ǋ | Nj 
 ⒩ | (n) 
 ǌ | nj 
 Ò Ó Ô Õ Ö Ø Ō Ŏ Ő Ɔ Ɵ Ơ Ǒ Ǫ Ǭ Ǿ Ȍ Ȏ Ȫ Ȭ Ȯ Ȱ ᴏ ᴐ Ṍ Ṏ Ṑ Ṓ Ọ Ỏ Ố Ồ Ổ Ỗ Ộ Ớ Ờ Ở Ỡ Ợ Ⓞ Ꝋ Ꝍ Ｏ | O 
 ò ó ô õ ö ø ō ŏ ő ơ ǒ ǫ ǭ ǿ ȍ ȏ ȫ ȭ ȯ ȱ ɔ ɵ ᴖ ᴗ ᶗ ṍ ṏ ṑ ṓ ọ ỏ ố ồ ổ ỗ ộ ớ ờ ở ỡ ợ ₒ ⓞ ⱺ ꝋ ꝍ ｏ | o 
 Œ ɶ | OE 
 Ꝏ | OO 
 Ȣ ᴕ | OU 
 ⒪ | (o) 
 œ ᴔ | oe 
 ꝏ | oo 
 ȣ | ou 
 Ƥ ᴘ Ṕ Ṗ Ⓟ Ᵽ Ꝑ Ꝓ Ꝕ Ｐ | P 
 ƥ ᵱ ᵽ ᶈ ṕ ṗ ⓟ ꝑ ꝓ ꝕ ꟼ ｐ | p 
 ⒫ | (p) 
 Ɋ Ⓠ Ꝗ Ꝙ Ｑ | Q 
 ĸ ɋ ʠ ⓠ ꝗ ꝙ ｑ | q 
 ⒬ | (q) 
 ȹ | qp 
 Ŕ Ŗ Ř Ȑ Ȓ Ɍ ʀ ʁ ᴙ ᴚ Ṙ Ṛ Ṝ Ṟ Ⓡ Ɽ Ꝛ Ꞃ Ｒ | R 
 ŕ ŗ ř ȑ ȓ ɍ ɼ ɽ ɾ ɿ ᵣ ᵲ ᵳ ᶉ ṙ ṛ ṝ ṟ ⓡ ꝛ ꞃ ｒ | r 
 ⒭ | (r) 
 Ś Ŝ Ş Š Ș Ṡ Ṣ Ṥ Ṧ Ṩ Ⓢ ꜱ ꞅ Ｓ | S 
 ś ŝ ş š ſ ș ȿ ʂ ᵴ ᶊ ṡ ṣ ṥ ṧ ṩ ẜ ẝ ⓢ Ꞅ ｓ | s 
 ẞ | SS 
 ⒮ | (s) 
 ß | ss 
 ﬆ | st 
 Ţ Ť Ŧ Ƭ Ʈ Ț Ⱦ ᴛ Ṫ Ṭ Ṯ Ṱ Ⓣ Ꞇ Ｔ | T 
 ţ ť ŧ ƫ ƭ ț ȶ ʇ ʈ ᵵ ṫ ṭ ṯ ṱ ẗ ⓣ ⱦ ｔ | t 
 Þ Ꝧ | TH 
 Ꜩ | TZ 
 ⒯ | (t) 
 ʨ | tc 
 þ ᵺ ꝧ | th 
 ʦ | ts 
 ꜩ | tz 
 Ù Ú Û Ü Ũ Ū Ŭ Ů Ű Ų Ư Ǔ Ǖ Ǘ Ǚ Ǜ Ȕ Ȗ Ʉ ᴜ ᵾ Ṳ Ṵ Ṷ Ṹ Ṻ Ụ Ủ Ứ Ừ Ử Ữ Ự Ⓤ Ｕ | U 
 ù ú û ü ũ ū ŭ ů ű ų ư ǔ ǖ ǘ ǚ ǜ ȕ ȗ ʉ ᵤ ᶙ ṳ ṵ ṷ ṹ ṻ ụ ủ ứ ừ ử ữ ự ⓤ ｕ | u 
 ⒰ | (u) 
 ᵫ | ue 
 Ʋ Ʌ ᴠ Ṽ Ṿ Ỽ Ⓥ Ꝟ Ꝩ Ｖ | V 
 ʋ ʌ ᵥ ᶌ ṽ ṿ ⓥ ⱱ ⱴ ꝟ ｖ | v 
 Ꝡ | VY 
 ⒱ | (v) 
 ꝡ | vy 
 Ŵ Ƿ ᴡ Ẁ Ẃ Ẅ Ẇ Ẉ Ⓦ Ⱳ Ｗ | W 
 ŵ ƿ ʍ ẁ ẃ ẅ ẇ ẉ ẘ ⓦ ⱳ ｗ | w 
 ⒲ | (w) 
 Ẋ Ẍ Ⓧ Ｘ | X 
 ᶍ ẋ ẍ ₓ ⓧ ｘ | x 
 ⒳ | (x) 
 Ý Ŷ Ÿ Ƴ Ȳ Ɏ ʏ Ẏ Ỳ Ỵ Ỷ Ỹ Ỿ Ⓨ Ｙ | Y 
 ý ÿ ŷ ƴ ȳ ɏ ʎ ẏ ẙ ỳ ỵ ỷ ỹ ỿ ⓨ ｙ | y 
 ⒴ | (y) 
 Ź Ż Ž Ƶ Ȝ Ȥ ᴢ Ẑ Ẓ Ẕ Ⓩ Ⱬ Ꝣ Ｚ | Z 
 ź ż ž ƶ ȝ ȥ ɀ ʐ ʑ ᵶ ᶎ ẑ ẓ ẕ ⓩ ⱬ ꝣ ｚ | z 
 ⒵ | (z) 
 ⁰ ₀ ⓪ ⓿ ０ | 0 
 ¹ ₁ ① ⓵ ❶ ➀ ➊ １ | 1 
 ⒈ | 1. 
 ⑴ | (1) 
 ² ₂ ② ⓶ ❷ ➁ ➋ ２ | 2 
 ⒉ | 2. 
 ⑵ | (2) 
 ³ ₃ ③ ⓷ ❸ ➂ ➌ ３ | 3 
 ⒊ | 3. 
 ⑶ | (3) 
 ⁴ ₄ ④ ⓸ ❹ ➃ ➍ ４ | 4 
 ⒋ | 4. 
 ⑷ | (4) 
 ⁵ ₅ ⑤ ⓹ ❺ ➄ ➎ ５ | 5 
 ⒌ | 5. 
 ⑸ | (5) 
 ⁶ ₆ ⑥ ⓺ ❻ ➅ ➏ ６ | 6 
 ⒍ | 6. 
 ⑹ | (6) 
 ⁷ ₇ ⑦ ⓻ ❼ ➆ ➐ ７ | 7 
 ⒎ | 7. 
 ⑺ | (7) 
 ⁸ ₈ ⑧ ⓼ ❽ ➇ ➑ ８ | 8 
 ⒏ | 8. 
 ⑻ | (8) 
 ⁹ ₉ ⑨ ⓽ ❾ ➈ ➒ ９ | 9 
 ⒐ | 9. 
 ⑼ | (9) 
 ⑩ ⓾ ❿ ➉ ➓ | 10 
 ⒑ | 10. 
 ⑽ | (10) 
 ⑪ ⓫ | 11 
 ⒒ | 11. 
 ⑾ | (11) 
 ⑫ ⓬ | 12 
 ⒓ | 12. 
 ⑿ | (12) 
 ⑬ ⓭ | 13 
 ⒔ | 13. 
 ⒀ | (13) 
 ⑭ ⓮ | 14 
 ⒕ | 14. 
 ⒁ | (14) 
 ⑮ ⓯ | 15 
 ⒖ | 15. 
 ⒂ | (15) 
 ⑯ ⓰ | 16 
 ⒗ | 16. 
 ⒃ | (16) 
 ⑰ ⓱ | 17 
 ⒘ | 17. 
 ⒄ | (17) 
 ⑱ ⓲ | 18 
 ⒙ | 18. 
 ⒅ | (18) 
 ⑲ ⓳ | 19 
 ⒚ | 19. 
 ⒆ | (19) 
 ⑳ ⓴ | 20 
 ⒛ | 20. 
 ⒇ | (20) 
 « » “ ” „ ″ ‶ ❝ ❞ ❮ ❯ ＂ | " 
 ‘ ’ ‚ ‛ ′ ‵ ‹ › ❛ ❜ ＇ | \ 
 ‐ ‑ ‒ – — ⁻ ₋ － | - 
 ⁅ ❲ ［ | [ 
 ⁆ ❳ ］ | ] 
 ⁽ ₍ ❨ ❪ （ | ( 
 ⸨ | (( 
 ⁾ ₎ ❩ ❫ ） | ) 
 ⸩ | )) 
 ❬ ❰ ＜ | < 
 ❭ ❱ ＞ | > 
 ❴ ｛ | { 
 ❵ ｝ | } 
 ⁺ ₊ ＋ | + 
 ⁼ ₌ ＝ | = 
 ！ | ! 
 ‼ | !! 
 ⁉ | !? 
 ＃ | # 
 ＄ | $ 
 ⁒ ％ | % 
 ＆ | & 
 ⁎ ＊ | * 
 ， | , 
 ． | . 
 ⁄ ／ | / 
 ： | : 
 ⁏ ； | ; 
 ？ | ? 
 ⁇ | ?? 
 ⁈ | ?! 
 ＠ | @ 
 ＼ | \\ 
 ‸ ＾ | ^ 
 ＿ | _ 
 ⁓ ～ | ~ 
