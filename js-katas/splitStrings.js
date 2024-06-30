/*
DESCRIPTION:
Complete the solution so that it splits the string into pairs of two characters.
 If the string contains an odd number of characters then it should replace the missing 
 second character of the final pair with an underscore ('_').

Examples:   

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

const splitString = (s) => {
    const result = s.split('').reduce((acc, char, index) => {
        (index % 2 === 0) ? acc.push(char) : acc[acc.length - 1] += char; 
        return acc;
    }, []);

    s.length % 2 !== 0 && (result[result.length - 1] += '_')

    return result;
}

// test
console.log(splitString('abc'));    // ['ab', 'c_']
console.log(splitString('abcdef')); // ['ab', 'cd', 'ef']