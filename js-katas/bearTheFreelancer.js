/**
 * 
 * Story
 * Bear the Freelancer charges clients on the hour, but he adjusts his rate depending on how close friends he is with his clients. For close friends, he charges $25 per hour, for his other friends he charges $50, for his acquaintances his hourly rate is $100, reaching $125 for all his other clients.
 * 
 * Input
 * You’ll receive a list of lists, representing all the jobs Bear the Freelancer carried out for the month. Each array within the outer list is comprised of the number of hours worked, and the proximity to the client as a string, the possible values being 'Close Friend', 'Friend', 'Acquaintance', or any other string for the rest of his clients. The recognition of those three strings ('Close Friend', 'Friend', and 'Acquaintance') should be case insensitive.
 * 
 * Example
 * 
 * [[10, 'Close Friend'], [3, 'Acquaintance'], [7, 'Lead from web'], [6, 'Friend'], [2, 'From advertisements']]
 * In this example, he'll be charging 10 hours at $25, 3 hours at $100, 7 hours at $125, 6 hours at $50, and 2 hours at $125, for a total of $1975.
 * 
 * Expected Output
 * The total amount of dollars Bear the Freelancer has invoiced for his work. For an empty array, return 0.
 * 
 * Example
 * 
 * 1975
 * 
 * 
*/



const sample = [[10, 'Close Friend'], [3, 'Acquaintance'], [7, 'Lead from web'], [6, 'Friend'], [2, 'From advertisements']]

const invoiceList = sample.map(invoice => {
    const friendsNumber = invoice[0]
    const friendStatus  = invoice[1].toUpperCase()
    
    return  friendStatus === 'CLOSE FRIEND'         ? friendsNumber * 25  : 
            friendStatus === 'ACQUAINTANCE'         ? friendsNumber * 100 : 
            friendStatus === 'LEAD FROM WEB'        ? friendsNumber * 125 : 
            friendStatus === 'FRIEND'               ? friendsNumber * 50  : 
            friendsNumber * 125 //default value
})

const calculate = ( list ) => list.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(calculate(invoiceList))