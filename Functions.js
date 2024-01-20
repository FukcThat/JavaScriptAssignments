
// 1. //

function add7 (number) {
    return number + 7;
}
    console.log(add7(5));


// 2. //

function multiply (number) {
    return number*number;
}    
    console.log(multiply(3));


// 3. //

function capitalize (str) {
    if (typeof string !== "string" || string.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

    console.log(capitalize("hello"));
    console.log(capitalize("WORLD")); 
    console.log(capitalize("ThIs Is MiXeD CaSe"));


// 4. //

function lastLetter (str) {
    if (typeof string !== "string" || string.length === 0) {
        return "";
    }   
    return str.charAt(str.length - 1);
}

console.log(lastLetter("Hello"));