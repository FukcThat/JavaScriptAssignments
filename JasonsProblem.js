function multiplyArguments(){
        // if there are no arguments, return 0
    if(arguments.length === 0) return 0;
        // if there is one argument, return that argument
    if(arguments.length === 1) return arguments[0]
        // if there are more than one then multiply every argument together and return the product
    let result = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
       result *= arguments[i];
   }
   return result;
}


console.log("Takes no input, returns 0:" + multiplyArguments())
console.log("Takes 5 as input, returns 5:" + multiplyArguments(5))
console.log("Takes 5,10,2 as input, returns 100:" + multiplyArguments(5,10,2))
