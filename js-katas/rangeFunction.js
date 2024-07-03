/**
 * DESCRIPTION:
 * Create range generator function that will take up to 3 parameters - start value, step and 
 * stop value. This function should return an iterable object with numbers. For simplicity, 
 * assume all parameters to be positive numbers.
 * 
 * Examples:
 * 
 * range(5) --> 1,2,3,4,5
 * range(3, 7) --> 3,4,5,6,7
 * range(2, 3, 15) --> 2,5,8,11,14
 * 
 */

const range = (start,step,stop) => {
    if(!step){
        stop=start
        start=1
        step=1
    }else if(!stop) {
        stop = step
        step = 1
    } 
    let result = [start]
    while(start <= stop) {
        start = start + step
        if(start<=stop) result.push(start)
    }
    return result
} 
console.log(range())
console.log(range(5))
console.log(range(3, 7))
console.log(range(2,3,15))