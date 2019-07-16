console.log("hello")

const evenOrOdd = (num) => {
    if (num % 2 === 0) {
        return "Even"
    }
    //no "else" needed, else is implied? 
   return "Odd"
}

const result1 = evenOrOdd(65)
console.log("res1", result1)

const result2 = evenOrOdd(434)
console.log("res2", result2)


//to invoke the function this way, the function would have to console.log the result

//evenOrOdd(202394)

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


//callback function / anonymous function / lambda
//it is immediately invoked without being called
numbers.forEach(
    (currentNumber) => {
        const whatIsIt = evenOrOdd(currentNumber)
        console.log(whatIsIt, currentNumber)
    }
)
