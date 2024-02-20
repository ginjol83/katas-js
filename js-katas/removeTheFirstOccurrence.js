/**
 * Codewars web => https://www.codewars.com/kata/65d2460f512ea70058594a3d/train/javascript
 * 
 * For every alphabet character from 'a' to 'z', remove the first occurrence of that character in "strng" (if it exists).
 * Example, let initially strng = "aabcbbca". We do the following operations:
 * 
 * Remove the underlined characters strng = "(a)a(b)(c)bbca". The resulting string is strng = "abbca".
 * 
 * Remove the underlined characters strng = "(a)(b)b(c)a". The resulting string is strng = "ba".
 * 
 * Remove the underlined characters strng = "(b)(a)". The resulting string is strng = "".
 * 
 * Return the value of the string strng right before applying the last operation. In the example above, answer is "ba".
*/



const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function lastNonEmptyString(str) {
  const text = str.split('')
  alphabet.forEach(result => {
    console.log(result)
  })
  

  return text
}


lastNonEmptyString("aabcbbca")