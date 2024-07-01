/**
 * Given an array add all the number elements and return the binary equivalent of that sum;
 * to make the code bullet proof anything else than a number should be added as 0 since it 
 * can't be added.

    If you1r language can handle float binaries assume the array won't contain float or doubles.

    arr2bin([1,2]) == '11'
    arr2bin([1,2,'a']) == '11'
    arr2bin([]) == '0'

    NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
    This is a modification on the Kata: Array2Binary addition hope you like it
 */


    const arr2bin = (list) => (!list || list.length === 0) ? '0' : list.reduce((acc, curr) => !Number.isNaN(curr) && Number.isInteger(curr) ? acc + curr : acc, 0).toString(2);


    console.log(arr2bin([1,2,3,4,5]), "1111")
    console.log(arr2bin([1,10,100,1000]), "10001010111")
    console.log(arr2bin([null]), "0")
    console.log(arr2bin([true,true,false,15]),"1111")
    console.log(arr2bin([1,null,42]),"101011")
    