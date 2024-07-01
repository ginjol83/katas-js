/**
 * DESCRIPTION:
 * Please write a function that sums a list, but ignores any duplicate items in the list.
 * 
 * For instance, for the list [3, 4, 3, 6] , the function should return 10 and for 
 * the list [1, 10, 3, 10, 10] , the function should return 4.
 * 
 * https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2
 * 
 */

const sumList= (list) =>  {
    const uniqueNonDuplicate = list.filter((item, index, arr) => {
        return arr.indexOf(item) === arr.lastIndexOf(item);
    });

    return uniqueNonDuplicate.reduce((acc,curr)=>{
       if(!acc.includes(curr)){
         acc.push(curr)
       }
       return acc
    },[]).reduce((acc, curr) => acc + curr , 0)
}

console.log(sumList([3, 4, 3, 6]))

